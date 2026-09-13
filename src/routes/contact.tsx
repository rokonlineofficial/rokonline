import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages/ContactPage";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Rok Online | Free Digital Growth Consultation" },
      {
        name: "description",
        content:
          "Talk to Rok Online in Charlotte, NC about web development, SEO and paid ads. Call (704) 412-6928 or book a free consultation.",
      },
      { property: "og:title", content: "Contact Rok Online" },
      {
        property: "og:description",
        content: "Book a free digital growth consultation with the Rok Online team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});
