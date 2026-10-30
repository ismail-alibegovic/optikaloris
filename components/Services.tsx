import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { BOOKING_URL, collectionUrl } from "@/lib/data";

const SERVICES = [
  {
    title: "Određivanje i kontrola dioptrije",
    text: "Optometrijski pregled u poslovnici, u terminu koji rezervišete online.",
  },
  {
    title: "Besplatno uz kupovinu",
    text: "Pregled je besplatan ukoliko se odlučite za okvir ili stakla iz naše ponude.",
  },
  {
    title: "Kontaktne leće i otopine",
    text: "Dnevne, mjesečne i tromjesečne leće — Alcon, Bausch+Lomb, Johnson&Johnson.",
    href: collectionUrl("lece-i-otopine"),
  },
];

export function Services() {
  return (
    <section id="pregled" aria-labelledby="pregled-title" className="bg-parchment">
      <div className="grid lg:grid-cols-12">
        <div className="relative aspect-[4/3] overflow-hidden bg-cream lg:col-span-7 lg:aspect-auto lg:min-h-[46rem]">
          <Image
            src="/images/editorial/care-chart.jpg"
            alt="Naočale podignute ispred tablice za provjeru vida"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-[50%_45%]"
          />
          <span className="type-label absolute left-5 top-5 rounded-full bg-ivory/90 px-3 py-1.5 text-charcoal md:left-8 md:top-8">
            (05) Pregled vida
          </span>
        </div>

        <div className="flex flex-col justify-between gap-12 px-5 py-14 md:px-10 md:py-20 lg:col-span-5 lg:px-12 xl:px-16">
          <Reveal>
            <h2 id="pregled-title" className="type-section max-w-[13ch]">
              Vaš vid zaslužuje posebnu pažnju.
            </h2>
            <ul className="mt-10 border-t border-charcoal/15">
              {SERVICES.map((s) => (
                <li key={s.title} className="border-b border-charcoal/15 py-5">
                  <h3 className="type-card">{s.title}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink/75">{s.text}</p>
                  {s.href && (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-2 inline-flex items-center gap-1 text-[0.8125rem] font-semibold"
                    >
                      <span className="link-underline">Pogledaj leće i otopine</span>
                      <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden />
                      <span className="sr-only">(otvara se u novom prozoru)</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="bg-charcoal p-6 text-ivory sm:p-8">
              <p className="type-label flex items-center gap-2 text-ivory/60">
                <span className="size-1.5 rounded-full bg-loris" aria-hidden />
                Online rezervacija
              </p>
              <p className="type-title mt-4">Odaberite poslovnicu i termin.</p>
              <p className="mt-2 text-[0.875rem] text-ivory/65">Termini od 09:30 do 19:30 · Grbavica, Aria Mall, Bingo City Centar</p>
              <a
                href={BOOKING_URL}
                className="group mt-7 flex h-13 w-full items-center justify-between rounded-full bg-ivory py-3.5 pl-6 pr-2 text-[0.9375rem] font-semibold text-charcoal transition-colors hover:bg-white"
              >
                Zakaži pregled
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-charcoal text-ivory transition-transform duration-500 group-hover:translate-x-0.5">
                  <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
