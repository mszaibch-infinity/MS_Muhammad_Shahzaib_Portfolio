import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Stats from "@/components/portfolio/Stats";
import Drives from "@/components/portfolio/Drives";
import BuildingGreener from "@/components/portfolio/BuildingGreener";
import ProjectOutcomes from "@/components/portfolio/ProjectOutcomes";
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
    <Contact />
    <Footer />
  </div>
);

export default Index;
