import { COMPANY, CUSTOM_PROCESS, IMAGES } from "../data/catalog";
import { ArrowGlyph, Reveal, SectionHead, SmartImg, SockGlyph } from "./Shared";

/* ------------------------------ customisation ------------------------------ */
export function Customisation() {
  return (
    <section id="custom" className="knit-dark relative scroll-mt-24 overflow-hidden text-bone-100">
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-fern-600/20 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <SectionHead
              tone="dark"
              kicker="Sock Customisation Services"
              title={
                <>
                  Your Design,
                  <br />
                  <span className="text-marigold-500">Our Looms.</span>
                </>
              }
            />
            <Reveal delay={150}>
              <p className="mt-7 max-w-md leading-relaxed text-bone-100/75">
                Beyond our ready range, Ammvi renders sock customisation services adhering
                strictly to customer guidelines — school uniforms with house colours, team
                stockings with club crests, corporate socks with your logo knit right in.
              </p>
            </Reveal>
            <Reveal delay={230}>
              <a
                href="#contact"
                className="group mt-9 inline-flex items-center gap-3 rounded-full border-2 border-marigold-400 px-8 py-4 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-marigold-400 transition-all duration-300 hover:bg-marigold-500 hover:text-pine-950 hover:shadow-lg hover:shadow-marigold-500/30"
              >
                Start a Custom Order
                <ArrowGlyph className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-12 flex items-center gap-5 border border-pine-700 bg-pine-900/60 p-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center bg-bone-50 text-pine-950">
                  <SockGlyph className="h-8 w-8" />
                </span>
                <div>
                  <p className="font-display text-lg uppercase leading-tight text-bone-50">
                    Schools · Clubs · Retailers · Institutions
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-fern-300">
                    Bulk &amp; repeat orders welcome
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2">
            {CUSTOM_PROCESS.map((s, i) => (
              <Reveal as="li" key={s.step} delay={i * 120} className="group relative overflow-hidden rounded-2xl border border-pine-700/50 bg-pine-950/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-fern-600/50 hover:bg-pine-900/80 hover:shadow-xl hover:shadow-fern-600/10">
                <p className="font-display text-6xl text-pine-700 transition-colors duration-500 group-hover:text-fern-500">
                  {s.step}
                </p>
                <h3 className="mt-4 font-display text-2xl uppercase tracking-wide text-bone-50">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bone-100/70">{s.body}</p>
                <span className="absolute right-6 top-6 h-2 w-2 rounded-full bg-fern-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ production unit ------------------------------ */
const UNIT_SPECS = [
  { k: "Location", v: COMPANY.unitAddress },
  { k: "Area", v: "1,000 sq. ft. production floor" },
  { k: "Machinery", v: "26 modernistic knitting machines" },
  { k: "Capability", v: "Socks · stockings · sleeves · supports · uppers" },
];

export function ProductionUnit() {
  return (
    <section id="unit" className="relative scroll-mt-24 bg-bone-100">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
              <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full bg-pine-200/60" />              <div className="relative overflow-hidden shadow-[0_25px_60px_rgba(16,32,26,0.3)]">
                <SmartImg
                  src={IMAGES.factory}
                  alt="Rows of computerised sock knitting machines at the Ammvi production unit"
                  fallbackLabel="Production Unit"
                  className="ken-burns aspect-[16/11] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-pine-950/85 px-5 py-3 backdrop-blur-sm">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-marigold-400">
                    Uran Islampur Unit · Sangli
                  </span>
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-100/70">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-bone-50" />
                    Machines running
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHead
              kicker="Infrastructure"
              title={
                <>
                  Where the <span className="text-fern-600">Knitting</span> Happens
                </>
              }
            />
            <Reveal delay={130}>
              <p className="mt-7 leading-relaxed text-ink-soft">
                Our production facility is situated in Uran Islampur, Sangli (Maharashtra, India),
                over a sprawling 1,000 square feet of land area with as much as 26 modernistic
                machinery installed within it — handled by experienced operators who check every
                loop, heel and toe before a pair is approved for dispatch.
              </p>
            </Reveal>

            <div className="mt-9 space-y-3">
              {UNIT_SPECS.map((s, i) => (
                <Reveal key={s.k} delay={180 + i * 90}>
                  <div className="group flex items-baseline gap-4 border-b border-dashed border-bone-300 pb-3 transition-colors hover:border-fern-600">
                    <span className="w-28 shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-fern-600">
                      {s.k}
                    </span>
                    <span className="text-sm font-semibold text-pine-900 transition-transform duration-300 group-hover:translate-x-1">
                      {s.v}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
