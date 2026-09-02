"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop md:py-24"
    >
      <div className="rounded-xl bg-surface-container-low p-8 md:p-14">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-headline-sm text-onsurface md:text-headline-md">
            Let&apos;s talk
          </h2>
          <p className="mt-3 text-body-lg text-onsurface-variant">
            Open to internships, freelance work, and research
            collaborations. If you have a project or question in mind,
            send it over — I reply to every message.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-mono text-label-caps uppercase text-onsurface-variant"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="rounded border border-outline bg-surface-container-lowest px-4 py-3 text-body-md text-onsurface outline-none transition-colors focus:border-2 focus:border-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-mono text-label-caps uppercase text-onsurface-variant"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="rounded border border-outline bg-surface-container-lowest px-4 py-3 text-body-md text-onsurface outline-none transition-colors focus:border-2 focus:border-primary"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-mono text-label-caps uppercase text-onsurface-variant"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="resize-none rounded border border-outline bg-surface-container-lowest px-4 py-3 text-body-md text-onsurface outline-none transition-colors focus:border-2 focus:border-primary"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded bg-primary px-6 py-3 text-body-md font-medium text-primary-on shadow-elevated transition-shadow hover:shadow-elevated-hover disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>

              {status === "sent" && (
                <p role="status" className="text-body-md text-onsurface">
                  Sent — thanks, I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="text-body-md text-error">
                  {errorMessage || "Couldn't send that. Try again shortly."}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
