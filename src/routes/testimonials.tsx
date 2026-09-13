import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/testimonials")({
  component: () => (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Clients Who Trust Rok Online"
        subtitle="145+ five-star reviews from business owners and marketing leaders across the US and beyond."
      />
      <Testimonials />
      <TrustBar />
      <CTA />
    </>
  ),
  head: () => ({
    meta: [
      { title: "Client Testimonials & Reviews | Rok Online" },
      {
        name: "description",
        content:
          "Read what clients say about working with Rok Online on web development, SEO and paid advertising projects.",
      },
      { property: "og:title", content: "Rok Online Client Testimonials" },
      { property: "og:description", content: "145+ five-star reviews from happy clients." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/testimonials" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
});
