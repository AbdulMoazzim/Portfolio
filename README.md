# Abdul — Portfolio

A single-page portfolio built with Next.js 14 (App Router), TypeScript, and
Tailwind CSS, styled from the "Kinetic Minimalist" design system. Includes a
working contact form wired to email via [Resend](https://resend.com), and a
downloadable resume.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your Resend key + email
npm run dev
```

Open http://localhost:3000.

## Before you deploy — three things to change

1. **Your resume.** `public/resume.pdf` is currently a placeholder file.
   Replace it with your actual resume, keeping the same filename (or update
   the `href="/resume.pdf"` links in `components/Header.tsx` and
   `components/Hero.tsx` if you rename it).

2. **Email sending.** The contact form needs two environment variables to
   actually send mail:
   - `RESEND_API_KEY` — from resend.com (free tier is enough for a
     portfolio's traffic).
   - `CONTACT_EMAIL` — the inbox that should receive messages.

   For quick testing you can leave `CONTACT_FROM_EMAIL` unset (it falls back
   to Resend's shared `onboarding@resend.dev` sender). For production,
   verify your own domain with Resend and set `CONTACT_FROM_EMAIL` to an
   address on it — otherwise some inboxes will flag the messages as spam.

   On Vercel (or wherever you deploy), set these same variables in the
   project's environment settings — `.env.local` is git-ignored and won't
   travel with a deploy.

3. **Real project/social links.** `components/Projects.tsx` has a `TODO`
   marking where to add real demo/GitHub URLs once each project has one.
   `components/Footer.tsx` has placeholder GitHub/LinkedIn/email links —
   update those too.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           The single long page — imports every section
  globals.css        Base styles, focus states, reduced-motion handling
  api/contact/route.ts   Contact form API route (validation + Resend)
components/
  Header.tsx          Sticky nav with mobile menu
  Hero.tsx
  About.tsx           "How I work" section
  TechStack.tsx
  Projects.tsx        Project data + cards — edit PROJECTS here
  Journey.tsx         Education & milestones timeline — edit MILESTONES here
  Contact.tsx         Client-side form with submit states
  Footer.tsx
public/
  resume.pdf          Replace with your real resume
tailwind.config.ts    Design tokens (colors, type scale, spacing, radii)
```

## Editing content

- **Projects:** edit the `PROJECTS` array in `components/Projects.tsx`.
- **Education/achievements:** edit the `MILESTONES` array in
  `components/Journey.tsx`.
- **Tech stack chips:** edit the `STACK` array in `components/TechStack.tsx`.
- **Hero/About copy:** edit directly in `components/Hero.tsx` and
  `components/About.tsx`.

## Deploying

The easiest path is [Vercel](https://vercel.com) (same company as Next.js):
push this to a GitHub repo, import it in Vercel, add the environment
variables from `.env.example`, and deploy. Any other Node.js host that
supports Next.js works too.

## Tech stack

Next.js 14 · TypeScript · Tailwind CSS · Resend · Zod
