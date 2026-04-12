import heroBg from "@/assets/hero-bg-v2.jpg";
import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="relative min-h-screen flex items-end overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Muhammad Shahzaib" className="w-full h-full object-cover object-top" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/50 to-transparent" />
    </div>
    <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-24">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.95] mb-6">
        Environmental<br />
        <span className="text-primary">Professional.</span>
      </h1>
      <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
        4+ years driving compliance, emissions monitoring, and sustainability across industrial operations. 
        Helping industries achieve greener outcomes through data-driven insights and practical solutions.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button asChild size="lg" className="uppercase tracking-wider font-semibold">
          <a href="#contact">Get In Touch</a>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 uppercase tracking-wider font-semibold">
          <a href="/CV_Muhammad_Shahzaib.pdf" download>
            <Download size={18} />
            Download CV
          </a>
        </Button>
      </div>
    </div>
    <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-bounce">
      <ChevronDown size={32} />
    </a>
  </section>
);

export default Hero;
