import { useCallback, useState } from "react";
import { About, StatsBand } from "./components/About";
import { Catalog, EnquiryModal } from "./components/Catalog";
import { Footer, Nav, Ticker, TopBar, WhatsAppFloat } from "./components/Chrome";
import { Customisation, ProductionUnit } from "./components/Craft";
import { Hero } from "./components/Hero";
import { Contact, Testimonials } from "./components/Voices";
import { Product } from "./data/catalog";
import { LayeredText } from "./components/ui/layered-text";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const openEnquiry = useCallback((product?: Product) => {
    setModalProduct(product ?? null);
    setModalOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-bone-100 font-body text-ink">
      <TopBar />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <StatsBand />
        <About />
        <section className="relative overflow-hidden bg-gradient-to-br from-pine-950 via-pine-900 to-pine-950">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-fern-600/30 blur-[130px]" />
            <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-marigold-500/20 blur-[120px]" />
          </div>
          <div className="relative">
            <LayeredText
              lines={[
                { top: "\u00A0", bottom: "EVERY STEP" },
                { top: "EVERY STEP", bottom: "KNITTED" },
                { top: "KNITTED", bottom: "SOCKS" },
                { top: "SOCKS", bottom: "THE RIGHT WAY" },
                { top: "THE RIGHT WAY", bottom: "PREMIUM" },
                { top: "PREMIUM", bottom: "QUALITY" },
                { top: "QUALITY", bottom: "\u00A0" },
              ]}
              className="py-20 md:py-28"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-fern-600/50 to-transparent" />
        </section>
        <Catalog onEnquire={openEnquiry} />
        <Customisation />
        <ProductionUnit />
        <Ticker tone="pine" />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <EnquiryModal product={modalProduct} open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
