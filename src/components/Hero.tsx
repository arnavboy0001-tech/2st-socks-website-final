import { useEffect, useState } from "react";
import { COMPANY, IMAGES, PRODUCTS } from "../data/catalog";
import { ArrowGlyph, Reveal, SmartImg, SockGlyph } from "./Shared";

const ROTATING = ["Socks", "Stockings", "Sleeves", "Supports", "Knits"];

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % ROTATING.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block h-[1em] overflow-hidden align-bottom text-bone-100">
      {ROTATING.map((w, idx) => (
        <span
          key={w}
          className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateY(${(idx - i) * 100}%)` }}
        >
          {w}
        </span>
      ))}
    </span>
  );
}

function CollageCard({
  src,
  label,
  className,
  tilt,
  delay,
}: {
  src: string;
  label: string;
  className: string;
  tilt: number;
  delay: number;
}) {
  return (
    <figure
      className={`group absolute bg-bone-50 p-2 pb-3 shadow-[0_18px_45px_rgba(0,0,0,0.45)] ring-1 ring-black/10 transition-transform duration-500 hover:z-30 hover:rotate-0! ${className}`}
      style={{ rotate: `${tilt}deg` }}
    >
      <div className="float-y" style={{ animationDelay: `${delay}s` }}>
        <div className="overflow-hidden">
          <SmartImg
            src={src}
            alt={label}
            fallbackLabel={label}
            className="img-zoom aspect-[4/5] w-full object-cover"
          />
        </div>
        <figcaption className="pt-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-pine-800">
          {label}
        </figcaption>
      </div>
    </figure>
  );
}

export function Hero() {
  const byId = (id: string) => PRODUCTS.find((p) => p.id === id)!;
  return (
    <section id="home" className="knit-dark relative overflow-hidden text-bone-100">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-fern-600/25 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-marigold-600/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-20">
        {/* left — the poster */}
        <div>
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-3 border border-pine-600 bg-pine-900/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-fern-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-bone-50" />
              Est. {COMPANY.established} · Ichalkaranji, Maharashtra
            </p>
          </Reveal>

          <h1 className="font-display uppercase leading-[0.88] tracking-tight text-bone-50">
            <Reveal delay={80}>
              <span className="line-mask block text-[15vw] sm:text-7xl lg:text-[5.4rem]">
                <span>Every Step,</span>
              </span>
            </Reveal>
            <Reveal delay={180}>
              <span className="line-mask block text-[15vw] sm:text-7xl lg:text-[5.4rem]">
                <span>
                  Knitted <RotatingWord />
                </span>
              </span>
            </Reveal>
            <Reveal delay={280}>
              <span className="line-mask block text-[15vw] text-fern-300 sm:text-7xl lg:text-[5.4rem]">
                <span>The Right Way.</span>
              </span>
            </Reveal>
          </h1>

          <Reveal delay={380}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-bone-100/80 sm:text-lg">
              <strong className="text-bone-50">Ammvi Knits &amp; Hosiery</strong> — established
              manufacturer &amp; supplier of premium quality kids socks, men&apos;s socks, ladies
              socks, cotton handkerchiefs and sports stockings, with sock customisation done
              strictly to your guidelines.
            </p>
          </Reveal>

          <Reveal delay={460}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#catalog"
                className="group flex items-center gap-3 bg-bone-50 px-7 py-4 font-mono text-[13px] font-semibold uppercase tracking-[0.18em] text-pine-950 transition-all duration-300 hover:-translate-y-1 hover:bg-bone-200 hover:shadow-[0_16px_40px_rgba(255,255,255,0.15)]"
              >
                Browse Catalog
                <ArrowGlyph className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-3 border-2 border-pine-600 px-7 py-[14px] font-mono text-[13px] font-semibold uppercase tracking-[0.18em] text-bone-100 transition-all duration-300 hover:border-marigold-500 hover:text-marigold-400"
              >
                Get Instant Quote
              </a>
            </div>
          </Reveal>

          <Reveal delay={540}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-pine-700 border-t border-pine-700 pt-6">
              {[
                { k: "CEO", v: COMPANY.ceo.replace("Mr. ", "Mr.\u00A0") },
                { k: "Nature", v: "Mfr · Supplier · Service" },
                { k: "Since", v: String(COMPANY.established) },
              ].map((d) => (
                <div key={d.k} className="px-4 first:pl-0">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-fern-300">
                    {d.k}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-bone-50">{d.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* right — scattered swatch collage */}
        <div className="relative hidden h-[560px] select-none sm:block lg:h-[620px]">
          <Reveal delay={200} className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[430px] w-[340px] -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] ring-4 ring-pine-700">
              <SmartImg
                src={IMAGES.heroFlatlay}
                alt="Flat lay of premium knitted socks in marigold, forest green and navy"
                className="ken-burns h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/50 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.25em] text-bone-100/90">
                The Ammvi Palette
              </p>
            </div>

            <CollageCard
              src={byId("school-socks").image}
              label="School Socks"
              className="left-0 top-2 w-40 z-10"
              tilt={-7}
              delay={0.4}
            />
            <CollageCard
              src={byId("sports-stockings").image}
              label="Sports Stockings"
              className="right-0 top-16 w-40 z-10"
              tilt={6}
              delay={1.2}
            />
            <CollageCard
              src={byId("kids-fancy-socks").image}
              label="Kids Fancy"
              className="bottom-2 left-4 w-44 z-20"
              tilt={5}
              delay={2}
            />

            {/* rotating stitch badge */}
            <div className="absolute -right-2 bottom-24 z-20 h-32 w-32">
              <svg viewBox="0 0 120 120" className="spin-slow h-full w-full" aria-hidden>
                <defs>
                  <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                </defs>
                <circle cx="60" cy="60" r="59" className="fill-bone-50" />
                <circle cx="60" cy="60" r="34" fill="none" stroke="#0e2a21" strokeWidth="1.5" strokeDasharray="5 4" />
                <text className="fill-pine-950 font-mono text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "2.5px" }}>
                  <textPath href="#badge-circle">
                    Premium Hosiery · Since 2011 · Custom Knits ·
                  </textPath>
                </text>
              </svg>
              <SockGlyph className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 text-pine-950" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
