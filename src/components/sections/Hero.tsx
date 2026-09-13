import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play, TrendingUp, MousePointerClick, Target, BarChart3 } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { SplitText } from "@/components/anim/SplitText";
import { Magnetic } from "@/components/anim/Magnetic";
import { Counter } from "@/components/anim/Counter";
import { stats } from "@/lib/site-data";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-fade", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        delay: 0.45,
        ease: "power3.out",
      });
      gsap.from(".hero-card", {
        y: 60,
        opacity: 0,
        rotateX: 25,
        scale: 0.92,
        duration: 1.1,
        stagger: 0.14,
        delay: 0.55,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".hero-float").forEach((node, i) => {
        gsap.to(node, {
          y: i % 2 === 0 ? -16 : 14,
          duration: 3.4 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      gsap.to(".hero-orb", {
        xPercent: 12,
        yPercent: -10,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1.2,
      });
    }, el);

    const onMove = (e: MouseEvent) => {
      const rx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ry = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(".hero-parallax", {
        x: (i: number) => rx * (14 + i * 9),
        y: (i: number) => ry * (10 + i * 7),
        rotateY: rx * 6,
        rotateX: -ry * 5,
        duration: 1,
        ease: "power3.out",
        overwrite: "auto",
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-hero-aura pb-20 pt-36 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      <div className="hero-orb pointer-events-none absolute -left-24 top-24 size-[26rem] rounded-full bg-primary/25 blur-[120px]" />
      <div className="hero-orb pointer-events-none absolute -right-16 top-64 size-[22rem] rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="hero-fade inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            Digital Marketing & Web Development
          </span>

          <SplitText
            as="h1"
            mode="words"
            delay={0.25}
            text="Turning Clicks Into Loyal Customers"
            className="mt-6 font-display text-[clamp(2.6rem,6.2vw,4.6rem)] font-extrabold leading-[1.02]"
          />

          <p className="hero-fade mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Data-driven websites and digital marketing solutions designed to increase traffic, leads
            and revenue.
          </p>

          <div className="hero-fade mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]"
              >
                Get Free Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-bold transition-colors hover:border-accent hover:text-accent"
              >
                <Play className="size-4" /> View Our Work
              </Link>
            </Magnetic>
          </div>

          <div className="hero-fade mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-extrabold text-gradient">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative [perspective:1400px]">
          <div className="hero-card hero-parallax glass relative rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Website Analytics
                </p>
                <p className="font-display text-2xl font-extrabold">184,920 sessions</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
                <TrendingUp className="size-3.5" /> +62%
              </span>
            </div>
            <ChartBars />
          </div>

          <div className="hero-card hero-parallax hero-float glass absolute -left-6 bottom-8 w-56 rounded-2xl p-4 sm:-left-10">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Target className="size-4 text-gold" /> SEO Growth
            </div>
            <p className="mt-2 font-display text-xl font-extrabold">Top 3 Rankings</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2">
              <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-gold to-accent" />
            </div>
          </div>

          <div className="hero-card hero-parallax hero-float glass absolute -right-3 -top-8 w-56 rounded-2xl p-4 sm:-right-8">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MousePointerClick className="size-4 text-primary" /> Google Ads
            </div>
            <p className="mt-2 font-display text-xl font-extrabold">4.6x ROAS</p>
            <p className="text-xs text-accent">Cost per lead −38%</p>
          </div>

          <div className="hero-card hero-parallax hero-float glass absolute -bottom-10 right-2 w-52 rounded-2xl p-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <BarChart3 className="size-4 text-accent" /> Leads
            </div>
            <p className="mt-2 font-display text-xl font-extrabold">
              <Counter value={1284} /> <span className="text-sm font-medium">/ month</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChartBars() {
  const ref = useRef<HTMLDivElement>(null);
  const values = [38, 52, 44, 66, 58, 78, 71, 92, 86, 100];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(".chart-bar", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 1.1,
        stagger: 0.06,
        delay: 0.9,
        ease: "power3.out",
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="mt-6 flex h-40 items-end gap-2">
      {values.map((v, i) => (
        <div
          key={i}
          className="chart-bar flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-accent"
          style={{ height: `${v}%` }}
        />
      ))}
    </div>
  );
}
