
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
  images?: {
    src: string;
    alt: string;
  }[];
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
          "Python · NumPy · Pandas · SciPy · Scikit-learn · Matplotlib · Signal Processing · Feature Engineering · Hyperparameter Tuning · Regression · Classification · Model Evaluation · Model Improvement",
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
    title: "Supplier Emissions Data Infrastructure & Reporting",
    tagline:
      "A supplier emissions data pipeline combining automated validation, a DuckDB warehouse, versioned emission factors, and interactive reporting.",

    sections: [
      {
        heading: "Background",
        paragraphs: [
          "Sustainability teams at companies with global supply chains face a persistent challenge: collecting reliable emissions data from suppliers. Energy data arrives in different formats and units, across multiple countries, with incomplete submissions and no consistent collection process. When this information is managed through separate spreadsheets, validating figures, tracing their sources, and preparing a consistent greenhouse gas (GHG) inventory becomes time-consuming and difficult to audit.",
          "This challenge is becoming increasingly important as companies prepare sustainability disclosures under the EU Corporate Sustainability Reporting Directive (CSRD) and the European Sustainability Reporting Standards (ESRS). Reporting on climate-related impacts requires reliable information, including relevant value-chain emissions data. This creates a need for structured processes that can ingest, validate, and transform supplier data into traceable information for analysis and reporting.",
          "The same approach can be applied to different types of business data, with the data ingestion, cleaning, validation, transformation, and reporting processes adapted to the specific requirements of each use case.",
        ],
      },
      {
        heading: "The project",
        paragraphs: [
          "I developed a working prototype of a supplier emissions reporting system, processing energy data from eight manufacturing facilities across five countries. Built with Python and DuckDB, it brings together data processing, validation, emissions calculations, and interactive reporting in one workflow. The application provides an overview of emissions KPIs, facility benchmarking, and compliance indicators, with additional functionality for monitoring data coverage, identifying missing submissions, and checking data quality.",
          "Designed to be adaptable, the prototype can be customised for different datasets, business requirements, and deployment environments, including local deployment where organisations need greater control over their data. The architecture also provides a foundation for future machine-learning applications, such as emissions forecasting and tracking progress towards reduction targets.",
        ],
        // embedUrl: "https://ms-digital-mrv-projects.streamlit.app/?embedded=true",
        // dashboardOpenUrl: "https://ms-digital-mrv-projects.streamlit.app/",
      },
      {
        heading: "Dashboard preview",
        paragraphs: [
          "The screenshots below show two parts of the reporting interface. The full prototype includes additional views for data coverage, data quality, and missing-submission monitoring, which can be demonstrated separately.",
        ],
        images: [
          {
            src: "/images/csrd-kpi-summary.png",
            alt: "Supplier emissions reporting dashboard showing the KPI summary",
          },
          {
            src: "/images/csrd-benchmarking-compliance.png",
            alt: "Facility benchmarking and compliance checks in the supplier emissions dashboard",
          },
        ],
      },
      {
        heading: "Skills and knowledge",
        body: "Python · SQL · Automated Data Processing & Reporting · Data ingestion and transformation · Data cleaning and validation · GHG Protocol Corporate Standard · CSRD and ESRS E1 reporting context · Emissions analysis · Dashboard development",
        skillsChips: true,
      },
      {
        heading: "Scope and potential applications",
        paragraphs: [
          "The prototype covers eight supplier facilities across five countries, from data ingestion and validation to warehouse storage and reporting. The same approach could be adapted to other sustainability data workflows, including product carbon footprints, freight emissions, water consumption, and waste reporting.",
          "Its modular structure also leaves room for further development. Depending on the organisation's needs, additional validation rules, reporting requirements, forecasting models, and supplier performance analysis could be added without rebuilding the entire system.",
        ],
      },
    ],
  },

  "industrial-emissions-compliance": {
    icon: Factory,
    title: "Industrial Emissions Compliance Monitoring",
    tagline: "Industrial emissions analysis, compliance assessment, and operational monitoring.",

    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "An industrial emissions monitoring project focused on assessing regulatory compliance, identifying emission exceedances, and understanding relationships between production activity and pollutant levels.",
          "Developed a Python-based analytical workflow to process emissions and operational data, evaluate compliance performance, and identify potential areas requiring further investigation."
        ],
        image: "/images/industrial-emissions-compliance-dashboard.png",
      },
      {
        heading: "Analysis and findings",
        paragraphs: [
          "Analysed pollutant levels against compliance limits, examined monthly emissions trends, and investigated correlations between production rates and emissions.",
          "One key finding was that CO exceedances did not strongly correlate with production rate increases, highlighting the importance of looking beyond production volume when investigating emissions issues."
        ],
      },
      {
        heading: "Skills and tools",
        body: "Python · Pandas · NumPy · Data Analysis · Emissions Compliance · Exceedance Detection · Regulatory Threshold Analysis · Time Series Analysis · Correlation Analysis · Anomaly Detection · Streamlit · Data Visualisation",
        skillsChips: true,
      },
      {
        heading: "Project scope",
        paragraphs: [
          "Analysed synthetic nine-month industrial operating data covering PM, NOx, SO2, CO, and production rates. Developed compliance KPIs, exceedance summaries, monthly aggregations, trend analysis, and an interactive monitoring dashboard.",
          "The project represents a real-world industrial monitoring scenario. Synthetic data was used to simulate realistic operating conditions while protecting confidential industrial information."
        ],
      },
    ],
  },

  "process-emissions-diagnostic": {
    icon: Settings,
    title: "Process Emissions Diagnostic",
    tagline: "Industrial emissions analysis, monitoring integrity, and root-cause investigation.",

    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "An industrial emissions diagnostic project exploring how discrepancies between online monitoring systems and independent audit measurements can hide potential compliance issues.",
          "Developed a Python-based analytical workflow using synthetic process and emissions data to investigate measurement discrepancies, identify abnormal operating periods, and examine possible contributing factors."
        ],
        image: "/images/process-emissions-diagnostic-dashboard.png",
      },
      {
        heading: "Analysis and findings",
        paragraphs: [
          "Compared online sensor readings with audit measurements, evaluated process-variable relationships, and investigated abnormal CO emission patterns. The data processing includes various process parameters to investigate potential correlations and root causes, which can also be used to optimize process and production performance and evaluating the abatment system's effectiveness.",
          "The analysis highlighted potential instrumentation issues and combustion-related behaviour, demonstrating how combining emissions data with process parameters can support more informed investigation and compliance monitoring."
        ],
      },
      {
        heading: "Skills and tools",
        body: "Python · Pandas · NumPy · Data Analysis · Exploratory Data Analysis · Correlation Analysis · Anomaly Detection · Root Cause Analysis · Process Monitoring · Data Visualisation",
        skillsChips: true,
      },
      {
        heading: "Project scope",
        paragraphs: [
          "The project is based on a real-world industrial scenario, designed to explore potential compliance issues and process performance improvements. Synthetic data was used to represent realistic operating conditions while protecting confidential industrial data."
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

                  {s.images && s.images.length > 0 ? (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {s.images.map((image) => (
                        <img
                          key={image.src}
                          src={image.src}
                          alt={image.alt}
                          className="w-full rounded-lg border border-border bg-muted/30"
                        />
                      ))}
                    </div>
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
