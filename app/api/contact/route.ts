import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email address"),
  message: z.string().trim().min(1, "Message is required").max(5000),
});

// Very small in-memory rate limit per server instance: max 5 requests
// per IP per 10 minutes. Resets on redeploy/cold start — good enough to
// deter casual abuse, not a substitute for a real rate limiter at scale.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages sent. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 }
    );
  }

  const { name, email, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    console.error(
      "Contact form is not configured: missing RESEND_API_KEY or CONTACT_EMAIL env vars."
    );
    return NextResponse.json(
      {
        error:
          "The contact form isn't configured yet. Please reach out by email directly.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `Portfolio Contact Form <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New message from ${name} via portfolio`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Couldn't send your message. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending contact email:", err);
    return NextResponse.json(
      { error: "Couldn't send your message. Please try again shortly." },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
