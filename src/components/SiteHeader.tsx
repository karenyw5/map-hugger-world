import { Link } from "@tanstack/react-router";

const navLinkClass =
  "relative font-heading text-sm font-bold uppercase tracking-wide text-primary-foreground/90 transition-colors hover:text-primary-foreground after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary-foreground after:transition-all after:duration-300 hover:after:w-full sm:text-base";

const activeClass = "text-primary-foreground after:w-full";

export function SiteHeader() {
  return (
    <header className="bg-primary">
      <nav className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-4 sm:flex-row sm:justify-between sm:gap-6 sm:px-6">
        <Link
          to="/"
          className="font-heading text-lg font-bold tracking-tight text-primary-foreground sm:text-xl"
        >
          Karen Wang <span className="text-accent">|</span> GIS Portfolio
        </Link>
        <ul className="flex items-center gap-6 sm:gap-8">
          <li>
            <Link
              to="/"
              className={navLinkClass}
              activeProps={{ className: `${navLinkClass} ${activeClass}` }}
              activeOptions={{ exact: true }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={navLinkClass}
              activeProps={{ className: `${navLinkClass} ${activeClass}` }}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
