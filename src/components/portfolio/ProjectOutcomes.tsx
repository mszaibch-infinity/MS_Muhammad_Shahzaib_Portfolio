import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, FileText, Settings, Wind } from "lucide-react";

const projects = [
  {
    slug: "data-analysis",
    icon: BarChart3,
    title: "Data Analysis & Visualizations",
    blurb: "Interactive dashboards turning process and emissions data into decisions.",
  },
  {
    slug: "sustainability-reports",
    icon: FileText,
    title: "Sustainability Reports",
    blurb: "LCAs, EPDs, ESG reports — benchmarking performance and progress.",
  },
  {
    slug: "process-optimization",
    icon: Settings,
    title: "Process Optimization",
    blurb: "Tuning process & product parameters for greener, more efficient outcomes.",
  },
  {
    slug: "compliance-auditing",
    icon: Wind,
    title: "Compliance & Auditing",
    blurb: "ISO 14001 / 9001 audits and EU ETS regulatory alignment, end to end.",
  },
];

const ProjectOutcomes = () => (
  <section id="projects" className="bg-secondary py-24">
    <div className="max-w-[1100px] mx-auto px-6">
      <div className="mb-12">
        <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">
          Some Project Highlights
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Expertise in Action
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Click on each area to explore real project outcomes, dashboards, and deliverables.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => {
          const Icon = p.icon;
          return (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl border border-border hover:border-primary/40 transition-all overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform" />
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={26} />
                </div>
                <ArrowRight
                  size={20}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.blurb}</p>
              <span className="text-primary text-sm font-bold uppercase tracking-wider">
                Explore →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProjectOutcomes;
