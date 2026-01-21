// components/ProjectPage.jsx
"use client";
import React, { useMemo, useState } from "react";
import { projects1 } from "../data/projects";
import { ExternalLink, Github, Layers, Sparkles } from "lucide-react";

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
    <section className="relative w-full min-h-screen bg-[#0b1018] overflow-hidden py-24">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] opacity-40 animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className="text-center mb-16 space-y-4"
          data-aos="fade-down"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>My Creative Works</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400 tracking-tight">
            Featured Projects
          </h2>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover a portfolio of high-performance web applications and designs,
            crafted with precision and modern technologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className="sticky top-24 z-30 mb-16 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
            {CATEGORIES.map((cat) => {
              const isActive = active.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`
                    relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ease-out
                    ${isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
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
            <div className="col-span-full py-32 text-center flex flex-col items-center justify-center opacity-50">
              <Layers className="w-16 h-16 mb-4 text-slate-600" />
              <p className="text-xl text-slate-500">No projects found in this category.</p>
            </div>
          ) : (
            filtered.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
                index={index}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100} // Staggered animation
      className="group relative h-full"
    >
      <div className="
        relative flex flex-col h-full bg-[#11161d]/80 backdrop-blur-sm
        border border-white/10 rounded-2xl overflow-hidden
        transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]
        hover:-translate-y-2
      ">

        {/* Image Container */}
        <div className="relative w-full h-64 overflow-hidden">
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#11161d] via-transparent to-transparent z-10 opacity-80" />

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Category Badge */}
          <div className="absolute top-4 right-4 z-20">
            <span className="
              px-3 py-1 text-xs font-bold uppercase tracking-wider 
              text-white bg-blue-600/80 backdrop-blur-md rounded-full 
              border border-blue-400/20 shadow-lg
            ">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6 pt-2">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-1" title={project.title}>
            {project.title.replace(/[_-]/g, ' ')}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-auto">
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="
                  flex-1 flex items-center justify-center gap-2 
                  px-4 py-3 rounded-xl 
                  bg-gradient-to-r from-blue-600 to-indigo-600 
                  text-white text-sm font-semibold 
                  shadow-lg shadow-blue-900/20
                  transition-all duration-300 
                  hover:shadow-blue-600/40 hover:scale-[1.02]
                "
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            ) : (
              <button
                disabled
                className="
                  flex-1 flex items-center justify-center gap-2 
                  px-4 py-3 rounded-xl 
                  bg-white/5 border border-white/5 
                  text-slate-500 text-sm font-semibold cursor-not-allowed
                "
              >
                <ExternalLink size={18} />
                Demo N/A
              </button>
            )}

            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer noopener"
                className="
                  flex items-center justify-center gap-2 
                  px-4 py-3 rounded-xl 
                  bg-white/5 border border-white/10 
                  text-white text-sm font-semibold 
                  transition-all duration-300 
                  hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]
                "
                title="View Code"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Glow Hover Effect Border */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500/30 pointer-events-none transition-colors duration-500" />
      </div>
    </div>
  );
}
