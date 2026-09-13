import type { ReactNode } from "react";
import { SplitText } from "@/components/anim/SplitText";
import { Reveal } from "@/components/anim/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  children?: ReactNode;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <Reveal y={18}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <SplitText
        as="h2"
        text={title}
        className="mt-5 font-display text-[clamp(1.9rem,4.2vw,3.2rem)] font-extrabold leading-[1.08]"
      />
      {subtitle && (
        <Reveal y={22} delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
      {children}
    </div>
  );
}
