import type { ReactNode } from "react";
import { SplitText } from "@/components/anim/SplitText";
import { Reveal } from "@/components/anim/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero-aura pb-16 pt-36 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
      <div className="pointer-events-none absolute -left-20 top-20 size-[24rem] rounded-full bg-primary/20 blur-[130px]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <Reveal y={16}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
        </Reveal>
        <SplitText
          as="h1"
          text={title}
          className="mt-6 font-display text-[clamp(2.2rem,5.4vw,4rem)] font-extrabold leading-[1.04]"
        />
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
