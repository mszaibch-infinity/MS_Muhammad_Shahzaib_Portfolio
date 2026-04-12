import { GraduationCap } from "lucide-react";

const Education = () => (
  <section className="relative bg-primary py-16">
    {/* Overlapping card like Teemu's education block */}
    <div className="max-w-[1100px] mx-auto px-6">
      <div className="bg-card rounded-xl shadow-xl p-10 md:p-14 max-w-xl -mt-32 relative z-20">
        <h2 className="font-['Playfair_Display',serif] italic text-4xl md:text-5xl text-foreground mb-2">
          Education
        </h2>
        <p className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-6">
          Two Degrees
        </p>
        <div className="space-y-4">
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
  </section>
);

export default Education;
