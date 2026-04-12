import { Award } from "lucide-react";

const certifications = [
  { name: "ESG Reporting & Regulatory Frameworks", org: "The ESG Institute" },
  { name: "Embodied Carbon, LCA & EPD", org: "Paroc Oy" },
  { name: "Environmental Monitoring & Risk Management", org: "University of Eastern Finland" },
  { name: "Occupational Safety", org: "Kiwa Suomi" },
  { name: "Carbon Dioxide Removal (CDR)", org: "NASDAQ" },
  { name: "Digital Tools & Data Analytics", org: "University of Eastern Finland" },
  { name: "Project Management & Leadership", org: "Talent Hub Eastern Finland" },
  { name: "Entrepreneurship & Sustainability", org: "YUFE" },
];

const Certifications = () => (
  <section id="certifications" className="py-24 bg-secondary">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-3">Credentials</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
          Certifications & <span className="text-primary">Training</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((cert) => (
          <div key={cert.name} className="bg-card rounded-xl p-6 hover:shadow-md transition-shadow flex items-start gap-4">
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
