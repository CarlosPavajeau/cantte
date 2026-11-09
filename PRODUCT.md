# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Businesses in Colombia and Latin America that need software built: founders with a product idea, small and
mid-size companies replacing spreadsheets or legacy tools, and teams that need an integration (payments, DIAN
electronic invoicing, WhatsApp, third-party APIs) done right. They arrive from search or a referral, compare
firms, and decide whether to write to cantte.

## Product Purpose

cantte is a software development firm. The site presents the firm, explains what it builds and how, and turns a
visitor into a conversation (email or WhatsApp). Success is a qualified prospect who writes to start a project.

## Positioning

cantte builds and runs its own products in production. Cetus (a DIAN electronic invoicing API) and Wappiz (an
open-source WhatsApp appointment scheduler) are the proof of what the firm delivers for clients: real APIs,
real integrations, real operations, not mockups.

## Operating Context

- Site: `www.cantte.com` (Astro, static). Products live on subdomains: `cetus.cantte.com`,
  `cetus-docs.cantte.com`, `wappiz.cantte.com`.
- Contact: `contact@cantte.com` and WhatsApp `+57 300 220 6329` (given by the owner; default in
  `src/data/site.ts`, overridable with `PUBLIC_WHATSAPP_NUMBER`).
- All copy is Spanish (Colombia).

## Capabilities and Constraints

Services offered:

- Custom web platforms (SaaS, internal tools, web apps).
- APIs and integrations (backends, payments, third-party services, DIAN).
- Mobile apps (iOS and Android).
- Data analytics (dashboards, pipelines, reports).

Own products:

- **Cetus** — electronic invoicing API for Colombia connected to the DIAN: issues invoices, credit and debit
  notes, signs them, submits them, notifies by email and signed webhooks. Sandbox, test and live environments
  by API key. Stack: Java (Quarkus), Postgres job queue, AWS KMS/S3, TanStack Start console.
- **Wappiz** — open-source appointment scheduling: clients book through WhatsApp; businesses manage services,
  staff and spaces, schedules, holidays, reminders. Stack: Go backend, TanStack Start web, Postgres.
  Source at `github.com/CarlosPavajeau/wappiz`.

## Brand Commitments

- Name: cantte (lowercase wordmark).
- Voice: short, declarative, direct professional Spanish, matching Cetus ("Primero pruebas. Después,
  producción."). Explain technical terms instead of assuming them.
- Visual reference made binding by the owner: the Cetus design (`../cetus/apps/console/DESIGN.md`).

## Evidence on Hand

- The products themselves (live sites, Cetus docs, Wappiz open-source repo) are the proof.
- No client logos, testimonials, case studies, team size, or adoption numbers. Do not invent any.

## Product Principles

1. **Products are the proof.** Show what was built and how it runs; never claim clients or numbers we cannot show.
2. **Plain about the work.** Name the services, the process and the stack in concrete terms.
3. **One step to talk.** Every section leads to a single, low-friction way to start a conversation.
4. **Searchable by intent.** Copy answers what a buyer searches for (desarrollo de software a la medida,
   integraciones, apps móviles, Colombia) without keyword stuffing.
