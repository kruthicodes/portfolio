# Portfolio Website

Production-ready portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Fully responsive, mobile-first design
- Minimal light theme + smooth dark mode toggle
- Sticky navigation with mobile hamburger menu
- Smooth scroll navigation and subtle motion patterns
- Accessibility-conscious semantics and ARIA attributes
- SEO metadata configured in `app/layout.tsx`
- Structured sections for projects, AI systems, speaking, mentorship, and contact
- Config-driven content and section visibility via `lib/site-config.ts`

## Personalization

Edit only `lib/site-config.ts` to customize:

- Profile content (name, summary, email, location, photo)
- Hero rotating build items
- About / What I Do / Mentorship / Contact text
- Section visibility toggles

To hide sections (example for friend portfolio):

```ts
sections: {
  about: true,
  whatIDo: true,
  projects: false,
  aiSystems: false,
  speaking: false,
  mentorship: false,
  contact: true
}
```

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes

## Local Setup

Prerequisite: Node.js `>=16.13.0` and npm `>=8`.

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Keep default framework preset as `Next.js`.
4. Build command: `npm run build`
5. Output setting: leave default (`.next` handled by Vercel).
6. Deploy.

## Folder Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  navigation.tsx
  theme-toggle.tsx
  providers/
    theme-provider.tsx
  sections/
    about-section.tsx
    ai-systems-section.tsx
    contact-section.tsx
    hero-section.tsx
    mentorship-section.tsx
    projects-section.tsx
    speaking-section.tsx
    what-i-do-section.tsx
  ui/
    container.tsx
    motion-reveal.tsx
    section-heading.tsx
lib/
  site-config.ts
  data.ts
  utils.ts
```
