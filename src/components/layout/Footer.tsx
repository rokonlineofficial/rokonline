import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { company, services } from "@/lib/site-data";
import { Reveal } from "@/components/anim/Reveal";
import logoAsset from "@/assets/Rok-Online-Logo.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/40">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 py-16">
        <Reveal className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={logoAsset}
                alt="Rok Online"
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Rok Online helps businesses increase online visibility, generate qualified leads and
              improve conversions through modern websites, SEO, paid advertising and digital growth
              solutions.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                {
                  name: "Facebook",
                  icon: FaFacebookF,
                  link: "https://www.facebook.com/rokonlineinc",
                },
                {
                  name: "X (Twitter)",
                  icon: FaXTwitter,
                  link: "https://x.com/rokonlineinc",
                },
                {
                  name: "Instagram",
                  icon: FaInstagram,
                  link: "https://www.instagram.com/rokonlineinc",
                },
                {
                  name: "TikTok",
                  icon: FaTiktok,
                  link: "https://www.tiktok.com/@rokonlineinc",
                },
              ].map(({ icon: Icon, link, name }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="
                    grid
                    size-10
                    place-items-center
                    rounded-xl
                    border
                    border-border
                    transition-all
                    hover:-translate-y-1
                    hover:border-primary
                    hover:text-accent
                  "
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { label: "About", to: "/about" },
                { label: "Team", to: "/team" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "Process", to: "/process" },
                { label: "Testimonials", to: "/testimonials" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>
                  {company.legal}
                  <br />
                  {company.street}
                  <br />
                  {company.city}, {company.state} {company.zip}
                </span>
              </li>
              <li>
                <a href={company.phoneHref} className="flex gap-3 hover:text-accent">
                  <Phone className="size-4 shrink-0 text-accent" /> {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex gap-3 hover:text-accent">
                  <Mail className="size-4 shrink-0 text-accent" /> {company.email}
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Rok Online Inc. All rights reserved.</p>
          <p>Charlotte, North Carolina · Serving clients worldwide</p>
        </div>
      </div>
    </footer>
  );
}
