import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

import { services, company } from "@/lib/site-data";
import { Magnetic } from "@/components/anim/Magnetic";
import { gsap } from "@/lib/gsap";
import logoAsset from "@/assets/Rok-Online-Logo.png";


const nav = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Team", to: "/team" },
  { label: "Process", to: "/process" },
  { label: "Portfolio", to: "/portfolio" },
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

    window.addEventListener(
      "scroll",
      onScroll,
      {
        passive:true
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );
    };

  }, []);



  useEffect(() => {

    if(!open) return;


    gsap.fromTo(
      ".mobile-nav-item",
      {
        x:20,
        opacity:0
      },
      {
        x:0,
        opacity:1,
        duration:0.4,
        stagger:0.05,
        ease:"power3.out"
      }
    );


  },[open]);



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


          {
            nav.map((n)=>(


              n.label === "Services" ? (


                <div
                  key={n.to}
                  className="group relative"
                >

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
