import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Projects & Map Layouts | Karen Wang GIS Portfolio" },
      {
        name: "description",
        content:
          "GIS and remote sensing projects on coastal flood risk, sea level rise, land cover change, and ecological suitability, with map layouts, StoryMaps, and technical reports.",
      },
      { property: "og:title", content: "Projects & Map Layouts | Karen Wang" },
      {
        property: "og:description",
        content:
          "A collection of GIS, remote sensing, and spatial analysis projects with maps, posters, and technical reports.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden gradient-ink">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-0 size-72 rounded-full bg-accent/15 blur-3xl animate-float"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
            <p className="animate-fade-in font-body text-xs uppercase tracking-[0.28em] text-accent">
              Portfolio
            </p>
            <h1 className="mt-4 animate-fade-up text-3xl text-primary-foreground sm:text-4xl">
              Projects &amp; map layouts
            </h1>
            <p className="prose-body mt-5 max-w-3xl animate-fade-up text-base text-primary-foreground/85 sm:text-lg">
              A collection of technical and research projects I’ve created or contributed to
              throughout my academic career, highlighting skills in data analysis, programming,
              visualization, spatial analysis, and scientific communication. Select a project to see
              the full map layout, methods, and deliverables.
            </p>
          </div>
        </section>

        <section className="gradient-mist">
          <div className="mx-auto grid max-w-6xl gap-7 px-4 py-14 sm:grid-cols-2 sm:px-6 sm:py-16 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 110} className="h-full">
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all duration-400 hover:-translate-y-2 hover:border-secondary hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
                    <img
                      src={project.thumb}
                      alt={project.cardTitle}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-ink/45 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                    />
                    <span className="absolute bottom-3 right-3 inline-flex size-9 translate-y-2 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <h2 className="font-heading text-base leading-snug transition-colors duration-300 group-hover:text-secondary sm:text-lg">
                      {project.cardTitle}
                    </h2>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                    <span className="mt-auto pt-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                      View project
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
