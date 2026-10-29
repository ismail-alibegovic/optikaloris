"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { ArrowLink } from "./ArrowLink";
import { CONTACT_URL, STORES, mapsHref, telHref } from "@/lib/data";

// City mood photographs (not photographs of the stores themselves).
const MOODS = [
  { src: "/images/editorial/sarajevo-street.jpg", alt: "Sarajevske fasade i brda u izmaglici" },
  { src: "/images/editorial/sarajevo-lane.jpg", alt: "Uska sarajevska ulica sa zelenim brdima u pozadini" },
  { src: "/images/editorial/sarajevo-sebilj.jpg", alt: "Sebilj na Baščaršiji u Sarajevu" },
];

export function Locations() {
  const [active, setActive] = useState(0);

  return (
    <section id="poslovnice" aria-labelledby="poslovnice-title" className="bg-parchment py-24 md:py-36">
      <div className="container-editorial">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-olive">Poslovnice</p>
          <h2 id="poslovnice-title" className="mt-6 font-serif text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.01em]">
            Tri adrese <em className="italic">u Sarajevu.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-10">
          <ul className="border-t border-charcoal/15 lg:col-span-5">
            {STORES.map((store, i) => {
              const isActive = active === i;
              return (
                <li key={store.id} className="border-b border-charcoal/15">
                  <h3>
                    <button
                      type="button"
                      id={`store-${store.id}`}
                      aria-expanded={isActive}
                      aria-controls={`store-panel-${store.id}`}
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      className="group flex w-full items-baseline gap-5 py-6 text-left md:py-7"
                    >
                      <span className={`eyebrow transition-colors ${isActive ? "text-loris" : "text-taupe"}`}>0{i + 1}</span>
                      <span
                        className={`font-serif text-[clamp(2rem,3.6vw,3.25rem)] leading-none transition-colors duration-300 ${
                          isActive ? "text-charcoal" : "text-charcoal/40 group-hover:text-charcoal/70"
                        }`}
                      >
                        {store.name}
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={`store-panel-${store.id}`}
                        role="region"
                        aria-labelledby={`store-${store.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 pb-8 pl-[calc(0.6875rem*2+1.25rem)] text-[0.9375rem] sm:grid-cols-2">
                          <div>
                            <p className="eyebrow !text-[0.625rem] text-ink/60">Adresa</p>
                            <p className="mt-2">
                              {store.address}
                              <br />
                              71 000 Sarajevo
                            </p>
                            <a
                              href={mapsHref(store)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex items-center gap-1 text-[0.8125rem] font-semibold"
                            >
                              <span className="link-underline">Upute do poslovnice</span>
                              <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden />
                              <span className="sr-only">(Google Maps, novi prozor)</span>
                            </a>
                          </div>
                          <div>
                            <p className="eyebrow !text-[0.625rem] text-ink/60">Telefon</p>
                            <a href={telHref(store.phone)} className="mt-2 inline-flex items-center gap-2 hover:text-olive">
                              <Phone className="size-3.5" strokeWidth={1.5} aria-hidden />
                              {store.phone}
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
            <li className="pt-8">
              <ArrowLink href={CONTACT_URL} external>
                Kontakt stranica Optike Loris
              </ArrowLink>
            </li>
          </ul>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden bg-sand md:aspect-[5/4] lg:aspect-square">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={active}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={MOODS[active].src}
                      alt={MOODS[active].alt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-charcoal/60 to-transparent p-5 pt-20 text-ivory sm:p-6 sm:pt-24">
                  <p className="font-serif text-2xl leading-none sm:text-3xl">{STORES[active].name}</p>
                  <p className="eyebrow !text-[0.625rem] text-ivory/80">Sarajevo</p>
                </div>
              </div>
              <figcaption className="mt-3 text-xs text-ink/60">Ilustrativne fotografije Sarajeva.</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
