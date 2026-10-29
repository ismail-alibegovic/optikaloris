import Image from "next/image";
import { Reveal } from "./Reveal";

export function Manifesto() {
  return (
    <section aria-label="Naš pristup" className="border-y border-charcoal/10 bg-parchment py-24 md:py-36">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow text-olive">Naš pristup</p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-10 max-w-[21ch] font-serif text-[clamp(2.25rem,6.2vw,6.25rem)] leading-[1.02] tracking-[-0.01em]">
            Od velikih modnih kuća do nezavisnih dizajnera{" "}
            <span className="relative inline-block h-[0.8em] w-[1.9em] translate-y-[0.08em] overflow-hidden rounded-full align-baseline">
              <Image
                src="/images/editorial/editorial-profile.jpg"
                alt=""
                fill
                sizes="200px"
                className="object-cover object-[50%_30%]"
              />
            </span>{" "}
            biramo okvire koji pristaju licu, <em className="italic text-olive">karakteru</em> i danu pred vama.
          </p>
        </Reveal>
        <Reveal delay={0.16} className="mt-14 grid gap-6 text-[0.9375rem] leading-relaxed text-ink md:mt-20 md:grid-cols-12">
          <p className="md:col-span-4 md:col-start-7">
            Svaki par isprobajte u poslovnici, uz savjet optičara o obliku lica, materijalu i staklima.
          </p>
          <p className="md:col-span-2 md:col-start-11">
            Optički studio Loris
            <br />
            Sarajevo
          </p>
        </Reveal>
      </div>
    </section>
  );
}
