import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        n: value,
        duration: 2,
        ease: "power3.out",
        onUpdate: () => {
          el.textContent = `${Math.round(obj.n)}${suffix}`;
        },
        scrollTrigger: { trigger: el, start: "top 92%" },
      });
    });
    return () => ctx.revert();
  }, [value, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
