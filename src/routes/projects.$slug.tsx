import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink, FileText } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    const index = projects.findIndex((p) => p.slug === project.slug);
    const next = projects[(index + 1) % projects.length];
    return { project, next };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.cardTitle} | Karen Wang GIS Portfolio` },
          { name: "description", content: loaderData.project.summary },
          { property: "og:title", content: loaderData.project.cardTitle },
          { property: "og:description", content: loaderData.project.summary },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [],
  }),
  component: ProjectPage,
});

const linkClass =
  "group flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3 font-body text-sm font-semibold text-primary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:shadow-card";

function ProjectPage() {
  const { project, next } = Route.useLoaderData();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden gradient-ink">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-secondary/25 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-accent"
            >
              <ArrowLeft
                className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              />
              Back to portfolio
            </Link>

            <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
              <div className="animate-fade-up">
                <h1 className="text-2xl leading-snug text-primary-foreground sm:text-3xl">
                  {project.title}
                </h1>
                <div className="mt-4 accent-rule" />
                <p className="mt-4 font-body text-sm italic text-accent sm:text-base">
                  {project.authors}
                </p>
              </div>
              <img
                src={project.hero}
                alt={project.title}
                className="w-full animate-fade-in rounded-xl bg-card object-contain p-2 shadow-lift transition-transform duration-700 hover:scale-[1.01]"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal>
                <h2 className="text-xl sm:text-2xl">{project.sectionHeading}</h2>
                <div className="mt-3 accent-rule" />
              </Reveal>
              <Reveal className="prose-body mt-5 text-base sm:text-lg" delay={100}>
                {project.paragraphs.map((text) => (
                  <p key={text.slice(0, 40)}>{text}</p>
                ))}
              </Reveal>

              {project.bullets && (
                <Reveal className="mt-10" delay={140}>
                  <h3 className="font-heading text-lg sm:text-xl">
                    Personal Responsibilities &amp; Takeaways
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {project.bullets.map((item) => (
                      <li
                        key={item.slice(0, 40)}
                        className="flex gap-3 rounded-lg border border-border bg-card p-4 font-body text-sm leading-relaxed shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-card sm:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-2 shrink-0 rounded-full bg-accent"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>

            <Reveal className="lg:sticky lg:top-28 lg:self-start" delay={120}>
              <aside className="space-y-3">
                <p className="font-body text-xs uppercase tracking-[0.24em] text-secondary">
                  Deliverables
                </p>
                {project.pdf && (
                  <a href={project.pdf} target="_blank" rel="noreferrer" className={linkClass}>
                    <span className="flex items-center gap-2">
                      <FileText className="size-4 text-secondary" aria-hidden="true" />
                      Full map layout (PDF)
                    </span>
                    <ArrowRight
                      className="size-4 text-secondary transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                )}
                {project.links?.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className={linkClass}>
                    <span className="flex items-center gap-2">
                      <ExternalLink className="size-4 text-secondary" aria-hidden="true" />
                      {link.label}
                    </span>
                    <ArrowRight
                      className="size-4 text-secondary transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                ))}
                {project.pdf && (
                  <div className="hidden overflow-hidden rounded-xl border border-border shadow-soft lg:block">
                    <object
                      data={`${project.pdf}#view=FitH`}
                      type="application/pdf"
                      className="h-[520px] w-full"
                      aria-label={`${project.cardTitle} map layout`}
                    >
                      <p className="p-4 font-body text-sm">
                        Your browser can’t display this PDF inline. Use the button above to open it.
                      </p>
                    </object>
                  </div>
                )}
              </aside>
            </Reveal>
          </div>
        </section>

        {project.gallery && (
          <section className="gradient-mist border-y border-border">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
              <Reveal>
                <h2 className="text-xl sm:text-2xl">{project.galleryHeading ?? "Final Maps"}</h2>
                <div className="mt-3 accent-rule" />
              </Reveal>
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                {project.gallery.map((figure, i) => (
                  <Reveal key={figure.src} delay={i * 130}>
                    <figure className="group space-y-3">
                      <div className="overflow-hidden rounded-xl bg-card p-2 shadow-card">
                        <img
                          src={figure.src}
                          alt={figure.caption}
                          className="w-full rounded-lg object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="font-body text-sm italic text-muted-foreground">
                        {figure.caption}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Next project */}
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <Reveal>
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group flex flex-col gap-4 overflow-hidden rounded-2xl gradient-ink p-6 shadow-card transition-all duration-400 hover:shadow-lift sm:flex-row sm:items-center sm:justify-between sm:p-8"
            >
              <div>
                <p className="font-body text-xs uppercase tracking-[0.24em] text-accent">
                  Next project
                </p>
                <h2 className="mt-2 text-lg text-primary-foreground sm:text-xl">
                  {next.cardTitle}
                </h2>
              </div>
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-400 group-hover:translate-x-1.5">
                <ArrowRight className="size-5" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
