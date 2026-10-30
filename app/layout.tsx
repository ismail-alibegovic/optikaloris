import type { Metadata, Viewport } from "next";
import { Geist, Manrope } from "next/font/google";
import "./globals.css";

const display = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Optika Loris — Optički studio, Sarajevo",
  description:
    "Koncept redizajna: pažljivo odabrane kolekcije dioptrijskih i sunčanih naočala renomiranih svjetskih brendova, pregled vida i tri poslovnice u Sarajevu.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#f5f2ec",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bs" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
