import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/about")({
  component: () => (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building Digital Experiences That Create Growth"
        subtitle="Founded in 2018 by Rokon Uz Zaman, Rok Online has grown into a full-service digital growth agency with 150+ completed projects."
      />
      <About />
      <TechStack />
      <Team limit={4} />
      <CTA />
    </>
  ),
  head: () => ({
    meta: [
      { title: "About Rok Online | Digital Growth Agency in Charlotte" },
      {
        name: "description",
        content:
          "Learn how Rok Online grew from a web studio in 2018 into a full digital growth agency with 150+ projects and 145+ Upwork reviews.",
      },
      { property: "og:title", content: "About Rok Online" },
      {
        property: "og:description",
        content: "Our story, mission, values and the milestones behind 150+ projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Rok Online Inc.",
          url: "/",
          founder: { "@type": "Person", name: "Rokon Uz Zaman" },
          foundingDate: "2018",
        }),
      },
    ],
  }),
});
