"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { ButtonLink } from "./ArrowLink";
import { useQuickView } from "./QuickViewContext";
import { BOOKING_URL, PRODUCTS, formatKM, productImage } from "@/lib/data";

const featured = PRODUCTS[0]; // Prada PRD01 00K10S

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { open } = useQuickView();
  const reduce = useReducedMotion();
  const fade = (delay: number, y = 28) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease },
        };

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container-editorial grid gap-y-12 pb-16 pt-8 md:pt-12 lg:grid-cols-12 lg:gap-x-10 lg:pb-24 lg:pt-10">
        {/* Copy column */}
        <div className="flex flex-col lg:col-span-5 lg:py-6">
          <motion.p {...fade(0.05, 12)} className="eyebrow flex items-center gap-3 text-olive">
            <span className="size-1.5 rounded-full bg-loris" aria-hidden />
            Sunčane & dioptrijske naočale
          </motion.p>

          <motion.h1
            {...fade(0.12)}
            id="hero-title"
            className="mt-8 font-serif text-[clamp(3.6rem,8.6vw,8.25rem)] leading-[0.88] tracking-[-0.02em] text-charcoal lg:mt-12"
          >
            Pogled koji
            <br />
            definiše <em className="italic text-olive">stil.</em>
          </motion.h1>

          <motion.p {...fade(0.24)} className="mt-8 max-w-md text-[1.0625rem] leading-relaxed text-ink lg:mt-10">
            Otkrijte pažljivo odabrane kolekcije dioptrijskih i sunčanih naočala renomiranih svjetskih brendova.
          </motion.p>

          <motion.div {...fade(0.34)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#kolekcije">Istraži kolekciju</ButtonLink>
            <ButtonLink href={BOOKING_URL} variant="outline">
              Zakaži pregled
            </ButtonLink>
          </motion.div>

          {/* "In focus" product, Keron-style relation between campaign image and product */}
          <motion.div {...fade(0.5)} className="mt-14 hidden border-t border-charcoal/15 pt-6 lg:mt-auto lg:block">
            <button
              type="button"
              onClick={() => open(featured)}
              className="group flex w-full items-center gap-6 text-left"
              aria-label={`Brzi pregled: ${featured.brand} ${featured.model}`}
            >
              <span className="relative block h-24 w-36 shrink-0 bg-cream">
                <Image
                  src={productImage(featured.images[0])}
                  alt=""
                  fill
                  sizes="144px"
                  className="packshot object-contain p-2 transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-105"
                />
              </span>
              <span className="flex-1">
                <span className="eyebrow block text-taupe">U fokusu</span>
                <span className="mt-2 block font-serif text-2xl leading-none">
                  {featured.brand} <span className="text-ink/60">{featured.model.split(" ")[0]}</span>
                </span>
                <span className="mt-2 block text-sm text-ink">{formatKM(featured.price)}</span>
              </span>
              <span className="inline-flex size-11 items-center justify-center border border-charcoal/20 transition-colors duration-300 group-hover:border-charcoal group-hover:bg-charcoal group-hover:text-ivory">
                <Plus className="size-4" strokeWidth={1.5} aria-hidden />
              </span>
            </button>
          </motion.div>
        </div>

        {/* Image composition */}
        <div className="relative lg:col-span-7">
          <div className="grid grid-cols-12 gap-3 sm:gap-4">
            <motion.figure
              className="relative col-span-12 aspect-[4/5] overflow-hidden bg-cream sm:col-span-9 sm:col-start-4 lg:aspect-[5/6] lg:max-h-[78svh] lg:w-full"
              initial={reduce ? undefined : { clipPath: "inset(8% 0% 0% 0%)", opacity: 0 }}
              animate={reduce ? undefined : { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
              transition={{ duration: 1.4, ease }}
            >
              <Image
                src="/images/editorial/hero-woman.jpg"
                alt="Žena u crnoj jakni sa sunčanim naočalama, editorijalni portret"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, (min-width: 640px) 75vw, 100vw"
                className="object-cover object-[50%_30%]"
              />
              <figcaption className="eyebrow absolute bottom-5 right-5 text-ivory/90 mix-blend-difference">
                Kolekcija 2026
              </figcaption>
            </motion.figure>

            {/* Inset portrait overlapping the main frame */}
            <motion.figure
              {...fade(0.6, 40)}
              className="relative col-span-5 -mt-[42%] aspect-[3/4] self-end overflow-hidden border-[6px] border-ivory bg-cream sm:absolute sm:bottom-[-2.5rem] sm:left-0 sm:mt-0 sm:w-[34%] lg:bottom-[-3rem] lg:w-[36%]"
            >
              <Image
                src="/images/editorial/hero-man.jpg"
                alt="Muškarac s okruglim metalnim dioptrijskim okvirom, krupni plan"
                fill
                sizes="(min-width: 1024px) 18vw, 40vw"
                className="object-cover"
              />
            </motion.figure>

            <motion.p
              {...fade(0.75, 12)}
              className="eyebrow col-span-7 self-end pb-2 text-ink/70 sm:absolute sm:left-[37%] sm:top-auto sm:bottom-[-2rem] sm:col-span-auto lg:left-[39%]"
            >
              Tri poslovnice u Sarajevu
            </motion.p>
          </div>
        </div>
      </div>

      {/* Verified figures */}
      <div className="container-editorial">
        <ul className="grid grid-cols-1 border-y border-charcoal/10 sm:grid-cols-3">
          {[
            ["03", "Poslovnice u Sarajevu", "Grbavica · Aria Mall · Bingo City Centar"],
            ["800+", "Okvira i sunčanih naočala", "Od Prade i Miu Miu do nezavisnih dizajnera"],
            ["0 KM", "Pregled vida", "Uz kupovinu okvira ili stakala"],
          ].map(([value, label, detail], i) => (
            <li
              key={label}
              className={`flex items-baseline gap-5 py-6 sm:block sm:px-6 sm:py-8 ${i > 0 ? "border-t border-charcoal/10 sm:border-l sm:border-t-0" : "sm:pl-0"}`}
            >
              <p className="w-24 shrink-0 font-serif text-4xl leading-none sm:w-auto sm:text-5xl">{value}</p>
              <div>
                <p className="text-sm font-semibold sm:mt-4">{label}</p>
                <p className="mt-1 text-[0.8125rem] text-ink/70">{detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
