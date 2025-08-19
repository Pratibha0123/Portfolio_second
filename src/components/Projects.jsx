import Card from "./Card";
import SectionTitle from "./SectionTitle";
import { projects1, projects2 } from "../data/projects";
import Slider from "react-slick";

export default function Projects() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 at a time on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 840, // tablet
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
      className="group flex flex-col overflow-hidden p-0 mx-2"
    >
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Project Info */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
        <p className="flex-1 text-sm text-white/70">{project.description}</p>

        {/* Links */}
        <div className="mt-4 flex gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
            >
              Live Demo
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <section id="projects" className="border-t border-white/5 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
 <SectionTitle className="text-3xl font-bold text-white mb-8 text-center">
        Project
      </SectionTitle>
       <Slider {...sliderSettings}>
          {projects1.map(renderProjectSlide)}
        </Slider>
        <br />
        <br />
        <Slider {...sliderSettings}>
          {projects2.map(renderProjectSlide)}
        </Slider>
      </div>
    </section>
  );
}

