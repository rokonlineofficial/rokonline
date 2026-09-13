import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/team")({
  component: () => (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet The Experts Behind Rok Online"
        subtitle="A senior in-house team of developers, designers, SEO specialists, paid ads experts, social media managers and video editors."
      />
      <Team />
      <CTA />
    </>
  ),
  head: () => ({
    meta: [
      { title: "Our Team | Rok Online Digital Agency Experts" },
      {
        name: "description",
        content:
          "Meet the developers, designers, SEO specialists, ads experts and video editors behind Rok Online's client results.",
      },
      { property: "og:title", content: "Meet The Rok Online Team" },
      {
        property: "og:description",
        content: "Senior specialists in development, SEO, paid media and creative.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/team" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
});
