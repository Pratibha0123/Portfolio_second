import { useEffect, useState } from "react";
import { nav } from "../data/navLinks";

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // offset for header
      nav.forEach((n) => {
        const section = document.querySelector(n.href);
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActive(n.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b1018]/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#about" className="flex items-center gap-2 font-semibold text-white">
          Pratibha Sharma
        </a>
        <nav className="hidden gap-6 text-sm md:flex">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className={`transition-colors ${
                active === n.href ? "text-primary font-medium" : "text-white/70 hover:text-white"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
