import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Stagger } from "@/components/anim/Reveal";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
  head: () => ({
    meta: [
      { title: "Digital Marketing & Web Development Services | Rok Online" },
      {
        name: "description",
        content:
          "Web development, SEO, Google Ads, Meta Ads, social media, branding, video editing and more — full-service digital growth from Rok Online.",
      },
      { property: "og:title", content: "Rok Online Services" },
      { property: "og:description", content: "Everything you need to grow online, under one roof." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Full-Service Digital Growth"
        subtitle="From high-converting websites to campaigns that scale, every service is built around measurable business outcomes."
      />
      <section className="section-pad pt-0">
        <Stagger className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="glass glass-hover group rounded-3xl p-7"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {s.category}
              </span>
              <h2 className="mt-3 font-display text-xl font-bold">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Learn more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </Stagger>
      </section>
      <CTA />
    </>
  );
}
