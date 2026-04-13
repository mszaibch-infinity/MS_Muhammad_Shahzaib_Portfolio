import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Education from "@/components/portfolio/Education";
import Stats from "@/components/portfolio/Stats";
import Drives from "@/components/portfolio/Drives";
import BuildingGreener from "@/components/portfolio/BuildingGreener";
import ProjectOutcomes from "@/components/portfolio/ProjectOutcomes";
import Certifications from "@/components/portfolio/Certifications";
import Testimonial from "@/components/portfolio/Testimonial";
import Companies from "@/components/portfolio/Companies";
import About from "@/components/portfolio/About";
import LetsTalk from "@/components/portfolio/LetsTalk";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Education />
    <Stats />
    <Drives />
    <BuildingGreener />
    <ProjectOutcomes />
    <Certifications />
    <Testimonial />
    <Companies />
    <About />
    <LetsTalk />
    <Contact />
    <Footer />
  </div>
);

export default Index;
