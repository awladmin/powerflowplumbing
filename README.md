# Proactive Approach

Marketing website for **Proactive Approach** — a UK-based business providing flexible administrative and operational support for clubs, small organisations, and busy individuals.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS 4**
- **shadcn/ui** components
- **Resend** for contact form email delivery
- **MDX** for legal pages (Terms & Conditions, Privacy Policy)

## Pages

- **Home** — Hero carousel, mission statement, how we work, services preview, testimonials, and CTA
- **About / How We Work** — Story, process, values, and differentiators
- **Services** — Full list of 13 service categories with descriptions
- **Contact** — Contact form (Resend integration), alternative contact details, privacy note
- **Terms & Conditions** — Legal terms (MDX)
- **Privacy Policy** — Privacy policy (MDX)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```dotenv
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=proactive@example.com
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Deploy on Vercel

1. Push the repository to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables (`RESEND_API_KEY`, `RESEND_FROM_EMAIL`) in Vercel project settings
4. Deploy

## Project Structure

```
src/
  app/            # Next.js App Router pages
  blocks/         # Reusable block components (e.g. Hero 226)
  components/     # UI components, layout, shared components
  content/        # Centralised site content (siteContent.ts)
  hooks/          # Custom React hooks
  lib/            # Utility functions
```

## Roadmap

- [ ] Replace placeholder images with brand photography
- [ ] Add FAQ or case study section
- [ ] Integrate a CMS and migrate content from `siteContent.ts`
- [ ] Add custom favicon and OG images for Proactive Approach branding
