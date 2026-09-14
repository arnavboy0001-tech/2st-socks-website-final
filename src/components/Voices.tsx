import { useState } from "react";
import { COMPANY, PRODUCTS, TESTIMONIALS, sendOnWhatsApp } from "../data/catalog";
import { LiquidMetalButton } from "./ui/liquid-metal-button";
import {
  ArrowGlyph,
  ClockGlyph,
  MailGlyph,
  PhoneGlyph,
  PinGlyph,
  Reveal,
  SectionHead,
  WhatsAppGlyph,
} from "./Shared";

/* ------------------------------ testimonials ------------------------------ */
function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M5 16c-1.6-1.3-2.5-3.2-2.5-5.5C2.5 7 4.6 4.5 8 3.5l.8 1.7C6.6 6.2 5.5 7.8 5.3 9.6c.3-.1.6-.2 1-.2 1.9 0 3.2 1.4 3.2 3.3S8 16.3 6 16.3c-.3 0-.7 0-1-.3Zm11 0c-1.6-1.3-2.5-3.2-2.5-5.5 0-3.5 2.1-6 5.5-7l.8 1.7c-2.2 1-3.3 2.6-3.5 4.4.3-.1.6-.2 1-.2 1.9 0 3.2 1.4 3.2 3.3S19 16.3 17 16.3c-.3 0-.7 0-1-.3Z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="relative scroll-mt-24 overflow-hidden bg-pine-900 text-bone-100">
      <div className="knit-band pointer-events-none absolute inset-x-0 top-0 h-6 opacity-40" />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 lg:pb-32">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHead
            tone="dark"
            kicker="Buyer Voices"
            title={
              <>
                Word From <span className="text-marigold-500">Our Buyers</span>
              </>
            }
          />
          <Reveal delay={150}>
            <p className="max-w-sm leading-relaxed text-bone-100/70 lg:text-right">
              From boutique retailers to institutional buyers — what partners say after their
              first AVM texknits order.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>article]:mb-5 [&>article]:break-inside-avoid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="article" key={t.name} delay={(i % 3) * 110}>
              <div className="group rounded-2xl border border-pine-700/50 bg-pine-950/70 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-marigold-500/50 hover:bg-pine-950 hover:shadow-xl hover:shadow-marigold-500/10">
                <QuoteMark className="h-7 w-7 text-marigold-500/70 transition-colors group-hover:text-marigold-400" />
                <p className="mt-4 text-sm leading-relaxed text-bone-100/85">“{t.quote}”</p>
                <div className="mt-5 flex items-center gap-3 border-t border-dashed border-pine-700 pt-4">
                  <span className="grid h-9 w-9 place-items-center bg-fern-600/25 font-display text-sm uppercase text-fern-300">
                    {t.name.slice(0, 1)}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-bone-50">{t.name}</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-fern-300">
                      Verified Buyer
                    </p>
                  </div>
                  <span className="ml-auto flex gap-0.5 text-marigold-500">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
                        <path d="M10 1.5 12.6 7l6 .6-4.5 4 1.3 5.9L10 14.4l-5.4 3.1L5.9 11.6l-4.5-4 6-.6L10 1.5Z" />
                      </svg>
                    ))}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ contact / enquiry ------------------------------ */
export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: "",
    quantity: "",
    message: "",
  });
  const set = (k: string) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="knit-light relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr]">
          {/* left — contact rails */}
          <div>
            <SectionHead
              kicker="Contact & Enquiry"
              title={
                <>
                  Talk to the <span className="text-fern-600">Knitters</span>
                </>
              }
            />
            <Reveal delay={130}>
              <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
                Send us your requirement and we will send you the best price possible. For
                urgent bulk enquiries, call or WhatsApp us directly — we answer during unit
                hours, {COMPANY.hours.toLowerCase()}.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {[
                {
                  icon: PhoneGlyph,
                  label: "Call Us",
                  value: COMPANY.phone,
                  href: `tel:${COMPANY.phoneRaw}`,
                  note: "Direct line · English / हिंदी / मराठी",
                },
                {
                  icon: WhatsAppGlyph,
                  label: "WhatsApp",
                  value: COMPANY.phone,
                  href: `https://wa.me/${COMPANY.whatsapp}`,
                  note: "Fastest for photos & samples",
                  external: true,
                },
                {
                  icon: MailGlyph,
                  label: "Email",
                  value: COMPANY.email,
                  href: `mailto:${COMPANY.email}`,
                  note: "Specs, tech-packs & POs",
                },
                {
                  icon: PinGlyph,
                  label: "Registered Office",
                  value: COMPANY.address,
                  note: "",
                },
                {
                  icon: ClockGlyph,
                  label: "Working Hours",
                  value: COMPANY.hours,
                  note: "Production unit · Uran Islampur, Sangli",
                },
              ].map((c, i) => (
                <Reveal key={c.label} delay={180 + i * 80}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noreferrer" : undefined}
                      className="group flex items-start gap-4 rounded-2xl border border-bone-300 bg-bone-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-fern-600 hover:shadow-xl hover:shadow-fern-600/10"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-pine-900 text-marigold-400 transition-colors duration-300 group-hover:bg-fern-600 group-hover:text-bone-50">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-fern-600">
                          {c.label}
                        </span>
                        <span className="mt-1 block text-sm font-bold text-pine-900">{c.value}</span>
                        {c.note && (
                          <span className="mt-0.5 block text-xs text-ink-soft">{c.note}</span>
                        )}
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 rounded-2xl border border-bone-300 bg-bone-50 p-5">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-pine-900 text-marigold-400">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-fern-600">
                          {c.label}
                        </span>
                        <span className="mt-1 block text-sm font-bold leading-relaxed text-pine-900">
                          {c.value}
                        </span>
                      </span>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>

          {/* right — the form */}
          <Reveal delay={200}>
            <div className="relative overflow-hidden rounded-3xl border-t-4 border-fern-600 bg-gradient-to-br from-pine-950 to-pine-900 p-8 text-bone-100 shadow-2xl shadow-fern-600/20 sm:p-10">
              {sent ? (
                <div className="grid min-h-[480px] place-items-center text-center">
                  <div>
                    <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-bone-100/20 text-bone-100">
                      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" aria-hidden>
                        <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 3" />
                      </svg>
                    </span>
                    <h3 className="mt-6 font-display text-3xl uppercase text-bone-50">
                      Enquiry Opened in WhatsApp!
                    </h3>
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-bone-100/70">
                      Thank you{form.name ? `, ${form.name}` : ""}. WhatsApp has opened with your
                      requirement addressed to +91 91304 56458 — just press send and our team
                      will reach you with the best possible price.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-8 border-2 border-bone-100 px-7 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-bone-100 transition-colors hover:bg-bone-100 hover:text-pine-950"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendOnWhatsApp([
                      "Hello AVM texknits!",
                      "New enquiry from the website —",
                      "",
                      `Name: ${form.name}`,
                      form.company && `Company / School / Club: ${form.company}`,
                      `Mobile: ${form.phone}`,
                      form.email && `Email: ${form.email}`,
                      `Product of interest: ${form.product}`,
                      form.quantity && `Approx. quantity: ${form.quantity} pairs`,
                      form.message && `Requirement details: ${form.message}`,
                    ]);
                    setSent(true);
                  }}
                >
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-bone-100">
                    Submit Your Requirement · Auto-sends to WhatsApp
                  </p>
                  <h3 className="mt-2 font-display text-3xl uppercase leading-none text-bone-50">
                    Get Instant Quote
                  </h3>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <input required placeholder="Full name *" value={form.name} onChange={set("name")} className="field field-dark" />
                    <input placeholder="Company / School / Club" value={form.company} onChange={set("company")} className="field field-dark" />
                    <input required placeholder="Mobile number *" inputMode="tel" value={form.phone} onChange={set("phone")} className="field field-dark" />
                    <input placeholder="Email" type="email" value={form.email} onChange={set("email")} className="field field-dark" />
                    <select value={form.product} onChange={set("product")} className="field field-dark sm:col-span-2" required>
                      <option value="" disabled>
                        Product of interest *
                      </option>
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Custom / Other">Custom / Other</option>
                    </select>
                    <input placeholder="Approx. quantity (pairs)" value={form.quantity} onChange={set("quantity")} className="field field-dark sm:col-span-2" />
                    <textarea
                      rows={4}
                      placeholder="Colours, sizes, logo placement, delivery timeline…"
                      value={form.message}
                      onChange={set("message")}
                      className="field field-dark resize-none sm:col-span-2"
                    />
                  </div>

                  <LiquidMetalButton
                    label="Send via WhatsApp"
                    viewMode="text"
                    size="md"
                    className="mt-7 w-full"
                  />
                  <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-bone-100/50">
                    Opens WhatsApp to +91 91304 56458 with your enquiry pre-filled
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
