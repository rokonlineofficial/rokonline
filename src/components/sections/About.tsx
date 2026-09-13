import { useEffect, useRef } from "react";
import { Compass, Eye, HeartHandshake } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { SectionHeading } from "./SectionHeading";
import { Reveal, Parallax } from "@/components/anim/Reveal";
import { timeline } from "@/lib/site-data";

const pillars = [
  {
    icon: Compass,
    title: "Mission",
    text: "Give growing businesses the same digital firepower enterprise brands take for granted.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "Become the most trusted growth partner for ambitious companies across North America.",
  },
  {
    icon: HeartHandshake,
    title: "Values",
    text: "Transparency, measurable results, senior craftsmanship and communication you never chase.",
  },
];

export function About() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 70%", end: "bottom 70%", scrub: 0.5 },
        },
      );
      gsap.from(".timeline-item", {
        opacity: 0,
        x: -40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: { trigger: el, start: "top 78%" },
      });
      gsap.from(".timeline-dot", {
        scale: 0,
        duration: 0.6,
        ease: "back.out(2.5)",
        stagger: 0.25,
        scrollTrigger: { trigger: el, start: "top 78%" },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section-pad relative overflow-hidden bg-surface/25">
      <div className="pointer-events-none absolute -right-32 top-20 size-[30rem] rounded-full bg-accent/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Rok Online"
              title="Building Digital Experiences That Create Growth"
              subtitle="Rok Online started as a small development studio in 2018 and grew into a full digital growth agency. Today our developers, designers, SEO specialists, ads experts and video editors work as one team behind every client's growth number."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08} className="glass glass-hover rounded-2xl p-5">
                  <p.icon className="size-5 text-accent" />
                  <h3 className="mt-3 font-display text-base font-bold">{p.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Parallax strength={40}>
            <div ref={lineRef} className="relative pl-10">
              <div className="absolute left-[13px] top-2 h-[calc(100%-1rem)] w-px bg-border" />
              <div className="timeline-progress absolute left-[13px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-accent to-gold" />
              {timeline.map((t) => (
                <div key={t.year} className="timeline-item relative mb-9 last:mb-0">
                  <span className="timeline-dot absolute -left-10 top-1.5 grid size-7 place-items-center rounded-full border border-primary/50 bg-background">
                    <span className="size-2.5 rounded-full bg-gradient-to-br from-primary to-accent" />
                  </span>
                  <span className="font-display text-sm font-black tracking-widest text-gold">
                    {t.year}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              ))}
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
