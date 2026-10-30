# Optika Loris — Design Notes

> **V2 (30 Oct 2026)** — art-direction overhaul. The V2 notes come first; the original V1 research
> (business facts, first reference pass) is kept below for the record.

---

## V2.1 Audit of V1 — what made it look like a template

| Problem | Cause in code |
| --- | --- |
| Every heading looked tall, narrow and old-fashioned | Instrument Serif (`font-serif`) on 20 headings across 11 components, plus italic emphasis words in nearly every title |
| Repetitive rhythm | The same recipe in every section: uppercase eyebrow → giant serif title → whitespace → image block → hairline |
| Brands read like a text document | `Brands.tsx` printed brand names in the serif, separated by slashes |
| Manifesto was a wall of type | One ~90px serif paragraph filling the viewport |
| Hero lacked impact | Narrow serif headline beside a contained portrait with an overlapping inset — a portfolio pattern, not a campaign |
| Eye care felt clinical | Close-up of phoropter equipment + bulleted medical copy |
| Locations implied things that weren't true | Generic Sarajevo street photos framed as if they showed the stores |

## V2.2 Reference research — techniques actually taken

All four live sites were captured at 1440px with cookie banners dismissed and scrolled in 900px steps;
Keron, Ornare and Wells & Vision were re-read from the supplied full-page shots.

| Reference | Observed technique | How V2 uses it |
| --- | --- | --- |
| **Jimmy Fairly** | Full-bleed campaign photo with the nav overlaid in white; logo left, nav centred; category tiles 50/50 edge-to-edge, zero gutter, labels small in the bottom-left corner | Full-bleed B&W hero with transparent header that turns solid on scroll; logo-left / centred-nav header; edge-to-edge collection mosaic with corner labels |
| **Ace & Tate** | Mixed grids where campaign photos sit next to flat packshot tiles; hairline cell borders; white pill buttons over images; macro crop of a single frame as a grid cell | Collection row mixing two campaign tiles with two real product tiles; 1px hairline grids (collections, products, brand grid); pill CTAs throughout |
| **Cutler and Gross** | Cinematic campaign bands; macro "frame detail" band between product rows; product cards on one consistent backdrop | Full-bleed macro band ("Okvir se bira licem, ne katalogom."); all packshots on one warm tile colour |
| **Cubitts** | Flat neutral product tiles, name left / price right on one line, small brand meta above | Product cards: brand meta top-left, model + price baseline row, alternate view on hover |
| **Keron** | Clear relationship between campaign model and a featured product | Hero "U fokusu" card: the black Prada PRB23S next to a model in black rectangular sunglasses, opens quick-view |
| **Ornare** | Image-led brand story instead of a paragraph; store moment as a strong single visual with a CTA | "Odabrano, ne nagomilano." story: photo-led split + close-up detail, short copy |
| **Wells & Vision** | Parenthetical micro-labels "(Patient-first)", visible grid | Section indices "(01) Kolekcije" in sentence case replace the uppercase eyebrow pattern |

## V2.3 Typography

- **Geist** (display) — weight 500, tracking −0.03 to −0.045em, line-height 0.94–1.04.
  Hero ≈ 95px at 1440, section titles ≈ 63px, card titles 17–36px.
- **Manrope** (UI/body) — 15–17px body, 13px semibold labels.
- Both loaded via `next/font` with the `latin-ext` subset (č, ć, š, ž, đ verified in renders).
- No italics, no serif. The Loris wordmark (heavy italic sans, red "O") is the only expressive
  letterform; the red full stop in the hero headline nods to it.

## V2.4 Brand logos — provenance

Official marks downloaded from Wikimedia Commons (`upload.wikimedia.org/wikipedia/commons/…`),
checked for embedded scripts, and rendered as single-tone CSS masks (Ray-Ban therefore appears in its
official one-colour form). Sizing uses the square root of each mark's aspect ratio so wide wordmarks
and compact monograms carry similar visual weight.

| Brand | Commons file |
| --- | --- |
| Prada | `Prada-Logo.svg` |
| Miu Miu | `Miu_Miu_-_logo_(Italy,_1993).svg` |
| Dolce&Gabbana | `Dolce_&_Gabbana.svg` |
| Ray-Ban | `Ray-Ban_logo.svg` |
| Jimmy Choo | `Jimmy_Choo_wordmark.svg` |
| Emporio Armani | `Emporio_Armani_logo.svg` |
| Carolina Herrera | `Carolina_Herrera_logo.svg` |
| Chopard | `Logo_Chopard.svg` |

**Omitted from the logo showcase:** Police, Furla, Missoni — files identified on Commons
(`Police_(brand)_Logo.svg`, `Furla_logo_2019.svg`, `Missoni_logo.svg`) but Wikimedia rate-limited
(HTTP 429) every download attempt from this environment. **Vogue Eyewear** — no verifiable official
asset found. These brands appear only in a plain-text "Također u ponudi" line, never styled as logos.

## V2.5 Section composition (deliberately varied)

1. **Hero** — full-bleed B&W campaign, white Geist headline over a scrim, pill CTAs, floating product card.
2. **Facts strip** — compact three-column line, not a section.
3. **Kolekcije** — split header (title + category quick links), edge-to-edge campaign mosaic, then a mixed campaign/product row.
4. **Naš pristup** — asymmetric photo-led story, followed by a full-bleed macro band.
5. **Odabrano u studiju** — hairline boutique grid, underline filter tabs with counts.
6. **Brendovi** — dark section; interactive logo grid drives a product spotlight (real model + price + quick-view + brand page).
7. **Pregled vida** — 7/5 split: warm eye-chart photograph edge-to-edge, compact verified services, dark booking panel.
8. **Poslovnice** — directory of the three verified stores driving a toned Google Maps embed of the selected address. No store photography is implied.
9. **Footer** — dark, Geist sign-off, contact and disclaimer.

## V2.6 New verified products (live check 30 Oct 2026)

| Brand | Model | Price | Used in |
| --- | --- | --- | --- |
| Prada | PRB23S 16K08Z | 870,00 KM | Hero "U fokusu" |
| Dolce&Gabbana | DG4514 501/87 | 545,00 KM | Brand spotlight |
| Emporio Armani | EA4243 5001T3 | 310,00 KM | Collections tile, spotlight |
| Carolina Herrera | HER 0186/S 80S | 289,50 KM (was 579,00) | Brand spotlight |
| Chopard | 354 700 | 1.270,00 KM | Brand spotlight |

All eight V1 grid products were re-checked the same day; prices unchanged.

## V2.7 New editorial photography (Unsplash License)

`1645561305502-63a9ba09ab09` (hero), `1701447428494-af7a13fc62e7` (studio shelf),
`1616169863282-3b90a0982118` (macro frame band), `1517948430535-1e2469d314fe` (eye care).
Removed: phoropter/optometrist equipment photos and the three Sarajevo city photos.

---

# V1 notes (29 Oct 2026)


Independent redesign concept for [optikaloris.ba](https://optikaloris.ba/). Research was completed
before any code was written; this document records what was observed and why the demo looks the
way it does.

---

## 1. The existing business (verified on optikaloris.ba, 29 Oct 2026)

| Topic | Finding |
| --- | --- |
| Platform | Shopify store (theme with `/collections`, `/products`, `/pages`). Product data verified via the store's public `products.json`. |
| Identity | Wordmark **LORIS** in heavy italic sans-serif with a **red "O"**, sub-line **OPTIČKI STUDIO**. Black + white versions exist. Booking form accent colour is `rgb(208, 2, 27)` (Loris red). |
| Catalogue size | ~907 online products: 483 optical frames, 379 sunglasses, 15 complete glasses ("Komplet naočale"), contact lenses, solutions, accessories, watches. |
| Brands (selection) | Prada, Miu Miu, Dolce&Gabbana, Ray-Ban, Jimmy Choo, Emporio Armani, Carolina Herrera, Chopard, Missoni, Furla, Police, Vogue, Coco Song, Genesis Art, La Matta, Oliviero Contini, Charmant Titanium Perfection, Esprit, Tom Tailor, Hawkers … plus ZEISS, Alcon, Bausch+Lomb, Johnson&Johnson (lenses). |
| Categories | Sunčane naočale (muške / ženske / dječije), Dioptrijski okviri (muški / ženski / dječiji / Clip-On / sportski), Komplet naočale, Leće i otopine, Asesoari, Satovi, Outlet. |
| Services | Online booking at `/pages/rezervacija` for *"optometrijsko određivanje i kontrola dioptrije"*. *"Pregled je besplatan ukoliko se odlučite za kupovinu nečega iz našeg asortimana okvira ili stakala."* Booking slots 09:30–19:30. Contact lenses & solutions sold in-store and online. |
| Stores (from `/pages/contact`) | **Grbavica** — Topal Osman paše 32, 033 715 520 · **Aria Mall** — Trg djece Sarajeva 1, 033 259 625 · **Bingo City Centar** — Džemala Bijedića 160, 033 529 949 |
| Web shop contact | +387 62 344 901 · webshop@optikaloris.ba · Facebook `optikaLoris` · Instagram `optika_loris` |
| Shop promises | Free delivery over 100 KM, exchange & returns, secure card payment, gift vouchers. |

### Opportunities observed on the current site
- Homepage is a stack of product carousels; no editorial point of view or storytelling.
- Hero/banner imagery is low-resolution (370–720 px wide) and mixes text-baked banners.
- Services (eye exam, free with purchase) are hidden behind a small "Pregled" menu item.
- The three physical stores — a real advantage over online-only competitors — are only listed as
  plain text on the contact page.
- Brand portfolio (Prada, Miu Miu, D&G …) is far more premium than the presentation suggests.

## 2. Reference research

| Ref | What was studied (source) | Takeaways used |
| --- | --- | --- |
| **Jimmy Fairly** (35%) | Live site captured at 1440 px (the supplied screenshot URL was behind a Cloudflare challenge). | Full-bleed, warm, cinematic lifestyle photography; spaced-out uppercase wordmark; quiet nav that lets imagery lead; category stacks labelled with a single line of type in the corner. |
| **Cubitts** (25%) | Supplied screenshot. | Off-white canvas, generous margins, thin hairline rules, small grotesk captions under images, product shots on flat neutral tiles, sentence-case conversational headings. |
| **Ornare** (20%) | Supplied Dribbble full-page shot. | Asymmetric image pairs, a large typographic "manifesto" statement between sections, filter pills above a 4-up product grid, store section as a single atmospheric image with one CTA. |
| **Keron** (10%) | Supplied Dribbble shot. | Split hero: typography + a hero product on the left, a tall portrait on the right; two clear category buttons (Sunglasses / Optical). |
| **Cutler and Gross** | Live site captured (supplied screenshot host had an expired TLS certificate). | Restraint: serif display + plain sans; image-led storytelling; "Appointments" as a first-class nav item. |
| **Ace & Tate** | Supplied screenshot. | Persistent, high-contrast booking CTA ("Gratis oogmeting") — mapped to *Zakaži pregled*; clear product discoverability. |
| **Wells & Vision** | Supplied Dribbble shot. | Oversized type, small parenthetical captions "(Patient-first)", a visible grid — used sparingly for numbering and captions. |

## 3. Creative direction

**"Optički studio, editorial edition."** Loris already calls itself an *optički studio*; the redesign
leans into that: a calm, gallery-like canvas where frames are presented like objects and the
eye-care expertise sits next to fashion rather than below it.

- **Palette** — ivory `#F4F1EA` canvas, cream `#E9E2D6` tiles, charcoal `#22211E` text, taupe
  `#B5A48F`, muted olive `#6E735C`. The authentic **Loris red `#D0021B`** is kept but used only as a
  signal: the dot motif (echoing the red "O" of the logo), focus states and small accents.
- **Type** — *Instrument Serif* (display, incl. italic for emphasis) + *Manrope* (UI and body).
  Serif for emotion, sans for information. Uppercase micro-labels with wide tracking.
- **Layout** — 12-column grid with 24–64 px gutters, asymmetric compositions, no card shadows, no
  rounded boxes, hairline dividers. Every section has a different composition to avoid repetition.
- **Photography** — authentic Loris product packshots (white backgrounds blended onto cream tiles
  with `mix-blend-mode: multiply`) + warm editorial portraits from Unsplash (free licence), never
  imagery from competing eyewear brands' campaigns.
- **Motion** — slow (600–900 ms) ease-out reveals, image hover zoom 1.04, product image swap on
  hover, modal fade/scale. All disabled under `prefers-reduced-motion`.

## 4. Section map

1. **Header** — announcement line (free exam with purchase), logo, 5 nav items, persistent
   *Zakaži pregled* button, full-screen mobile menu.
2. **Hero** — split composition: headline + CTAs + a "U fokusu" real product (opens quick-view)
   on the left; tall portrait with an overlapping inset portrait on the right; verified figures.
3. **Collections** — asymmetric 4-panel mosaic (Sunčane, Dioptrijski, Ženska, Muška).
4. **Manifesto** — large serif statement with inline image (Ornare-inspired).
5. **Featured eyewear** — 8 real products, category filter (Sve / Sunčane / Dioptrijske), hover
   image swap, accessible quick-view dialog linking to the real product page.
6. **Brands** — typographic index of verified brands with model counts, each linked to the
   store's vendor page.
7. **Services** — *Vaš vid zaslužuje posebnu pažnju.* — image pair + verified service facts +
   booking CTA to `/pages/rezervacija`.
8. **Locations** — interactive store index (3 verified stores), phone + maps links.
9. **Footer** — dark, white logo, navigation, contact, socials, redesign disclaimer.

## 5. Featured products (verified 29 Oct 2026)

| Brand | Model | Type | Price |
| --- | --- | --- | --- |
| Prada | PRD01 00K10S | Sunčane | 870,00 KM |
| Miu Miu | MUB05S 14L20U | Sunčane | 880,00 KM |
| Ray-Ban | RB3765 001/51 | Sunčane | 395,00 KM |
| Jimmy Choo | JIM LEONE/S 086 | Sunčane | 453,75 KM (was 605,00 KM) |
| Dolce&Gabbana | DG3428 502 | Dioptrijski | 580,00 KM |
| Coco Song | CV329 C02 | Dioptrijski | 790,00 KM |
| Genesis Art | GV 1663 C03 | Dioptrijski | 410,00 KM |
| Oliviero Contini | OV4403 C01 | Dioptrijski | 189,00 KM |

Prices change; the demo states the date they were taken.

## 6. Image credits

Product photographs: optikaloris.ba product catalogue. Editorial photographs: Unsplash (Unsplash
License), photo IDs — `1681622341237-96c1e17e12ae`, `1678597442309-0a09f5649f34`,
`1617019114583-affb34d1b3cd`, `1656074520589-bd325dc7aa4f`, `1552942362-50ecec295033`,
`1578773729191-61366a60b850`, `1610555423081-85ec0b8eabac`, `1757386320806-e3f03c9f41e8`,
`1758656321505-95bf802f9a4c`, `1764604955272-26b0864fbd51`, `1777918210754-8d8fc75ed4c5`,
`1662802885064-84bba6b0eb9b` (`https://images.unsplash.com/photo-<id>`). The Sarajevo images are
city mood photographs, not photographs of the stores.
