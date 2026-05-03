/**
 * Full portfolio page in one file — edit here when adding or changing sections.
 * (Assets still live under src/assets; global styles remain in src/index.css.)
 */
import { useState, useEffect, useRef, type FormEvent } from "react";
import {
  Menu,
  X,
  GraduationCap,
  Plus,
  Minus,
  BarChart3,
  FileText,
  Settings,
  TrendingUp,
  Award,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  FileDown,
  ExternalLink,
  Send,
  Mail,
  Phone,
  Linkedin,
  Globe,
} from "lucide-react";
import heroBg from "@/assets/hero-bg-v2.jpg";
import buildingImg from "@/assets/building-greener.jpg";
import aboutImg from "@/assets/about-portrait.jpg";
import letsTalkBg from "@/assets/lets-talk-bg.jpg";
import logoParoc from "@/assets/logos/paroc.png";
import logoUef from "@/assets/logos/uef.png";
import logoEpa from "@/assets/logos/epa.png";
import logoPcsir from "@/assets/logos/pcsir.png";
import logoBv from "@/assets/logos/bureau-veritas.png";
import logoVe from "@/assets/logos/visiting-energy.png";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Expertise", href: "#drives" },
  { label: "Certifications", href: "#certifications" },
  { label: "Get in touch!", href: "#contact" },
];

const stats = [
  { value: "27", label: "Age" },
  { value: "+4", label: "Years Experience" },
  { value: "10+", label: "Emissions Campaigns" },
  { value: "EU ETS", label: "Compliance Expertise" },
  { value: "3", label: "Countries Worked In" },
];

const drives = [
  {
    title: "Environmental Consulting",
    desc: "Providing expert recommendations on improving process and product parameters for greener outcomes, regulatory alignment, and sustainable industrial practices.",
  },
  {
    title: "Air Quality & Emission Management",
    desc: "Planning and executing emissions measurement campaigns, GHG accounting, and ensuring compliance with EU ETS, BAT limits, and ISO standards.",
  },
  {
    title: "Regulatory Compliance",
    desc: "EIA, EMS (ISO 14001), QMS (ISO 9001), environmental audits, permitting, and third-party audit support to meet compliance limits and industry benchmarks.",
  },
  {
    title: "Data Analysis & Dashboards",
    desc: "Connecting process signals with environmental data to build interactive dashboards — filtering by date, visualizing trends, and turning raw data into actionable insights.",
  },
  {
    title: "Research & Development",
    desc: "Aerosol and emissions research, instrument calibration, laboratory-based analysis, experimental design, and peer-reviewed scientific publications.",
  },
  {
    title: "Sustainability Reporting",
    desc: "Life Cycle Assessment, Embodied Carbon analysis, EPDs, ESG reporting, carbon footprint reduction strategies, and circular economy initiatives.",
  },
];

const outcomes = [
  {
    icon: BarChart3,
    title: "Data Analysis & Visualizations",
    desc: "Built interactive dashboards connecting process signals with environmental data — filtering by date, visualizing emission trends, and turning raw data into actionable insights for decision-makers.",
  },
  {
    icon: FileText,
    title: "Sustainability Reports",
    desc: "Delivered Life Cycle Assessments, Embodied Carbon analyses, EPDs, and ESG reports that helped companies benchmark performance and communicate progress to stakeholders.",
  },
  {
    icon: Settings,
    title: "Process Optimization",
    desc: "Provided expert recommendations on improving process and product parameters for greener outcomes — reducing emissions while meeting compliance limits and identifying cost-saving opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Compliance & Auditing",
    desc: "Led environmental audits aligned with ISO 14001, ISO 9001, and EU ETS standards. Supported third-party audits, permitting processes, and regulatory alignment across multiple industries.",
  },
];

const certifications = [
  { name: "ESG Reporting & Regulatory Frameworks", org: "The ESG Institute" },
  { name: "Embodied Carbon, LCA & EPD", org: "Paroc Oy" },
  { name: "Environmental Monitoring & Risk Management", org: "University of Eastern Finland" },
  { name: "Carbon Dioxide Removal (CDR)", org: "NASDAQ" },
  { name: "Digital Tools & Data Analytics", org: "University of Eastern Finland" },
  { name: "Project Management & Leadership", org: "Talent Hub Eastern Finland" },
  { name: "Entrepreneurship & Sustainability", org: "YUFE" },
];

const companies = [
  { name: "Paroc Oy", logo: logoParoc },
  { name: "University of Eastern Finland", logo: logoUef },
  { name: "EPA Punjab", logo: logoEpa },
  { name: "PCSIR", logo: logoPcsir },
  { name: "Bureau Veritas", logo: logoBv },
  { name: "Visiting Energy", logo: logoVe },
];

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-md">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-primary-foreground font-bold text-xl tracking-tight">
          M<span className="text-primary">S</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-primary-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
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
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-primary-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
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
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="relative bg-primary py-16">
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
}

function StatsSection() {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
          Interesting facts about me:
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-12 max-w-2xl">
          Finland-based Environmental Professional with a global outlook — currently focused on{" "}
          <strong className="text-primary-foreground font-bold">EU and US markets.</strong>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-5xl md:text-6xl font-black text-primary-foreground mb-2">{s.value}</p>
              <p className="text-primary-foreground/70 text-sm uppercase tracking-wider font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Drives() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="drives" className="bg-background py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12">
          Key Areas I Work On:
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-3">
            {drives.map((d, i) => (
              <div key={d.title}>
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-lg text-left font-medium transition-all ${
                    active === i
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                  }`}
                >
                  {active === i ? <Minus size={18} className="shrink-0" /> : <Plus size={18} className="shrink-0" />}
                  <span className="text-sm">{d.title}</span>
                </button>
                {active === i && (
                  <div className="px-5 py-4 text-muted-foreground text-sm leading-relaxed border-l-2 border-primary ml-4 mt-1">
                    {d.desc}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:block relative">
            <img
              src={buildingImg}
              alt="Environmental work"
              className="w-full h-full min-h-[500px] object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BuildingGreener() {
  return (
    <section className="relative py-0">
      <div className="absolute top-0 left-0 right-0 h-16 bg-background" style={{ borderRadius: "0 0 50% 50%" }} />

      <div className="relative">
        <div className="absolute inset-0">
          <img
            src={buildingImg}
            alt="Environmental monitoring"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative z-10 max-w-[800px] mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">
            Building a Greener, More Sustainable Business?
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
            I help industries turn environmental challenges into actionable improvements. From emissions compliance to
            sustainability reporting, I provide hands-on support to help your business meet regulatory targets while
            improving processes and products.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-secondary" />
    </section>
  );
}

function ProjectOutcomes() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-secondary py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Expertise in Action — Previous Project Outcomes
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          See where I've applied my skills — click on each area to explore real project outcomes and deliverables.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {outcomes.map((o, i) => (
            <div
              key={o.title}
              onClick={() => setActive(active === i ? null : i)}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <o.icon className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-foreground mb-3">{o.title}</h3>
              {active === i && (
                <p className="text-muted-foreground text-sm leading-relaxed animate-in fade-in duration-300">{o.desc}</p>
              )}
              {active !== i && <p className="text-primary text-sm font-medium">Click to explore →</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Let people tell
        </h2>
        <p className="text-muted-foreground text-lg mb-8">This is what businesses have said about me:</p>
        <MessageCircle className="mx-auto text-muted-foreground mb-6" size={40} />
        <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
          "He made complex things easier to understand and provided actionable insights and practical solutions to work
          on — approaching compliance targets and identifying opportunities to improve our processes and products at the
          same time."
        </blockquote>
      </div>
    </section>
  );
}

function Companies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const autoScroll = () => {
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 200, behavior: "smooth" });
      }
    };

    intervalRef.current = setInterval(autoScroll, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    clearInterval(intervalRef.current);
    el.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  return (
    <section id="references" className="py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Companies and Projects</h2>
        <p className="text-muted-foreground text-lg mb-12">
          Here are some of the organizations I've worked with and contributed to:
        </p>

        <div className="relative flex items-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="shrink-0 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-12 overflow-x-auto items-center py-4"
            style={{ scrollbarWidth: "none" }}
          >
            {[...companies, ...companies].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="shrink-0 flex items-center justify-center w-[160px] h-[80px] grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="shrink-0 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

function About() {
  const [tab, setTab] = useState<"about" | "cv">("about");

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="relative grid md:grid-cols-2 gap-0 items-stretch">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Muhammad Shahzaib"
              className="w-full h-full object-cover rounded-l-xl md:rounded-r-none rounded-t-xl md:rounded-t-none min-h-[400px]"
              loading="lazy"
              width={800}
              height={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 to-transparent rounded-l-xl md:rounded-r-none rounded-t-xl md:rounded-t-none">
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground p-8">About Me</h2>
            </div>
          </div>

          <div className="bg-card p-8 md:p-12 flex flex-col justify-center rounded-r-xl md:rounded-l-none rounded-b-xl md:rounded-b-none shadow-lg md:-ml-12 relative z-10">
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setTab("about")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  tab === "about"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                About
              </button>
              <button
                onClick={() => setTab("cv")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  tab === "cv"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                CV
              </button>
            </div>

            {tab === "about" && (
              <>
                <p className="text-foreground text-lg mb-6">I'm Muhammad Shahzaib. Environmental Professional based in Finland.</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I have 4+ years of hands-on experience helping industries achieve environmental compliance and
                  sustainability goals. From emissions measurement campaigns aligned with EU ETS standards, to
                  environmental impact assessments and GHG inventory management, I combine technical depth with
                  cross-functional collaboration to deliver measurable environmental outcomes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I've worked across Pakistan and Finland — in government, consulting, research labs, and manufacturing
                  — always focused on turning environmental data into practical, actionable improvements.
                </p>
                <p className="text-foreground leading-relaxed">
                  <strong>
                    If you're looking for environmental expertise, the best place to start is a conversation.
                  </strong>
                </p>
              </>
            )}

            {tab === "cv" && (
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">Download my full CV or view it directly in your browser.</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/CV_Muhammad_Shahzaib.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-primary/90 transition-colors"
                  >
                    <FileDown size={18} />
                    Download CV
                  </a>
                  <a
                    href="/CV_Muhammad_Shahzaib.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-foreground text-foreground font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-foreground hover:text-background transition-colors"
                  >
                    <ExternalLink size={18} />
                    View in Browser
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="bg-secondary py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12">Certifications & Training</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-card rounded-xl p-6 hover:shadow-md transition-shadow flex items-start gap-3"
            >
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
}

function LetsTalk() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0">
        <img
          src={letsTalkBg}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
        <h2 className="font-['Playfair_Display',serif] italic text-4xl md:text-5xl text-primary-foreground mb-6">
          Let's talk!
        </h2>
        <p className="text-primary-foreground/80 text-lg leading-relaxed mb-4">
          If you're looking to improve your environmental performance, let's see how I can help. Whether it's emissions
          compliance, sustainability reporting, or process optimization —{" "}
          <strong className="text-primary-foreground font-bold">reach out before challenges become costly.</strong> I've
          been on the ground myself.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-foreground text-primary-foreground font-bold text-sm uppercase tracking-wider px-10 py-4 rounded mt-6 hover:bg-foreground/80 transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:mszaibch@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0APhone: ${formData.phone}%0AEmail: ${formData.email}`;
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-12">Get in touch</h2>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-border rounded-lg px-5 py-4 text-foreground bg-card placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            required
          />
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-border rounded-lg px-5 py-4 text-foreground bg-card placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
            <input
              type="tel"
              placeholder="Telephone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border border-border rounded-lg px-5 py-4 text-foreground bg-card placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={6}
            className="w-full border border-border rounded-lg px-5 py-4 text-foreground bg-card placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-foreground text-background font-bold text-sm uppercase tracking-wider px-10 py-4 rounded hover:bg-foreground/80 transition-colors"
          >
            <Send size={16} />
            Send
          </button>
        </form>

        <div className="flex items-center gap-6 mt-12">
          <a
            href="mailto:mszaibch@gmail.com"
            className="w-12 h-12 rounded-full bg-[#EA4335] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+358449285931"
            className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="Phone"
          >
            <Phone size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-shahzaib-052ba0291/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background hover:opacity-80 transition-opacity"
            aria-label="Website"
          >
            <Globe size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground border-t border-primary-foreground/10 py-6">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        <p className="text-primary-foreground/40 text-sm">© {new Date().getFullYear()} Muhammad Shahzaib. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function SiteOneFile() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Education />
      <StatsSection />
      <Drives />
      <BuildingGreener />
      <ProjectOutcomes />
      <Testimonial />
      <Companies />
      <About />
      <Certifications />
      <LetsTalk />
      <Contact />
      <Footer />
    </div>
  );
}
