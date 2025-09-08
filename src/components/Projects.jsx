import Card from "./Card";
import SectionTitle from "./SectionTitle";
import { projects1, projects2 } from "../data/projects";
import Slider from "react-slick";

export default function Projects() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024, // large tablets
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768, // small tablets
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 580, // mobile
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const renderProjectSlide = (project) => (
    <Card
      key={project.title}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-gray-900/60 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 mx-3"
    >
      {/* Project Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Project Info */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
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
              className="rounded-lg bg-blue-500/20 px-4 py-2 text-sm text-blue-400 font-medium hover:bg-blue-500/30 transition"
            >
              Live Demo
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-purple-500/20 px-4 py-2 text-sm text-purple-400 font-medium hover:bg-purple-500/30 transition"
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
        <SectionTitle className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          My Projects
        </SectionTitle>

        {/* First Row */}
        <Slider {...sliderSettings}>
          {projects1.map(renderProjectSlide)}
        </Slider>

        {/* Space between two sliders */}
        <div className="my-12"></div>

        {/* Second Row */}
        <Slider {...sliderSettings}>
          {projects2.map(renderProjectSlide)}
        </Slider>
      </div>
    </section>
  );
}
