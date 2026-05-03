import { useState } from "react";
import { Plus, Minus, Leaf, Wind, ShieldCheck, BarChart3, FlaskConical, FileBarChart } from "lucide-react";

const drives = [
  {
    icon: Leaf,
    title: "Environmental Consulting",
    desc: "Providing expert recommendations on improving process and product parameters for greener outcomes, regulatory alignment, and sustainable industrial practices.",
  },
  {
    icon: Wind,
    title: "Air Quality & Emission Management",
    desc: "Planning and executing emissions measurement campaigns, GHG accounting, and ensuring compliance with EU ETS, BAT limits, and ISO standards.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    desc: "EIA, EMS (ISO 14001), QMS (ISO 9001), environmental audits, permitting, and third-party audit support to meet compliance limits and industry benchmarks.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Dashboards",
    desc: "Connecting process signals with environmental data to build interactive dashboards — filtering by date, visualizing trends, and turning raw data into actionable insights.",
  },
  {
    icon: FlaskConical,
    title: "Research & Development",
    desc: "Aerosol and emissions research, instrument calibration, laboratory-based analysis, experimental design, and peer-reviewed scientific publications.",
  },
  {
    icon: FileBarChart,
    title: "Sustainability Reporting",
    desc: "Life Cycle Assessment, Embodied Carbon analysis, EPDs, ESG reporting, carbon footprint reduction strategies, and circular economy initiatives.",
  },
];

const Drives = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="drives" className="bg-background py-16 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">
            What I Do
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Key Areas I Work On
          </h2>
        </div>

        <div className="space-y-3">
          {drives.map((d, i) => {
            const isOpen = active === i;
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className={`bg-card border rounded-xl shadow-sm transition-all overflow-hidden ${
                  isOpen ? "border-primary shadow-lg" : "border-border hover:border-primary/40"
                }`}
              >
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 px-5 md:px-7 py-5 text-left"
                >
                  <div
                    className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <span className="flex-1 min-w-0 text-left text-sm sm:text-base md:text-lg font-bold text-foreground leading-snug">
                    {d.title}
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                    }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 md:px-7 pb-6 -mt-1 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="text-muted-foreground leading-relaxed text-sm sm:text-base md:pl-16">
                      {d.desc}
                    </div>
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
