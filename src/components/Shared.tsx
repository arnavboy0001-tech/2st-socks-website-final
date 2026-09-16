import { ReactNode, useEffect, useRef, useState } from "react";

/* ---------------- scroll reveal ---------------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "figure" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={{ ["--reveal-delay" as never]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------------- image with stitched fallback ---------------- */
export function SmartImg({
  src,
  alt,
  className = "",
  fallbackLabel,
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-3 bg-pine-800 text-bone-100 ${className}`}
        role="img"
        aria-label={alt}
      >
        <SockGlyph className="h-12 w-12 text-marigold-500" />
        {fallbackLabel && (
          <span className="px-4 text-center font-mono text-[11px] uppercase tracking-widest text-fern-300">
            {fallbackLabel}
          </span>
        )}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

/* ---------------- custom inline icons ---------------- */
export function SockGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M8 2.5h8V11a6 6 0 0 1-2.9 5.1l-3.2 2a3.4 3.4 0 0 1-4.8-4.4l1.9-3.2A5.4 5.4 0 0 0 8 8.3V2.5Z"
        fill="currentColor"
        opacity="0.28"
      />
      <path
        d="M8 2.5h8V11a6 6 0 0 1-2.9 5.1l-3.2 2a3.4 3.4 0 0 1-4.8-4.4l1.9-3.2A5.4 5.4 0 0 0 8 8.3V2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M8 5.5h8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6.4 14.6 12 11.4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export function NeedleGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 20 18.5 5.5m0 0 2-2M18.5 5.5c1.6 1.6 1.6 3.4 0 5L9 20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="19.8" cy="4.2" r="1.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function YarnGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="10" cy="12" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.6 9.4c3.4.9 7.4.9 10.8 0M4.6 14.6c3.4-.9 7.4-.9 10.8 0M10 5.5c-2.4 4.2-2.4 8.8 0 13M16.5 12H21l1 3.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PhoneGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M5 4h4l1.5 4.5-2.2 1.7a13 13 0 0 0 5.5 5.5l1.7-2.2L20 15v4a1.8 1.8 0 0 1-2 1.8C10 20 4 14 3.2 6A1.8 1.8 0 0 1 5 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PinGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 21s-6.5-6-6.5-10.7A6.5 6.5 0 0 1 12 3.8a6.5 6.5 0 0 1 6.5 6.5C18.5 15 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.3" r="2.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ClockGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5V12l3 2.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.2-.7l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.4-.3Z" />
    </svg>
  );
}

export function ArrowGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 12h15m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckStitch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="m4.5 12.5 5 5L19.5 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 3"
      />
    </svg>
  );
}

/* ---------------- count-up number ---------------- */
export function CountUp({
  to,
  suffix = "",
  isYear = false,
  duration = 1600,
}: {
  to: number;
  suffix?: string;
  isYear?: boolean;
  duration?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        if (reduced) {
          setVal(to);
          return;
        }
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className="stat-num">
      {isYear ? val : val.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/* ---------------- section heading ---------------- */
export function SectionHead({
  kicker,
  title,
  tone = "light",
  children,
}: {
  kicker: string;
  title: ReactNode;
  tone?: "light" | "dark";
  children?: ReactNode;
}) {
  return (
    <Reveal>
      <p
        className={`mb-4 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] ${
          tone === "dark" ? "text-marigold-500" : "text-fern-600"
        }`}
      >
        <span className={`inline-block h-[2px] w-8 ${tone === "dark" ? "bg-marigold-500" : "bg-fern-600"}`} />
        {kicker}
      </p>
      <h2
        className={`font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl ${
          tone === "dark" ? "text-bone-50" : "text-pine-900"
        }`}
      >
        {title}
      </h2>
      {children}
    </Reveal>
  );
}
