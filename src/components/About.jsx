import { Link } from "react-router-dom";
import AboutImage from "../assets/About.jpg";
import ResumePDF from "../assets/Full Stack Developer & UI Designer.pdf";


export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-20 bg-[#0b1018] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          data-aos="fade-down"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-16"
        >
          About <span className="text-indigo-500">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div data-aos="zoom-in" className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <img
                src={AboutImage}
                alt="Pratibha Sharma"
                className="relative rounded-2xl shadow-2xl w-full max-w-[320px] lg:max-w-[400px] h-auto object-cover border border-white/10"
              />
            </div>
          </div>

          <div data-aos="fade-left" className="space-y-6 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Hello! I'm <span className="text-indigo-400">Pratibha Sharma</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I’m a <span className="text-indigo-400">Frontend Developer & UI Designer </span>
              with a Computer Science Engineering background. I specialize in
              <span className="text-indigo-400"> React.js, JavaScript, HTML, CSS</span>,
              and design tools like <span className="text-indigo-400">Figma</span>, where I create
              clean, responsive, and user-friendly web applications.
            </p>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Currently, I work as a <span className="text-indigo-400">UI Tester and Frontend Developer </span>
              at Shwetak Global Solutions Pvt. Ltd., collaborating with backend teams to deliver
              seamless, high-performance user experiences.
            </p>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I enjoy exploring new frameworks like <span className="text-indigo-400">Next.js </span>,
              working on creative projects, and blending technical precision with design thinking
              to craft impactful digital solutions.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a href={ResumePDF} target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-indigo-500 text-white font-medium shadow-lg hover:bg-indigo-400 hover:-translate-y-1 transition duration-300"
              >
                Download Resume
              </a>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg border border-indigo-500 text-indigo-400 font-medium hover:bg-indigo-500 hover:text-white hover:-translate-y-1 transition duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
