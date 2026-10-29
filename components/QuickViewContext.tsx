"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { QuickView } from "./QuickView";
import type { Product } from "@/lib/data";

type QuickViewContextValue = { open: (product: Product) => void };

const QuickViewContext = createContext<QuickViewContextValue | null>(null);

export function QuickViewProvider({ children }: { children: ReactNode }) {
  const [product, setProduct] = useState<Product | null>(null);
  const open = useCallback((p: Product) => setProduct(p), []);
  const close = useCallback(() => setProduct(null), []);

  return (
    <QuickViewContext.Provider value={{ open }}>
      {children}
      <QuickView product={product} onClose={close} />
    </QuickViewContext.Provider>
  );
}

export function useQuickView() {
  const ctx = useContext(QuickViewContext);
  if (!ctx) throw new Error("useQuickView must be used inside QuickViewProvider");
  return ctx;
}
