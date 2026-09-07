import { useEffect, useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS, Product, sendOnWhatsApp } from "../data/catalog";
import { ArrowGlyph, Reveal, SectionHead, SmartImg, WhatsAppGlyph } from "./Shared";

type EnquiryFn = (product?: Product) => void;

/* ------------------------------ product card ------------------------------ */
function ProductCard({
  product,
  index,
  onEnquire,
}: {
  product: Product;
  index: number;
  onEnquire: EnquiryFn;
}) {
  return (
    <Reveal delay={(index % 4) * 80} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-bone-200 bg-bone-50 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-fern-600/30 hover:shadow-2xl hover:shadow-fern-600/10">
        <div className="relative overflow-hidden bg-pine-800">
          <SmartImg
            src={product.image}
            alt={product.name}
            fallbackLabel={product.name}
            className="img-zoom aspect-square w-full object-cover"
          />
          <div className="absolute inset-x-0 top-0 flex flex-wrap gap-1.5 p-3">
            {product.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-pine-950/85 px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-marigold-400 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
          {product.featured && (
            <span className="absolute bottom-3 right-3 rounded-full bg-fern-600 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-bone-50 shadow-lg">
              ★ Featured
            </span>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pine-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl uppercase leading-tight tracking-wide text-pine-900 transition-colors group-hover:text-fern-600">
            {product.name}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{product.blurb}</p>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-fern-600">
            Fabric · {product.fabric}
          </p>
          <div className="mt-5 flex items-center gap-3 border-t border-dashed border-bone-300 pt-4">
            <button
              onClick={() => onEnquire(product)}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-pine-900 px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-bone-50 transition-all duration-300 hover:bg-fern-600 hover:shadow-lg hover:shadow-fern-600/30"
            >
              Enquire Now
              <ArrowGlyph className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ------------------------------ catalogue section ------------------------------ */
export function Catalog({ onEnquire }: { onEnquire: EnquiryFn }) {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const inCat = active === "All" || p.tags.includes(active);
      const q = query.trim().toLowerCase();
      const inQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return inCat && inQuery;
    });
  }, [active, query]);

  return (
    <section id="catalog" className="relative scroll-mt-24 bg-bone-50">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHead
            kicker="Product Range"
            title={
              <>
                The Full <span className="text-fern-600">Catalogue</span>
              </>
            }
          />
          <Reveal delay={150}>
            <p className="max-w-md leading-relaxed text-ink-soft lg:text-right">
              Sixteen product lines — from school uniforms to sports compression — every pair
              knitted, checked and packed at our own unit.{" "}
              <span className="font-mono text-xs uppercase tracking-widest text-fern-600">
                Showing {filtered.length} of {PRODUCTS.length}
              </span>
            </p>
          </Reveal>
        </div>

        {/* filters */}
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col gap-4 border-y border-bone-300 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full px-5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                    active === c
                      ? "bg-gradient-to-r from-fern-600 to-fern-500 text-bone-50 shadow-lg shadow-fern-600/30"
                      : "border border-bone-300 bg-bone-100 text-ink-soft hover:border-fern-600 hover:text-fern-600"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="relative block w-full lg:w-72">
              <svg
                viewBox="0 0 24 24"
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-fern-600"
                fill="none"
                aria-hidden
              >
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the range…"
                className="field rounded-full pl-10"
              />
            </label>
          </div>
        </Reveal>

        {/* grid */}
        <div key={`${active}-${query}`} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} onEnquire={onEnquire} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 border border-dashed border-bone-300 bg-bone-100 px-6 py-16 text-center">
            <p className="font-display text-2xl uppercase text-pine-800">No threads match</p>
            <p className="mt-2 text-sm text-ink-soft">
              Try another term, or ask us directly — we also knit fully customised ranges.
            </p>
            <button
              onClick={() => {
                setActive("All");
                setQuery("");
              }}
              className="mt-6 bg-pine-900 px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-marigold-400 transition-colors hover:bg-fern-600"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------ enquiry modal ------------------------------ */
export function EnquiryModal({
  product,
  open,
  onClose,
}: {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (open) {
      setSent(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] grid place-items-center bg-pine-950/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry form"
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl border-t-4 border-fern-600 bg-bone-50 p-7 shadow-2xl shadow-fern-600/20 sm:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close enquiry"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center border border-bone-300 text-ink-soft transition-colors hover:border-pine-900 hover:text-pine-900"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {sent ? (
          <div className="py-6 text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-pine-900/15 text-pine-900">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden>
                  <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 3" />
                </svg>
              </span>            <h3 className="mt-5 font-display text-2xl uppercase text-pine-900">Opening WhatsApp…</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              WhatsApp has opened with your enquiry{product ? ` for ${product.name}` : ""}{" "}
              addressed to +91 91304 56458 — press send and our team will call you back with the
              best possible price.
            </p>
            <button
              onClick={onClose}
              className="mt-7 bg-pine-900 px-7 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-marigold-400 transition-colors hover:bg-fern-600"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-pine-700">
              Enquire Now
            </p>
            <h3 className="mt-2 font-display text-3xl uppercase leading-none text-pine-900">
              {product ? product.name : "Get the Best Price"}
            </h3>
            <p className="mt-2 text-sm text-ink-soft">
              We will send you the best price possible — usually within one working day.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                sendOnWhatsApp([
                  "Hello Ammvi Knits & Hosiery!",
                  "Product enquiry from the website —",
                  "",
                  `Product: ${product ? product.name : "General enquiry"}`,
                  `Name: ${name}`,
                  `Mobile: ${phone}`,
                  details && `Quantity / colours / sizes: ${details}`,
                ]);
                setSent(true);
              }}
            >
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name *"
                className="field"
              />
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Mobile number *"
                inputMode="tel"
                className="field"
              />
              <textarea
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={`Quantity, colours, sizes… (optional)`}
                className="field resize-none"
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-fern-600 to-fern-500 py-4 font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-bone-50 shadow-lg shadow-fern-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fern-600/40"
              >
                <WhatsAppGlyph className="h-4.5 w-4.5" />
                Send via WhatsApp
              </button>
              <p className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft/70">
                Auto-addressed to +91 91304 56458 with your details
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
