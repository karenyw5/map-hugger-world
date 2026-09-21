import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 gradient-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-12 sm:px-6">
        <div className="accent-rule" />
        <p className="max-w-xl text-center font-heading text-base text-primary-foreground sm:text-lg">
          Open to federal, state, and agency roles in geospatial analysis and coastal resilience.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:karenyw@umich.edu"
            aria-label="Email"
            className="text-accent transition-all duration-300 hover:scale-110 hover:text-primary-foreground"
          >
            <Mail className="size-6" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/karenwangumich/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-accent transition-all duration-300 hover:scale-110 hover:text-primary-foreground"
          >
            <Linkedin className="size-6" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/karenyw5"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-accent transition-all duration-300 hover:scale-110 hover:text-primary-foreground"
          >
            <Github className="size-6" aria-hidden="true" />
          </a>
        </div>
        <p className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
          © {new Date().getFullYear()} Karen Wang
        </p>
      </div>
    </footer>
  );
}
