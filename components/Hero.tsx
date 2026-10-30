"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Plus } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { useQuickView } from "./QuickViewContext";
import { BOOKING_URL, HERO_PRODUCT, formatKM, productImage } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const FACTS = [
  ["3 poslovnice", "Grbavica, Aria Mall, Bingo City Centar"],
  ["800+ modela", "Okviri i sunčane naočale online"],
  ["0 KM pregled", "Uz kupovinu okvira ili stakala"],
];

function FocusCard({ className = "" }: { className?: string }) {
  const { open } = useQuickView();
  const p = HERO_PRODUCT;
  return (
    <button
      type="button"
      onClick={() => open(p)}
      aria-label={`Brzi pregled: ${p.brand} ${p.model}, ${formatKM(p.price)}`}
      className={`group flex w-full items-stretch gap-0 overflow-hidden bg-ivory text-left text-charcoal ${className}`}
    >
      <span className="relative block w-[42%] shrink-0 bg-tile">
        <Image
          src={productImage(p.images[0])}
          alt=""
          fill
          sizes="180px"
          className="packshot object-contain p-3 transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.06]"
        />
      </span>
      <span className="flex flex-1 flex-col justify-between gap-5 p-4 sm:p-5">
        <span className="flex items-center justify-between">
          <span className="type-label text-stone">U fokusu</span>
          <span className="inline-flex size-8 items-center justify-center rounded-full border border-charcoal/15 transition-colors duration-300 group-hover:border-charcoal group-hover:bg-charcoal group-hover:text-ivory">
            <Plus className="size-3.5" strokeWidth={1.75} aria-hidden />
          </span>
        </span>
        <span>
          <BrandMark name="Prada" logo="/brands/prada.svg" ratio={6.44} height={13} className="text-charcoal" />
          <span className="mt-2.5 block text-[0.875rem] font-medium">{p.model}</span>
          <span className="mt-0.5 block text-[0.875rem] text-ink/70">{formatKM(p.price)}</span>
        </span>
      </span>
    </button>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number, y = 24) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 }, transition: { duration: 1.1, delay, ease } };

  return (
    <section aria-labelledby="hero-title">
      <div className="relative h-[100svh] min-h-[640px] max-h-[1040px] overflow-hidden bg-charcoal text-ivory">
        <Image
          src="/images/editorial/hero-campaign.jpg"
          alt="Žena u vunenom kaputu s crnim pravougaonim sunčanim naočalama, crno-bijela kampanja"
          fill
          priority
          sizes="100vw"
          className="animate-hero-settle object-cover object-[58%_0%] md:object-[50%_10%]"
        />
        {/* Scrims keep the header and copy legible without flattening the photograph */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-charcoal/60 to-transparent" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-transparent" />

        <div className="container-editorial absolute inset-x-0 bottom-0 grid items-end gap-10 pb-10 md:pb-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.p {...fade(0.2, 10)} className="type-label flex items-center gap-2.5 text-ivory/80">
              <span className="size-1.5 rounded-full bg-loris" aria-hidden />
              Sunčane i dioptrijske naočale — Sarajevo
            </motion.p>
            <motion.h1 {...fade(0.3)} id="hero-title" className="type-hero mt-5 max-w-[11ch]">
              Pogled koji definiše stil<span className="text-loris">.</span>
            </motion.h1>
            <motion.p {...fade(0.45)} className="mt-6 max-w-[34rem] text-[1rem] leading-relaxed text-ivory/80 md:text-[1.0625rem]">
              Otkrijte pažljivo odabrane kolekcije dioptrijskih i sunčanih naočala renomiranih svjetskih brendova.
            </motion.p>
            <motion.div {...fade(0.55)} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#kolekcije"
                className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-ivory px-6 text-[0.875rem] font-semibold text-charcoal transition-colors hover:bg-white"
              >
                Istraži kolekciju
                <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
              </a>
              <a
                href={BOOKING_URL}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-ivory/40 px-6 text-[0.875rem] font-semibold text-ivory backdrop-blur-sm transition-colors hover:border-ivory hover:bg-ivory hover:text-charcoal"
              >
                Zakaži pregled
              </a>
            </motion.div>
          </div>

          <motion.div {...fade(0.75, 32)} className="hidden lg:col-span-4 lg:block xl:col-span-3 xl:col-start-10">
            <FocusCard className="min-h-[9.5rem] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]" />
          </motion.div>
        </div>
      </div>

      {/* Facts strip + mobile focus card */}
      <div className="border-b border-charcoal/10">
        <div className="container-editorial">
          <div className="py-5 lg:hidden">
            <FocusCard className="min-h-32 border border-charcoal/10" />
          </div>
          <ul className="grid grid-cols-1 divide-y divide-charcoal/10 border-t border-charcoal/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:border-t-0">
            {FACTS.map(([value, detail], i) => (
              <li key={value} className={`flex items-baseline gap-3 py-4 sm:block sm:py-6 ${i === 0 ? "sm:pr-6" : "sm:px-6"}`}>
                <p className="type-card shrink-0">{value}</p>
                <p className="text-[0.8125rem] text-ink/70 sm:mt-1">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
