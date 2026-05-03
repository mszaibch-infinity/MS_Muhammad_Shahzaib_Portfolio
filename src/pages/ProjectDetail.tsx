import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BarChart3, FileText, Settings, Wind } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

const projects: Record<
  string,
  {
    icon: typeof BarChart3;
    title: string;
    tagline: string;
    sections: { heading: string; body: string }[];
  }
> = {
  "data-analysis": {
    icon: BarChart3,
    title: "Data Analysis & Visualizations",
    tagline: "Interactive dashboards turning emissions and process data into decisions.",
    sections: [
      { heading: "Project Overview", body: "Coming soon — full project description and goals." },
      { heading: "Approach & Methodology", body: "Coming soon — tools, datasets, and analytical approach." },
      { heading: "Dashboards & Visualizations", body: "Coming soon — embedded charts, screenshots, and live links." },
      { heading: "Outcomes & Impact", body: "Coming soon — measurable results and recommendations." },
    ],
  },
  "sustainability-reports": {
    icon: FileText,
    title: "Sustainability Reports",
    tagline: "LCAs, EPDs and ESG reports that benchmark performance and progress.",
    sections: [
      { heading: "Project Overview", body: "Coming soon — scope, standards (ISO 14040/44, EN 15804), reporting frameworks." },
      { heading: "Methodology", body: "Coming soon — system boundaries, data sources, allocation rules." },
      { heading: "Key Findings", body: "Coming soon — hotspots, comparisons, and improvement levers." },
      { heading: "Deliverables", body: "Coming soon — published reports, EPDs, and stakeholder briefings." },
    ],
  },
  "process-optimization": {
    icon: Settings,
    title: "Process Optimization",
    tagline: "Tuning process and product parameters for greener, more efficient outcomes.",
    sections: [
      { heading: "Problem Statement", body: "Coming soon — initial baseline, KPIs, and constraints." },
      { heading: "Optimization Strategy", body: "Coming soon — parameter studies, trials, and simulations." },
      { heading: "Results", body: "Coming soon — emissions reduction, energy savings, throughput gains." },
      { heading: "Lessons Learned", body: "Coming soon — what to scale and what to avoid next." },
    ],
  },
  "compliance-auditing": {
    icon: Wind,
    title: "Compliance & Auditing",
    tagline: "ISO 14001 / 9001 audits and EU ETS regulatory alignment, end to end.",
    sections: [
      { heading: "Audit Scope", body: "Coming soon — sites, processes, and applicable regulations." },
      { heading: "Findings", body: "Coming soon — non-conformities, risks, and improvement opportunities." },
      { heading: "Corrective Actions", body: "Coming soon — implementation plan and verification." },
      { heading: "Outcomes", body: "Coming soon — successful certifications, permits, or ETS submissions." },
    ],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projects[slug] : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-foreground mb-4">Project not found</h1>
            <Link to="/" className="text-primary font-bold hover:underline">
              ← Back to home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-foreground pt-28 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shrink-0">
              <Icon size={28} />
            </div>
            <div className="min-w-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3 sm:mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-primary-foreground/70 text-base sm:text-lg max-w-2xl">{project.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <main className="flex-1 bg-background py-12 sm:py-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
          {project.sections.map((s) => (
            <article key={s.heading} className="bg-card border border-border rounded-xl p-5 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-3">{s.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          ))}

          <div className="text-center pt-6">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-10 py-4 rounded hover:bg-primary/90 transition-colors"
            >
              Discuss a similar project
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
