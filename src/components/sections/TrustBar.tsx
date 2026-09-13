import { Marquee } from "@/components/anim/Marquee";
import { Reveal } from "@/components/anim/Reveal";
import { trustLogos } from "@/lib/site-data";

export function TrustBar() {
  return (
    <section className="relative border-y border-border bg-surface/30 py-14">
      <Reveal className="mx-auto mb-8 max-w-7xl px-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          Trusted By Businesses Worldwide
        </p>
      </Reveal>
      <Marquee speed={55}>
        {trustLogos.map((logo, i) => (
          <div
            key={`${logo}-${i}`}
            className="group flex items-center gap-3 whitespace-nowrap px-2 text-2xl font-extrabold tracking-tight text-muted-foreground/60 transition-colors duration-300 hover:text-foreground sm:text-3xl"
          >
            <span className="size-2 rounded-full bg-primary/60 transition-colors group-hover:bg-accent" />
            {logo}
          </div>
        ))}
      </Marquee>
      <div className="mt-8">
        <Marquee speed={42} reverse>
          {["150+ Projects", "145+ Upwork Reviews", "10+ Years", "Charlotte, NC", "Full-Service Growth"].map(
            (t, i) => (
              <span
                key={`${t}-${i}`}
                className="whitespace-nowrap rounded-full border border-border px-6 py-2 text-sm font-semibold text-muted-foreground"
              >
                {t}
              </span>
            ),
          )}
        </Marquee>
      </div>
    </section>
  );
}
