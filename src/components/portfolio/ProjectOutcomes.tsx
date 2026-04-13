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

const ProjectOutcomes = () => (
  <section className="bg-secondary py-24">
    <div className="max-w-[1100px] mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
        Discover Some of My Project Outcomes:
      </h2>
      <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
        Here's a look at the kind of impact I deliver across environmental consulting engagements.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {outcomes.map((o) => (
          <div
            key={o.title}
            className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <o.icon className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-bold text-foreground mb-3">{o.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectOutcomes;
