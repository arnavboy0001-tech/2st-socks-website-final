import { useCallback, useState } from "react";
import { About, StatsBand } from "./components/About";
import { Catalog, EnquiryModal } from "./components/Catalog";
import { Footer, Nav, Ticker, TopBar, WhatsAppFloat } from "./components/Chrome";
import { Customisation, ProductionUnit } from "./components/Craft";
import { Hero } from "./components/Hero";
import { Contact, Testimonials } from "./components/Voices";
import { Product } from "./data/catalog";

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
