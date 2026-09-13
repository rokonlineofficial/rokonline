import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

export function Marquee({
  children,
  speed = 30,
  reverse = false,
  className,
}: {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    if (!half) return;
    const ctx = gsap.context(() => {
      gsap.set(track, { x: reverse ? -half : 0 });
      gsap.to(track, {
        x: reverse ? 0 : -half,
        duration: half / speed,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, [speed, reverse]);

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <div ref={trackRef} className="flex w-max items-center gap-14 will-change-transform">
        {children}
        {children}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
