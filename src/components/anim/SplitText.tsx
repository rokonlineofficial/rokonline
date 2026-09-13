import { useEffect, useRef, type ElementType } from "react";
import { gsap } from "@/lib/gsap";

type Props = {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  mode?: "words" | "chars";
  stagger?: number;
};

export function SplitText({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  mode = "words",
  stagger = 0.055,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parts = Array.from(el.querySelectorAll("[data-split-part]"));
    if (!parts.length) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        parts,
        { yPercent: 118, opacity: 0, rotateX: -55 },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.05,
          delay,
          ease: "power4.out",
          stagger,
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play reverse play reverse" },
        },
      );
      gsap.fromTo(
        parts,
        { yPercent: 0, opacity: 1 },
        {
          yPercent: -70,
          opacity: 0,
          stagger: stagger * 0.6,
          ease: "none",
          scrollTrigger: { trigger: el, start: "bottom 20%", end: "bottom -5%", scrub: 0.6 },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [text, delay, mode, stagger]);

  const units = mode === "words" ? text.split(" ") : text.split("");

  return (
    <Tag ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline">
        {units.map((unit, i) => (
          <span
            key={`${unit}-${i}`}
            className="inline-block overflow-hidden align-bottom pb-[0.22em] -mb-[0.22em]"
          >
            <span data-split-part className="inline-block will-change-transform">
              {unit === " " ? "\u00A0" : unit}
            </span>
            {mode === "words" && i < units.length - 1 ? "\u00A0" : null}
          </span>
        ))}
      </span>
    </Tag>
  );
}
