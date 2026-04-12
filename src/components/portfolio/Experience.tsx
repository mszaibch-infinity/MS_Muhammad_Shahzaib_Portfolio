const experiences = [
  {
    period: "2025 – Present",
    role: "Environmental Intern — Environmental Management",
    org: "Paroc (Owens Corning), Finland",
    desc: "Executing emissions measurement campaigns across manufacturing units aligned with EU ETS and ISO standards. Improving GHG inventory accuracy through structured QA/QC, supporting regulatory compliance assessments, and collaborating with R&D and Sustainability teams.",
    projects: [
      "Led 10+ emissions measurement campaigns across multiple process units",
      "Built in-house measurement methodologies aligned with official reporting standards",
      "Supported third-party environmental compliance audits",
    ],
  },
  {
    period: "2023 – 2024",
    role: "Research Assistant — Emissions Research",
    org: "University of Eastern Finland (ILMARI Lab)",
    desc: "Contributed to EU-funded environmental research projects, supporting emissions measurement campaigns, instrument calibration, and data analysis. Co-authored conference papers and a peer-reviewed publication.",
    projects: [
      "Built environmental modeling project using SMEAR II station data",
      "Designed experimental emissions sampling and filter collection systems",
      "Co-authored peer-reviewed scientific publication",
    ],
  },
  {
    period: "2021 – 2023",
    role: "Monitoring & Evaluation Officer",
    org: "City District Government Lahore, Pakistan",
    desc: "Monitored and evaluated development projects for EPA compliance and EIA requirements. Contributed to city sustainability plans and developed real-time digital monitoring platforms.",
    projects: [
      "Developed real-time digital monitoring platform for fleet tracking",
      "Integrated RFID, GIS, and automated data tools for environmental monitoring",
      "Contributed to city waste management and mobility sustainability plans",
    ],
  },
  {
    period: "2020 – 2021",
    role: "Environmental Coordinator",
    org: "Integrated Consulting Services Limited",
    desc: "Delivered consulting on environmental monitoring, compliance audits, and ISO 14001/9001 alignment. Prepared EIAs, wastewater analysis, and environmental risk assessments.",
    projects: [
      "Conducted environmental compliance assessments and ISO audits",
      "Prepared Environmental Impact Assessments and risk assessments",
      "Advised clients on regulatory permitting and compliance strategies",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-24 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-3">Career</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
          Professional <span className="text-primary">Experience</span>
        </h2>
      </div>
      <div className="max-w-3xl mx-auto space-y-0">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8 pb-12 last:pb-0 border-l-2 border-primary/30">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
            <p className="text-primary font-semibold text-sm mb-1">{exp.period}</p>
            <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
            <p className="text-muted-foreground font-medium mb-2">{exp.org}</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{exp.desc}</p>
            <div className="space-y-1">
              {exp.projects.map((project, j) => (
                <p key={j} className="text-sm text-foreground/80 flex items-start gap-2">
                  <span className="text-primary mt-1.5 shrink-0">▸</span>
                  {project}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
