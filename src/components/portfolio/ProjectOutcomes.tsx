import { useState } from "react";
import { BarChart3, FileText, Settings, TrendingUp } from "lucide-react";

const outcomes = [
  {
    icon: BarChart3,
    title: "Data Analysis & Visualizations",
    desc: "Built interactive dashboards connecting process signals with environmental data — filtering by date, visualizing emission trends, and turning raw data into actionable insights for decision-makers.",
  },
  {
    icon: FileText,
    title: "Sustainability Reports",
    desc: "Delivered Life Cycle Assessments, Embodied Carbon analyses, EPDs, and ESG reports that helped companies benchmark performance and communicate progress to stakeholders.",
  },
  {
    icon: Settings,
    title: "Process Optimization",
    desc: "Provided expert recommendations on improving process and product parameters for greener outcomes — reducing emissions while meeting compliance limits and identifying cost-saving opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Compliance & Auditing",
    desc: "Led environmental audits aligned with ISO 14001, ISO 9001, and EU ETS standards. Supported third-party audits, permitting processes, and regulatory alignment across multiple industries.",
  },
];

const ProjectOutcomes = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-secondary py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Expertise in Action — Previous Project Outcomes
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          See where I've applied my skills — click on each area to explore real project outcomes and deliverables.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {outcomes.map((o, i) => (
            <div
              key={o.title}
              onClick={() => setActive(active === i ? null : i)}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <o.icon className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-foreground mb-3">{o.title}</h3>
              {active === i && (
                <p className="text-muted-foreground text-sm leading-relaxed animate-in fade-in duration-300">{o.desc}</p>
              )}
              {active !== i && (
                <p className="text-primary text-sm font-medium">Click to explore →</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOutcomes;
