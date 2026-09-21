import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karen Wang | GIS Portfolio" },
      {
        name: "description",
        content:
          "Karen Wang is a geospatial data science master's student at the University of Michigan working on flooding, coastal risk, remote sensing, and conservation.",
      },
      { property: "og:title", content: "Karen Wang | GIS Portfolio" },
      {
        property: "og:description",
        content:
          "GIS, remote sensing, and cartography work on flooding, coastal oceanography, and conservation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const details = [
  {
    heading: "Research Interests",
    body: "GIS, Remote Sensing, Climate Change, Coastal Oceanography, Disaster Response, Conservation Ecology",
  },
  {
    heading: "Technical Skills",
    body: "Esri ArcGIS Pro, QGIS, Google Earth Engine, Microsoft Suite, Adobe Photoshop & Illustrator",
  },
  {
    heading: "Programming Languages",
    body: "R, Python, C++, HTML/CSS, GitHub",
  },
];

function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <h1 className="text-center text-3xl font-bold uppercase tracking-wide sm:text-4xl">
            About Me
          </h1>

          <div className="mt-8 flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            <img
              src="/images/headshot.jpeg"
              alt="Karen Wang headshot"
              className="h-56 w-56 shrink-0 rounded-full object-cover shadow-card sm:h-64 sm:w-64"
              loading="eager"
            />
            <div className="prose-body max-w-2xl text-base sm:text-lg">
              <p>
                Welcome! I’m Karen Wang, a Master’s student at the University of Michigan School of
                Environment and Sustainability specializing in Geospatial Data Science and Ecosystem
                Sciences &amp; Management. I’m interested in addressing environmental issues with
                data-driven solutions, combining GIS and remote sensing applications with clear,
                impactful data visualization and cartographic design, with a particular interest in
                oceanography, flood mitigation, and water resources.
              </p>
              <p>
                I enjoy working with spatial and environmental data to study climate change,
                flooding, natural hazards, and conservation. Most recently, through the NOAA National
                Ocean Service William M. Lapenta Internship, I analyzed extreme water levels using
                Python, time-series analysis, and statistical models to better understand changing
                coastal flood risk. Previously, through NASA DEVELOP, I integrated satellite, census,
                and ancillary data to create flood-risk and social-vulnerability models, helping
                identify priority areas for wetland conservation in South Carolina.
              </p>
              <p>I also enjoy figure skating, drawing and painting, and birdwatching!</p>
            </div>
          </div>
        </section>

        <section className="bg-surface">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-3">
            {details.map((item) => (
              <div key={item.heading}>
                <h2 className="font-heading text-lg font-bold text-secondary sm:text-xl">
                  {item.heading}
                </h2>
                <p className="mt-2 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-14">
            <div className="flex-1">
              <h2 className="text-2xl font-bold uppercase tracking-wide sm:text-3xl">Contact Me</h2>
              <p className="mt-3 text-base sm:text-lg">
                Feel free to contact me through email or LinkedIn!
              </p>
              <a
                href="mailto:karenyw@umich.edu"
                className="mt-2 inline-flex items-center gap-2 text-base text-secondary underline-offset-4 transition-colors hover:text-primary hover:underline sm:text-lg"
              >
                <Mail className="size-5" aria-hidden="true" />
                karenyw@umich.edu
              </a>

              <div className="mt-6 flex items-center gap-5">
                <a
                  href="https://www.linkedin.com/in/karenwangumich/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-secondary transition-all hover:scale-110 hover:text-accent"
                >
                  <Linkedin className="size-11" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/karenyw5"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-secondary transition-all hover:scale-110 hover:text-accent"
                >
                  <Github className="size-11" aria-hidden="true" />
                </a>
              </div>
            </div>

            <img
              src="/images/poster.jpg"
              alt="Karen Wang presenting a research poster"
              className="w-full max-w-lg rounded-lg object-cover shadow-card"
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
