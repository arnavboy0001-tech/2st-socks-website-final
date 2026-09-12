import { useEffect, useState } from "react";
import { COMPANY, PRODUCTS, TICKER_ITEMS } from "../data/catalog";
import {
  ClockGlyph,
  MailGlyph,
  PhoneGlyph,
  PinGlyph,
  SockGlyph,
  WhatsAppGlyph,
} from "./Shared";
import { LiquidMetalButton } from "./ui/liquid-metal-button";

/* ------------------------------ top bar ------------------------------ */
export function TopBar() {
  return (
    <div className="relative z-40 hidden border-b border-pine-700/60 bg-pine-950 text-bone-100 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 font-mono text-[11px] tracking-wide">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-fern-300">
            <PinGlyph className="h-3.5 w-3.5 text-marigold-500" />
            Ichalkaranji · Kolhapur · Maharashtra
          </span>
          <span className="flex items-center gap-2 text-fern-300">
            <ClockGlyph className="h-3.5 w-3.5 text-marigold-500" />
            {COMPANY.hours}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="yarn-link flex items-center gap-2 text-bone-100 transition-colors hover:text-marigold-400"
          >
            <PhoneGlyph className="h-3.5 w-3.5 text-marigold-500" />
            {COMPANY.phone}
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="yarn-link flex items-center gap-2 text-bone-100 transition-colors hover:text-marigold-400"
          >
            <MailGlyph className="h-3.5 w-3.5 text-marigold-500" />
            {COMPANY.email}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ nav ------------------------------ */
const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#catalog", label: "Catalog" },
  { href: "#about", label: "Our Story" },
  { href: "#custom", label: "Customisation" },
  { href: "#unit", label: "Our Unit" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : "bg-pine-950/60"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-fern-600 to-fern-500 text-bone-50 shadow-lg shadow-fern-600/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-fern-600/40">
            <SockGlyph className="h-7 w-7" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl uppercase tracking-wide text-bone-50">
              Ammvi
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.28em] text-marigold-400">
              Knits &amp; Hosiery
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="yarn-link font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-bone-100/90 transition-colors hover:text-marigold-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex">
            <LiquidMetalButton
              label="Get a Quote"
              href="#contact"
              size="sm"
            />
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center border border-pine-600 text-bone-50 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
              {open ? (
                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-pine-700 bg-pine-950 lg:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-l-2 border-transparent px-3 py-2 font-mono text-sm uppercase tracking-[0.15em] text-bone-100 transition-colors hover:border-marigold-500 hover:bg-pine-900 hover:text-marigold-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

/* ------------------------------ product ticker ------------------------------ */
export function Ticker({ tone = "marigold" }: { tone?: "marigold" | "pine" }) {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  const bg = tone === "marigold" ? "bg-pine-900 text-bone-50" : "bg-bone-100 text-pine-900";
  return (
    <div className={`overflow-hidden border-y-2 border-pine-950/20 ${bg}`} aria-hidden>
      <div className="marquee-track" style={{ ["--marquee-speed" as never]: "38s" }}>
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-6 whitespace-nowrap px-6 py-3 font-display text-lg uppercase tracking-wide"
          >
            {item}
            <SockGlyph className="h-5 w-5 opacity-70" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ whatsapp float ------------------------------ */
export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
        "Hello! I found the Ammvi Knits & Hosiery website and I'm interested in your products."
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="pointer-events-none hidden translate-x-2 bg-pine-950 px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-bone-100 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        WhatsApp Us
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-pine-950 shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform duration-300 group-hover:scale-110">
        <span className="ping-soft absolute inset-0 rounded-full bg-[#25D366]" />
        <WhatsAppGlyph className="relative h-7 w-7" />
      </span>
    </a>
  );
}

/* ------------------------------ footer ------------------------------ */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="knit-dark relative overflow-hidden border-t-4 border-fern-600 text-bone-100">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-fern-600 to-fern-500 text-bone-50 shadow-lg shadow-fern-600/30">
                <SockGlyph className="h-7 w-7" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-2xl uppercase text-bone-50">Ammvi</span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.28em] text-marigold-400">
                  Knits &amp; Hosiery
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fern-300">
              Established manufacturer &amp; supplier of premium quality socks, stockings,
              supports and knitted components — serving schools, sports clubs, retailers and
              institutions since {COMPANY.established}.
            </p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-100/60">
              {COMPANY.nature}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-marigold-500">
              Catalog
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm text-bone-100/85">
              {PRODUCTS.slice(0, 8).map((p) => (
                <li key={p.id}>
                  <a href="#catalog" className="yarn-link transition-colors hover:text-marigold-400">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-marigold-500">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-bone-100/85">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="yarn-link transition-colors hover:text-marigold-400">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-marigold-500">
              Reach Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <PinGlyph className="mt-0.5 h-4 w-4 shrink-0 text-marigold-500" />
                <span className="text-bone-100/85">{COMPANY.address}</span>
              </li>
              <li className="flex gap-3">
                <PhoneGlyph className="mt-0.5 h-4 w-4 shrink-0 text-marigold-500" />
                <a href={`tel:${COMPANY.phoneRaw}`} className="yarn-link text-bone-100/85 hover:text-marigold-400">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MailGlyph className="mt-0.5 h-4 w-4 shrink-0 text-marigold-500" />
                <a href={`mailto:${COMPANY.email}`} className="yarn-link break-all text-bone-100/85 hover:text-marigold-400">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-3">
                <ClockGlyph className="mt-0.5 h-4 w-4 shrink-0 text-marigold-500" />
                <span className="text-bone-100/85">{COMPANY.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-pine-700 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-100/50 sm:flex-row">
          <p>
            © {year} {COMPANY.name} · All rights reserved
          </p>
          <p className="flex items-center gap-2">
            Knitted with pride in <span className="text-marigold-500">Ichalkaranji</span>
            <SockGlyph className="h-4 w-4 text-marigold-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
