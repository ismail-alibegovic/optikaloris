import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
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
  themeColor: "#f4f1ea",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bs" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
