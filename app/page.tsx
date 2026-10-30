import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Collections } from "@/components/Collections";
import { Studio } from "@/components/Studio";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Brands } from "@/components/Brands";
import { Services } from "@/components/Services";
import { Locations } from "@/components/Locations";
import { Footer } from "@/components/Footer";
import { QuickViewProvider } from "@/components/QuickViewContext";

export default function Home() {
  return (
    <QuickViewProvider>
      <Header />
      <main id="sadrzaj">
        <Hero />
        <Collections />
        <Studio />
        <FeaturedProducts />
        <Brands />
        <Services />
        <Locations />
      </main>
      <Footer />
    </QuickViewProvider>
  );
}
