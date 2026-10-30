"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { BrandMark } from "./BrandMark";
import { useQuickView } from "./QuickViewContext";
import { ALSO_STOCKED, BRAND_SHOWCASE, formatKM, productImage, vendorUrl } from "@/lib/data";

export function Brands() {
  const [active, setActive] = useState(0);
  const { open } = useQuickView();
  const reduce = useReducedMotion();
  const brand = BRAND_SHOWCASE[active];
  const p = brand.product;

  return (
    <section id="brendovi" aria-labelledby="brendovi-title" className="bg-charcoal py-24 text-ivory md:py-32">
      <div className="container-editorial grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="type-label text-ivory/55">(04) Brendovi</p>
            <h2 id="brendovi-title" className="type-section mt-4 max-w-[12ch]">
              Kuće koje nosimo s ponosom.
            </h2>
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-ivory/65">
              Izbor iz trenutne ponude Optike Loris. Odaberite brend i pogledajte jedan od modela koji vas čeka u poslovnici.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-12 grid grid-cols-2 border-t border-ivory/12" aria-label="Odaberite brend">
              {BRAND_SHOWCASE.map((b, i) => {
                const isActive = i === active;
                return (
                  <li key={b.name} className={`border-b border-ivory/12 ${i % 2 === 0 ? "border-r" : ""}`}>
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActive(i)}
                      className={`relative flex h-20 w-full items-center justify-center px-4 transition-colors duration-300 md:h-24 ${
                        isActive ? "text-ivory" : "text-ivory/45 hover:text-ivory/80"
                      }`}
                    >
                      {isActive && <span aria-hidden className="absolute left-3 top-3 size-1.5 rounded-full bg-loris" />}
                      <BrandMark name={b.name} logo={b.logo} ratio={b.ratio} height={19} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
          <div className="relative flex aspect-[3/4] flex-col justify-between overflow-hidden bg-tile p-5 text-charcoal sm:aspect-[5/4] sm:p-8 lg:aspect-[4/5] xl:aspect-[1/1]">
            <div className="relative z-10 flex items-start justify-between gap-6">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={brand.name}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <BrandMark name={brand.name} logo={brand.logo} ratio={brand.ratio} height={26} />
                </motion.div>
              </AnimatePresence>
              <span className="type-label shrink-0 text-stone">
                {String(active + 1).padStart(2, "0")} / {String(BRAND_SHOWCASE.length).padStart(2, "0")}
              </span>
            </div>

            <div className="relative -mx-5 my-4 min-h-0 flex-1 sm:-mx-8">
              <AnimatePresence initial={false}>
                <motion.div
                  key={p.handle}
                  className="absolute inset-0 bg-tile"
                  initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={productImage(p.images[0])}
                    alt={`${p.brand} ${p.model}`}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="packshot object-contain px-6 sm:px-14"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="type-title">{p.model}</p>
                <p className="mt-1.5 text-[0.9375rem] text-ink/75">
                  {p.compareAtPrice && <span className="mr-2 text-ink/45 line-through">{formatKM(p.compareAtPrice)}</span>}
                  {formatKM(p.price)}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => open(p)}
                  className="inline-flex h-11 items-center rounded-full bg-charcoal px-5 text-[0.8125rem] font-semibold text-ivory transition-colors hover:bg-ink"
                >
                  Brzi pregled
                </button>
                <a
                  href={vendorUrl(brand.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-1.5 rounded-full border border-charcoal/20 px-5 text-[0.8125rem] font-semibold transition-colors hover:border-charcoal"
                >
                  Svi modeli
                  <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden />
                  <span className="sr-only">brenda {brand.name} (otvara se u novom prozoru)</span>
                </a>
              </div>
            </div>
          </div>

          <p className="mt-6 text-[0.8125rem] leading-relaxed text-ivory/55">
            Također u ponudi:{" "}
            {ALSO_STOCKED.map((name, i) => (
              <span key={name}>
                <a
                  href={vendorUrl(name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/80 underline decoration-ivory/25 underline-offset-4 transition-colors hover:text-ivory hover:decoration-ivory"
                >
                  {name}
                </a>
                {i < ALSO_STOCKED.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
