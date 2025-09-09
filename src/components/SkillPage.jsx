import SectionTitle from "./SectionTitle";
import {
  Code,
  Server,
  Database,
  Layers,
  Terminal,
  Wrench,
} from "lucide-react"; 

const skills = [
  {
    title: "Frontend",
    color: "indigo",
    icon: Code,
    items: [
      { label: "HTML", level: 90 },
      { label: "CSS", level: 85 },
      { label: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Backend",
    color: "purple",
    icon: Server,
    items: [
      { label: "Node.js", level: 75 },
      { label: "Django", level: 70 },
      { label: "Express.js", level: 70 },
      { label: "REST APIs", level: 80 },
    ],
  },
  {
    title: "Databases",
    color: "emerald",
    icon: Database,
    items: [
      { label: "SQL", level: 85 },
      { label: "PostgreSQL", level: 80 },
    ],
  },
  {
    title: "Frameworks",
    color: "cyan",
    icon: Layers,
    items: [
      { label: "React.js", level: 85 },
      { label: "Next.js", level: 75 },
      { label: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Programming Languages",
    color: "orange",
    icon: Terminal,
    items: [
      { label: "JavaScript", level: 85 },
      { label: "Python", level: 80 },
      { label: "Java", level: 70 },
      { label: "SQL", level: 75 },
    ],
  },
  {
    title: "Tools & Version Control",
    color: "pink",
    icon: Wrench,
    items: [
      { label: "Git", level: 80 },
      { label: "GitHub", level: 85 },
      { label: "Postman", level: 75 },
      { label: "VS Code", level: 90 },
      { label: "Figma", level: 80 },
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
          A versatile skill set that merges{" "}
          <span className="text-indigo-400">frontend design</span>,{" "}
          <span className="text-purple-400">backend development</span>, and{" "}
          <span className="text-emerald-400">database expertise</span> —
          enhanced with modern frameworks and tools.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition duration-500"
            >
             
              <div className="flex items-center gap-3 mb-6">
                <category.icon
                  className={`h-6 w-6 text-${category.color}-400`}
                />
                <h3
                  className={`text-lg font-semibold text-${category.color}-400`}
                >
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {category.items.map((skill, idx) => (
                  <li key={idx}>
                    <div className="flex justify-between text-sm">
                      <span>{skill.label}</span>
                      <span className="text-white/50">{skill.level}%</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-2 rounded-full bg-${category.color}-400 transition-all duration-700 group-hover:w-[${skill.level}%]`}
                        style={{ width: `${skill.level}%` }}
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
