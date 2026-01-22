import { Code2, Palette, Smartphone, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building fast, scalable, and secure web applications using modern frameworks like React and Next.js.",
    icon: <Code2 size={32} className="text-blue-400" />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning user interfaces that drive engagement and conversions.",
    icon: <Palette size={32} className="text-purple-400" />,
  },
  {
    id: 3,
    title: "Responsive Design",
    description: "Ensuring your website looks and performs perfectly on all devices, from desktops to mobile phones.",
    icon: <Smartphone size={32} className="text-pink-400" />,
  },
  {
    id: 4,
    title: "Backend Solutions",
    description: "Robust backend architectures with secure API integrations and database management.",
    icon: <Globe size={32} className="text-cyan-400" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full py-20 bg-[#0b1018] overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
            My Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Delivering comprehensive digital solutions to help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-center text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                {/* <span>Learn more</span>
                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
