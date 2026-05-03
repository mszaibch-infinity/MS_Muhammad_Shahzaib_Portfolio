import { useState } from "react";
import { FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg-v2.jpg";
import CVDialog from "./CVDialog";

const Hero = () => {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Muhammad Shahzaib"
          className="w-full h-full object-cover"
          style={{ objectPosition: "85% center" }}
          width={1920}
          height={1080}
        />
        {/* Dark gradient on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 w-full pt-24 pb-16 md:pt-0 md:pb-0">
        <div className="max-w-xl">
          <p className="text-primary-foreground/80 text-base md:text-lg font-medium mb-3 tracking-wide">
            Hi, I Am
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] mb-6">
            Muhammad <span className="text-primary">Shahzaib</span>
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl italic max-w-xl mb-16 leading-relaxed font-light">
            Environmental Specialist and Data Analyst turning complex data challenges into actionable outcomes, delivering technical solutions that enhance processes, ensure compliance, and drive sustainable growth.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-8 py-4 rounded hover:bg-primary/90 transition-colors"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-primary-foreground text-primary-foreground font-bold text-sm uppercase tracking-wider px-8 py-4 rounded hover:bg-primary-foreground/10 transition-colors"
            >
              Get In Touch
            </a>
            <button
              onClick={() => setCvOpen(true)}
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground font-bold text-sm uppercase tracking-wider px-8 py-4 rounded hover:bg-primary-foreground/20 transition-colors"
            >
              <FileText size={16} />
              CV
            </button>
          </div>
        </div>
      </div>

      <CVDialog open={cvOpen} onOpenChange={setCvOpen} />
    </section>
  );
};

export default Hero;
