"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-lg shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
        <a
          href="#top"
          className="font-sans text-xl font-extrabold tracking-tight text-primary"
        >
          Abdul<span className="text-onsurface">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-body-md text-onsurface-variant transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            download
            className="rounded bg-primary px-5 py-2.5 text-body-md font-medium text-primary-on transition-shadow hover:shadow-elevated-hover"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded text-onsurface md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-200 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform duration-200 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-outline-variant bg-surface md:hidden">
          <nav className="flex flex-col gap-1 px-margin-mobile py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="rounded px-2 py-3 text-body-lg text-onsurface transition-colors hover:bg-surface-container"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              onClick={handleNavClick}
              className="mt-2 rounded bg-primary px-5 py-3 text-center text-body-md font-medium text-primary-on"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
