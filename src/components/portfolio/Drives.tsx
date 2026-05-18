import { useState } from "react";
import {
  Plus,
  Minus,
  Leaf,
  Wind,
  ShieldCheck,
  BarChart3,
  FlaskConical,
  FileBarChart,
} from "lucide-react";

import measurementImg from "@/assets/measurement-setup.jpg";
import dashboardImg from "@/assets/dashboard-snapshot.jpg";
import impactImg from "@/assets/impact-highlight.jpg";

const drives = [
  {
    icon: Leaf,
    title: "Environmental Measurement & Instrumentation",
    desc:
      "Industrial air quality and emission measurement systems for dust, particulate matter, and gas emissions in field and controlled environments.\n\nGas emission measurement using FTIR-based online systems and absorption-based offline sampling techniques (bubbling/impinger systems)\n\nIndustrial particulate and dust sampling using portable and stationary samplers, along with online and offline monitoring systems\n\nGravimetric filter-based dust measurement and ISO-aligned emission sampling procedures, including SFS-EN 13284 for stack emission monitoring\n\nLaboratory analysis using spectrometric and chemical methods for emission characterization and compliance evaluation\n\nIntegrated use of field instruments and reference methods to ensure consistency and regulatory-grade emission data",
  },
  {
    icon: Wind,
    title: "ESG & Sustainability Reporting Systems",
    desc:
      "Regulatory environmental reporting systems for corporate emissions disclosure, focused on structuring, automating, and validating sustainability data workflows.\n\nGHG Protocol Scope 1, 2, and 3 accounting, including emissions factor application and calculation frameworks\n\nCSRD and ESRS E1 climate disclosure requirements covering reporting boundaries, data requirements, and assurance expectations\n\nAutomated emissions data pipelines from raw inputs through structured datasets to reporting dashboards\n\nData quality control, anomaly detection, and audit-traceable reporting outputs\n\nWork with fragmented datasets requiring structured assumptions and documentation for reporting consistency",
  },
  {
    icon: ShieldCheck,
    title: "Industrial & Process Systems",
    desc:
      "Industrial manufacturing environments involving real process and emissions data, focusing on system behavior, operational signals, and data interpretation.\n\nProcess and emissions data analysis including correlation, anomaly detection, compliance tracking, and threshold evaluation\n\nHandling high-frequency and incomplete industrial datasets and converting them into structured reporting outputs\n\nLinking process variables with emissions behavior for root-cause interpretation of operational changes\n\nCross-functional work translating technical data into operational and management-level insights",
  },
  {
    icon: BarChart3,
    title: "Environmental Compliance & Regulation",
    desc:
      "Industrial environmental compliance systems focused on emissions monitoring, verification, and regulatory reporting.\n\nEmissions threshold monitoring and compliance tracking against regulatory limits\n\nIdentification of data gaps and inconsistencies affecting compliance reporting accuracy\n\nMeasurement, reporting, and verification (MRV) processes aligned with regulatory requirements\n\nAudit-ready documentation and structured reporting practices for regulatory environments",
  },
  {
    icon: FlaskConical,
    title: "Carbon & Decarbonisation Systems",
    desc:
      "Carbon accounting and industrial decarbonisation systems linking emissions data with verification and reporting frameworks.\n\nVoluntary carbon market structures including credits, registries, additionality, permanence, and baseline methodologies\n\nDigital MRV systems combining sensor data, operational records, and modeled estimates for carbon quantification\n\nCarbon removal methodologies and certification frameworks including Puro.earth standards and eligibility criteria\n\nEU compliance systems including ETS benchmarks, CBAM implications, and industrial carbon reporting obligations",
  },
  {
    icon: FileBarChart,
    title: "Air Quality & Atmospheric Measurement Systems",
    desc:
      "Work with air quality, emissions, and atmospheric measurement systems across industrial hygiene, EHS, and climate-related monitoring contexts involving particulate and gas emissions.\n\nIndoor and occupational air quality measurements for EHS and industrial hygiene applications, including airborne particulate and gas concentrations and exposure indicators such as lung-deposited surface area (LDSA)\n\nIndustrial and energy sector emissions monitoring focused on combustion-related particulate matter, stack emissions, and process emissions used in compliance and operational control\n\nTransport emissions measurement across vehicle and non-road sources, covering particulate and gaseous emissions under varying operational conditions\n\nAtmospheric and climate monitoring systems involving aerosol behaviour, dispersion, and particulate transport affecting regional air quality and climate systems\n\nInterpretation of measurement data from field and laboratory systems used in emissions, dust, air quality, and atmospheric particle monitoring",
  },
];

const visualTemplates = [
  {
    title: "Measurements",
    image: measurementImg,
  },
  {
    title: "Digital Reporting",
    image: dashboardImg,
  },
  {
    title: "Data analysis",
    image: impactImg,
  },
];

const Drives = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="drives" className="bg-background py-10 sm:py-14">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">

        {/* Profile */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-card to-card/90 border-2 border-primary rounded-2xl p-6 sm:p-8 shadow-sm">
            <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">
              Profile overview
            </p>

            <div className="text-foreground/80 text-sm sm:text-base leading-relaxed max-w-4xl italic space-y-4">
              <p>
                I work across measurement systems, industrial data workflows, and regulatory reporting
                environments, helping organizations turn complex operational and environmental data into
                reliable and usable information for decision-making and compliance.
              </p>

              <p>
                My background combines hands-on measurement and instrumentation work with analytical
                problem-solving across industrial, research, and monitoring contexts.
              </p>

              <p>
                Across different projects, I focus on structuring fragmented data, identifying inconsistencies,
                and translating technical outputs into practical insights.
              </p>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mb-10">
          <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">
            Focused Areas
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Fields of Expertise
          </h2>
        </div>

        {/* Image Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {visualTemplates.map((item) => (
            <article
              key={item.title}
              className="group rounded-xl border border-border bg-card/70 p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden rounded-lg border border-primary/20 bg-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <p className="mt-3 text-sm font-semibold text-foreground">
                {item.title}
              </p>
            </article>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {drives.map((d, i) => {
            const isOpen = active === i;
            const Icon = d.icon;

            return (
              <div
                key={d.title}
                className={`bg-card border rounded-xl shadow-sm transition-all overflow-hidden ${
                  isOpen
                    ? "border-primary shadow-lg"
                    : "border-border hover:border-primary/40"
                }`}
              >
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 px-5 md:px-7 py-5 text-left"
                >
                  <div
                    className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      isOpen
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-primary"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  <span className="flex-1 text-sm sm:text-base md:text-lg font-bold text-foreground">
                    {d.title}
                  </span>

                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      isOpen
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 md:px-7 pb-6 text-muted-foreground text-sm sm:text-base md:pl-16">
                    {d.desc.split("\n\n").map((p) => (
                      <p key={p} className="mb-3 last:mb-0">
                        {p}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Drives;