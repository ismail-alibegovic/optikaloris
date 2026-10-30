# Optika Loris — Homepage Redesign Concept

An independent, speculative redesign demo of the homepage for **[Optika Loris](https://optikaloris.ba/)**, an optical
studio with three stores in Sarajevo. This is a sales demo for the owners, **not** the official website and not a
working web shop.

> Pogled koji definiše stil.

## What's inside

One premium, fully responsive homepage:

| Section | Highlights |
| --- | --- |
| Header | Genuine Loris logo; transparent over the hero, solid ivory on scroll; persistent *Zakaži pregled* pill; full-screen mobile menu. Sunglasses/frames nav items pre-select the product filter. |
| Hero | Full-bleed black-and-white campaign, Geist headline, pill CTAs and an "U fokusu" card for a real Prada model that opens the quick-view. |
| Kolekcije | Category quick links + edge-to-edge mosaic mixing campaign photography with real product tiles. |
| Naš pristup | Photo-led brand story and a full-bleed macro frame band. |
| Odabrano u studiju | 8 real products (verified KM prices) in a hairline boutique grid, filter tabs with counts, hover alternate view, accessible quick-view. |
| Brendovi | Official brand logos (single-tone) driving an interactive spotlight of a real model per brand. |
| Pregled vida | Verified service facts and a dedicated booking panel linking to the live reservation page. |
| Poslovnice | Directory of the three verified stores with a map of the selected address. |
| Footer | Contact details, socials and a clear "independent redesign concept" disclaimer. |

Research, reference analysis and design decisions are documented in [`DESIGN_NOTES.md`](./DESIGN_NOTES.md).
Screenshots from the visual review (1440 / 768 / 390 px) are in [`docs/screenshots`](./docs/screenshots).

![Desktop hero](./docs/screenshots/desktop-fold.jpg)

## Stack

- [Next.js 15](https://nextjs.org/) (App Router, static output) · React 19 · TypeScript
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- [Motion](https://motion.dev/) for restrained reveals, the filter and dialogs (respects `prefers-reduced-motion`)
- Lucide icons · `next/image` (AVIF/WebP) · `next/font` (Geist + Manrope, `latin-ext`)

## Run locally

Requires Node.js 18.18+ (tested with Node 22).

```bash
npm install
```

```bash
npm run dev
```

Open <http://localhost:3000>.

Production build:

```bash
npm run build
```

```bash
npm start
```

Checks:

```bash
npm run lint
```

```bash
npm run typecheck
```

## Project structure

```
app/            layout (fonts, metadata), page, global styles & tokens, favicon
components/     one component per homepage section + QuickView, Reveal, Logo, links
lib/data.ts     verified business data: products, prices, brands, stores, contact
public/brand    Optika Loris logo (from optikaloris.ba)
public/brands   official brand logos (SVG, Wikimedia Commons — see DESIGN_NOTES.md)
public/images   products/ (optikaloris.ba packshots), editorial/ (Unsplash)
```

To change products, prices or stores, edit `lib/data.ts`.

## Content & credits

- Products, prices (verified 29 Oct 2026), stores, phone numbers and services come from optikaloris.ba.
- Product photographs and the logo belong to Optika Loris. Brand logos are trademarks of their owners,
  shown only to identify brands the store sells.
- Editorial photographs are from [Unsplash](https://unsplash.com/) under the Unsplash License (IDs listed in
  `DESIGN_NOTES.md`). Sarajevo images are city mood shots, not photos of the stores.

## Scope & limitations

- Demo only: no cart, checkout, backend, CMS or real booking — all purchase and booking actions link to the
  existing optikaloris.ba pages.
- Prices are a snapshot (30 Oct 2026) and may change on the live shop.
- The store map is a Google Maps embed of each verified address (needs network access).
- `npm audit` reports a PostCSS advisory inside Next 15's build tooling; it only affects build-time processing
  of the project's own CSS. Upgrading to Next 16 resolves it.
