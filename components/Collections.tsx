import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { ArrowLink } from "./ArrowLink";
import { SHOP_URL, collectionUrl } from "@/lib/data";

type Panel = {
  index: string;
  title: string;
  caption: string;
  href: string;
  image: string;
  alt: string;
  layout: string;
  aspect: string;
  position?: string;
  sizes: string;
};

const PANELS: Panel[] = [
  {
    index: "01",
    title: "Sunčane naočale",
    caption: "Ljeto, grad, more",
    href: collectionUrl("suncane-naocale"),
    image: "/images/editorial/col-sun.jpg",
    alt: "Žena u bijeloj haljini sa crnim sunčanim naočalama na suncu",
    layout: "md:col-span-7",
    aspect: "aspect-[4/5]",
    position: "object-top",
    sizes: "(min-width: 768px) 55vw, 100vw",
  },
  {
    index: "02",
    title: "Dioptrijski okviri",
    caption: "Za svaki dan, s karakterom",
    href: collectionUrl("dioptrijski-okviri"),
    image: "/images/editorial/col-optical.jpg",
    alt: "Žena s dioptrijskim okvirom u toplom svjetlu",
    layout: "md:col-span-5 md:mt-40",
    aspect: "aspect-[3/4]",
    position: "object-[50%_30%]",
    sizes: "(min-width: 768px) 40vw, 100vw",
  },
  {
    index: "03",
    title: "Ženska kolekcija",
    caption: "Ženski dioptrijski okviri",
    href: collectionUrl("zenske-dioptrijske"),
    image: "/images/editorial/col-women.jpg",
    alt: "Žena s tankim dioptrijskim okvirom uz more",
    layout: "md:col-span-6 md:col-start-1 md:mt-24 lg:col-span-5 lg:col-start-2",
    aspect: "aspect-[4/3]",
    position: "object-[50%_35%]",
    sizes: "(min-width: 768px) 45vw, 100vw",
  },
  {
    index: "04",
    title: "Muška kolekcija",
    caption: "Muški dioptrijski okviri",
    href: collectionUrl("muske-dioptrijske"),
    image: "/images/editorial/col-men.jpg",
    alt: "Muškarac u smeđem odijelu s avijatorskim naočalama",
    layout: "md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-8",
    aspect: "aspect-[4/5]",
    position: "object-[50%_20%]",
    sizes: "(min-width: 768px) 33vw, 100vw",
  },
];

export function Collections() {
  return (
    <section id="kolekcije" aria-labelledby="kolekcije-title" className="py-24 md:py-36">
      <div className="container-editorial">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-olive">Kolekcije</p>
            <h2 id="kolekcije-title" className="mt-6 font-serif text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.01em]">
              Četiri načina
              <br />
              da vidite <em className="italic">svijet.</em>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
            <p className="max-w-sm text-[0.9375rem] leading-relaxed text-ink">
              Od ikoničnih sunčanih naočala do laganih titanskih okvira — svaka kolekcija je izbor, a ne
              katalog.
            </p>
            <ArrowLink href={SHOP_URL} external className="mt-6">
              Cijela ponuda na optikaloris.ba
            </ArrowLink>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-x-6 gap-y-14 md:mt-24 md:grid-cols-12 md:gap-x-8 lg:gap-x-10">
          {PANELS.map((panel, i) => (
            <Reveal as="li" key={panel.index} className={panel.layout} delay={i % 2 ? 0.12 : 0}>
              <a href={panel.href} target="_blank" rel="noopener noreferrer" className="group block">
                <div className={`relative overflow-hidden bg-cream ${panel.aspect}`}>
                  <Image
                    src={panel.image}
                    alt={panel.alt}
                    fill
                    sizes={panel.sizes}
                    className={`object-cover transition-transform duration-[1400ms] ease-[var(--ease-editorial)] group-hover:scale-[1.04] ${panel.position ?? ""}`}
                  />
                  <span className="eyebrow absolute left-5 top-5 text-ivory">{panel.index}</span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4 border-t border-charcoal/15 pt-4">
                  <div>
                    <h3 className="font-serif text-[1.75rem] leading-none md:text-[2rem]">{panel.title}</h3>
                    <p className="mt-2 text-[0.8125rem] text-ink/70">{panel.caption}</p>
                  </div>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold">
                    Istraži
                    <ArrowUpRight
                      className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </span>
                </div>
                <span className="sr-only">(otvara se u novom prozoru)</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
