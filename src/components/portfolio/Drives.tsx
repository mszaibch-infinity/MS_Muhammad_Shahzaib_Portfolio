import { useState } from "react";

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

const Drives = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-background py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12">
          6 Areas That Drive Everything I Do:
        </h2>

        {/* Tabs - like Teemu's style */}
        <div className="flex flex-wrap gap-2 mb-8">
          {drives.map((d, i) => (
            <button
              key={d.title}
              onClick={() => setActive(i)}
              className={`px-5 py-3 rounded-lg text-sm font-medium transition-all ${
                active === i
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {d.title}
            </button>
          ))}
        </div>

        {/* Active content */}
        <div className="bg-card rounded-xl p-8 md:p-12 shadow-sm border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {drives[active].title}
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {drives[active].desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Drives;
