import Card from "./Card";
import SectionTitle from "./SectionTitle";
import { skillsPrimary, skillsSecondary } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle>Skills</SectionTitle>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <p className="mb-4 text-sm uppercase tracking-wider text-white/60">
              Frontend
            </p>
            <div className="flex flex-wrap gap-3">
              {skillsPrimary.map((sk) => (
                <div
                  key={sk.label}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                >
                  <sk.icon className="h-4 w-4" />
                  <span className="text-sm">{sk.label}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <p className="mb-4 text-sm uppercase tracking-wider text-white/60">
              Backend & Tools
            </p>
            <div className="flex flex-wrap gap-3">
              {skillsSecondary.map((sk) => (
                <div
                  key={sk.label}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                >
                  <sk.icon className="h-4 w-4" />
                  <span className="text-sm">{sk.label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
