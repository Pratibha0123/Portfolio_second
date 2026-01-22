import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { projects1 } from "../data/projects";
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false, arrows: false } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerMode: false, arrows: false } },
    ],
    appendDots: dots => (
      <div style={{ bottom: "-40px" }}>
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2.5 h-2.5 rounded-full bg-slate-600 hover:bg-blue-500 transition-all cursor-pointer" />
    )
  };

  const renderProjectSlide = (project) => (
    <div key={project.title} className="px-3 py-6 h-full">
      <div className="
        group relative flex flex-col h-[450px] sm:h-[500px] w-full
        bg-[#11161d]/80 backdrop-blur-sm rounded-2xl overflow-hidden 
        border border-white/10 shadow-lg 
        transition-all duration-500 
        hover:border-blue-500/50 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.2)]
        hover:-translate-y-2
      ">
        {/* Image Area */}
        <div className="relative w-full h-48 sm:h-56 overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#11161d] via-transparent to-transparent opacity-80 z-10" />

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          <div className="absolute top-4 right-4 z-20">
            <span className="
              px-3 py-1 text-xs font-bold uppercase tracking-wider 
              text-white bg-blue-600/90 backdrop-blur-md rounded-full 
              border border-blue-400/20 shadow-lg
            ">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col flex-grow p-5 sm:p-6 pt-4">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-1">
            {project.title.replace(/[_-]/g, ' ')}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-4 flex-grow">
            {project.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-auto flex gap-3 pt-4 border-t border-white/5">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="
                  flex-1 flex items-center justify-center gap-2 
                  px-4 py-2.5 rounded-xl 
                  bg-blue-600 text-white text-sm font-semibold 
                  transition-all duration-300 
                  hover:bg-blue-500 hover:scale-[1.02] shadow-blue-500/20 shadow-lg
                "
              >
                <ExternalLink size={16} />
                Demo
              </a>
            )}

            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer noopener"
                className="
                  flex items-center justify-center gap-2 
                  px-4 py-2.5 rounded-xl 
                  bg-white/5 text-slate-300 border border-white/10
                  text-sm font-semibold 
                  transition-all duration-300 
                  hover:bg-white/10 hover:text-white hover:border-white/20
                "
                title="Source Code"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Ensure projects1 is defined and an array
  const projects = Array.isArray(projects1) ? projects1.slice(0, 6) : []; // Show top 6

  return (
    <section id="projects" className="relative w-full py-24 bg-[#0b1018] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>Recent Work</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400 mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            A selection of my best work in web development and design.
            Each project represents a unique challenge and solution.
          </p>

          <Link
            to="/project"
            className="
              inline-flex items-center gap-2 px-8 py-3 rounded-full 
              bg-white/5 border border-white/10 text-white font-semibold 
              hover:bg-blue-600 hover:border-blue-500 hover:scale-105 
              transition-all duration-300 shadow-xl
            "
          >
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>

        {/* Projects Slider */}
        <div data-aos="fade-up" data-aos-delay="200">
          {projects.length > 0 ? (
            <Slider {...sliderSettings} className="gap-6 pb-12">
              {projects.map((project) => renderProjectSlide(project))}
            </Slider>
          ) : (
            <p className="text-center text-gray-400">No projects available.</p>
          )}
        </div>
      </div>
    </section>
  );
}
