
import { FaLaptopCode, FaPenNib, FaMobileAlt, FaServer } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const services = [
  {
    id: 1,
    title: "Website Development",
    description: "Building fast, responsive, and modern websites tailored to your needs.",
    icon: <FaLaptopCode size={40} className="text-blue-500" />,
  },
  {
    id: 2,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly designs for your brand.",
    icon: <FaPenNib size={40} className="text-pink-500" />,
  },
  {
    id: 3,
    title: "Responsive Design",
    description: "Ensuring websites work beautifully on all devices and screen sizes.",
    icon: <FaMobileAlt size={40} className="text-green-500" />,
  },
  {
    id: 4,
    title: "Backend Development",
    description: "Developing secure and scalable backend systems for web applications.",
    icon: <FaServer size={40} className="text-purple-500" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 border-white/5">
      <div className="container mx-auto px-6 sm:px-12">
        <SectionTitle>MY SERVICES</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 p-8 rounded-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
