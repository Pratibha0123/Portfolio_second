// components/ProjectPage.jsx
"use client";
import { useMemo, useState } from "react";
import { projects1 } from "../data/projects";
import { ExternalLink, Github, Code2, Layers } from "lucide-react";

const CATEGORIES = ["All", "Nextjs", "React JS", "HTML", "Django", "Figma"];

export default function ProjectPage() {
  const [active, setActive] = useState("All");

  // Filter logic
  const filtered = useMemo(() => {
    if (active === "All") return projects1;
    return projects1.filter(
      (p) => p.category?.toLowerCase() === active.toLowerCase()
    );
  }, [active]);

  return (
    <section className="w-full min-h-screen bg-[#0b1018] py-20 relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore a collection of cutting-edge web applications and designs,
            built with modern technologies and a focus on user experience.
          </p>
        </div>

        {/* Sticky Filter Tabs */}
        <div className="sticky top-20 z-30 mb-12 py-4 bg-[#0b1018]/80 backdrop-blur-xl border-y border-white/5">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = active.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`
                    relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                    ${isActive
                      ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
                    }
                  `}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length === 0 ? (
            <div className="col-span-full py-20 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                <Layers className="w-8 h-8 text-gray-500" />
              </div>
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </div>
          ) : (
            filtered.map((project, index) => (
              <ProjectCard key={`${project.title}-${index}`} project={project} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
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
      {/* 1. Full-Width Image Area */}
      <div className="relative w-full h-56 overflow-hidden">
        {/* Subtle Gradient Overlay on top of image for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#11161d] via-transparent to-transparent opacity-60 z-10" />

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Floating Category Tag */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 text-xs font-bold tracking-wide uppercase rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* 2. Content Area */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* 3. Tech Stack / Meta (Optional, can add icons based on category if needed) */}

        {/* 4. CTA Buttons - Always at bottom */}
        <div className="mt-auto flex gap-4 pt-4 border-t border-white/5">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="
                flex-1 flex items-center justify-center gap-2 
                px-4 py-2.5 rounded-lg 
                bg-blue-600 text-white text-sm font-semibold 
                transition-all duration-300 
                hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:scale-[1.02]
              "
            >
              <ExternalLink size={16} strokeWidth={2.5} />
              Live Demo
            </a>
          ) : (
            <button
              disabled
              className="
                  flex-1 flex items-center justify-center gap-2 
                  px-4 py-2.5 rounded-lg 
                  bg-white/5 text-gray-500 text-sm font-medium 
                  cursor-not-allowed
                "
            >
              <ExternalLink size={16} />
              Demo N/A
            </button>
          )}

          {project.code ? (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer noopener"
              className="
                flex-1 flex items-center justify-center gap-2 
                px-4 py-2.5 rounded-lg 
                bg-white/5 text-blue-200 border border-white/10
                text-sm font-semibold 
                transition-all duration-300 
                hover:bg-white/10 hover:border-blue-400/30 hover:text-blue-100 hover:scale-[1.02]
              "
            >
              <Github size={16} strokeWidth={2.5} />
              Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
