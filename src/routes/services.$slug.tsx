import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, Stagger } from "@/components/anim/Reveal";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  component: ServiceDetail,
  head: ({ params, loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} Services | Rok Online` : "Service | Rok Online";
    const description = s?.short ?? "Digital growth services by Rok Online.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={service.category} title={service.title} subtitle={service.short} />
      <section className="section-pad pt-0">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="glass rounded-3xl p-8 sm:p-10">
            <h2 className="font-display text-2xl font-extrabold">What's included</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <Check className="size-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </Reveal>

          <Stagger className="space-y-4">
            <div className="glass rounded-3xl p-7">
              <h3 className="font-display text-lg font-bold">Explore other services</h3>
              <div className="mt-4 space-y-2">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    to="/services/$slug"
                    params={{ slug: o.slug }}
                    className="group flex items-center justify-between rounded-xl border border-border px-4 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    {o.title}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-7">
              <h3 className="font-display text-lg font-bold">Start this service</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get a free audit and a clear plan tailored to your goals.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-bold text-primary-foreground"
              >
                Book a consultation <ArrowRight className="size-4" />
              </Link>
            </div>
          </Stagger>
        </div>
      </section>
      <CTA />
    </>
  );
}
