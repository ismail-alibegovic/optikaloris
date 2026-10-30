import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Studio() {
  return (
    <section aria-labelledby="studio-title">
      <div className="container-editorial grid gap-12 py-24 md:py-32 lg:grid-cols-12 lg:gap-10">
        <Reveal className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream md:aspect-[16/10] lg:aspect-[4/5]">
            <Image
              src="/images/editorial/studio-shelf.jpg"
              alt="Dioptrijski okviri izloženi na osvijetljenim drvenim policama"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[50%_35%]"
            />
          </div>
        </Reveal>

        <div className="flex flex-col justify-between gap-14 lg:col-span-5 lg:col-start-8">
          <Reveal>
            <p className="type-label text-stone">(02) Naš pristup</p>
            <h2 id="studio-title" className="type-section mt-4 max-w-[12ch]">
              Odabrano, ne nagomilano.
            </h2>
            <div className="mt-8 max-w-md space-y-4 text-[1rem] leading-relaxed text-ink md:text-[1.0625rem]">
              <p>
                Od Prade, Miu Miu i Dolce&Gabbana do dizajnerskih okvira Coco Song i Genesis Art — ponuda Optike Loris
                birana je zbog materijala, izrade i načina na koji okvir pristaje licu.
              </p>
              <p className="text-ink/75">Svaki par isprobajte u jednoj od tri sarajevske poslovnice, uz savjet optičara.</p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-end gap-5">
            <figure className="relative aspect-[4/5] overflow-hidden bg-cream">
              <Image
                src="/images/editorial/hero-man.jpg"
                alt="Krupni plan okruglog metalnog okvira"
                fill
                sizes="(min-width: 1024px) 18vw, 45vw"
                className="object-cover object-[40%_45%]"
              />
            </figure>
            <div className="pb-1">
              <p className="type-card">Detalj koji se vidi izbliza.</p>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-ink/75">
                Titan, acetat, metal, kristali. Razliku najbolje vidite kada okvir držite u ruci.
              </p>
              <a href="#brendovi" className="group mt-5 inline-flex items-center gap-2 text-[0.875rem] font-semibold">
                <span className="link-underline">Upoznajte brendove</span>
                <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Macro band */}
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal text-ivory sm:aspect-[16/7] lg:aspect-[21/8]">
        <Image
          src="/images/editorial/detail-frame.jpg"
          alt="Tamni acetatni okvir na drvenoj površini, makro fotografija"
          fill
          sizes="100vw"
          className="object-cover object-[50%_40%]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/20 to-transparent" />
        <div className="container-editorial absolute inset-x-0 bottom-0 flex flex-col gap-4 pb-8 sm:flex-row sm:items-end sm:justify-between md:pb-12">
          <p className="type-title max-w-[18ch]">Okvir se bira licem, ne katalogom.</p>
          <a
            href="#poslovnice"
            className="group inline-flex h-11 w-fit items-center gap-2 rounded-full bg-ivory px-5 text-[0.8125rem] font-semibold text-charcoal transition-colors hover:bg-white"
          >
            Pronađite poslovnicu
            <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
