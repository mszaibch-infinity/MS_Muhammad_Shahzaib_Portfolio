import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Stats from "@/components/portfolio/Stats";
import Drives from "@/components/portfolio/Drives";
import BuildingGreener from "@/components/portfolio/BuildingGreener";
import ProjectOutcomes from "@/components/portfolio/ProjectOutcomes";
import Certifications from "@/components/portfolio/Certifications";
import Testimonial from "@/components/portfolio/Testimonial";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    {/* About-area: facts, education + stats */}
    <section id="about">
      <Stats />
    </section>
    <Drives />
    <BuildingGreener />
    <ProjectOutcomes />
    <Testimonial />
    <Certifications />
    <Contact />
    <Footer />
  </div>
);

export default Index;
