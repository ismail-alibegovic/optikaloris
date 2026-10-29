import { Reveal } from "./Reveal";
import { BRAND_GROUPS, vendorUrl } from "@/lib/data";

export function Brands() {
  return (
    <section id="brendovi" aria-labelledby="brendovi-title" className="bg-charcoal py-24 text-ivory md:py-36">
      <div className="container-editorial grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow text-taupe">Brendovi</p>
            <h2 id="brendovi-title" className="mt-6 font-serif text-[clamp(2.75rem,5vw,4.75rem)] leading-[0.95]">
              Imena koja <em className="italic text-taupe">nosite</em> s povjerenjem.
            </h2>
            <p className="mt-8 max-w-sm text-[0.9375rem] leading-relaxed text-ivory/70">
              Izbor iz trenutne ponude Optike Loris — od talijanskih modnih kuća do dizajnerskih okvira
              ručne izrade.
            </p>
          </div>
        </Reveal>

        <div className="space-y-14 lg:col-span-7 lg:col-start-6">
          {BRAND_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.06}>
              <h3 className="eyebrow flex items-center gap-4 border-b border-ivory/15 pb-4 text-ivory/60">
                <span>0{gi + 1}</span>
                {group.title}
              </h3>
              <ul className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                {group.brands.map((brand, i) => (
                  <li key={brand} className="flex items-baseline gap-2">
                    <a
                      href={vendorUrl(brand)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.15] text-ivory/90 transition-colors duration-300 hover:text-taupe"
                    >
                      {brand}
                      <span className="sr-only"> — pogledaj modele (otvara se u novom prozoru)</span>
                    </a>
                    {i < group.brands.length - 1 && (
                      <span aria-hidden className="font-serif text-[clamp(1.75rem,3.4vw,3rem)] text-ivory/25">
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
