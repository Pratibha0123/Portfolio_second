import { useState } from "react";
import { NavLink } from "react-router-dom";
import { nav } from "../data/navLinks";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b1018]/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <NavLink to="/" className="flex items-center gap-2 font-semibold text-white">
          Pratibha Sharma
        </NavLink>

        <nav className="hidden gap-6 text-sm md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.label}
              to={n.href}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-400 font-medium"
                  : "text-white/70 hover:text-white"
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-[#0b1018]/95 backdrop-blur-lg flex flex-col gap-4 px-6 py-4 border-t border-white/5 animate-fade-in">
          {nav.map((n) => (
            <NavLink
              key={n.label}
              to={n.href}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-400 font-medium"
                  : "text-white/70 hover:text-white"
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
