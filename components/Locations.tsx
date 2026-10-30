"use client";

import { useState } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { CONTACT, CONTACT_URL, STORES, mapsHref, telHref, type Store } from "@/lib/data";

const embedSrc = (s: Store) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(`${s.address}, 71000 Sarajevo`)}&z=16&output=embed`;

export function Locations() {
  const [active, setActive] = useState(0);
  const store = STORES[active];

  return (
    <section id="poslovnice" aria-labelledby="poslovnice-title" className="py-24 md:py-32">
      <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col lg:col-span-5">
          <Reveal>
            <p className="type-label text-stone">(06) Poslovnice</p>
            <h2 id="poslovnice-title" className="type-section mt-4 max-w-[11ch]">
              Tri adrese u Sarajevu.
            </h2>
          </Reveal>

          <ol className="mt-10 border-t border-charcoal/15">
            {STORES.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.id} className="border-b border-charcoal/15">
                  <button
                    type="button"
                    aria-pressed={isActive}
                    aria-controls="store-map"
                    onClick={() => setActive(i)}
                    className="group flex w-full items-baseline gap-4 pt-5 text-left"
                  >
                    <span className={`type-label w-6 transition-colors ${isActive ? "text-loris" : "text-stone"}`}>0{i + 1}</span>
                    <span
                      className={`type-title transition-colors duration-300 ${
                        isActive ? "text-charcoal" : "text-charcoal/40 group-hover:text-charcoal/70"
                      }`}
                    >
                      {s.name}
                    </span>
                  </button>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-5 pl-10 pt-2 text-[0.875rem]">
                    <span className="text-ink/75">{s.address}</span>
                    <a href={telHref(s.phone)} className="inline-flex items-center gap-1.5 font-medium hover:text-olive">
                      <Phone className="size-3.5" strokeWidth={1.5} aria-hidden />
                      {s.phone}
                    </a>
                    <a
                      href={mapsHref(s)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold"
                    >
                      <span className="link-underline">Upute</span>
                      <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden />
                      <span className="sr-only">do poslovnice {s.name} (Google Maps, novi prozor)</span>
                    </a>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-auto pt-10 text-[0.875rem] text-ink/75">
            <p className="font-semibold text-charcoal">Web shop i opće informacije</p>
            <p className="mt-1">
              <a href={CONTACT.phoneHref} className="hover:text-charcoal">{CONTACT.phone}</a>
              {" · "}
              <a href={`mailto:${CONTACT.email}`} className="hover:text-charcoal">{CONTACT.email}</a>
            </p>
            <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 font-semibold text-charcoal">
              <span className="link-underline">Kontakt stranica</span>
              <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden />
              <span className="sr-only">(otvara se u novom prozoru)</span>
            </a>
          </div>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div id="store-map" className="relative aspect-[4/5] overflow-hidden bg-cream sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[36rem]">
            <iframe
              key={store.id}
              title={`Karta: Optika Loris ${store.name}, ${store.address}`}
              src={embedSrc(store)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 [filter:grayscale(1)_sepia(0.18)_contrast(0.95)]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-6">
              <div className="pointer-events-auto max-w-sm bg-ivory p-5 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.45)]">
                <p className="type-label flex items-center gap-2 text-stone">
                  <span className="size-1.5 rounded-full bg-loris" aria-hidden />
                  {store.area}
                </p>
                <p className="type-card mt-2">
                  {store.address}, 71 000 Sarajevo
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={mapsHref(store)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-1.5 rounded-full bg-charcoal px-4 text-[0.8125rem] font-semibold text-ivory hover:bg-ink"
                  >
                    Otvori u Google Maps
                    <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden />
                    <span className="sr-only">(novi prozor)</span>
                  </a>
                  <a
                    href={telHref(store.phone)}
                    className="inline-flex h-10 items-center rounded-full border border-charcoal/20 px-4 text-[0.8125rem] font-semibold hover:border-charcoal"
                  >
                    Pozovi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
