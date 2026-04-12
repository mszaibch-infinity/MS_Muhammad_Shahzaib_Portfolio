import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Education from "@/components/portfolio/Education";
import Stats from "@/components/portfolio/Stats";
import Drives from "@/components/portfolio/Drives";
import Certifications from "@/components/portfolio/Certifications";
import About from "@/components/portfolio/About";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Education />
    <Stats />
    <Drives />
    <Certifications />
    <About />
    <Contact />
    <Footer />
  </div>
);

export default Index;
