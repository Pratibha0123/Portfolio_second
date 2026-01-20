"use client";

import SectionTitle from "./SectionTitle";

import {
  Code,
  Server,
  Database,
 Brain,
  Terminal,
 
  PenTool,
} from "lucide-react";

const skills = [
  
  {
    title: "Frontend",
    color: "#6366f1", // indigo-400
    icon: Code,
    items: [
      { label: "HTML", level: 80 },
      { label: "CSS", level: 85 },
      { label: "JavaScript", level: 80 },
      { label: "React.js", level: 85 },
      { label: "Next.js", level: 75 },
      { label: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    color: "#a855f7", // purple-400
    icon: Server,
    items: [
      { label: "Node.js", level: 65 },
      { label: "Express.js", level: 70 },
      { label: "Django", level: 50 },
      { label: "REST APIs", level: 80 },
      // { label: "Authentication (JWT / OAuth)", level: 75 },
    ],
  },
  {
    title: "Databases",
    color: "#34d399", // emerald-400
    icon: Database,
    items: [
      { label: "SQL", level: 65 },
      { label: "MongoDB", level: 50 },
      { label: "PostgreSQL", level: 50 },
      { label: "Firebase", level: 40 },
    ],
  },

  {
    title: "Programming Languages",
    color: "#fb923c", // orange-400
    icon: Terminal,
    items: [
      { label: "JavaScript", level: 85 },
      { label: "Python", level: 80 },
      { label: "Java", level: 70 },
      { label: "TypeScript", level: 68 },
    ],
  },
  {
    title: "UI / UX & Tools",
    color: "#f472b6", // pink-400
    icon: PenTool,
    items: [
      { label: "Figma", level: 80 },
      { label: "Adobe XD", level: 65 },
      { label: "Git", level: 80 },
      { label: "GitHub", level: 85 },
      { label: "Postman", level: 75 },
      { label: "VS Code", level: 90 },
    ],
  },
  {
    title: "AI & Machine Learning",
    color: "#8b5cf6", // violet-400
    icon: Brain,
    items: [
      { label: "OpenAI API", level: 85 },
      { label: "AI Chatbot Development", level: 60 },
    ],
  },
];

export default function SkillPage() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 py-20 bg-[#0b1018] text-white"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle>My Skills</SectionTitle>

        <p className="mt-4 text-center text-white/60 max-w-2xl mx-auto">
          A next-gen skillset combining{" "}
          <span className="text-indigo-400">frontend engineering</span>,{" "}
          <span className="text-purple-400">backend development</span>,{" "}
          <span className="text-emerald-400">database management</span>,{" "}
          <span className="text-violet-400">AI engineering</span> and{" "}
          <span className="text-cyan-400">cloud technologies</span>.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition duration-500"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <category.icon style={{ color: category.color }} className="h-6 w-6" />
                <h3
                  className="text-lg font-semibold"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-4">
                {category.items.map((skill, idx) => (
                  <li key={idx}>
                    <div className="flex justify-between text-sm">
                      <span>{skill.label}</span>
                      <span className="text-white/50">{skill.level}%</span>
                    </div>

                    <div className="mt-1 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-2 rounded-full transition-all duration-700"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: category.color,
                        }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
