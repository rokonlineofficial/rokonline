import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

import { services, company } from "@/lib/site-data";
import { Magnetic } from "@/components/anim/Magnetic";
import { gsap } from "@/lib/gsap";
import logoAsset from "@/assets/Rok-Online-Logo.png";

const nav = [
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Process", to: "/process" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);


  // Only mobile menu animation
  useEffect(() => {
    if (!open) return;

    gsap.fromTo(
      ".mobile-nav-item",
      {
        x: 20,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: "power3.out",
      }
    );
  }, [open]);


  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-[9999]
        h-[88px]
        transition-all
        duration-500

        ${
          scrolled
            ? "glass backdrop-blur-2xl"
            : "bg-transparent"
        }
      `}
    >

      <div
        className="
          mx-auto
          flex
          h-full
          max-w-7xl
          items-center
          justify-between
          gap-6
          px-5
        "
      >

        {/* Logo */}
        <Link
          to="/"
          className="
            flex
            items-center
            gap-2.5
            shrink-0
          "
        >
          <img
            src={logoAsset}
            alt="Rok Online"
            className="
              h-9
              w-auto
              object-contain
            "
          />
        </Link>



        {/* Desktop Navigation */}
        <nav
          className="
            hidden
            items-center
            gap-1
            lg:flex
          "
        >

          {/* Services Dropdown */}
          <div className="group relative">

            <Link
              to="/services"
              className="
                flex
                items-center
                gap-1
                rounded-full
                px-4
                py-2
                text-sm
                font-medium
                text-white
                transition-colors
                hover:text-white
              "
            >
              Services

              <ChevronDown
                className="
                  size-3.5
                  transition-transform
                  group-hover:rotate-180
                "
              />

            </Link>


            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-full
                w-[560px]
                -translate-x-1/2
                pt-3
                opacity-0
                transition-all
                duration-300

                group-hover:pointer-events-auto
                group-hover:opacity-100
              "
            >

              <div
                className="
                  glass
                  grid
                  grid-cols-2
                  gap-1
                  rounded-2xl
                  p-3
                "
              >

                {services.map((s)=>(
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{
                      slug:s.slug
                    }}
                    className="
                      rounded-xl
                      px-3
                      py-2.5
                      hover:bg-white/10
                    "
                  >

                    <span
                      className="
                        block
                        text-sm
                        font-semibold
                        text-white
                      "
                    >
                      {s.title}
                    </span>


                    <span
                      className="
                        block
                        text-xs
                        text-white/60
                      "
                    >
                      {s.short}
                    </span>

                  </Link>
                ))}

              </div>

            </div>

          </div>



          {nav.map((n)=>(
            <Link
              key={n.to}
              to={n.to}
              className="
                rounded-full
                px-4
                py-2
                text-sm
                font-medium
                text-white
                transition-colors
                hover:text-white
              "
            >
              {n.label}
            </Link>
          ))}


        </nav>




        {/* Right Side */}
        <div
          className="
            flex
            items-center
            gap-3
            shrink-0
          "
        >

          <a
            href={company.phoneHref}
            className="
              hidden
              items-center
              gap-2
              text-sm
              font-semibold
              text-white
              xl:flex
            "
          >

            <Phone className="size-4"/>

            {company.phone}

          </a>



          <Magnetic
            className="
              hidden
              sm:inline-block
            "
          >

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                rounded-full
                bg-gradient-to-r
                from-primary
                to-accent
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
              "
            >
              Free Consultation
            </Link>


          </Magnetic>



          <button
            onClick={()=>setOpen(!open)}
            className="
              grid
              size-10
              place-items-center
              rounded-xl
              border
              border-white/20
              text-white
              lg:hidden
            "
          >

            {
              open
              ?
              <X className="size-5"/>
              :
              <Menu className="size-5"/>
            }


          </button>


        </div>


      </div>




      {/* Mobile Menu */}
      {
        open && (

          <div
            className="
              glass
              mx-4
              mt-3
              max-h-[70vh]
              overflow-y-auto
              rounded-2xl
              p-4
              lg:hidden
            "
          >

            {
              [
                {
                  label:"Services",
                  to:"/services"
                },
                ...nav
              ]
              .map((n)=>(

                <Link
                  key={n.to}
                  to={n.to}
                  onClick={()=>setOpen(false)}
                  className="
                    mobile-nav-item
                    block
                    rounded-xl
                    px-4
                    py-3
                    text-base
                    font-semibold
                    text-white
                    hover:bg-white/10
                  "
                >

                  {n.label}

                </Link>

              ))
            }


          </div>

        )
      }


    </header>
  );
}