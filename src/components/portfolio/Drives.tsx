const drives = [
  {
    title: "Environmental Consulting",
    desc: "Providing expert recommendations on improving process and product parameters for greener outcomes, regulatory alignment, and sustainable industrial practices.",
  },
  {
    title: "Air Quality & Emission Management",
    desc: "Planning and executing emissions measurement campaigns, GHG accounting, and ensuring compliance with EU ETS, BAT limits, and ISO standards.",
  },
  {
    title: "Regulatory Compliance",
    desc: "EIA, EMS (ISO 14001), QMS (ISO 9001), environmental audits, permitting, and third-party audit support to meet compliance limits and industry benchmarks.",
  },
  {
    title: "Data Analysis & Dashboards",
    desc: "Connecting process signals with environmental data to build interactive dashboards — filtering by date, visualizing trends, and turning raw data into actionable insights.",
  },
  {
    title: "Research & Development",
    desc: "Aerosol and emissions research, instrument calibration, laboratory-based analysis, experimental design, and peer-reviewed scientific publications.",
  },
  {
    title: "Sustainability Reporting",
    desc: "Life Cycle Assessment, Embodied Carbon analysis, EPDs, ESG reporting, carbon footprint reduction strategies, and circular economy initiatives.",
  },
];

const Drives = () => (
  <section className="bg-background py-24">
    <div className="max-w-[1100px] mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12">
        6 Areas That Drive Everything I Do:
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {drives.map((d) => (
          <div key={d.title} className="group">
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {d.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Drives;
