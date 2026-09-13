import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  as?: ElementType;
  start?: string;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 48,
  duration = 1,
  as: Tag = "div",
  start = "top 88%",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start, toggleActions: "play reverse play reverse" },
        },
      );
      // exit animation as the element leaves the viewport
      gsap.fromTo(
        el,
        { opacity: 1, y: 0 },
        {
          opacity: 0.15,
          y: -y * 0.5,
          filter: "blur(6px)",
          ease: "none",
          scrollTrigger: { trigger: el, start: "bottom 22%", end: "bottom -5%", scrub: 0.6 },
        },
      );
    });
    return () => ctx.revert();
  }, [delay, y, duration, start]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  selector?: string;
  amount?: number;
  y?: number;
};

export function Stagger({
  children,
  className,
  selector = ":scope > *",
  amount = 0.6,
  y = 40,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll(selector));
    if (!items.length) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: { amount },
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play reverse play reverse" },
        },
      );
      gsap.fromTo(
        items,
        { opacity: 1, y: 0 },
        {
          opacity: 0.2,
          y: -24,
          stagger: { amount: amount * 0.5 },
          ease: "none",
          scrollTrigger: { trigger: el, start: "bottom 25%", end: "bottom -5%", scrub: 0.6 },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [selector, amount, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function Parallax({
  children,
  className,
  strength = 80,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: strength },
        {
          y: -strength,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    });
    return () => ctx.revert();
  }, [strength]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
