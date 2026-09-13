import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { SectionHeading } from "./SectionHeading";
import { techGroups } from "@/lib/site-data";

export function TechStack() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(".tech-chip", {
        opacity: 0,
        scale: 0.6,
        y: 24,
        duration: 0.7,
        ease: "back.out(1.8)",
        stagger: { amount: 1.1, from: "random" },
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
      gsap.utils.toArray<HTMLElement>(".tech-chip").forEach((chip, i) => {
        gsap.to(chip, {
          y: i % 3 === 0 ? -9 : i % 3 === 1 ? 7 : -5,
          duration: 2.6 + (i % 5) * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.05,
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section-pad relative overflow-hidden bg-surface/25">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Expertise"
          title="Technologies We Work With"
          subtitle="A modern, battle-tested stack across engineering, content management, marketing platforms and design."
        />

        <div ref={root} className="mt-16 space-y-8">
          {techGroups.map((g) => (
            <div key={g.group} className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="w-40 shrink-0">
                <span className="font-display text-sm font-black uppercase tracking-[0.22em] text-muted-foreground">
                  {g.group}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="tech-chip glass cursor-default rounded-2xl px-5 py-3 text-sm font-semibold transition-colors duration-300 hover:border-accent/60 hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
