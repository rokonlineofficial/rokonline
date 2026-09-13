import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/process")({
  component: () => (
    <>
      <PageHero
        eyebrow="Our Process"
        title="How We Turn Ideas Into Results"
        subtitle="Discovery, design, development, launch and optimization — a repeatable system built for measurable growth."
      />
      <Process />
      <CTA />
    </>
  ),
  head: () => ({
    meta: [
      { title: "Our Process | How Rok Online Delivers Growth" },
      {
        name: "description",
        content:
          "See the five-stage Rok Online process: discovery, design, development, launch and growth optimization.",
      },
      { property: "og:title", content: "The Rok Online Process" },
      { property: "og:description", content: "A proven five-stage growth system." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/process" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
});
