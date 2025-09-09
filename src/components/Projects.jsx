import Card from "./Card";
import SectionTitle from "./SectionTitle";
import { projects1, projects2 } from "../data/projects";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } }, // large screens
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // tablets landscape
      { breakpoint: 768, settings: { slidesToShow: 1 } },  // tablets portrait
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          centerMode: false,   // disable centering
          centerPadding: "0px" // full width
        },
      },
    ],
  };

  const renderProjectSlide = (project) => (
    <Card
      key={project.title}
      className="project-card group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-gray-900/60 backdrop-blur-md shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mx-3"
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="flex-1 text-sm text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {/* Links */}
        <div className="mt-5 flex gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-500/20 px-4 py-2 text-sm text-blue-400 font-medium hover:bg-blue-500/30 hover:scale-105 transition transform duration-300"
            >
              Live Demo
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-purple-500/20 px-4 py-2 text-sm text-purple-400 font-medium hover:bg-purple-500/30 hover:scale-105 transition transform duration-300"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <section id="projects" className="border-t border-white/10 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <SectionTitle className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          My Projects
        </SectionTitle>

        {/* First Projects Row */}
        <Slider {...sliderSettings}>{projects1.map(renderProjectSlide)}</Slider>

        <div className="my-12"></div>

        {/* Second Projects Row */}
        {/* <Slider {...sliderSettings}>{projects2.map(renderProjectSlide)}</Slider> */}
      </div>
    </section>
  );
}
