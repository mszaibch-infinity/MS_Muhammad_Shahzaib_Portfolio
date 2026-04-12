import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Expertise from "@/components/portfolio/Expertise";
import Experience from "@/components/portfolio/Experience";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Expertise />
    <Experience />
    <Certifications />
    <Contact />
    <Footer />
  </div>
);

export default Index;
