---
name: cantte
description: A software firm's site written as a delivery ledger; achromatic ink on paper, color only marks state.
colors:
  ink: "oklch(0.145 0 0)"
  ink-strong: "oklch(0.205 0 0)"
  paper: "oklch(1 0 0)"
  paper-off: "oklch(0.985 0 0)"
  wash: "oklch(0.97 0 0)"
  pencil: "oklch(0.5 0 0)"
  rule: "oklch(0.922 0 0)"
  ring: "oklch(0.556 0 0)"
  card-dark: "oklch(0.205 0 0)"
  wash-dark: "oklch(0.269 0 0)"
  pencil-dark: "oklch(0.708 0 0)"
  rule-dark: "oklch(0.32 0 0)"
  primary-dark: "oklch(0.922 0 0)"
  success: "oklch(0.696 0.17 162.48)"
  success-text: "oklch(0.508 0.118 165.612)"
  success-text-dark: "oklch(0.765 0.177 163.223)"
  info: "oklch(0.685 0.169 237.323)"
  info-text: "oklch(0.5 0.134 242.749)"
  info-text-dark: "oklch(0.746 0.16 232.661)"
typography:
  display:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.4vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.045em"
    fontFeature: '"cv11", "ss01", "ss03"'
  headline:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.78
  body:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
  label:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
  mono:
    fontFamily: "Geist Mono Variable, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.625
rounded:
  md: "6px"
  lg: "8px"
  xl: "12px"
  pill: "9999px"
spacing:
  gutter: "16px"
  gutter-md: "24px"
  row: "14px"
  section: "clamp(4rem, 10vw, 8rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink-strong}"
    textColor: "{colors.paper-off}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "44px"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "44px"
  button-compact:
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "36px"
  chip-choice:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "36px"
  chip-choice-selected:
    backgroundColor: "{colors.ink-strong}"
    textColor: "{colors.paper-off}"
  log-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
  log-row:
    typography: "{typography.body-sm}"
    padding: "14px 16px"
  exhibit-figure:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.xl}"
  code-block:
    typography: "{typography.mono}"
    padding: "16px"
---

# Design System: cantte

## Overview

**Creative North Star: "The Delivery Ledger"**

cantte is a branch of the Cetus "Ledger" system. It keeps the same book: black ink on white paper, ruled lines, chroma 0 on every surface, and hue that appears only when something has a state worth reading. What changes is the voice. The Cetus console is an operational instrument at 13px. cantte is a firm introducing itself, so it opens the scale to 16px reading text and 18px leads. It still keeps a ledger's discipline: a dated delivery log instead of a slogan hero, and ruled rows instead of card grids.

The page is a single column of full-width bands, each opened by a hairline rule and a short medium-weight headline with a muted lead. Inside the bands, content runs in rows: services, process steps, practices, the tech stack and the FAQ all sit between 1px rules. Bordered or ringed containers are reserved for exhibits, meaning things the firm actually ships (the delivery log, a terminal call, a webhook feed, a WhatsApp conversation) and the contact form.

Light and dark are equal citizens. A `.dark` class on the root follows `prefers-color-scheme` until the visitor uses the theme toggle, which stores the choice. An inline head script sets the class before first paint, so the wrong theme never flashes.

**Key Characteristics:**

- Achromatic neutral scale in both themes; emerald and sky only for state.
- Inter Variable throughout, with display tracking at -0.045em; Geist Mono only where a value is read character by character.
- Ruled rows replace card grids; containers are exhibits, not layout.
- No eyebrow or kicker labels: a band opens with its headline.
- Flat: 1px rules and a 10% ink ring, with a shadow only on the floating mobile menu.
- One entrance animation (log rows inked in left to right) and one live mark (the caret on the open entry).

## Colors

Ink on paper in two themes, with two state hues that always appear beside a word.

### Primary

- **Ledger Ink** (ink-strong): primary buttons, the selected service chip, outgoing chat bubbles and the cantte mark tile. In dark it inverts to **Bone** (primary-dark), a near-white ink with charcoal text. Hover softens the ink to 85%.

### Neutral

- **Ink** (ink): body text and headlines in light; also the dark page background.
- **Paper** (paper): the page and card surfaces in light. **Off-white Paper** (paper-off) is the text on Ledger Ink.
- **Wash** (wash): hover fills, incoming chat bubbles and the open log row at 50%. The contact band sits on wash at 40%, which is the only tinted band.
- **Pencil** (pencil): secondary text, leads, the second line of the hero headline, mono dates and captions. Light pencil is darker than Cetus (L 0.5 instead of 0.556) so that muted text holds contrast at body size. **Soft Pencil** (pencil-dark) in dark.
- **Rule** (rule): every 1px border and divider. In dark, rules are a solid **Graphite Rule** (rule-dark), not Cetus's translucent white.
- **Focus Grey** (ring): the 2px focus outline in both themes.
- **Charcoal** (card-dark) and **Graphite** (wash-dark): dark cards and muted fills.

### State hues

- **Emerald** (success): the "En producción" dot. **Emerald text** (success-text, lighter in dark) is used for completed-state icons such as accepted invoices and confirmed bookings.
- **Sky** (info-text, lighter in dark): work in flight, such as the pending webhook spinner.

### Named Rules

**The Entry Rule.** Hue only marks state. If a color does not answer "what state is this in?", it is ink.

**The Label Rule.** A state color always sits beside a word ("En producción", "Validada por la DIAN"); color is never the only cue.

**The No Accent Rule.** cantte has no brand accent color. Third-party marks (the Cetus and Wappiz logos, the WhatsApp glyph) keep their own colors because they are identity assets, not system color.

## Typography

**Display Font:** Inter Variable (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Inter Variable
**Label/Mono Font:** Geist Mono Variable (with ui-monospace, monospace)

**Character:** One neutral grotesque does all the talking, tightened as it grows. The body enables Inter's single-storey a and open digits (`cv11`, `ss01`, `ss03`) everywhere. The monospace is the ledger's figures column.

### Hierarchy

- **Display** (500, `clamp(2.5rem, 5.4vw, 4rem)`, 1.04, -0.045em): the hero h1 only. It caps at 4rem, below Cetus's 4.5rem. A two-line statement whose second line is set in pencil.
- **Headline** (500, 30px → 36px from sm → 48px from md at 1.05, -0.04em, balanced): band titles and the contact title.
- **Title** (500, 24px, tight tracking): sub-heads inside a band, such as product names and "Con qué construimos". Service names use 20px → 24px, and process steps use 18px.
- **Lead** (400, 18px / 32px, pencil, max 42rem): the paragraph under every headline, and product descriptions in ink.
- **Body** (400, 16px, within 68ch): service summaries, process text and FAQ answers. Dense rows and lists use 14px.
- **Label** (400, 12px, pencil): figure captions and the log's "Siguiente". The "Código abierto" pill uses 11px medium.
- **Mono** (400, 12px, relaxed; tabular figures on `time` and `code`): dates and versions in the delivery log, code and the terminal call, webhook event names, the email address and tech-stack values.

### Named Rules

**The Copyable Rule.** Geist Mono is used only for dates, versions, code, event names, the email address and tech-stack values. Mono is never used for labels, headings or decoration.

**The Quiet Weight Rule.** Headings top out at 500. Only the wordmark uses 600. Hierarchy comes from size, tracking and the ink/pencil contrast, not from bold.

**The Headline Opens the Band Rule.** A band starts with its headline. No eyebrow, kicker or small-caps label above it.

## Layout

A sticky 56px header (background at 85% with backdrop blur, and a bottom rule) sits over a single column of full-width bands. Each band has a top rule and is capped at `max-w-6xl` (72rem), with 16px gutters that become 24px from md, and `section` vertical padding (`clamp(4rem, 10vw, 8rem)`). Band heads stack the headline and lead within 42rem, with 48px between the head and the content.

Content inside a band runs on a 12-column grid from md/lg. The hero splits 7/5 (statement and actions, delivery log). Products alternate 5/7 and 7/5, so the Wappiz exhibit leads on desktop and follows its text on mobile. Services split 6/4/2 (description, deliverables, action), and practices split 3/5/4. Everything collapses to one column below md, and primary actions go full width and stack below sm.

Rows carry the rhythm: 14px vertical padding in log and stack rows, 16px in practices, 24px in process steps and 32px → 40px in service rows. Spacing follows Tailwind's 4px grid. Anchor scrolling uses a 4.5rem offset for the sticky header.

### Named Rules

**The Ruled Rows Rule.** Repeated items (services, steps, practices, stack, FAQ) are rows between 1px rules (`divide-y` with `border-y`), not cards in a grid.

## Elevation & Depth

The system is flat. Depth comes from hairlines and tonal steps: paper to wash in light, ink to charcoal to graphite in dark. Two container edges exist. A 1px ring of ink at 10% is used on the hero delivery log, the contact form and the mobile menu. A 1px rule border is used on product exhibits (terminal, webhook, chat). The only shadow is `shadow-sm` on the mobile menu, because it floats over the page.

### Shadow Vocabulary

- **Ink ring** (`box-shadow: 0 0 0 1px oklch(var(--foreground) / 0.1)`): edges for the log, the form and the menu. It adapts to the theme because it is drawn in ink.
- **Float** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`): the mobile menu only.

### Named Rules

**The Ruled-Not-Raised Rule.** Separate with a rule or a ring. A shadow means the surface floats above the page, never that it is important.

## Shapes

Corners are small and consistent. Buttons, icon buttons and the mark tile use 6px. The mobile menu, the message preview and chat bubbles use 8px (bubbles drop to a 2px tail corner on the sender's side). Exhibits and the contact form use 12px. This is one step softer than Cetus's 8px containers, and it is what ships. Choice chips, time slots, the "Código abierto" badge and the status dot are full pills. Icons are Lucide outlines at a 1.8 stroke, 14px to 16px, inlined as SVG.

## Components

### Buttons

Precise at rest, tactile when pressed.

- **Shape:** gently rounded (6px). 44px tall with 16px padding for page actions. 40px for product links. A compact 36px with 12px padding for the header "Escríbenos" and the row-level "Cotizar".
- **Primary:** Ledger Ink fill with off-white text, 14px medium. Hover drops to 85% ink.
- **Outline:** paper fill, 1px rule border and ink text. Hover fills with wash.
- **Ghost:** no fill and pencil text. Hover brings a wash fill with ink text. Used for secondary product links (docs, source).
- **Hover / Focus:** 150ms ease-out color transitions. Pressing scales to 0.96 (motion-safe). Focus shows a 2px Focus Grey outline offset 3px.
- **Icons:** a trailing arrow for in-page actions and a trailing up-right arrow for external links. The arrow nudges 2px right on hover in the log's open row.

### Chips

- **Choice chips** (the contact form's service picker): 36px pills, 1px rule and 14px text. Hover fills with wash. When selected, the fill and border become Ledger Ink with off-white text. They are real radio inputs, so focus draws the outline on the chip.
- **Badge:** an 11px medium pill with a rule border and pencil text ("Código abierto").

### Cards / Containers

- **Corner Style:** 12px for exhibits and the form, 8px for the menu.
- **Background:** paper (charcoal in dark).
- **Shadow Strategy:** none; see Elevation.
- **Border:** the ink ring (log, form) or a 1px rule (product exhibits). Every exhibit has a 12px pencil caption bar across the top, above a rule, with the subject on the left and the context on the right.
- **Internal Padding:** 16px, or 20px → 24px for the form.

### Inputs / Fields

The site has no free-text fields. The contact form builds its message from the chosen chip and shows it in a read-only preview (8px corners, rule border, paper fill, 14px pencil text, 16px × 12px padding) that is announced as it changes.

### Navigation

The wordmark is a 28px Ledger Ink tile with a terminal prompt glyph, beside a lowercase "cantte" set in 18px semibold. Section links are 14px pencil text that turns to ink on hover. On the right are the theme toggle (36px icon button with moon/sun), the compact primary "Escríbenos" and, below md, a menu button that opens a ringed 224px dropdown of 40px rows.

### Delivery Log (signature)

The hero's proof is a ringed figure captioned "Registro de entregas", with an emerald "En producción" dot on the right. It holds an ordered list of ruled rows on a 4.5rem date column: the mono date, the product name in medium weight, an optional mono version, and a pencil description below. The last row is the open entry, "Siguiente / Tu proyecto", on wash at 50%. It links to contact and carries a 2px blinking caret. Choosing a service anywhere on the page writes that service into this row and into the prefilled email and WhatsApp message. Rows ink in from left to right on load: `clip-path` from `inset(0 100% 0 0)` with opacity from 0.4, over 700ms `cubic-bezier(0.16, 1, 0.3, 1)`, staggered 110ms. Both the ink-in and the caret run only without reduced motion.

### Ruled Row List

This replaces the card grid. It is a list framed by top and bottom rules with a 1px divider between rows. Each row is a small grid with a name in medium weight, pencil supporting text and, where useful, a trailing action or a check-marked deliverables column. FAQ rows are native `details` elements with a plus icon that rotates 45° over 200ms when open. Only one is open at a time.

## Do's and Don'ts

### Do:

- **Do** keep every surface achromatic and spend emerald or sky only on state, always beside a word.
- **Do** open each band with a top rule, a 500-weight headline at -0.04em and a pencil lead.
- **Do** list repeated items as ruled rows; keep rings and borders for exhibits of real shipped work.
- **Do** set dates, versions, code, event names, the email address and tech-stack values in Geist Mono, and nothing else.
- **Do** keep transitions at 150ms ease-out and press scaling at 0.96, wrapped in motion-safe; keep the ink-in as the page's single entrance.
- **Do** design both themes; the `.dark` class follows the system until the visitor chooses, and it is set before first paint.

### Don't:

- **Don't** put an eyebrow, kicker or mono label above a headline.
- **Don't** lay services, features or practices out as a grid of equal cards.
- **Don't** set the display size above 4rem or headings above weight 500.
- **Don't** introduce a brand accent color or a solid saturated surface.
- **Don't** use a shadow to signal importance; only floating surfaces get one.
