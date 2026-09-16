import { useCallback, useState } from "react";
import { About, StatsBand } from "./components/About";
import { Catalog, EnquiryModal } from "./components/Catalog";
import { Footer, Nav, Ticker, TopBar, WhatsAppFloat } from "./components/Chrome";
import { Customisation, ProductionUnit } from "./components/Craft";
import { Hero } from "./components/Hero";
import { Contact, Testimonials } from "./components/Voices";
import { Product } from "./data/catalog";
import GlyphPortal from "./components/ui/glyph-portal";

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
        <GlyphPortal
          word="AMMVI"
          fontFamily='"Anton", "Arial Black", sans-serif'
          fontWeight={900}
          scrollLength={2.5}
          interactive={true}
          enterLabel="Discover Our Story"
          style={{
            "--gp-paper": "#fafaf9",
            "--gp-ink": "#1c1917",
            "--gp-field": "#c2410c",
            "--gp-foreground": "#fafaf9",
          }}
          background={
            <div style={{
              position: "absolute",
              inset: 0,
              transform: "scale(var(--gp-field-scale,1))",
              background: "radial-gradient(circle at 20% 30%, rgba(234, 88, 12, 0.8), transparent 50%), radial-gradient(circle at 80% 70%, rgba(251, 191, 36, 0.6), transparent 50%), linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #d97706 100%)"
            }} />
          }
          front={
            <div style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "clamp(24px, 5vw, 80px)",
              pointerEvents: "none"
            }}>
              <div style={{ textAlign: "center", color: "#fafaf9" }}>
                <p style={{ fontSize: "clamp(14px, 2vw, 18px)", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                  Premium Hosiery Since 2011
                </p>
                <p style={{ fontSize: "clamp(12px, 1.5vw, 14px)", opacity: 0.8 }}>
                  Crafted with passion in Ichalkaranji
                </p>
              </div>
              <div style={{ textAlign: "center", color: "#fafaf9", maxWidth: "600px" }}>
                <p style={{ fontSize: "clamp(16px, 2.5vw, 24px)", fontWeight: 300, lineHeight: 1.6 }}>
                  Every stitch tells a story of quality and dedication
                </p>
              </div>
            </div>
          }
        >
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(2rem, 5vh, 4rem)",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <div style={{ textAlign: "center" }}>
              <h2 style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                color: "#fafaf9"
              }}>
                Where Tradition Meets Innovation
              </h2>
              <p style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                lineHeight: 1.8,
                color: "rgba(250, 250, 249, 0.9)",
                maxWidth: "700px",
                margin: "0 auto"
              }}>
                From the heart of Maharashtra's textile hub, we craft premium hosiery that combines 
                decades of expertise with modern innovation. Every pair of socks we produce reflects 
                our commitment to quality, comfort, and style.
              </p>
            </div>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginTop: "2rem"
            }}>
              <div style={{
                padding: "2rem",
                background: "rgba(250, 250, 249, 0.1)",
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(250, 250, 249, 0.2)"
              }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "#fafaf9" }}>
                  13+ Years
                </h3>
                <p style={{ color: "rgba(250, 250, 249, 0.85)", lineHeight: 1.6 }}>
                  Of excellence in hosiery manufacturing and innovation
                </p>
              </div>
              
              <div style={{
                padding: "2rem",
                background: "rgba(250, 250, 249, 0.1)",
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(250, 250, 249, 0.2)"
              }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "#fafaf9" }}>
                  1000+ Products
                </h3>
                <p style={{ color: "rgba(250, 250, 249, 0.85)", lineHeight: 1.6 }}>
                  Diverse range of premium socks for every occasion
                </p>
              </div>
              
              <div style={{
                padding: "2rem",
                background: "rgba(250, 250, 249, 0.1)",
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(250, 250, 249, 0.2)"
              }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "#fafaf9" }}>
                  100% Quality
                </h3>
                <p style={{ color: "rgba(250, 250, 249, 0.85)", lineHeight: 1.6 }}>
                  Rigorous testing and premium materials in every pair
                </p>
              </div>
            </div>
          </div>
        </GlyphPortal>
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
