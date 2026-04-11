import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { Mail, Linkedin, MapPin, Leaf, Shield, Droplets, Wind, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-primary-foreground font-bold text-xl tracking-tight">
          M<span className="text-primary">S</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-primary-foreground/80 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider">
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Environmental professional in the field" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
    </div>
    <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
      <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-4">Muhammad Shahzaib</p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[0.95] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
        Environmental<br />
        <span className="text-primary">Professional.</span>
      </h1>
      <p className="text-primary-foreground/70 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
        Dedicated to building sustainable solutions, driving environmental compliance, and creating a greener future through science-driven strategies.
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
    <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-bounce">
      <ChevronDown size={32} />
    </a>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Passionate About<br />
            <span className="text-primary">Our Planet</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I'm Muhammad Shahzaib, an environmental professional with a deep commitment to sustainability and ecological preservation. My work spans environmental impact assessments, compliance management, and developing innovative green solutions.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With a strong foundation in environmental science, I help organizations navigate complex regulations while minimizing their ecological footprint and maximizing sustainable practices.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { num: "50+", label: "Projects Completed" },
            { num: "5+", label: "Years Experience" },
            { num: "100%", label: "Compliance Rate" },
            { num: "20+", label: "Organizations Served" },
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

const expertiseItems = [
  { icon: Leaf, title: "Environmental Impact Assessment", desc: "Comprehensive EIA studies to evaluate and mitigate environmental effects of development projects." },
  { icon: Shield, title: "Regulatory Compliance", desc: "Ensuring adherence to environmental laws, permits, and industry standards across all operations." },
  { icon: Droplets, title: "Water & Waste Management", desc: "Designing sustainable water treatment and waste management systems for communities and industries." },
  { icon: Wind, title: "Air Quality & Climate", desc: "Monitoring air quality, carbon footprint analysis, and climate change mitigation strategies." },
];

const Expertise = () => (
  <section id="expertise" className="py-24 bg-secondary">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-3">What I Do</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
          Areas of <span className="text-primary">Expertise</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertiseItems.map((item) => (
          <div key={item.title} className="bg-card rounded-xl p-8 hover:shadow-lg transition-shadow group">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <item.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
            </div>
            <h3 className="font-bold text-foreground text-lg mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const experiences = [
  { period: "2022 – Present", role: "Senior Environmental Consultant", org: "Green Horizon Consulting", desc: "Leading environmental assessments for major infrastructure projects and advising on sustainability strategies." },
  { period: "2020 – 2022", role: "Environmental Compliance Officer", org: "EcoTech Industries", desc: "Managed regulatory compliance programs and implemented waste reduction initiatives across operations." },
  { period: "2018 – 2020", role: "Environmental Analyst", org: "National Environmental Agency", desc: "Conducted field research, data analysis, and reporting for government environmental monitoring programs." },
];

const Experience = () => (
  <section id="experience" className="py-24 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-3">Career</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
          Professional <span className="text-primary">Experience</span>
        </h2>
      </div>
      <div className="max-w-3xl mx-auto space-y-0">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8 pb-12 last:pb-0 border-l-2 border-primary/30">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
            <p className="text-primary font-semibold text-sm mb-1">{exp.period}</p>
            <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
            <p className="text-muted-foreground font-medium mb-2">{exp.org}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-foreground text-primary-foreground">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-3">Let's Connect</p>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Get In <span className="text-primary">Touch</span>
      </h2>
      <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-10">
        Interested in collaborating on environmental projects or need expert consultation? Let's talk.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <a href="mailto:shahzaib@example.com" className="flex items-center gap-3 bg-primary-foreground/10 hover:bg-primary/20 transition-colors px-6 py-4 rounded-xl">
          <Mail className="text-primary" size={20} />
          <span className="text-sm font-medium">shahzaib@example.com</span>
        </a>
        <a href="#" className="flex items-center gap-3 bg-primary-foreground/10 hover:bg-primary/20 transition-colors px-6 py-4 rounded-xl">
          <Linkedin className="text-primary" size={20} />
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
        <div className="flex items-center gap-3 bg-primary-foreground/10 px-6 py-4 rounded-xl">
          <MapPin className="text-primary" size={20} />
          <span className="text-sm font-medium">Pakistan</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-foreground border-t border-primary-foreground/10 py-6">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p className="text-primary-foreground/40 text-sm">
        © {new Date().getFullYear()} Muhammad Shahzaib. All rights reserved.
      </p>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Expertise />
    <Experience />
    <Contact />
    <Footer />
  </div>
);

export default Index;
