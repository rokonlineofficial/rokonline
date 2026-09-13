import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { SectionHeading } from "./SectionHeading";
import { portfolio, portfolioCategories } from "@/lib/site-data";

export function Portfolio({ withFilters = true }: { withFilters?: boolean }) {
  const [active, setActive] = useState<string>("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const items = active === "All" ? portfolio : portfolio.filter((p) => p.category === active);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(".case-card", {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
      gsap.from(".case-veil", {
        scaleX: 1,
        transformOrigin: "right",
        duration: 1.1,
        ease: "power4.inOut",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    }, el);
    return () => ctx.revert();
  }, [active]);

  return (
    <section id="portfolio" className="section-pad relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Work Speaks For Results"
          subtitle="Websites, search programs and campaigns built for measurable business outcomes."
        />

        {withFilters && (
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {portfolioCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  active === c
                    ? "border-transparent bg-gradient-to-r from-primary to-accent text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <div ref={gridRef} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article
              key={p.title}
              className="case-card group relative overflow-hidden rounded-3xl border border-border bg-surface"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} project showcase`}
                  loading="lazy"
                  width={768}
                  height={576}
                  className="absolute inset-0 size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.accent} opacity-30 transition-opacity duration-500 group-hover:opacity-15`} />
                <div className="case-veil absolute inset-0 origin-left scale-x-0 bg-background" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <span className="rounded-full bg-background/70 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent backdrop-blur">
                    {p.category}
                  </span>
                  <span className="grid size-10 translate-y-3 place-items-center rounded-full bg-background/70 opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {p.industry}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-bold">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-4 font-display text-sm font-bold text-accent">{p.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
