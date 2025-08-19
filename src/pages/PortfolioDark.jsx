import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function PortfolioDark() {
  return (
    <div className="min-h-screen w-full bg-[#0b1018] text-white">
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
