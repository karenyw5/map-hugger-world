import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const navLinkClass =
  "underline-sweep font-body text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/80 transition-colors hover:text-primary-foreground sm:text-sm";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 gradient-ink transition-all duration-500",
        scrolled ? "shadow-lift backdrop-blur-sm" : "shadow-none",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 transition-all duration-500 sm:flex-row sm:justify-between sm:gap-6 sm:px-6",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <Link to="/" className="group flex flex-col items-center sm:items-start">
          <span className="font-heading text-base font-bold tracking-tight text-primary-foreground transition-transform duration-300 group-hover:translate-x-0.5 sm:text-lg">
            Karen Wang
          </span>
          <span className="mt-0.5 font-body text-[0.65rem] uppercase tracking-[0.3em] text-accent">
            GIS &amp; Remote Sensing
          </span>
        </Link>
        <ul className="flex items-center gap-7 sm:gap-9">
          <li>
            <Link
              to="/"
              className={navLinkClass}
              activeProps={{ className: `${navLinkClass} text-primary-foreground` }}
              activeOptions={{ exact: true }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={navLinkClass}
              activeProps={{ className: `${navLinkClass} text-primary-foreground` }}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <a
              href="mailto:karenyw@umich.edu"
              className="rounded-full border border-accent/60 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-glow sm:text-sm"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
