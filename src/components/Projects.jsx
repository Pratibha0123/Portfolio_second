import { useEffect, useState } from "react";
import Slider from "react-slick";
import { projects1 } from "../data/projects";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
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
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true, centerPadding: "20px" } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  const renderProjectSlide = (project) => (
    <div key={project.title} className="px-3 py-6 h-full">
      <article
        className="
          group relative flex flex-col h-full 
          bg-[#11161d] rounded-2xl overflow-hidden 
          border border-white/5 shadow-lg 
          transition-all duration-300 
          hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]
          hover:border-blue-500/30
        "
      >
        {/* Full-Width Image Area */}
        <div className="relative w-full h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#11161d] via-transparent to-transparent opacity-60 z-10" />

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 text-xs font-bold tracking-wide uppercase rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 shadow-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col flex-grow p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-auto flex gap-4 pt-4 border-t border-white/5">
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="
                  flex-1 flex items-center justify-center gap-2 
                  px-4 py-2.5 rounded-lg 
                  bg-blue-600/10 text-blue-400 text-sm font-semibold 
                  transition-all duration-300 
                  hover:bg-blue-600 hover:text-white
                "
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            ) : null}

            {project.code ? (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer noopener"
                className="
                  flex-1 flex items-center justify-center gap-2 
                  px-4 py-2.5 rounded-lg 
                  bg-white/5 text-gray-300 border border-white/10
                  text-sm font-semibold 
                  transition-all duration-300 
                  hover:bg-white/10 hover:text-white
                "
              >
                <Github size={16} />
                Code
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </div>
  );

  // Ensure projects1 is defined and an array
  const projects = Array.isArray(projects1) ? projects1.slice(0, 6) : []; // Show top 6

  return (
    <section id="projects" className="relative w-full py-20 bg-[#0b1018] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            A selection of my best work in web development and design.
          </p>

          <a href="/project" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors">
            View All Projects <ArrowRight size={18} />
          </a>
        </div>

        {projects.length > 0 ? (
          <Slider {...sliderSettings}>
            {projects.map(renderProjectSlide)}
          </Slider>
        ) : (
          <p className="text-center text-gray-400">No projects available.</p>
        )}
      </div>
    </section>
  );
}
