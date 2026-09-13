import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";
import { TechStack } from "@/components/sections/TechStack";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Rok Online | Web Development & Digital Marketing Agency" },
      {
        name: "description",
        content:
          "Rok Online builds high-performing websites and runs SEO, Google Ads and Meta Ads campaigns that turn clicks into loyal customers. 150+ projects delivered.",
      },
      { property: "og:title", content: "Rok Online | Digital Growth Agency in Charlotte, NC" },
      {
        property: "og:description",
        content:
          "Data-driven websites and digital marketing designed to increase traffic, leads and revenue.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Rok Online Inc.",
          description:
            "Digital marketing agency and web development company helping businesses grow online.",
          telephone: "+1-704-412-6928",
          email: "email@rokonline.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "2717 Sardis Rd",
            addressLocality: "Charlotte",
            addressRegion: "NC",
            postalCode: "28270",
            addressCountry: "US",
          },
          founder: { "@type": "Person", name: "Rokon Uz Zaman" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "145" },
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Team limit={4} />
      <TechStack />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
