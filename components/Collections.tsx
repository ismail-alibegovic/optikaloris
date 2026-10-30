"use client";

import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { useQuickView } from "./QuickViewContext";
import { EXTRA_PRODUCTS, PRODUCTS, collectionUrl, formatKM, productImage, type Product } from "@/lib/data";

type Campaign = {
  index: string;
  title: string;
  caption: string;
  href: string;
  image: string;
  alt: string;
  position: string;
};

const LARGE: Campaign[] = [
  {
    index: "01",
    title: "Sunčane naočale",
    caption: "Prada, Miu Miu, Ray-Ban, Dolce&Gabbana",
    href: collectionUrl("suncane-naocale"),
    image: "/images/editorial/col-sun.jpg",
    alt: "Žena u bijeloj haljini sa crnim sunčanim naočalama na suncu",
    position: "object-[50%_12%]",
  },
  {
    index: "02",
    title: "Dioptrijski okviri",
    caption: "Acetat, titan i dizajnerski okviri",
    href: collectionUrl("dioptrijski-okviri"),
    image: "/images/editorial/col-optical.jpg",
    alt: "Žena s dioptrijskim okvirom u toplom svjetlu",
    position: "object-[50%_28%]",
  },
];

const WOMEN: Campaign = {
  index: "03",
  title: "Ženski okviri",
  caption: "Ženska kolekcija",
  href: collectionUrl("zenske-dioptrijske"),
  image: "/images/editorial/col-women.jpg",
  alt: "Žena s tankim dioptrijskim okvirom uz more",
  position: "object-[58%_40%]",
};

const MEN: Campaign = {
  index: "04",
  title: "Muški okviri",
  caption: "Muška kolekcija",
  href: collectionUrl("muske-dioptrijske"),
  image: "/images/editorial/col-men.jpg",
  alt: "Muškarac u smeđem odijelu s avijatorskim naočalama",
  position: "object-[50%_22%]",
};

const QUICK_LINKS = [
  ["Sunčane naočale", "suncane-naocale"],
  ["Dioptrijski okviri", "dioptrijski-okviri"],
  ["Ženski okviri", "zenske-dioptrijske"],
  ["Muški okviri", "muske-dioptrijske"],
  ["Komplet naočale", "komplet-naocale"],
  ["Leće i otopine", "lece-i-otopine"],
] as const;

const coco = PRODUCTS.find((p) => p.handle === "coco-song-cv329-c02")!;
const armani = EXTRA_PRODUCTS.find((p) => p.handle === "emporio-armani-ea4237-5001t3")!;

function CampaignTile({ c, size }: { c: Campaign; size: "lg" | "sm" }) {
  return (
    <a
      href={c.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden bg-charcoal text-ivory ${
        size === "lg" ? "aspect-[4/5] md:aspect-[5/6] lg:aspect-[6/7]" : "aspect-[3/4]"
      }`}
    >
      <Image
        src={c.image}
        alt={c.alt}
        fill
        sizes={size === "lg" ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
        className={`object-cover transition-transform duration-[1600ms] ease-[var(--ease-editorial)] group-hover:scale-[1.045] ${c.position}`}
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/70 to-transparent" />
      {size === "lg" && <span className="type-label absolute left-5 top-5 text-ivory/85 md:left-8 md:top-8">({c.index})</span>}
      <div className={`absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 ${size === "lg" ? "p-5 md:p-8" : "p-4 md:p-5"}`}>
        <div>
          <h3 className={size === "lg" ? "type-title" : "type-card md:text-[1.25rem]"}>{c.title}</h3>
          <p className={`mt-1.5 text-ivory/75 ${size === "lg" ? "text-[0.875rem]" : "hidden text-[0.8125rem] md:block"}`}>{c.caption}</p>
        </div>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ivory/95 text-charcoal transition-all duration-500 ease-[var(--ease-editorial)] group-hover:bg-white ${
            size === "lg" ? "h-10 px-4 text-[0.8125rem] font-semibold" : "size-9 justify-center"
          }`}
        >
          {size === "lg" && "Istraži"}
          <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} aria-hidden />
        </span>
      </div>
      <span className="sr-only">(otvara se u novom prozoru)</span>
    </a>
  );
}

function ProductTile({ product, label }: { product: Product; label: string }) {
  const { open } = useQuickView();
  const [front, side] = product.images;
  return (
    <button
      type="button"
      onClick={() => open(product)}
      aria-label={`Brzi pregled: ${product.brand} ${product.model}, ${formatKM(product.price)}`}
      className="group relative flex aspect-[3/4] w-full flex-col justify-between bg-tile p-4 text-left md:p-5"
    >
      <span className="flex items-start justify-between">
        <span className="type-label text-stone">{label}</span>
        <span className="inline-flex size-8 items-center justify-center rounded-full border border-charcoal/15 transition-colors duration-300 group-hover:border-charcoal group-hover:bg-charcoal group-hover:text-ivory">
          <Plus className="size-3.5" strokeWidth={1.75} aria-hidden />
        </span>
      </span>
      <span className="relative mx-auto block aspect-[5/4] w-full">
        <Image
          src={productImage(front)}
          alt=""
          fill
          sizes="(min-width: 768px) 22vw, 45vw"
          className={`packshot object-contain transition-[opacity,transform] duration-700 ease-[var(--ease-editorial)] ${side ? "group-hover:opacity-0" : "group-hover:scale-105"}`}
        />
        {side && (
          <Image
            src={productImage(side)}
            alt=""
            fill
            sizes="(min-width: 768px) 22vw, 45vw"
            className="packshot scale-95 object-contain opacity-0 transition-[opacity,transform] duration-700 ease-[var(--ease-editorial)] group-hover:scale-100 group-hover:opacity-100"
          />
        )}
      </span>
      <span className="block">
        <span className="block text-[0.75rem] font-semibold text-stone">{product.brand}</span>
        <span className="mt-0.5 flex flex-wrap items-baseline justify-between gap-x-3">
          <span className="type-card text-[0.9375rem] md:text-[1.0625rem]">{product.model}</span>
          <span className="text-[0.8125rem] text-ink">{formatKM(product.price)}</span>
        </span>
      </span>
    </button>
  );
}

export function Collections() {
  return (
    <section id="kolekcije" aria-labelledby="kolekcije-title" className="pt-20 md:pt-28">
      <div className="container-editorial grid gap-10 pb-10 md:pb-14 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <p className="type-label text-stone">(01) Kolekcije</p>
          <h2 id="kolekcije-title" className="type-section mt-4 max-w-[14ch]">
            Odaberite svoj pogled.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5">
          <ul className="grid grid-cols-2 gap-x-6 border-t border-charcoal/15">
            {QUICK_LINKS.map(([label, handle]) => (
              <li key={handle} className="border-b border-charcoal/15">
                <a
                  href={collectionUrl(handle)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3 text-[0.875rem] font-medium"
                >
                  {label}
                  <ArrowUpRight
                    className="size-4 text-stone transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-charcoal"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <span className="sr-only">(otvara se u novom prozoru)</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Edge-to-edge mosaic; 1px gaps read as hairlines */}
      <div className="grid gap-px bg-charcoal/10 md:grid-cols-2">
        {LARGE.map((c) => (
          <CampaignTile key={c.index} c={c} size="lg" />
        ))}
      </div>
      <div className="mt-px grid grid-cols-2 gap-px bg-charcoal/10 lg:grid-cols-4">
        <CampaignTile c={WOMEN} size="sm" />
        <ProductTile product={coco} label="Svila, perje i kamenje" />
        <ProductTile product={armani} label="Klasik u crnom" />
        <CampaignTile c={MEN} size="sm" />
      </div>
    </section>
  );
}
