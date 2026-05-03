import { Award } from "lucide-react";

const certifications = [
  { name: "ESG Reporting & Regulatory Frameworks", org: "The ESG Institute" },
  { name: "Embodied Carbon, LCA & EPD", org: "Paroc Oy" },
  { name: "Environmental Monitoring & Risk Management", org: "University of Eastern Finland" },
  { name: "Carbon Dioxide Removal (CDR)", org: "NASDAQ" },
  { name: "Digital Tools & Data Analytics", org: "University of Eastern Finland" },
  { name: "Project Management & Leadership", org: "Talent Hub Eastern Finland" },
  { name: "Entrepreneurship & Sustainability", org: "YUFE" },
];

const Certifications = () => (
  <section id="certifications" className="bg-secondary py-24">
    <div className="max-w-[1100px] mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12">
        Certifications & Training
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="bg-card rounded-xl p-6 hover:shadow-md transition-shadow flex items-start gap-3"
          >
            <Award className="text-primary shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-semibold text-foreground text-sm leading-snug">{cert.name}</p>
              <p className="text-muted-foreground text-xs mt-1">{cert.org}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
