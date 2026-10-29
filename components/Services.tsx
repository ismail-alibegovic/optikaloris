import Image from "next/image";
import { Reveal } from "./Reveal";
import { ButtonLink, ArrowLink } from "./ArrowLink";
import { BOOKING_URL, collectionUrl } from "@/lib/data";

const SERVICES = [
  {
    title: "Optometrijski pregled",
    text: "Određivanje i kontrola dioptrije u poslovnici, uz termin koji rezervišete online.",
  },
  {
    title: "Besplatno uz kupovinu",
    text: "Pregled je besplatan ukoliko se odlučite za okvir ili stakla iz naše ponude.",
  },
  {
    title: "Kontaktne leće i otopine",
    text: "Dnevne, mjesečne i tromjesečne leće te otopine vodećih proizvođača — Alcon, Bausch+Lomb, Johnson&Johnson.",
    href: collectionUrl("lece-i-otopine"),
  },
  {
    title: "Savjet pri odabiru",
    text: "Okvir biramo zajedno s vama: prema obliku lica, dioptriji i načinu na koji ga nosite.",
  },
];

export function Services() {
  return (
    <section id="pregled" aria-labelledby="pregled-title" className="py-24 md:py-36">
      <div className="container-editorial grid gap-16 lg:grid-cols-12 lg:gap-10">
        {/* Image pair */}
        <div className="relative lg:col-span-6">
          <Reveal className="relative aspect-[4/5] w-[86%] overflow-hidden bg-cream">
            <Image
              src="/images/editorial/service-phoropter.jpg"
              alt="Pacijentica tokom pregleda vida kroz foropter"
              fill
              sizes="(min-width: 1024px) 40vw, 86vw"
              className="object-cover object-[50%_40%]"
            />
          </Reveal>
          <Reveal
            delay={0.15}
            y={40}
            className="absolute bottom-[-3rem] right-0 aspect-[4/5] w-[42%] overflow-hidden border-[6px] border-ivory bg-cream"
          >
            <Image
              src="/images/editorial/service-optometrist.jpg"
              alt="Optometrist podešava foropter, crno-bijela fotografija"
              fill
              sizes="(min-width: 1024px) 20vw, 42vw"
              className="object-cover grayscale"
            />
          </Reveal>
        </div>

        {/* Copy */}
        <div className="flex flex-col pt-8 lg:col-span-5 lg:col-start-8 lg:pt-0">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-olive">
              <span className="size-1.5 rounded-full bg-loris" aria-hidden />
              Pregled vida
            </p>
            <h2 id="pregled-title" className="mt-6 font-serif text-[clamp(2.75rem,5.2vw,5rem)] leading-[0.95] tracking-[-0.01em]">
              Vaš vid zaslužuje <em className="italic">posebnu pažnju.</em>
            </h2>
          </Reveal>

          <ol className="mt-12 border-t border-charcoal/15">
            {SERVICES.map((s, i) => (
              <Reveal as="li" key={s.title} delay={0.05 * i} className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-charcoal/15 py-6">
                <span className="eyebrow pt-1 text-taupe">0{i + 1}</span>
                <div>
                  <h3 className="text-[1.0625rem] font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/80">{s.text}</p>
                  {s.href && (
                    <ArrowLink href={s.href} external className="mt-3">
                      Leće i otopine
                    </ArrowLink>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.2} className="mt-12 flex flex-col gap-6 bg-cream p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="font-serif text-2xl leading-tight">Rezervišite termin online</p>
              <p className="mt-1 text-[0.8125rem] text-ink/70">Termini od 09:30 do 19:30 · tri poslovnice</p>
            </div>
            <ButtonLink href={BOOKING_URL} className="shrink-0">
              Zakaži pregled
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
