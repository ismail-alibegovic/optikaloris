"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { useQuickView } from "./QuickViewContext";
import {
  PRICES_VERIFIED_ON,
  PRODUCTS,
  SHOP_URL,
  collectionUrl,
  formatKM,
  productImage,
  type Category,
  type Product,
} from "@/lib/data";

type Filter = "sve" | Category;

const FILTERS: { id: Filter; label: string; href: string; linkLabel: string }[] = [
  { id: "sve", label: "Sve", href: `${SHOP_URL}/collections/all`, linkLabel: "Cijela ponuda" },
  { id: "suncane", label: "Sunčane", href: collectionUrl("suncane-naocale"), linkLabel: "Sve sunčane naočale" },
  { id: "dioptrijske", label: "Dioptrijske", href: collectionUrl("dioptrijski-okviri"), linkLabel: "Svi dioptrijski okviri" },
];

const countFor = (f: Filter) => (f === "sve" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === f).length);

function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const { open } = useQuickView();
  const [front, side] = product.images;
  return (
    <button
      type="button"
      onClick={() => open(product)}
      className="group flex h-full w-full flex-col bg-tile p-4 text-left transition-colors duration-500 hover:bg-cream sm:p-6"
      aria-label={`Brzi pregled: ${product.brand} ${product.model}, ${formatKM(product.price)}`}
    >
      <span className="flex items-start justify-between gap-3">
        <span className="text-[0.75rem] font-semibold text-stone">{product.brand}</span>
        {product.compareAtPrice ? (
          <span className="type-micro !text-[0.625rem] text-loris">Akcija</span>
        ) : (
          <span className="inline-flex size-7 items-center justify-center rounded-full border border-charcoal/15 opacity-0 transition-all duration-300 group-hover:border-charcoal group-hover:bg-charcoal group-hover:text-ivory group-hover:opacity-100 group-focus-visible:opacity-100">
            <Plus className="size-3.5" strokeWidth={1.75} aria-hidden />
          </span>
        )}
      </span>

      <span className="relative my-6 block aspect-[5/4] w-full sm:my-10">
        <Image
          src={productImage(front)}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 24vw, 50vw"
          className={`packshot object-contain transition-[opacity,transform] duration-700 ease-[var(--ease-editorial)] ${
            side ? "group-hover:opacity-0" : "group-hover:scale-105"
          }`}
        />
        {side && (
          <Image
            src={productImage(side)}
            alt=""
            fill
            sizes="(min-width: 1024px) 24vw, 50vw"
            className="packshot scale-95 object-contain opacity-0 transition-[opacity,transform] duration-700 ease-[var(--ease-editorial)] group-hover:scale-100 group-hover:opacity-100"
          />
        )}
      </span>

      <span className="mt-auto flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
        <span className="type-card text-[0.9375rem] sm:text-[1.0625rem]">{product.model}</span>
        <span className="shrink-0 whitespace-nowrap text-[0.875rem] tabular-nums text-ink sm:text-right">
          {product.compareAtPrice && (
            <span className="mr-2 text-[0.75rem] text-ink/45 line-through sm:mr-0 sm:block">{formatKM(product.compareAtPrice)}</span>
          )}
          {formatKM(product.price)}
        </span>
      </span>
    </button>
  );
}

export function FeaturedProducts() {
  const [filter, setFilter] = useState<Filter>("sve");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onFilter = (e: Event) => setFilter((e as CustomEvent<Category>).detail);
    window.addEventListener("loris:filter", onFilter);
    return () => window.removeEventListener("loris:filter", onFilter);
  }, []);

  const visible = filter === "sve" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
  const active = FILTERS.find((f) => f.id === filter)!;

  return (
    <section id="izdvojeno" aria-labelledby="izdvojeno-title" className="py-24 md:py-32">
      <div className="container-editorial">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="type-label text-stone">(03) Izdvojeno iz ponude</p>
            <h2 id="izdvojeno-title" className="type-section mt-4">
              Odabrano u studiju.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:justify-self-end">
            <div role="group" aria-label="Filtriraj proizvode" className="flex gap-7">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={filter === f.id}
                  onClick={() => setFilter(f.id)}
                  className="relative pb-2 text-[0.9375rem] font-semibold text-charcoal/45 transition-colors duration-300 hover:text-charcoal aria-pressed:text-charcoal"
                >
                  {f.label}
                  <sup className="ml-1 text-[0.625rem] font-semibold">{countFor(f.id)}</sup>
                  {filter === f.id && (
                    <motion.span
                      layoutId="filter-underline"
                      className="absolute inset-x-0 bottom-0 h-px bg-charcoal"
                      transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.ul
          layout={!reduce}
          className="mt-12 grid grid-cols-2 gap-px border border-charcoal/10 bg-charcoal/10 md:mt-16 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((product, i) => (
              <motion.li
                key={product.handle}
                layout={!reduce}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : i * 0.03, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard product={product} priority={i < 2} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <div className="mt-6 flex flex-col gap-4 text-[0.8125rem] text-ink/65 sm:flex-row sm:items-center sm:justify-between">
          <p>Cijene preuzete s optikaloris.ba, {PRICES_VERIFIED_ON}</p>
          <a
            href={active.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-semibold text-charcoal"
          >
            <span className="link-underline">{active.linkLabel} na optikaloris.ba</span>
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} aria-hidden />
            <span className="sr-only">(otvara se u novom prozoru)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
