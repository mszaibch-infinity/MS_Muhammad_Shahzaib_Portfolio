import { GraduationCap } from "lucide-react";

const About = () => (
  <section id="about" className="py-24 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Engineering a<br />
            <span className="text-primary">Greener Future</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I'm Muhammad Shahzaib — an environmental engineer based in Helsinki, Finland, with 4+ years of hands-on experience helping industries achieve environmental compliance and sustainability goals through applied science and practical solutions.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            From emissions measurement campaigns aligned with EU ETS standards, to environmental impact assessments and GHG inventory management, I combine technical depth with cross-functional collaboration to deliver measurable environmental outcomes.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <GraduationCap className="text-primary mt-1 shrink-0" size={22} />
              <div>
                <p className="font-bold text-foreground">M.Sc. Environmental Technology</p>
                <p className="text-muted-foreground text-sm">University of Eastern Finland (2023–2025)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <GraduationCap className="text-primary mt-1 shrink-0" size={22} />
              <div>
                <p className="font-bold text-foreground">B.Sc. Environmental Science</p>
                <p className="text-muted-foreground text-sm">University of the Punjab (2016–2020)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { num: "4+", label: "Years Experience" },
            { num: "10+", label: "Emissions Campaigns" },
            { num: "EU ETS", label: "Compliance Expertise" },
            { num: "3", label: "Countries Worked In" },
          ].map((stat) => (
            <div key={stat.label} className="bg-secondary rounded-xl p-6 text-center">
              <p className="text-3xl font-black text-primary">{stat.num}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
