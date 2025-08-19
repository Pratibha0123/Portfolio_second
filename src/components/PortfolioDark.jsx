
import { motion } from "framer-motion";
import {
  Code2,
  MonitorSmartphone,
  Palette,
 
  Server,
  Smartphone,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";
import Profile  from "../assets/About.jpg"


const nav = [
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Blog", href: "blog" },
  { label: "Contact", href: "contact" },
];

const services = [
  {
    icon: MonitorSmartphone,
    title: "Website Development",
    desc:
      "Responsive, fast, and accessible websites that look great and perform even better.",
  },
  {
    icon: Palette,
    title: "Web Design",
    desc:
      "Clean, modern UI with thoughtful UX so users find what they need quickly.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc:
      "Pixel‑perfect layouts across mobiles, tablets, laptops, and big screens.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc:
      "Secure, scalable APIs using Node.js & Express to power dynamic apps.",
  },
];

const skillsPrimary = [
  { icon: Code2, label: "HTML" },
  { icon: Code2, label: "CSS" },
  { icon: Code2, label: "JavaScript" },
  { icon: Code2, label: "React" },
  { icon: Code2, label: "Next.js" },
  { icon: Code2, label: "TypeScript" },
];

const skillsSecondary = [
  { icon: Code2, label: "Node.js" },
  { icon: Code2, label: "Express" },
  { icon: Code2, label: "REST APIs" },
  { icon: Code2, label: "Git / GitHub" },
  { icon: Code2, label: "Redux" },
  { icon: Code2, label: "Responsive UI" },
];

const projects = [
  {
    title: "Project 1",
    blurb:
      "A business website with a custom CMS and blazing‑fast performance.",
    image:
      "https://placehold.co/600x380/png?text=Project+1",
    live: "#",
    code: "#",
  },
  {
    title: "Project 2",
    blurb: "Interactive dashboard with charts and authentication.",
    image: "https://placehold.co/600x380/png?text=Project+2",
    live: "#",
    code: "#",
  },
  {
    title: "Cloud",
    blurb: "Cloud Computing Essentials — article + demo app.",
    image: "https://placehold.co/600x380/png?text=Cloud",
    live: "#",
    code: "#",
  },
];

const posts = [
  {
    title: "How AI can change the face of Web Development",
    image: "https://placehold.co/640x360/png?text=AI+%26+Web+Dev",
  },
  {
    title: "The Future of UI/UX and AI",
    image: "https://placehold.co/640x360/png?text=UI%2FUX+%2B+AI",
  },
  { title: "Cloud Computing Essentials", image: "https://placehold.co/640x360/png?text=Cloud" },
];

// Simple glass card
// eslint-disable-next-line react/prop-types
const Card = ({ children, className = "" }) => (
  <div
    className={
      "rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md " +
      className
    }
  >
    {children}
  </div>
);

// eslint-disable-next-line react/prop-types
const SectionTitle = ({ children }) => (
  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white">
    {children}
  </h2>
);

export default function PortfolioDark() {
  return (
    <div className="min-h-screen w-full bg-[#0b1018] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b1018]/70 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            {/* <Sparkles className="h-5 w-5" /> */}
            <span>Pratibha Sharma</span>
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-white/70 transition-colors hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold leading-tight md:text-5xl"
            >
              FRONTEND
              <br />
              DEVELOPER
            </motion.h1>
            <p className="mt-5 max-w-xl text-white/70">
              Hello! I’m <span className="text-white">Pratibha Sharma</span>, a passionate
              Computer Science graduate eager to create impactful and user‑friendly
              digital experiences. I combine creativity and technical expertise to
              deliver high‑quality web solutions.
            </p>
            <div className="mt-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-400"
              >
                View My Work <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Profile image with neon ring */}
      {/* Profile image with rotating neon aura */}
<div className="relative mx-auto h-64 w-64 md:h-72 md:w-72">
  {/* Outer spinning gradient ring */}
  <div className="absolute inset-0 rounded-full p-[3px] animate-spin-slow bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500">
    {/* Glow layer */}
    <div className="absolute inset-0 rounded-full animate-pulse-glow"></div>
    {/* Inner background + image */}
    <div className="relative h-full w-full rounded-full bg-[#0b1018] p-1">
      <img
        alt="Pratibha Sharma"
        className="h-full w-full rounded-full object-cover-fixed"
        src={Profile}
      />
    </div>
  </div>
</div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-white/5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-end justify-between">
            <SectionTitle>My Services</SectionTitle>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className="group h-full p-6 transition hover:bg-white/10">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-white/5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle>Skills</SectionTitle>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <p className="mb-4 text-sm uppercase tracking-wider text-white/60">Frontend</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
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
              <p className="mb-4 text-sm uppercase tracking-wider text-white/60">Backend & Tools</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
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

      {/* PROJECTS */}
      <section id="projects" className="border-t border-white/5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-center justify-between">
            <SectionTitle>Projects</SectionTitle>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative">
                  <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{p.blurb}</p>
                  <div className="mt-4 flex gap-3">
                    <a
                      href={p.live}
                      className="rounded-lg bg-indigo-500/90 px-3 py-2 text-xs font-medium transition hover:bg-indigo-400"
                    >
                      Live Demo
                    </a>
                    <a
                      href={p.code}
                      className="rounded-lg border border-white/15 px-3 py-2 text-xs font-medium text-white/80 hover:bg-white/10"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="border-t border-white/5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-center justify-between">
            <SectionTitle>Blog</SectionTitle>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.title} className="overflow-hidden">
                <img src={post.image} alt="post" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-base font-semibold leading-snug">{post.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-center justify-between">
            <SectionTitle>Contact</SectionTitle>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-lg font-semibold">Let’s Build Something Great Together!</h3>
              <p className="mt-2 text-white/70">
                I’m available for freelance work, internships, and full‑time roles.
                Let’s talk about how I can help.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="https://github.com/" className="rounded-full border border-white/15 p-3 hover:bg-white/10">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/" className="rounded-full border border-white/15 p-3 hover:bg-white/10">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:hello@example.com" className="rounded-full border border-white/15 p-3 hover:bg-white/10">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </Card>

            <Card className="p-6">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm text-white/70">Name</label>
                  <input
                    type="text"
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none ring-indigo-500/50 placeholder:text-white/40 focus:ring-2"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-white/70">Email</label>
                  <input
                    type="email"
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none ring-indigo-500/50 placeholder:text-white/40 focus:ring-2"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-white/70">Message</label>
                  <textarea
                    rows={4}
                    className="resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none ring-indigo-500/50 placeholder:text-white/40 focus:ring-2"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="button"
                  className="rounded-xl bg-indigo-500 px-5 py-3 font-medium shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-400"
                >
                  Send
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Pratibha Sharma. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
