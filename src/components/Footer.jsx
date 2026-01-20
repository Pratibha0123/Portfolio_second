import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaMedium, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Pratibha0123",
      icon: <FaGithub size={24} />,
      color: "hover:text-gray-400",
      gradient: "from-gray-500 to-slate-500"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/pratibhasharma1/",
      icon: <FaLinkedin size={24} />,
      color: "hover:text-blue-500",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/pratibha.sharma.894727",
      icon: <FaFacebook size={24} />,
      color: "hover:text-blue-600",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/sharmapratibha_21",
      icon: <FaInstagram size={24} />,
      color: "hover:text-pink-500",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      name: "Medium",
      href: "https://medium.com/@sharmapratibha0123",
      icon: <FaMedium size={24} />,
      color: "hover:text-white",
      gradient: "from-gray-100 to-gray-400"
    },
    {
      name: "Email",
      href: "mailto:sharmapratibha0123@gmail.com",
      icon: <FaEnvelope size={24} />,
      color: "hover:text-red-400",
      gradient: "from-red-400 to-red-600"
    }
  ];

  return (
    <footer className="w-full bg-[#0b1018] relative overflow-hidden border-t border-white/5 pt-16 pb-8">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-10 relative z-10">

        {/* Social Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-3 rounded-xl bg-white/5 border border-white/5 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/10 shadow-lg hover:shadow-${link.color.split('-')[2]}-500/20`}
              aria-label={link.name}
            >
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap shadow-xl">
                {link.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
              </span>

              {/* Icon */}
              <div className={`text-gray-400 transition-colors duration-300 ${link.color}`}>
                {link.icon}
              </div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">
            Designed & Built by <span className="text-blue-400 font-semibold">Pratibha Sharma</span>
          </p>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
