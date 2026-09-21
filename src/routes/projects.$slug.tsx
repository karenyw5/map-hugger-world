import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getProject } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.cardTitle} | Karen Wang GIS Portfolio` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: loaderData.cardTitle },
          { property: "og:description", content: loaderData.summary },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-heading text-sm font-bold text-secondary transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to portfolio
          </Link>
        </div>

        <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
          <div className="overflow-hidden rounded-lg bg-surface">
            <div className="flex flex-col gap-6 p-5 sm:p-8 lg:flex-row lg:items-center lg:gap-10">
              <img
                src={project.hero}
                alt={project.title}
                className="w-full rounded-md object-contain shadow-card lg:w-3/5"
                loading="eager"
              />
              <div className="lg:w-2/5">
                <h1 className="text-2xl font-bold leading-snug sm:text-3xl">{project.title}</h1>
                <p className="mt-3 font-body text-base italic text-secondary sm:text-lg">
                  {project.authors}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">{project.sectionHeading}</h2>
              <div className="prose-body mt-3 text-base sm:text-lg">
                {project.paragraphs.map((text) => (
                  <p key={text.slice(0, 40)}>{text}</p>
                ))}
              </div>

              {project.bullets && (
                <>
                  <h3 className="mt-8 text-lg font-bold sm:text-xl">
                    Personal Responsibilities &amp; Takeaways
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {project.bullets.map((item) => (
                      <li key={item.slice(0, 40)} className="flex gap-3 leading-relaxed">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-2 shrink-0 rounded-full bg-accent"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <aside className="space-y-3 lg:sticky lg:top-6 lg:self-start">
              {project.pdf && (
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-md bg-surface px-4 py-3 font-heading text-sm font-bold text-primary transition-all hover:scale-[1.02] hover:bg-accent hover:text-accent-foreground"
                >
                  <FileText className="size-4" aria-hidden="true" />
                  View full map layout (PDF)
                </a>
              )}
              {project.links?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-md bg-surface px-4 py-3 font-heading text-sm font-bold text-primary transition-all hover:scale-[1.02] hover:bg-accent hover:text-accent-foreground"
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                  {link.label}
                </a>
              ))}
              {project.pdf && (
                <div className="hidden overflow-hidden rounded-md border border-border lg:block">
                  <object
                    data={`${project.pdf}#view=FitH`}
                    type="application/pdf"
                    className="h-[520px] w-full"
                    aria-label={`${project.cardTitle} map layout`}
                  >
                    <p className="p-4 text-sm">
                      Your browser can’t display this PDF inline. Use the button above to open it.
                    </p>
                  </object>
                </div>
              )}
            </aside>
          </div>
        </section>

        {project.gallery && (
          <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <h2 className="text-xl font-bold sm:text-2xl">
              {project.galleryHeading ?? "Final Maps"}
            </h2>
            <div className="mt-5 grid gap-8 lg:grid-cols-2">
              {project.gallery.map((figure) => (
                <figure key={figure.src} className="space-y-2">
                  <img
                    src={figure.src}
                    alt={figure.caption}
                    className="w-full rounded-lg object-contain shadow-card"
                    loading="lazy"
                  />
                  <figcaption className="text-sm italic text-muted-foreground">
                    {figure.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
