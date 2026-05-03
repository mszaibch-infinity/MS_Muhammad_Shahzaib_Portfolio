import { Link } from "react-router-dom";

/* #PROJECT_TILES — slug strings must match keys in pages/ProjectDetail.tsx (`projects` registry) */
const projects = [
  {
    slug: "esg-sustainability-reporting", // #ESG → detail page includes Looker Studio embed demo
    title: "ESG / Sustainability",
    subtitle: "Data Reporting",
    blurb: "Real-time Dashboard",
  },
  {
    slug: "environmental-compliance",
    title: "Environmental",
    subtitle: "Compliance",
    blurb: "Air Quality / Emissions",
  },
  {
    slug: "process-product-upgrade",
    title: "Process / Product",
    subtitle: "Upgrade",
    blurb: "Quality Assurance and Control",
  },
  {
    slug: "research-projects",
    title: "Research",
    subtitle: "Projects",
    blurb: "Environmental Impact",
  },
];

const ProjectOutcomes = () => (
  <section id="projects" className="bg-background py-16 sm:py-24">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
      <div className="mb-14">
        <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">
          Some Project Highlights
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Recent Projects
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Click any tile to explore project details, dashboards, and deliverables.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="group relative min-h-[200px] sm:aspect-square sm:min-h-0 rounded-2xl bg-foreground text-primary-foreground p-5 sm:p-6 md:p-7 flex flex-col justify-between shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:to-primary/0 transition-colors" />
            <div className="relative min-w-0">
              <h3 className="text-base sm:text-lg md:text-xl font-extrabold leading-tight">
                {p.title}
              </h3>
              <h3 className="text-base sm:text-lg md:text-xl font-extrabold leading-tight mb-2 sm:mb-3">
                {p.subtitle}
              </h3>
              <div className="w-10 h-[3px] bg-primary mb-2 sm:mb-3" />
              <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">
                {p.blurb}
              </p>
            </div>
            <span className="relative text-primary text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
              Explore →
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectOutcomes;
