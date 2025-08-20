import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import AboutImage from "../assets/About.jpg"; // Better to import image directly

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden ">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        {/* Text content */}
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
            Computer Science graduate eager to create impactful and user-friendly
            digital experiences. I combine creativity and technical expertise to
            deliver high-quality web solutions.
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

        {/* Profile image */}
        <div className="relative mx-auto h-64 w-64 md:h-72 md:w-72">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(168,85,247,0.35),rgba(59,130,246,0.35)_60%,transparent_70%)] blur-2xl" />
          <div className="relative h-full w-full rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-1">
            <img
              src={AboutImage}
              alt="Pratibha Sharma"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
