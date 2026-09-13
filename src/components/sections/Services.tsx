import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Code2,
  Search,
  MousePointerClick,
  Share2,
  Video,
  Mail,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { SectionHeading } from "./SectionHeading";

const cards = [
  {
    icon: Code2,
    title: "Web Development",
    text: "Fast, secure, SEO-friendly websites built with modern technology.",
    slug: "custom-web-development",
  },
  {
    icon: Search,
    title: "SEO",
    text: "Increase organic traffic and improve search visibility.",
    slug: "seo",
  },
  {
    icon: MousePointerClick,
    title: "Paid Advertising",
    text: "Performance-focused Google Ads and Meta Ads campaigns.",
    slug: "google-ads",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    text: "Build brand awareness and customer engagement.",
    slug: "social-media-marketing",
  },
  {
    icon: Video,
    title: "Video Production",
    text: "Professional promotional videos for businesses.",
    slug: "video-production",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    text: "Convert visitors into loyal customers.",
    slug: "email-marketing",
  },
];

export function Services() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        y: 70,
        opacity: 0,
        rotateX: 18,
        duration: 1,
        ease: "power3.out",
        stagger: { amount: 0.7 },
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
    }, el);

    const cardsEls = Array.from(el.querySelectorAll<HTMLElement>(".service-card"));
    const handlers: Array<() => void> = [];
    cardsEls.forEach((card) => {
      const move = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(card, {
          rotateY: px * 10,
          rotateX: -py * 10,
          y: -8,
          duration: 0.5,
          ease: "power3.out",
        });
        gsap.to(card.querySelector(".service-glow"), {
          opacity: 1,
          x: e.clientX - r.left - 140,
          y: e.clientY - r.top - 140,
          duration: 0.5,
        });
      };
      const leave = () => {
        gsap.to(card, { rotateY: 0, rotateX: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.5)" });
        gsap.to(card.querySelector(".service-glow"), { opacity: 0, duration: 0.4 });
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      handlers.push(() => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      });
    });

    return () => {
      handlers.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 size-[38rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Our Services"
          title="Digital Solutions That Grow Your Business"
          subtitle="One senior team covering everything from engineering to acquisition — so your website, search presence and campaigns finally work together."
        />

        <div ref={root} className="mt-16 grid gap-6 [perspective:1400px] md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="service-card glass glass-hover group relative overflow-hidden rounded-3xl p-7 will-change-transform"
            >
              <div className="service-glow pointer-events-none absolute size-72 rounded-full bg-primary/25 opacity-0 blur-3xl" />
              <div className="relative">
                <span className="grid size-14 place-items-center rounded-2xl border border-border bg-surface-2 transition-transform duration-500 group-hover:scale-110 group-hover:border-accent/60">
                  <c.icon className="size-6 text-accent transition-colors group-hover:text-gold" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                <Link
                  to="/services/$slug"
                  params={{ slug: c.slug }}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent"
                >
                  Learn more
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
