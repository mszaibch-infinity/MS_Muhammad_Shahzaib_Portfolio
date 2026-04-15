import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import buildingImg from "@/assets/building-greener.jpg";

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
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="drives" className="bg-background py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12">
          Key Areas I Work On:
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Vertical accordion tabs */}
          <div className="space-y-3">
            {drives.map((d, i) => (
              <div key={d.title}>
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-lg text-left font-medium transition-all ${
                    active === i
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  {active === i ? <Minus size={18} className="shrink-0" /> : <Plus size={18} className="shrink-0" />}
                  <span className="text-sm">{d.title}</span>
                </button>
                {active === i && (
                  <div className="px-5 py-4 text-muted-foreground text-sm leading-relaxed border-l-2 border-primary ml-4 mt-1">
                    {d.desc}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Background image */}
          <div className="hidden md:block relative">
            <img
              src={buildingImg}
              alt="Environmental work"
              className="w-full h-full min-h-[500px] object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drives;
