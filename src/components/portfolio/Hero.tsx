import heroBg from "@/assets/hero-bg.jpg";
import portraitImg from "@/assets/portrait-hero.jpg";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Environmental field" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50" />
    </div>
    <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full grid md:grid-cols-3 gap-12 items-center">
      <div className="md:col-span-2">
        <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-4">Environmental Engineer</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.95] mb-6">
          Muhammad<br />
          <span className="text-primary">Shahzaib.</span>
        </h1>
        <p className="text-primary-foreground/70 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
          Environmental professional with 4+ years driving compliance, emissions monitoring, and sustainability across industrial operations in Finland and internationally.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="uppercase tracking-wider font-semibold">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 uppercase tracking-wider font-semibold">
            <a href="#about">Learn More</a>
          </Button>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src={portraitImg}
          alt="Muhammad Shahzaib portrait"
          className="rounded-2xl shadow-2xl w-full max-w-xs mx-auto object-cover border-2 border-primary/20"
        />
      </div>
    </div>
    <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-bounce">
      <ChevronDown size={32} />
    </a>
  </section>
);

export default Hero;
