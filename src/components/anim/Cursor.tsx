import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const dx = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const dy = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
    const rx = gsap.quickTo(ring, "x", { duration: 0.55, ease: "power3" });
    const ry = gsap.quickTo(ring, "y", { duration: 0.55, ease: "power3" });

    const move = (e: MouseEvent) => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.3, overwrite: "auto" });
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);

      const interactive = (e.target as HTMLElement | null)?.closest(
        "a,button,[data-cursor-hover]",
      );
      gsap.to(ring, {
        scale: interactive ? 1.9 : 1,
        borderColor: interactive
          ? "color-mix(in oklab, var(--accent) 80%, transparent)"
          : "color-mix(in oklab, var(--primary) 80%, transparent)",
        duration: 0.35,
        overwrite: "auto",
      });
    };

    const leave = () => gsap.to([dot, ring], { opacity: 0, duration: 0.2 });

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div ref={ringRef} className="fixed size-9 rounded-full border border-primary/70" />
      <div ref={dotRef} className="fixed size-1.5 rounded-full bg-accent" />
    </div>
  );
}
