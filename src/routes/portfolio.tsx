import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { Portfolio } from "@/components/sections/Portfolio";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/portfolio")({
  component: () => (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our Work Speaks For Results"
        subtitle="Case studies across web development, SEO, paid advertising and branding — with the outcomes that mattered to each client."
      />
      <Portfolio />
      <CTA />
    </>
  ),
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies | Rok Online" },
      {
        name: "description",
        content:
          "Explore Rok Online case studies in web development, SEO, Google Ads, Meta Ads and branding with real performance results.",
      },
      { property: "og:title", content: "Rok Online Portfolio & Case Studies" },
      { property: "og:description", content: "Real projects, real growth numbers." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
});
