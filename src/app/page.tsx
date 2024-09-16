import CallToAction from "@/components/cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LogoTicker from "@/components/logo-ticker";
import { Pricing } from "@/components/pricing";
import ProductShowcase from "@/components/product-showcase";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
