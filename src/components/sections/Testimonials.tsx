import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { SectionHeading } from "./SectionHeading";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const active = testimonials[index] ?? testimonials[0]!;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 36, filter: "blur(12px)", scale: 0.98 },
        { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 0.8, ease: "power3.out" },
      );
    });
    return () => ctx.revert();
  }, [index]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden bg-surface/25">
      <div className="pointer-events-none absolute left-1/4 top-10 size-[26rem] rounded-full bg-accent/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="145+ five-star reviews from founders and marketing leaders who needed results, not reports."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div ref={cardRef} className="glass rounded-[2rem] p-8 sm:p-12">
            <Quote className="size-9 text-primary/70" />
            <p className="mt-6 font-display text-xl leading-relaxed sm:text-2xl">
              “{active.quote}”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-primary/40 to-accent/30 font-display font-black">
                {active.initials}
              </span>
              <div>
                <p className="font-display font-bold">{active.name}</p>
                <p className="text-sm text-muted-foreground">{active.company}</p>
              </div>
              <div className="ml-auto flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
              className="grid size-11 place-items-center rounded-full border border-border transition-all hover:-translate-x-1 hover:border-accent hover:text-accent"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-8 bg-gradient-to-r from-primary to-accent" : "w-3 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="grid size-11 place-items-center rounded-full border border-border transition-all hover:translate-x-1 hover:border-accent hover:text-accent"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
