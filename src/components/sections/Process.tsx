import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { SectionHeading } from "./SectionHeading";
import { processSteps } from "@/lib/site-data";

export function Process() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left",
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 65%", end: "bottom 80%", scrub: 0.4 },
        },
      );
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, i) => {
        gsap.from(step, {
          opacity: 0,
          y: 70,
          rotateX: 20,
          duration: 0.95,
          ease: "power3.out",
          delay: i * 0.05,
          scrollTrigger: { trigger: step, start: "top 88%" },
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/4 size-[28rem] rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Turn Ideas Into Results"
          subtitle="A proven five-stage system that keeps strategy, execution and reporting tightly connected."
        />

        <div ref={root} className="relative mt-16">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-border lg:block" />
          <div className="process-line absolute left-0 right-0 top-9 hidden h-px origin-left bg-gradient-to-r from-primary via-accent to-gold lg:block" />

          <div className="grid gap-6 [perspective:1200px] sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((s) => (
              <div key={s.step} className="process-step group relative">
                <div className="relative z-10 grid size-[4.5rem] place-items-center rounded-2xl border border-border bg-background font-display text-xl font-black text-gradient transition-all duration-500 group-hover:-translate-y-2 group-hover:border-accent/60">
                  {s.step}
                </div>
                <h3 className="mt-6 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
