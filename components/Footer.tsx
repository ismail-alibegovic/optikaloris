import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { BOOKING_URL, CONTACT, SHOP_URL, STORES, collectionUrl, telHref } from "@/lib/data";

const COLUMNS = [
  {
    title: "Kolekcije",
    links: [
      { label: "Sunčane naočale", href: collectionUrl("suncane-naocale") },
      { label: "Dioptrijski okviri", href: collectionUrl("dioptrijski-okviri") },
      { label: "Leće i otopine", href: collectionUrl("lece-i-otopine") },
      { label: "Asesoari", href: collectionUrl("asesoari") },
      { label: "Outlet", href: collectionUrl("outlet") },
    ],
  },
  {
    title: "Usluge",
    links: [
      { label: "Rezervacija pregleda", href: BOOKING_URL },
      { label: "Plaćanje i dostava", href: `${SHOP_URL}/pages/placanje-i-dostava` },
      { label: "Uslovi pružanja usluga", href: `${SHOP_URL}/pages/uslovi-pruzanja-usluga` },
      { label: "Kontakt", href: `${SHOP_URL}/pages/contact` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-editorial pb-10 pt-20 md:pt-28">
        <div className="grid gap-14 border-b border-ivory/15 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="light" className="h-12 w-auto" />
            <p className="type-section mt-10 max-w-[10ch]">Vidimo se u studiju.</p>
            <a
              href={BOOKING_URL}
              className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-ivory px-6 text-[0.875rem] font-semibold text-charcoal transition-colors hover:bg-white"
            >
              <span className="size-1.5 rounded-full bg-loris" aria-hidden />
              Zakaži pregled
            </a>
          </div>

          <nav aria-label="Podnožje" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="type-label text-ivory/45">{col.title}</h2>
                <ul className="mt-6 space-y-3 text-[0.9375rem]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-ivory/85 transition-colors hover:text-ivory">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 sm:col-span-1">
              <h2 className="type-label text-ivory/45">Kontakt</h2>
              <ul className="mt-6 space-y-3 text-[0.9375rem] text-ivory/85">
                <li>
                  <a href={CONTACT.phoneHref} className="hover:text-ivory">{CONTACT.phone}</a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-ivory">{CONTACT.email}</a>
                </li>
                <li className="text-ivory/60">{CONTACT.address}</li>
                <li className="flex gap-5 pt-2">
                  <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-ivory">
                    Instagram <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden />
                  </a>
                  <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-ivory">
                    Facebook <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <ul className="grid gap-6 border-b border-ivory/15 py-10 text-[0.8125rem] sm:grid-cols-3">
          {STORES.map((s) => (
            <li key={s.id}>
              <p className="font-semibold">{s.name}</p>
              <p className="mt-1 text-ivory/60">
                {s.address} ·{" "}
                <a href={telHref(s.phone)} className="hover:text-ivory">
                  {s.phone}
                </a>
              </p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 pt-8 text-[0.75rem] leading-relaxed text-ivory/50 md:flex-row md:justify-between">
          <p>© Optika Loris. Sva prava na znak i sadržaj pripadaju vlasniku.</p>
          <p className="max-w-xl md:text-right">
            Nezavisni koncept redizajna — ovo nije službena stranica Optike Loris. Proizvodi i cijene preuzeti
            s optikaloris.ba; editorijalne fotografije: Unsplash.
          </p>
        </div>
      </div>
    </footer>
  );
}
