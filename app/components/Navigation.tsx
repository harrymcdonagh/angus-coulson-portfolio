"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      {/* Thin accent line at very top */}
      <div className="h-[2px] bg-accent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-14">
          {/* Masthead logo */}
          <a
            href="#"
            className="group flex items-center gap-3"
          >
            <span
              className="text-xl font-bold tracking-[-0.02em] text-cream group-hover:text-accent transition-colors duration-300"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Angus Coulson
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <span key={link.href} className="flex items-center">
                {i > 0 && (
                  <span className="text-border-light mx-3 text-xs select-none">/</span>
                )}
                <a
                  href={link.href}
                  className="editorial-link text-[0.7rem] uppercase tracking-[0.2em] text-muted-light hover:text-cream transition-colors duration-300 py-1"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cream hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Bottom rule when scrolled */}
      <div
        className={`h-px transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: "var(--border)" }}
      />

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
        style={{ background: "rgba(10,10,10,0.97)" }}
      >
        <div className="px-6 py-6 flex flex-col gap-5 border-t border-border">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-light hover:text-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
