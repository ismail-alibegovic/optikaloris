"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { BrandMark } from "./BrandMark";
import {
  BOOKING_URL,
  BRAND_SHOWCASE,
  PRICES_VERIFIED_ON,
  formatKM,
  productImage,
  productUrl,
  type Product,
} from "@/lib/data";

const CATEGORY_LABEL = { suncane: "Sunčane naočale", dioptrijske: "Dioptrijski okvir" } as const;

export function QuickView({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const logo = product ? BRAND_SHOWCASE.find((b) => b.name === product.brand) : undefined;
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!product) return;
    setActive(0);
    const opener = document.activeElement as HTMLElement | null;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !dialog.current) return;
      // Keep keyboard focus inside the dialog.
      const focusable = dialog.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
      opener?.focus();
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            type="button"
            aria-label="Zatvori brzi pregled"
            tabIndex={-1}
            className="absolute inset-0 cursor-default bg-charcoal/55 backdrop-blur-[2px]"
            onClick={onClose}
          />
          <motion.div
            ref={dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quickview-title"
            className="relative grid max-h-[92svh] w-full max-w-5xl overflow-y-auto bg-ivory md:grid-cols-[1.25fr_1fr] md:overflow-hidden"
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              ref={closeButton}
              type="button"
              onClick={onClose}
              aria-label="Zatvori"
              className="absolute right-3 top-3 z-10 inline-flex size-10 items-center justify-center rounded-full bg-ivory/90 transition-colors hover:bg-charcoal hover:text-ivory"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>

            <div className="flex flex-col bg-tile">
              <div className="relative aspect-[5/4] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={product.images[active]}
                    className="absolute inset-0 bg-tile"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Image
                      src={productImage(product.images[active])}
                      alt={`${product.brand} ${product.model}${active ? " — pogled sprijeda" : ""}`}
                      fill
                      sizes="(min-width: 768px) 560px, 100vw"
                      className="packshot object-contain p-6 sm:p-10"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2 px-6 pb-6" role="group" aria-label="Fotografije proizvoda">
                  {product.images.map((img, i) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Prikaži fotografiju ${i + 1}`}
                      aria-pressed={active === i}
                      className={`relative h-16 w-20 border transition-colors ${
                        active === i ? "border-charcoal" : "border-transparent hover:border-charcoal/30"
                      }`}
                    >
                      <Image src={productImage(img)} alt="" fill sizes="80px" className="packshot object-contain p-1.5" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-8 p-6 sm:p-10">
              <div>
                <p className="type-label text-stone">{CATEGORY_LABEL[product.category]}</p>
                {logo ? (
                  <div className="mt-6 flex h-10 items-center">
                    <BrandMark name={product.brand} logo={logo.logo} ratio={logo.ratio} height={24} className="text-charcoal" />
                  </div>
                ) : (
                  <p className="mt-5 text-[0.9375rem] font-semibold text-ink">{product.brand}</p>
                )}
                <h2 id="quickview-title" className="type-section mt-3 !text-[clamp(2rem,3.2vw,2.75rem)]">
                  <span className="sr-only">{product.brand} </span>
                  {product.model}
                </h2>
                {product.note && <p className="mt-4 text-[0.9375rem] text-ink/75">„{product.note}“</p>}
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl font-medium tracking-[-0.02em]">{formatKM(product.price)}</span>
                {product.compareAtPrice && (
                  <>
                    <span className="text-sm text-ink/55 line-through">{formatKM(product.compareAtPrice)}</span>
                    <span className="type-micro text-loris">Akcija</span>
                  </>
                )}
              </div>

              <dl className="divide-y divide-charcoal/10 border-y border-charcoal/10 text-sm">
                {product.color && (
                  <div className="flex justify-between py-3">
                    <dt className="text-ink/70">Boja</dt>
                    <dd>{product.color}</dd>
                  </div>
                )}
                <div className="flex justify-between py-3">
                  <dt className="text-ink/70">Veličina</dt>
                  <dd>{product.size}</dd>
                </div>
                {product.category === "dioptrijske" && (
                  <div className="flex justify-between gap-6 py-3">
                    <dt className="text-ink/70">Pregled vida</dt>
                    <dd className="text-right">Besplatan uz kupovinu okvira ili stakala</dd>
                  </div>
                )}
              </dl>

              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={productUrl(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-6 text-[0.875rem] font-semibold text-ivory transition-colors hover:bg-ink"
                >
                  Pogledaj na optikaloris.ba
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} aria-hidden />
                  <span className="sr-only">(otvara se u novom prozoru)</span>
                </a>
                <a
                  href={BOOKING_URL}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-charcoal/25 px-6 text-[0.875rem] font-semibold transition-colors hover:border-charcoal"
                >
                  Zakaži pregled vida
                </a>
                <p className="text-[0.6875rem] leading-relaxed text-ink/60">
                  Cijena preuzeta s optikaloris.ba ({PRICES_VERIFIED_ON}). Demo prikaz — kupovina se obavlja na
                  službenoj stranici.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
