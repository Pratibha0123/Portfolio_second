import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import PortfolioDark from "./pages/PortfolioDark";
import Services from "./components/Services";
import Skills from "./components/Skills";
import SkillPage from "./components/SkillPage";

import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projectpage from "./components/Projectpage";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-sine",
      offset: 100,
    });
  }, []);

  return (
    <div className="overflow-x-hidden w-full bg-[#0b1018]">
      <Navbar />
      <Routes>
        <Route path="/" element={<PortfolioDark />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/skills" element={<SkillPage />} />
        <Route path="/project" element={<Projectpage />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
