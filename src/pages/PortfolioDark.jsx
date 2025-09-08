import Hero from "../components/Hero";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

export default function PortfolioDark() {
  return (
    <div className="min-h-screen w-full bg-[#0b1018] text-white">
     
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
     
      
    </div>
  );
}
