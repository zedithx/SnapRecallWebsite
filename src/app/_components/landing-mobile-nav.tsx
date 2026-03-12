"use client";

import { useState } from "react";
import { MenuIcon, XIcon } from "./landing-icons";

type NavItem = {
  label: string;
  href: string;
};

type LandingMobileNavProps = {
  items: readonly NavItem[];
  secondaryHref: string;
  secondaryLabel: string;
  primaryHref: string;
  primaryLabel: string;
};

export function LandingMobileNav({
  items,
  secondaryHref,
  secondaryLabel,
  primaryHref,
  primaryLabel,
}: LandingMobileNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="text-white/45 transition duration-300 hover:text-white"
        aria-expanded={mobileMenuOpen}
        aria-label="Toggle navigation"
        onClick={() => setMobileMenuOpen((current) => !current)}
      >
        {mobileMenuOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
      </button>

      <div
        className={`fixed left-0 right-0 top-[3.75rem] z-40 grid overflow-hidden border-t border-white/[0.06] bg-[#0a0a12] transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-emphasized)] sm:top-16 ${
          mobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mx-auto flex w-full max-w-[1152px] flex-col gap-3 px-4 py-4 sm:px-6">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-sm text-white/55 transition duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 border-t border-white/[0.06] pt-3">
              <a
                href={secondaryHref}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-left text-sm text-white/55 transition duration-300 hover:text-white"
              >
                {secondaryLabel}
              </a>
              <a
                href={primaryHref}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-[12px] bg-[#7f22fe] px-4 py-2.5 text-center text-sm text-white transition duration-300 hover:bg-[#9249ff]"
              >
                {primaryLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
