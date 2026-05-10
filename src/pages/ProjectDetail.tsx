import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BarChart3, FileText, FlaskConical, Settings, Wind } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

type ProjectSection = {
  heading: string;
  /** Single block of text — use when there is only one paragraph */
  body?: string;
  /** Multiple paragraphs — spaced; takes precedence over `body` when non-empty */
  paragraphs?: string[];
  /** Bullet list rendered after paragraphs / body */
  bullets?: string[];
  /** #EMBED optional: dashboard / Streamlit / YouTube URL — renders iframe below text */
  embedUrl?: string;
  /** Shown under the iframe — opens live app when embedding is blocked */
  dashboardOpenUrl?: string;
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

  /* #ESG_PROJECT — GHG supplier pipeline + embedded Streamlit dashboard */
  "esg-sustainability-reporting": {
    icon: FileText,
    title: "ESG / Sustainability Data Reporting",
    tagline:
      "Production-style supplier GHG inventory pipeline — DuckDB star schema, versioned emission factors, and a live Streamlit reporting layer aligned with GHG Protocol and CSRD scrutiny.",
    sections: [
      {
        heading: "Background",
        paragraphs: [
          "Sustainability teams at global brands face a structural data challenge that grows more acute every year. Supplier energy data arrives in inconsistent formats, reported in different units, across multiple countries and time zones, with missing submissions and no standardised collection process. Without a robust data infrastructure to ingest, validate, and transform this raw information, GHG inventories remain manually assembled in spreadsheets; unreliable, unauditable, and increasingly non-compliant as the regulatory environment tightens.",
          "The EU Corporate Sustainability Reporting Directive is accelerating this pressure. CSRD enforcement requires companies to disclose granular, verified emissions data across their full value chain, with sector-specific requirements that evolve with each reporting cycle. Traditional spreadsheet-based reporting cannot meet this standard. What is required is consistent engineered worflows, one that treats sustainability data with the same rigour applied to financial data, providing rapid and reliable reporting outputs.",
        ],
      },
      {
        heading: "The project",
        paragraphs: [
          "This project replicates the core data infrastructure of a production-grade supplier emissions monitoring system. It models the end-to-end workflow that sustainability and data engineering teams at large brands operate: structured data ingestion from supplier sources, automated transformation and enrichment, warehouse-layer storage, analytical querying, and interactive reporting for business decision-making.",
          "This includes raw supplier energy submissions across 8 manufacturing facilities in 5 differentcountries. It handles the real-world data quality conditions that characterise supply chain reporting; unit inconsistencies, missing submissions, and format errors, and produces a clean, versioned GHG inventory aligned with the GHG Protocol Corporate Standard.",
          "A local SQL-based analytical database (DuckDB) serves as the warehouse layer which structured with a star schema identical, simulates the architecture used in cloud platforms such as BigQuery. Emission factors are stored as versioned reference data rather than hardcoded values, so annual updates to IEA and DEFRA figures require a single row change rather than code modification, a production engineering pattern that ensures long-term auditability.",
          "The interactive dashboard below is the reporting layer currenlty displaying in automated real-time application which can also be turned into other analytical tools like Power BI, Tableau, or Looker studio depending on the needs of the business. It connects directly to the pipeline output and updates in real time as underlying data changes. Filters operate across all charts simultaneously, enabling the kind of drill-down analysis that sustainability leads, procurement teams, and regulatory compliance officers require in their day-to-day work.",
          "The project structure and outcomes supports data traceability and auditability, providing a clear and transparent audit trail for the sustainability data being reported, which is indeed a challenge for many organisations to achieve, and requires a significant amount of effort and resources to implement."
        ],
        embedUrl: "https://ms-digital-mrv-projects.streamlit.app/?embedded=true",
        dashboardOpenUrl: "https://ms-digital-mrv-projects.streamlit.app/",
      },
      {
        heading: "Skills and methods applied",
        bullets: [
          "Python data engineering, SQL data modelling, Data visualisation, Data analytics",
          "GHG accounting: GHG Protocol Corporate Standard, Scope 1 and Scope 2 methodology, IEA location-based and DEFRA emission factors, data quality hierarchy (measured, estimated, missing)",
          "Regulatory mapping: CSRD ESRS E1 disclosure requirements, compliance gap analysis, SBTi target tracking framework",
        ],
      },
      {
        heading: "Scope",
        paragraphs: [
          "This project is designed as a reusable foundation. The pipeline architecture, data quality framework, and reporting layer apply equally to other sustainability domains; product carbon footprinting, Scope 3 Category 4 freight emissions, water and waste reporting, and to industries beyond apparel. The underlying patterns transfer to any organisation that needs to collect structured data from distributed sources, validate it against a standard, and surface it for regulatory or strategic use.",
          "The analytical layer is also intentionally extensible. The structured warehouse output is the right input for more advanced workstreams: predictive modelling of future emissions trajectories, anomaly detection on supplier energy patterns, and regression-based analysis of the relationship between production volume and carbon intensity. These represent the natural next layer of capability for organisations that have solved the foundational data collection problem this project addresses.",
        ],
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
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {s.paragraphs && s.paragraphs.length > 0
                  ? s.paragraphs.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))
                  : s.body != null && s.body !== ""
                    ? <p>{s.body}</p>
                    : null}
                {s.bullets && s.bullets.length > 0 ? (
                  <ul className="list-disc space-y-2 pl-5 pt-1">
                    {s.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              {s.embedUrl ? (
                <>
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
                  {s.dashboardOpenUrl ? (
                    <p className="mt-4 text-sm">
                      <a
                        href={s.dashboardOpenUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary underline-offset-4 hover:underline"
                      >
                        Open dashboard in new tab
                      </a>
                    </p>
                  ) : null}
                </>
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
