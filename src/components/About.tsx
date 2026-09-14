import {
  ABOUT_TEXT,
  COMPANY,
  HISTORY_TEXT,
  IMAGES,
  STATS,
  STRENGTHS,
} from "../data/catalog";
import {
  CheckStitch,
  CountUp,
  NeedleGlyph,
  Reveal,
  SectionHead,
  SmartImg,
  YarnGlyph,
} from "./Shared";

/* ------------------------------ stats band ------------------------------ */
export function StatsBand() {
  return (
    <section className="relative z-10 bg-gradient-to-r from-fern-600 via-fern-500 to-marigold-600 text-bone-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-bone-50/20 px-6 py-12 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="px-4 py-4 text-center first:pl-0 lg:text-left">
            <p className="font-display text-5xl leading-none tracking-tight sm:text-6xl">
              <CountUp to={s.value} suffix={s.suffix} isYear={s.isYear} />
            </p>
            <p className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-bone-50/90">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ about / story ------------------------------ */
const MILESTONES = [
  {
    year: "2011",
    title: "The First Stitch",
    body: `Industry veteran ${COMPANY.ceo} lays the foundation stone of AVM texknits in Ichalkaranji — the "Manchester of Maharashtra" — with an aim to serve buyers with superior quality garments and clothing.`,
  },
  {
    year: "2016",
    title: "The Production Unit",
    body: "Manufacturing scales up at our 1,000 sq. ft. facility in Uran Islampur, Sangli, with modern computerised knitting machinery coming online.",
  },
  {
    year: "2021",
    title: "26 Machines Strong",
    body: "The unit grows to 26 modernistic machines, adding sports sleeves, supports, shoe uppers and customised institutional orders to the range.",
  },
  {
    year: "Today",
    title: "A Trusted Hosiery House",
    body: "16+ product lines serve schools, sports clubs, retailers and institutions — every pair checked for matchless quality, impressive performance and reasonable pricing.",
  },
];

export function About() {
  return (
    <section id="about" className="knit-light relative scroll-mt-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* left — image stack */}
          <div className="relative">
            <Reveal>
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-full w-full border-2 border-fern-600/50" />
                <div className="relative overflow-hidden shadow-[0_25px_60px_rgba(16,32,26,0.25)]">
                  <SmartImg
                    src={IMAGES.bamboo}
                    alt="Bamboo fibre socks folded beside bamboo stems"
                    fallbackLabel="AVM texknits"
                    className="ken-burns aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-2 w-56 rotate-3 bg-pine-900 p-5 text-bone-50 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:rotate-0 sm:-right-6">
                  <YarnGlyph className="h-8 w-8 text-bone-50" />
                  <p className="mt-3 font-display text-lg uppercase leading-tight">
                    Cotton · Bamboo · Compressed Knits
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fern-300">
                    Yarns we master
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* right — the story */}
          <div>
            <SectionHead
              kicker="About AVM texknits"
              title={
                <>
                  A Hosiery House <span className="text-fern-600">Knit on Trust</span>
                </>
              }
            />
            <Reveal delay={120}>
              <p className="mt-7 leading-relaxed text-ink-soft">{ABOUT_TEXT}</p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 leading-relaxed text-ink-soft">{HISTORY_TEXT}</p>
            </Reveal>

            {/* snapshot card */}
            <Reveal delay={260}>
              <div className="mt-9 grid grid-cols-1 gap-px border border-bone-300 bg-bone-300 sm:grid-cols-3">
                {[
                  { k: "Name of CEO", v: COMPANY.ceo },
                  { k: "Establishment Year", v: String(COMPANY.established) },
                  { k: "Nature of Business", v: COMPANY.nature },
                ].map((c) => (
                  <div key={c.k} className="group bg-bone-50 p-5 transition-colors duration-300 hover:bg-pine-900">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fern-600 transition-colors group-hover:text-marigold-500">
                      {c.k}
                    </p>
                    <p className="mt-2 text-sm font-bold leading-snug text-pine-900 transition-colors group-hover:text-bone-50">
                      {c.v}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* strengths */}
            <Reveal delay={320}>
              <div className="mt-9">
                <p className="mb-4 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-fern-600">
                  <NeedleGlyph className="h-4 w-4" /> Our Strengths
                </p>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {STRENGTHS.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm font-medium text-ink">
                      <CheckStitch className="mt-0.5 h-4 w-4 shrink-0 text-fern-600" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* timeline */}
        <div className="mt-28">
          <Reveal>
            <p className="mb-10 flex items-center gap-4 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-fern-600">
              <span className="inline-block h-[2px] w-8 bg-fern-600" />
              The AVM Timeline
            </p>
          </Reveal>
          <ol className="relative grid gap-10 border-l-2 border-dashed border-fern-600/40 pl-8 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-4 lg:gap-x-8">
            {MILESTONES.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 130} className="relative">
                <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-pine-600 bg-bone-100">
                  <span className="h-2 w-2 rounded-full bg-pine-700" />
                </span>
                <p className="font-display text-3xl uppercase text-pine-700">{m.year}</p>
                <h3 className="mt-2 font-display text-xl uppercase tracking-wide text-pine-900">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
