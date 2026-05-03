import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BarChart3, FileText, FlaskConical, Settings, Wind } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

type ProjectSection = {
  heading: string;
  body: string;
  /** #EMBED optional: Looker Studio / YouTube embed URL — renders iframe below body */
  embedUrl?: string;
};

type ProjectEntry = {
  icon: typeof BarChart3;
  title: string;
  tagline: string;
  sections: ProjectSection[];
};

/* #PROJECT_REGISTRY — every slug here must match `slug` in ProjectOutcomes.tsx */
const projects: Record<string, ProjectEntry> = {
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

  /* #ESG_PROJECT — demo with embedded Looker Studio (Google) dashboard */
  "esg-sustainability-reporting": {
    icon: FileText,
    title: "ESG / Sustainability Data Reporting",
    tagline: "Demo: interactive reporting view — embed your own Looker Studio or similar link the same way.",
    sections: [
      {
        heading: "Overview",
        body:
          "This page shows how you can combine narrative copy with a live embedded dashboard. Replace this text with your project summary, scope, and stakeholders. Below is a sample Looker Studio embed for demonstration only.",
      },
      {
        heading: "Live dashboard (demo embed)",
        body:
          "If the frame is blank, the host may block embedding from localhost — try again on your deployed site. You can also add a link that opens the full report in a new tab.",
        embedUrl:
          "https://datastudio.google.com/embed/reporting/f5a253f4-8b0d-422e-8917-69659a8c9be4/page/ZN2wF",
      },
      {
        heading: "How to reuse this pattern",
        body:
          "Duplicate the section with embedUrl in ProjectDetail.tsx, paste another embed URL, and adjust headings. For PDFs or external tools, use a normal link (you can extend this file with externalLinks later).",
      },
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

  /* #STUB_TILES — slugs aligned with ProjectOutcomes.tsx (replace copy when ready) */
  "environmental-compliance": {
    icon: Wind,
    title: "Environmental Compliance",
    tagline: "Air quality, emissions, and regulatory alignment — details coming soon.",
    sections: [
      { heading: "Project Overview", body: "Replace this placeholder with your scope, sites, and regulations." },
      { heading: "Deliverables", body: "Add methodology, findings, and links to reports or dashboards." },
    ],
  },
  "process-product-upgrade": {
    icon: Settings,
    title: "Process / Product Upgrade",
    tagline: "Quality assurance and process improvements — details coming soon.",
    sections: [
      { heading: "Project Overview", body: "Describe the baseline process and upgrade goals here." },
      { heading: "Results", body: "Summarize KPIs, trials, and outcomes." },
    ],
  },
  "research-projects": {
    icon: FlaskConical,
    title: "Research Projects",
    tagline: "Environmental impact and applied research — details coming soon.",
    sections: [
      { heading: "Project Overview", body: "Outline research questions, partners, and funding." },
      { heading: "Publications & outputs", body: "Link papers, posters, or datasets." },
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

      {/* #PROJECT_BODY — sections loop; optional embedUrl renders iframe (see #EMBED in type) */}
      <main className="flex-1 bg-background py-12 sm:py-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
          {project.sections.map((s) => (
            <article key={s.heading} className="bg-card border border-border rounded-xl p-5 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-3">{s.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              {s.embedUrl ? (
                <div className="mt-6 w-full overflow-hidden rounded-lg border border-border bg-muted/30">
                  {/* #IFRAME_EMBED — same pattern for another dashboard or YouTube embed URL */}
                  <iframe
                    title={s.heading}
                    src={s.embedUrl}
                    className="aspect-[4/3] min-h-[320px] w-full sm:min-h-[480px]"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              ) : null}
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
