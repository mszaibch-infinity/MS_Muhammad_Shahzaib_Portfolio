import { Shield, Droplets, Wind, BarChart3, Leaf, FlaskConical } from "lucide-react";

const expertiseItems = [
  {
    icon: Wind,
    title: "Emissions Monitoring & EU ETS",
    desc: "Planning and executing emissions measurement campaigns, GHG accounting, and ensuring alignment with EU ETS, BAT limits, and ISO standards.",
  },
  {
    icon: Shield,
    title: "Environmental Compliance & EHS",
    desc: "EIA, EMS (ISO 14001), QMS (ISO 9001), environmental audits, regulatory permitting, and third-party audit support.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Reporting",
    desc: "Environmental data analysis using Python, MATLAB, ArcGIS, and OneClick LCA. Technical reporting, dashboards, and regulatory submissions.",
  },
  {
    icon: Droplets,
    title: "Water & Waste Management",
    desc: "Wastewater analysis, waste management monitoring, circular economy initiatives, and construction environmental compliance.",
  },
  {
    icon: Leaf,
    title: "Sustainability & LCA",
    desc: "Life Cycle Assessment, Embodied Carbon analysis, EPDs, ESG reporting, and carbon footprint reduction strategies.",
  },
  {
    icon: FlaskConical,
    title: "Research & Instrumentation",
    desc: "Aerosol and emissions research, instrument calibration, laboratory-based analysis, and scientific publications.",
  },
];

const Expertise = () => (
  <section id="expertise" className="py-24 bg-secondary">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-3">What I Do</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
          Areas of <span className="text-primary">Expertise</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseItems.map((item) => (
          <div key={item.title} className="bg-card rounded-xl p-8 hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <item.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
