"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { ArrowLink } from "./ArrowLink";
import { useQuickView } from "./QuickViewContext";
import {
  PRICES_VERIFIED_ON,
  PRODUCTS,
  collectionUrl,
  formatKM,
  productImage,
  type Category,
  type Product,
} from "@/lib/data";

type Filter = "sve" | Category;

const FILTERS: { id: Filter; label: string; href: string }[] = [
  { id: "sve", label: "Sve", href: "https://optikaloris.ba/collections/all" },
  { id: "suncane", label: "Sunčane", href: collectionUrl("suncane-naocale") },
  { id: "dioptrijske", label: "Dioptrijske", href: collectionUrl("dioptrijski-okviri") },
];

function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const { open } = useQuickView();
  const [front, side] = [product.images[0], product.images[1]];
  return (
    <article className="group">
      <button
        type="button"
        onClick={() => open(product)}
        className="relative block aspect-[4/5] w-full sm:aspect-square overflow-hidden bg-cream text-left"
        aria-label={`Brzi pregled: ${product.brand} ${product.model}, ${formatKM(product.price)}`}
      >
        <Image
          src={productImage(front)}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 24vw, 50vw"
          className={`packshot object-contain px-4 transition-[opacity,transform] duration-700 ease-[var(--ease-editorial)] sm:px-6 ${
            side ? "group-hover:opacity-0" : "group-hover:scale-105"
          }`}
        />
        {side && (
          <Image
            src={productImage(side)}
            alt=""
            fill
            sizes="(min-width: 1024px) 24vw, 50vw"
            className="packshot scale-95 object-contain px-4 opacity-0 transition-[opacity,transform] duration-700 ease-[var(--ease-editorial)] group-hover:scale-100 group-hover:opacity-100 sm:px-6"
          />
        )}
        {product.compareAtPrice && (
          <span className="eyebrow absolute left-3 top-3 bg-ivory px-2 py-1 !text-[0.625rem] text-loris sm:left-4 sm:top-4">
            Akcija
          </span>
        )}
        <span className="absolute inset-x-3 bottom-3 flex h-10 translate-y-2 items-center justify-center bg-ivory/95 text-xs font-semibold tracking-wide opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:inset-x-4 sm:bottom-4">
          Brzi pregled
        </span>
      </button>
      <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <p className="eyebrow !text-[0.625rem] text-taupe">{product.brand}</p>
          <h3 className="mt-1.5 text-[0.9375rem] font-medium">{product.model}</h3>
        </div>
        <p className="text-[0.9375rem] sm:text-right">
          {formatKM(product.price)}
          {product.compareAtPrice && (
            <span className="block text-xs text-ink/50 line-through">{formatKM(product.compareAtPrice)}</span>
          )}
        </p>
      </div>
    </article>
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
    <section id="izdvojeno" aria-labelledby="izdvojeno-title" className="py-24 md:py-36">
      <div className="container-editorial">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow text-olive">Izdvojeno iz ponude</p>
            <h2 id="izdvojeno-title" className="mt-6 font-serif text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.01em]">
              Odabrano <em className="italic">u studiju.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col items-start gap-6 md:items-end">
            <div role="group" aria-label="Filtriraj proizvode" className="flex border border-charcoal/15 p-1">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={filter === f.id}
                  onClick={() => setFilter(f.id)}
                  className="relative h-10 px-5 text-[0.8125rem] font-semibold tracking-wide transition-colors duration-300 aria-pressed:text-ivory sm:px-6"
                >
                  {filter === f.id && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 bg-charcoal"
                      transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                  <span className="relative">{f.label}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.ul layout={!reduce} className="mt-14 grid grid-cols-2 gap-x-3 gap-y-12 sm:gap-x-6 md:mt-20 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((product, i) => (
              <motion.li
                key={product.handle}
                layout={!reduce}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard product={product} priority={i < 2} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <div className="mt-16 flex flex-col gap-4 border-t border-charcoal/10 pt-6 text-[0.8125rem] text-ink/70 sm:flex-row sm:items-center sm:justify-between">
          <p>Cijene preuzete s optikaloris.ba, {PRICES_VERIFIED_ON}</p>
          <ArrowLink href={active.href} external className="text-charcoal">
            {filter === "sve" ? "Pogledaj cijelu ponudu" : `Sve ${active.label.toLowerCase()} naočale`}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
