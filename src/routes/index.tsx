import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, Mail, Satellite, Waves, Layers, Globe2 } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karen Wang | GIS & Remote Sensing Portfolio" },
      {
        name: "description",
        content:
          "Karen Wang is a geospatial data science master's student at the University of Michigan working on coastal flood risk, remote sensing, and conservation — NOAA and NASA DEVELOP experience.",
      },
      { property: "og:title", content: "Karen Wang | GIS & Remote Sensing Portfolio" },
      {
        property: "og:description",
        content:
          "Coastal flood risk, remote sensing, and cartography work from NOAA and NASA DEVELOP projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const credentials = [
  { value: "NOAA", label: "Lapenta Intern, National Ocean Service" },
  { value: "NASA", label: "DEVELOP Program, Coastal Water Resources" },
  { value: "U-M", label: "MS, Geospatial Data Science (SEAS)" },
  { value: `${projects.length}`, label: "Mapping & analysis projects" },
];

const capabilities = [
  {
    icon: Waves,
    title: "Coastal & Flood Risk",
    body: "Extreme water level statistics, sea level rise scenarios, and flood exposure modeling for coastal planning.",
  },
  {
    icon: Satellite,
    title: "Remote Sensing",
    body: "Landsat, Sentinel-1 SAR, NAIP, and LiDAR workflows in Google Earth Engine and ArcGIS Pro.",
  },
  {
    icon: Layers,
    title: "Spatial Analysis",
    body: "Weighted overlays, raster algebra, suitability models, and land cover change assessment.",
  },
  {
    icon: Globe2,
    title: "Science Communication",
    body: "Cartographic design, StoryMaps, posters, and technical reports for agency and public audiences.",
  },
];

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
        {/* Split hero */}
        <section className="relative overflow-hidden gradient-ink">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-accent/15 blur-3xl animate-float"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-secondary/25 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="animate-fade-up">
              <p className="font-body text-xs uppercase tracking-[0.28em] text-accent">
                Geospatial Data Science · University of Michigan
              </p>
              <h1 className="mt-4 text-3xl leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Mapping water, risk, and{" "}
                <span className="text-gradient-accent">resilient coastlines.</span>
              </h1>
              <p className="prose-body mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
                I’m Karen Wang — I turn satellite, LiDAR, and tide gauge data into maps and models
                that agencies can act on, from NOAA extreme water level analysis to NASA DEVELOP
                wetland conservation priorities.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.12em] text-accent-foreground transition-all duration-300 hover:shadow-glow hover:brightness-105"
                >
                  View GIS projects
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href="mailto:karenyw@umich.edu"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-all duration-300 hover:border-accent hover:text-accent"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  Get in touch
                </a>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/karenwangumich/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-primary-foreground/70 transition-all duration-300 hover:scale-110 hover:text-accent"
                >
                  <Linkedin className="size-6" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/karenyw5"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-primary-foreground/70 transition-all duration-300 hover:scale-110 hover:text-accent"
                >
                  <Github className="size-6" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto animate-fade-in lg:mx-0">
              <div
                aria-hidden="true"
                className="absolute inset-0 -rotate-3 rounded-2xl border border-accent/40"
              />
              <img
                src="/images/headshot.jpeg"
                alt="Karen Wang headshot"
                className="relative h-72 w-72 rounded-2xl object-cover shadow-lift transition-transform duration-700 hover:scale-[1.02] sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                loading="eager"
              />
            </div>
          </div>

          {/* Credentials strip */}
          <div className="relative border-t border-primary-foreground/10">
            <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
              {credentials.map((item, i) => (
                <Reveal key={item.label} delay={i * 90}>
                  <p className="font-heading text-2xl font-bold text-accent sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 font-body text-xs leading-relaxed text-primary-foreground/70 sm:text-sm">
                    {item.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.28em] text-secondary">About me</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">
              Environmental problems, solved with spatial data
            </h2>
            <div className="mt-4 accent-rule" />
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <Reveal className="prose-body text-base sm:text-lg">
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
                flooding, natural hazards, and conservation. Most recently, through the NOAA
                National Ocean Service William M. Lapenta Internship, I analyzed extreme water
                levels using Python, time-series analysis, and statistical models to better
                understand changing coastal flood risk.
              </p>
            </Reveal>
            <Reveal className="prose-body text-base sm:text-lg" delay={140}>
              <p>
                Previously, through NASA DEVELOP, I integrated satellite, census, and ancillary data
                to create flood-risk and social-vulnerability models, helping identify priority
                areas for wetland conservation in South Carolina. I care about deliverables that
                partners can actually use — maps, StoryMaps, and reports written for decision
                makers.
              </p>
              <p>I also enjoy figure skating, drawing and painting, and birdwatching!</p>
            </Reveal>
          </div>
        </section>

        {/* Capabilities */}
        <section className="gradient-mist border-y border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl">What I bring to a geospatial team</h2>
              <div className="mt-4 accent-rule" />
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((item, i) => (
                <Reveal key={item.title} delay={i * 110}>
                  <div className="group h-full rounded-xl border border-border bg-card p-6 shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:border-accent hover:shadow-card">
                    <span className="inline-flex size-11 items-center justify-center rounded-lg bg-secondary/12 text-secondary transition-all duration-400 group-hover:bg-secondary group-hover:text-secondary-foreground">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-heading text-base sm:text-lg">{item.title}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {details.map((item, i) => (
              <Reveal key={item.heading} delay={i * 110}>
                <div className="h-full border-l-2 border-accent pl-5">
                  <h3 className="font-heading text-lg text-secondary sm:text-xl">{item.heading}</h3>
                  <p className="mt-2 font-body leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Featured work teaser */}
        <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
          <Reveal>
            <div className="overflow-hidden rounded-2xl gradient-ink shadow-lift">
              <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2">
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.28em] text-accent">
                    Featured project
                  </p>
                  <h2 className="mt-3 text-xl text-primary-foreground sm:text-2xl">
                    NASA DEVELOP: wetlands, flood risk, and social vulnerability in South Carolina
                  </h2>
                  <p className="prose-body mt-3 text-sm text-primary-foreground/80 sm:text-base">
                    Landsat and Sentinel-1 flood modeling paired with census-based vulnerability,
                    delivered to the Coastal Conservation League as maps, a StoryMap, a poster, and
                    a technical report.
                  </p>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: "coastalsc-water-resources" }}
                    className="group mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-[0.12em] text-accent"
                  >
                    Explore the project
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
                <img
                  src="/images/FloodRiskandIsolatedWetlandsMap.png"
                  alt="Flood risk and isolated wetlands map of coastal South Carolina"
                  className="w-full rounded-xl bg-card object-contain p-2 shadow-card transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl">Contact me</h2>
              <div className="mt-4 accent-rule" />
              <p className="prose-body mt-5 text-base sm:text-lg">
                Feel free to contact me through email or LinkedIn! I’m happy to talk about
                geospatial roles, coastal resilience work, or collaboration on mapping projects.
              </p>
              <a
                href="mailto:karenyw@umich.edu"
                className="underline-sweep mt-4 inline-flex items-center gap-2 font-body text-base text-secondary sm:text-lg"
              >
                <Mail className="size-5" aria-hidden="true" />
                karenyw@umich.edu
              </a>
            </Reveal>
            <Reveal delay={140}>
              <img
                src="/images/poster.jpg"
                alt="Karen Wang presenting a research poster"
                className="w-full rounded-2xl object-cover shadow-card transition-transform duration-700 hover:scale-[1.01]"
                loading="lazy"
              />
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
