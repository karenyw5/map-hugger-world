import { Link, createFileRoute } from "@tanstack/react-router";

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
          "GIS and remote sensing projects on flood risk, sea level rise, land cover change, and ecological site suitability, with map layouts and reports.",
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
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <h1 className="text-3xl font-bold uppercase tracking-wide sm:text-4xl">
            Projects &amp; Map Layouts
          </h1>
          <p className="prose-body mt-4 max-w-4xl text-base sm:text-lg">
            A collection of technical and research projects I’ve created or contributed to
            throughout my academic career, highlighting skills in data analysis, programming,
            visualization, spatial analysis, and scientific communication. Click on each card to
            learn more about the project!
          </p>
        </section>

        <section className="bg-surface">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className="group flex flex-col overflow-hidden rounded-lg bg-secondary shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="aspect-4/3 w-full overflow-hidden bg-muted">
                  <img
                    src={project.thumb}
                    alt={project.cardTitle}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <h2 className="font-heading text-base font-bold text-secondary-foreground sm:text-lg">
                    {project.cardTitle}
                  </h2>
                  <p className="text-sm leading-relaxed text-secondary-foreground/85">
                    {project.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
