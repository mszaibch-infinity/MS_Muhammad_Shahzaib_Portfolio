import { useState } from "react";
import { FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg-v2.jpg";
import CVDialog from "./CVDialog";

const Hero = () => {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section className="relative isolate min-h-[100svh] min-h-screen flex items-start md:items-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroBg}
          alt="Muhammad Shahzaib"
          className="w-full h-full object-cover object-[center_center] md:object-[85%_center]"
          width={1920}
          height={1080}
        />
        {/* Dark gradient on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/75 md:bg-gradient-to-r md:from-foreground/85 md:via-foreground/55 md:to-transparent" />
      </div>

      <div className="relative z-20 max-w-[1100px] mx-auto px-4 sm:px-6 w-full pt-24 pb-28 sm:pb-20 md:py-0 md:min-h-screen md:flex md:items-center">
        <div className="max-w-xl w-full min-w-0">
          <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg font-medium mb-3 tracking-wide">
            Hi, I Am
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.08] sm:leading-[1.05] mb-4 sm:mb-6 break-words">
            Muhammad <span className="text-primary">Shahzaib</span>
          </h1>
          <p className="text-primary-foreground/90 text-base sm:text-lg md:text-xl italic max-w-xl mb-8 sm:mb-12 md:mb-16 leading-relaxed font-light">
          "Environmental Scientist and Technical Analyst specializing in emissions monitoring, industrial systems, and environmental data, helping companies advance their data processing for actionable outcomes across compliance, process improvement, and business decision-making"
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-4 sm:[&>a]:w-auto sm:[&>button]:w-auto">
            <a
              href="#about"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded hover:bg-primary/90 transition-colors"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground font-bold text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded hover:bg-primary-foreground/10 transition-colors"
            >
              Get In Touch
            </a>
            <button
              onClick={() => setCvOpen(true)}
              className="inline-flex items-center gap-2 w-full sm:w-auto bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground font-bold text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded hover:bg-primary-foreground/20 transition-colors"
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
