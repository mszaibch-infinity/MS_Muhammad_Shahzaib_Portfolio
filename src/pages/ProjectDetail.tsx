import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BarChart3, Factory, FileText, FlaskConical, Settings, Wind } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

type ProjectSection = {
  heading: string;
  /** Single block of text; use when there is only one paragraph */
  body?: string;
  /** Multiple paragraphs; takes precedence over `body` when non-empty */
  paragraphs?: string[];
  /** Bullet list rendered after paragraphs / body */
  bullets?: string[];
  /** #EMBED optional: dashboard / Streamlit / YouTube URL */
  embedUrl?: string;
  /** Shown under the iframe */
  dashboardOpenUrl?: string;
  /** Split `body` on middle dots (·) into compact skill chips */
  skillsChips?: boolean;
  image?: string;
};

type ProjectEntry = {
  icon: typeof BarChart3;
  title: string;
  tagline: string;
  sections: ProjectSection[];
};

/* #PROJECT_REGISTRY - every slug here must match `slug` in ProjectOutcomes.tsx */
const projects: Record<string, ProjectEntry> = {
  "adaptive-signal-filtering": {
    icon: FlaskConical,
    title: "Machine Learning-Based Adaptive Signal Filtering",
    tagline:
      "An ML-driven approach to local signal analysis and adaptive filter selection.",
    sections: [
      {
        heading: "Project Overview",
        body:
          "Developed a machine-learning-based approach to adaptive signal denoising. Rather than applying one fixed filter across an entire signal, the project investigates selecting suitable filtering configurations for different signal regions.",
      },
      {
        heading: "Methodology",
        bullets: [
          "Sliding-window signal analysis.",
          "Statistical feature extraction from local signal regions.",
          "Random Forest-based filter selection.",
          "Evaluation of multiple filtering techniques and configurations.",
          "SNR-based filter performance evaluation.",
        ],
      },
      {
        heading: "Results & Evaluation",
        body:
          "The adaptive filtering approach was evaluated against a conventional Moving Average baseline using Signal-to-Noise Ratio (SNR).",
        image: "/images/Adaptive_signal_filtering.png",
      },
      {
        heading: "Technologies & Skills",
        body:
          "Python · NumPy · Pandas · SciPy · Scikit-learn · Matplotlib · Signal Processing · Feature Engineering · Hyperparameter Tuning· Regression · Classification · Model Evaluation . Model Improvment",
        skillsChips: true,
      },
      {
        heading: "Scope & Limitations",
        body:
          "Developed and evaluated using synthetic signals. Further validation on real-world measured signals is required to assess generalisation across different signal types and noise conditions.",
      },
    ],
  },



  "data-analysis": {
    icon: BarChart3,
    title: "Data Analysis & Visualizations",
    tagline: "Interactive dashboards turning emissions and process data into decisions.",
    sections: [
      { heading: "Project Overview", body: "Coming soon: full project description and goals." },
      { heading: "Approach & Methodology", body: "Coming soon: tools, datasets, and analytical approach." },
      { heading: "Dashboards & Visualizations", body: "Coming soon: embedded charts, screenshots, and live links." },
      { heading: "Outcomes & Impact", body: "Coming soon: measurable results and recommendations." },
    ],
  },

  "supplier-emissions-csrd": {
    icon: FileText,
    title: "Supplier Emissions Data Infrastructure & CSRD Reporting Pipeline",
    tagline:
      "Structured supplier energy ingestion, DuckDB warehouse, versioned factors, and reporting aligned with CSRD scrutiny.",
    sections: [
      {
        heading: "Background",
        paragraphs: [
          "Sustainability teams at global brands face a structural data challenge that grows more acute every year. Supplier energy data arrives in inconsistent formats, reported in different units, across multiple countries, with missing submissions and no standardised collection process. Without robust data infrastructure to ingest, validate, and transform this information, GHG inventories remain manually assembled in spreadsheets, unreliable, unauditable, and increasingly non-compliant as regulatory pressure tightens.",
          "The EU Corporate Sustainability Reporting Directive is accelerating this. CSRD enforcement requires granular, verified emissions data across the full value chain, with sector-specific disclosure requirements that evolve each reporting cycle. Spreadsheet-based reporting cannot meet this standard. What is required is an engineered workflow that treats sustainability data with the same rigour applied to financial data.",
        ],
      },
      {
        heading: "The project",
        paragraphs: [
          "This project implements the core data infrastructure of a production-grade supplier emissions monitoring system, replicating the end-to-end workflow that sustainability and data engineering teams at large brands operate: structured ingestion from supplier sources, automated transformation and enrichment, warehouse-layer storage, analytical querying, and interactive reporting.",
          "The pipeline processes raw energy submissions across 8 manufacturing facilities in 5 countries, handling the data quality conditions that characterise real supply chain reporting: unit inconsistencies, missing submissions, and format errors, and produces a clean, versioned GHG inventory aligned with the GHG Protocol Corporate Standard.",
          "DuckDB serves as the analytical warehouse layer, structured with a star schema that mirrors the architecture of cloud platforms such as BigQuery. Emission factors are stored as versioned reference data rather than hardcoded values, so annual updates to IEA and DEFRA figures require a single row change, a production engineering pattern that ensures long-term auditability and traceable lineage across reporting cycles.",
          "The dashboard connects directly to the pipeline output and updates as underlying data changes. Filters operate across all views simultaneously, supporting the drill-down analysis that sustainability leads, procurement teams, and compliance officers require; surfacing coverage rates, compliance gaps, and data quality classifications across the facility network.",
        ],
        embedUrl: "https://ms-digital-mrv-projects.streamlit.app/?embedded=true",
        dashboardOpenUrl: "https://ms-digital-mrv-projects.streamlit.app/",
      },
      {
        heading: "Skills and knowledge",
        body: "Python data analysis · SQL data modelling · DuckDB · GHG Protocol Corporate Standard · IEA and DEFRA emission factors · Data quality hierarchy · CSRD ESRS E1 disclosure requirements · Compliance gap analysis · SBTi target tracking · Data visualisation · Dashboard design",
        skillsChips: true,
      },
      {
        heading: "Scope",
        paragraphs: [
          "Eight supplier facilities across five countries, covering structured ingestion, automated validation, warehouse storage, and regulatory-aligned reporting. The pipeline architecture applies equally to other sustainability domains: product carbon footprinting, Scope 3 Category 4 freight, water and waste reporting, and to any organisation that needs to collect structured data from distributed sources, validate it against a standard, and surface it for regulatory or strategic use. The warehouse output is also a direct input for more advanced workstreams: predictive emissions modelling, supplier anomaly detection, and regression analysis of production volume against carbon intensity.",
        ],
      },
    ],
  },

  "industrial-emissions-compliance": {
    icon: Factory,
    title: "Industrial Emissions Compliance Monitoring Dashboard",
    tagline: "Nine-month operating window, exceedance detection, and compliance KPIs in one Streamlit layer.",
    sections: [
      {
        heading: "Background",
        paragraphs: [
          "Industrial facilities operating under continuous emissions monitoring obligations generate high-frequency data across multiple process parameters, yet most of it is never properly interrogated. Exceedance events are logged but not investigated. Compliance rates are reported but not understood. The gap between raw monitoring data and actionable operational insight is where regulatory risk accumulates, and where engineering resource gets misallocated when something goes wrong.",
        ],
      },
      {
        heading: "The project",
        paragraphs: [
          "This project builds an end-to-end emissions analysis pipeline across a simulated nine-month operating period, monitoring five process parameters across multiple production lines, detecting exceedance events against regulatory thresholds, and surfacing compliance patterns through an interactive dashboard.",
          "The analysis produced a finding with direct operational consequence: CO exceedances showed no significant correlation with production rate increases. In an active monitoring context, that result matters: it redirects investigation away from load management and toward combustion efficiency or instrumentation integrity. That distinction determines where engineering resource is allocated and how a regulatory inquiry is answered.",
          "The dashboard delivers KPI-level compliance metrics, time series monitoring for PM, NOx, and CO against threshold limits, production-emissions scatter analysis, and a full correlation matrix across process parameters.",
        ],
        embedUrl: "https://industrialemisison-production.up.railway.app/?embedded=true",
        dashboardOpenUrl: "https://industrialemisison-production.up.railway.app/",
      },
      {
        heading: "Skills and knowledge",
        body: "Emissions compliance analysis · Continuous emissions monitoring (CEM) · Exceedance detection · Regulatory threshold benchmarking · Time series analysis · Correlation analysis · Process anomaly identification · Python data analysis and visualization · Streamlit hosting · Data pipeline structuring · Dashboard design",
        skillsChips: true,
      },
      {
        heading: "Scope",
        paragraphs: [
          "Five process parameters monitored across multiple production lines over nine months. Pipeline outputs include a cleaned emissions dataset, monthly aggregations, compliance summary by parameter, and a correlation matrix. The structured output is a direct input for predictive exceedance modelling, anomaly detection, and regression analysis of production volume against emissions intensity.",
        ],
      },
    ],
  },

  "process-emissions-diagnostic": {
    icon: Settings,
    title: "Process Emissions Diagnostic & Instrumentation Integrity Analysis",
    tagline: "Synthetic year-long CEM-style data, discrepancy detection, and root-cause evidence for audits.",
    sections: [
      {
        heading: "Background",
        paragraphs: [
          "One of the most underappreciated risks in industrial emissions management is not that a facility emits above its limit. It is that the monitoring system reports that it does not. Sensor misconfiguration, incorrect correction factors, and measurement drift create a gap between what instruments report and what is actually being emitted. This gap only surfaces during third-party audits, regulatory inspections, or when the discrepancy becomes too large to ignore. By that point, the compliance and reputational consequences are already in motion.",
        ],
      },
      {
        heading: "The project",
        paragraphs: [
          "This project simulates a full year of process and emissions data across a combustion-based industrial operation, engineers a realistic monitoring failure scenario, and constructs a diagnostic framework to detect, quantify, and explain it.",
          "The core finding is a sensor discrepancy ratio of 2.0: online monitoring consistently reporting at half the value of independent audit measurements across the same operating period. The root cause analysis identifies three concurrent issues: a pressure leak producing artificially stable O₂ readings despite rising CO, an incorrect correction factor applied to the online system producing systematically underreported values, and incomplete combustion during a defined anomaly window driving real exceedances that the online system failed to flag.",
          "The correlation between O₂ and CO, the divergence between online and audit measurement series, and the anomaly period isolation are all quantified and visualised, producing the kind of evidence base that supports both internal engineering investigation and regulatory disclosure.",
        ],
        embedUrl: "https://processemissiondiagnostic-production.up.railway.app/?embedded=true",
        dashboardOpenUrl: "https://processemissiondiagnostic-production.up.railway.app/",
      },
      {
        heading: "Skills and knowledge",
        body: "Process data analysis · Emissions instrumentation diagnostics · Sensor discrepancy quantification · Root cause analysis · Anomaly detection · Combustion process monitoring · Compliance gap identification · Python data analysis · Streamlit hosting· Dashboard design",
        skillsChips: true,
      },
      {
        heading: "Scope",
        paragraphs: [
          "Process data across five parameters: production rate, burner load, O₂, temperature, and CO, with parallel online and audit measurement series. Pipeline outputs include a flagged process dataset, monthly aggregations, correlation matrix, KPI summary, and a structured root cause table. The diagnostic framework applies directly to any facility operating continuous emissions monitoring (CEM) and to any domain where the integrity of the measurement system itself is a compliance and audit risk.",
        ],
      },
    ],
  },

  "air-quality-research": {
    icon: Wind,
    title: "Air quality research",
    tagline: "Field work and analysis narrative in preparation.",
    sections: [
      {
        heading: "Coming soon",
        body: "Full project materials will be uploaded soon. Thank you for your patience.",
      },
    ],
  },

  "process-optimization": {
    icon: Settings,
    title: "Process Optimization",
    tagline: "Tuning process and product parameters for greener, more efficient outcomes.",
    sections: [
      { heading: "Problem Statement", body: "Coming soon: initial baseline, KPIs, and constraints." },
      { heading: "Optimization Strategy", body: "Coming soon: parameter studies, trials, and simulations." },
      { heading: "Results", body: "Coming soon: emissions reduction, energy savings, throughput gains." },
      { heading: "Lessons Learned", body: "Coming soon: what to scale and what to avoid next." },
    ],
  },
  "compliance-auditing": {
    icon: Wind,
    title: "Compliance & Auditing",
    tagline: "ISO 14001 / 9001 audits and EU ETS regulatory alignment, end to end.",
    sections: [
      { heading: "Audit Scope", body: "Coming soon: sites, processes, and applicable regulations." },
      { heading: "Findings", body: "Coming soon: non-conformities, risks, and improvement opportunities." },
      { heading: "Corrective Actions", body: "Coming soon: implementation plan and verification." },
      { heading: "Outcomes", body: "Coming soon: successful certifications, permits, or ETS submissions." },
    ],
  },
  "sustainability-reports": {
    icon: Settings,
    title: "Sustainability Reports",
    tagline: "LCAs, EPDs and ESG reports that benchmark performance and progress.",
    sections: [
      { heading: "Project Overview", body: "Coming soon: scope, standards (ISO 14040/44, EN 15804), reporting frameworks." },
      { heading: "Methodology", body: "Coming soon: system boundaries, data sources, allocation rules." },
      { heading: "Key Findings", body: "Coming soon: hotspots, comparisons, and improvement levers." },
      { heading: "Deliverables", body: "Coming soon: published reports, EPDs, and stakeholder briefings." },
    ],
  },
};

const DEFAULT_DOCUMENT_TITLE = "Muhammad Shahzaib | Environmental Professional";

function SectionBody({
  section: s,
  sectionIndex,
}: {
  section: ProjectSection;
  sectionIndex: number;
}) {
  if (s.skillsChips && s.body) {
    const chips = s.body.split(" · ").map((c) => c.trim()).filter(Boolean);
    return (
      <div className="flex flex-wrap gap-2 pt-1">
        {chips.map((chip) => (
          <span
            key={chip}
            className="inline-flex items-center rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-sm font-medium text-foreground/90"
          >
            {chip}
          </span>
        ))}
      </div>
    );
  }

  if (s.paragraphs && s.paragraphs.length > 0) {
    return (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {s.paragraphs.map((para, idx) => (
          <p
            key={idx}
            className={
              s.heading === "Background" && idx === 0
                ? "text-foreground/90 font-medium"
                : undefined
            }
          >
            {para}
          </p>
        ))}
      </div>
    );
  }

  if (s.body != null && s.body !== "") {
    return (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p className={sectionIndex === 0 ? "text-foreground/90 font-medium" : undefined}>{s.body}</p>
      </div>
    );
  }

  return null;
}

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projects[slug] : undefined;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Muhammad Shahzaib`;
      return () => {
        document.title = DEFAULT_DOCUMENT_TITLE;
      };
    }
    document.title = `Project not found | Muhammad Shahzaib`;
    return () => {
      document.title = DEFAULT_DOCUMENT_TITLE;
    };
  }, [project]);

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
  const isComingSoonProject = slug === "air-quality-research";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

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
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shrink-0 ring-2 ring-primary/30">
              <Icon size={28} />
            </div>
            <div className="min-w-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3 sm:mb-4 leading-tight tracking-tight">
                {project.title}
              </h1>
              <p className="text-primary-foreground/75 text-base sm:text-lg max-w-2xl leading-relaxed border-l-2 border-primary/50 pl-4">
                {project.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-gradient-to-b from-muted/30 to-background py-12 sm:py-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
          {isComingSoonProject ? (
            <article className="rounded-xl border border-dashed border-primary/25 bg-card/80 p-8 sm:p-12 text-center shadow-sm">
              <p className="text-5xl sm:text-6xl mb-4" aria-hidden>
                🌫️
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-3">Coming soon</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
                Full project materials will be uploaded soon. Thank you for your patience.
              </p>
            </article>
          ) : (
            project.sections.map((s, i) => (
              <article
                key={`${s.heading}-${i}`}
                className="rounded-xl border border-border bg-card p-5 sm:p-8 shadow-sm border-l-[3px] border-l-primary/45 pl-5 sm:pl-8"
              >
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-1 pb-3 border-b border-border/80">
                  <span className="text-primary/90">{s.heading.charAt(0)}</span>
                  <span>{s.heading.slice(1)}</span>
                </h2>
                <div className="pt-4">
                  <SectionBody section={s} sectionIndex={i} />
                  {s.bullets && s.bullets.length > 0 ? (
                    <ul className="list-disc space-y-2 pl-5 pt-3 text-muted-foreground marker:text-primary/70">
                      {s.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={`${s.heading} illustration`}
                      className="mt-6 w-full rounded-lg border border-border bg-muted/30"
                    />
                  ) : null}
                </div>
                {s.embedUrl ? (
                  <>
                    <div className="mt-6 w-full overflow-hidden rounded-lg border border-border bg-muted/30 ring-1 ring-border/50">
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
                          className="font-semibold text-primary underline-offset-4 hover:underline"
                        >
                          Open dashboard in new tab
                        </a>
                      </p>
                    ) : null}
                  </>
                ) : null}
              </article>
            ))
          )}

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
