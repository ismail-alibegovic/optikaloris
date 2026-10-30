"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { BOOKING_URL, CONTACT, type Category } from "@/lib/data";

type NavItem = { label: string; href: string; filter?: Category };

const NAV: NavItem[] = [
  { label: "Sunčane naočale", href: "#izdvojeno", filter: "suncane" },
  { label: "Dioptrijski okviri", href: "#izdvojeno", filter: "dioptrijske" },
  { label: "Brendovi", href: "#brendovi" },
  { label: "Poslovnice", href: "#poslovnice" },
];

// Lets the nav pre-select the product filter before scrolling to the grid.
function selectFilter(filter?: Category) {
  if (filter) window.dispatchEvent(new CustomEvent<Category>("loris:filter", { detail: filter }));
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const button = menuButton.current;
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      button?.focus();
    };
  }, [open]);

  // Over the hero the header is transparent and light; once scrolled it becomes a solid ivory bar.
  const light = !scrolled;

  return (
    <>
      <a
        href="#sadrzaj"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory"
      >
        Preskoči na sadržaj
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color] duration-500 ${
          light ? "border-b border-transparent text-ivory" : "border-b border-charcoal/10 bg-ivory/95 text-charcoal backdrop-blur-md"
        }`}
      >
        <div
          className={`overflow-hidden bg-charcoal text-ivory transition-[height] duration-500 ease-[var(--ease-editorial)] ${
            scrolled ? "h-0" : "h-9"
          }`}
        >
          <div className="container-editorial flex h-9 items-center justify-center gap-2 text-center text-[0.75rem] tracking-[0.01em]">
            <span className="hidden sm:inline">Pregled vida je besplatan uz kupovinu okvira ili stakala.</span>
            <span className="sm:hidden">Besplatan pregled uz kupovinu.</span>
            <a href={BOOKING_URL} className="font-semibold underline decoration-ivory/40 underline-offset-4 hover:decoration-ivory">
              Rezervišite termin
            </a>
          </div>
        </div>

        <div className="container-editorial grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-6 lg:h-[4.5rem] lg:grid-cols-[auto_1fr_auto]">
          <div className="flex items-center lg:hidden">
            <button
              ref={menuButton}
              type="button"
              className="-ml-2 inline-flex size-10 items-center justify-center lg:hidden"
              aria-label="Otvori meni"
              aria-expanded={open}
              aria-controls="mobilni-meni"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-5" strokeWidth={1.5} />
            </button>
          </div>

          <a href="#" className="relative block h-9 w-[96px] justify-self-center lg:h-11 lg:w-[118px] lg:justify-self-start" aria-label="Optika Loris — početna">
            <Logo variant="light" className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${light ? "opacity-100" : "opacity-0"}`} />
            <Logo variant="dark" decorative className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${light ? "opacity-0" : "opacity-100"}`} />
          </a>

          <nav aria-label="Glavna navigacija" className="hidden justify-self-center lg:block">
              <ul className="flex items-center gap-8 text-[0.8125rem] font-semibold tracking-[0.01em]">
                {NAV.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} onClick={() => selectFilter(item.filter)} className="py-2 opacity-90 transition-opacity hover:opacity-100">
                      <span className="link-underline [background-size:0%_1px] hover:[background-size:100%_1px]">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

          <div className="flex items-center justify-self-end gap-6">
            <a href="#pregled" className="hidden py-2 text-[0.8125rem] font-semibold opacity-90 hover:opacity-100 xl:inline">
              Pregled vida
            </a>
            <a
              href={BOOKING_URL}
              className={`hidden h-10 items-center gap-2 rounded-full px-5 text-[0.8125rem] font-semibold transition-colors duration-300 sm:inline-flex ${
                light ? "bg-ivory text-charcoal hover:bg-white" : "bg-charcoal text-ivory hover:bg-ink"
              }`}
            >
              <span className="size-1.5 rounded-full bg-loris" aria-hidden />
              Zakaži pregled
            </a>
            <a href={BOOKING_URL} className="text-[0.8125rem] font-semibold sm:hidden" aria-label="Zakaži pregled">
              Termin
            </a>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobilni-meni"
            role="dialog"
            aria-modal="true"
            aria-label="Meni"
            className="fixed inset-0 z-[60] flex flex-col bg-ivory lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="container-editorial grid h-16 grid-cols-[1fr_auto_1fr] items-center">
              <span />
              <Logo className="h-9 w-auto" decorative />
              <button
                type="button"
                className="-mr-2 inline-flex size-10 items-center justify-center justify-self-end"
                aria-label="Zatvori meni"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" strokeWidth={1.5} />
              </button>
            </div>
            <nav aria-label="Mobilna navigacija" className="container-editorial flex flex-1 flex-col justify-between pb-10 pt-6">
              <ul>
                {[...NAV, { label: "Pregled vida", href: "#pregled" } as NavItem].map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      ref={i === 0 ? firstLink : undefined}
                      href={item.href}
                      onClick={() => {
                        selectFilter(item.filter);
                        setOpen(false);
                      }}
                      className="flex items-baseline justify-between border-b border-charcoal/10 py-5 font-display text-[2rem] font-medium leading-none tracking-[-0.035em]"
                    >
                      {item.label}
                      <span className="type-label text-stone">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="space-y-6">
                <a
                  href={BOOKING_URL}
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-charcoal text-sm font-semibold text-ivory"
                >
                  <span className="size-1.5 rounded-full bg-loris" aria-hidden />
                  Zakaži pregled
                </a>
                <div className="flex justify-between text-sm text-ink">
                  <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                  <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                    Instagram <ArrowUpRight className="size-3.5" strokeWidth={1.5} aria-hidden />
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
