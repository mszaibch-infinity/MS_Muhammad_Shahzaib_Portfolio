import heroBg from "@/assets/hero-bg-v2.jpg";
import { Download } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-end overflow-hidden">
    {/* B&W background image */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Muhammad Shahzaib"
        className="w-full h-full object-cover object-top"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
    </div>

    {/* Content — bottom-aligned like Teemu */}
    <div className="relative z-10 max-w-[1100px] mx-auto px-6 w-full pb-24">
      <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-primary-foreground leading-[1.05] mb-8">
        Environmental Professional.
      </h1>
      <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
        4+ years driving compliance, emissions monitoring, and sustainability across industrial operations.{" "}
        <strong className="text-primary-foreground font-bold">
          Helping industries achieve greener outcomes
        </strong>{" "}
        through data-driven insights and practical solutions.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-8 py-4 rounded hover:bg-primary/90 transition-colors"
        >
          Get In Touch
        </a>
        <a
          href="/CV_Muhammad_Shahzaib.pdf"
          download
          className="inline-flex items-center gap-2 justify-center border border-primary-foreground/30 text-primary-foreground font-bold text-sm uppercase tracking-wider px-8 py-4 rounded hover:bg-primary-foreground/10 transition-colors"
        >
          <Download size={18} />
          Download CV
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
