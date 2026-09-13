import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, PhoneCall } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { SplitText } from "@/components/anim/SplitText";
import { Reveal } from "@/components/anim/Reveal";
import { Magnetic } from "@/components/anim/Magnetic";

export function CTA() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.to(".cta-shape", {
        y: (i: number) => (i % 2 === 0 ? -28 : 24),
        x: (i: number) => (i % 3 === 0 ? 18 : -14),
        rotate: (i: number) => (i % 2 === 0 ? 22 : -18),
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.6,
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section-pad relative px-5">
      <div
        ref={root}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-border bg-hero-aura p-10 text-center sm:p-16"
      >
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
        <div className="cta-shape pointer-events-none absolute -left-10 top-10 size-24 rounded-3xl border border-primary/40 bg-primary/10 backdrop-blur" />
        <div className="cta-shape pointer-events-none absolute right-8 top-16 size-16 rounded-full border border-accent/40 bg-accent/10" />
        <div className="cta-shape pointer-events-none absolute bottom-10 left-1/4 size-12 rotate-45 border border-gold/40 bg-gold/10" />
        <div className="cta-shape pointer-events-none absolute -bottom-6 right-1/4 size-28 rounded-full bg-primary/20 blur-2xl" />

        <div className="relative">
          <SplitText
            as="h2"
            text="Ready To Grow Your Business Online?"
            className="mx-auto max-w-3xl font-display text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.05]"
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Let's build a powerful digital presence that attracts customers and increases revenue.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-wrap justify-center gap-4">
            <Magnetic>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]"
              >
                Book Free Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-bold transition-colors hover:border-accent hover:text-accent"
              >
                <PhoneCall className="size-4" /> Contact Us
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
