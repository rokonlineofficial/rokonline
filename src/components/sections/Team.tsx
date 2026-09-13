import { Stagger } from "@/components/anim/Reveal";
import { SectionHeading } from "./SectionHeading";
import { team } from "@/lib/site-data";

export function Team({ limit }: { limit?: number }) {
  const members = limit ? team.slice(0, limit) : team;

  return (
    <section id="team" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-1/3 size-[26rem] rounded-full bg-gold/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Our Team"
          title="Meet The Experts Behind Rok Online"
          subtitle="Developers, designers, SEO strategists, paid ads specialists, social media managers and video editors — all senior, all in-house."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <article
              key={m.name}
              className="glass glass-hover group relative overflow-hidden rounded-3xl p-6 text-center transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-primary/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative mx-auto size-28 overflow-hidden rounded-full bg-gradient-to-br from-primary/30 to-accent/25 p-[2px]">
                <img
                  src={m.image}
                  alt={`${m.name}, ${m.role}`}
                  loading="lazy"
                  width={112}
                  height={112}
                  className="size-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-bold">{m.name}</h3>
              <p className="relative text-sm text-accent">{m.role}</p>
              <div className="relative mt-4 flex flex-wrap justify-center gap-1.5">
                {m.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
