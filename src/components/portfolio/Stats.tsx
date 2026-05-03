import { GraduationCap } from "lucide-react";

const stats = [
  { value: "27", label: "Age" },
  { value: "+4", label: "Industrial Experience" },
  { value: "+2", label: "Years of Research Experience" },
  { value: "+10", label: "Projects" },
  { value: "2", label: "Countries Worked" },
];

const Stats = () => (
  <section className="relative bg-background pt-10 sm:pt-16 pb-16 sm:pb-24">
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
        <div className="md:col-span-7 md:order-1 order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-3 sm:mb-4 mt-4 sm:mt-6 md:mt-12">
            Interesting facts about me:
          </h2>
          <p className="text-foreground/80 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl">
            Finland-based with a global outlook — currently focused on{" "}
            <strong className="text-primary font-bold">EU and US markets.</strong>
          </p>
        </div>

        <div className="md:col-span-5 md:order-2 order-1 mt-0 md:-mt-40 relative z-10 md:z-20">
          <div className="bg-card rounded-xl shadow-2xl border border-border p-6 sm:p-8 md:p-10">
            <h3 className="font-['Playfair_Display',serif] italic text-3xl md:text-4xl text-foreground mb-1">
              Education
            </h3>
            <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6">
              Two Degrees
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold text-foreground">M.Sc. Environmental Technology</p>
                  <p className="text-muted-foreground text-sm">University of Eastern Finland (2023–2025)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold text-foreground">B.Sc. Environmental Science</p>
                  <p className="text-muted-foreground text-sm">University of the Punjab (2016–2020)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats grid – red text on white */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-8 sm:gap-8 mt-6 sm:mt-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center min-w-0 px-1">
            <p className="text-4xl sm:text-5xl md:text-6xl font-black text-primary mb-2 leading-none tabular-nums">
              {s.value}
            </p>
            <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm uppercase tracking-wider font-medium leading-snug">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
