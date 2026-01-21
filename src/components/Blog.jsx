import { useEffect, useState } from "react";
import Slider from "react-slick";
import { blogs } from "../data/blogs";
import { Calendar, User, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Blog() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    className: "center",
    centerMode: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
        },
      },
    ],
  };

  const renderBlogCard = (blog, index) => (
    <div key={index} className="px-3 py-4 h-full">
      <div className="group h-full flex flex-col bg-[#11161d] border border-white/5 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1">

        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#11161d] to-transparent opacity-60 z-10" />
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 text-xs font-semibold bg-blue-600/90 text-white rounded-full backdrop-blur-sm">
              Next.js
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>Oct 24, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <span>Pratibha</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
            {blog.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {blog.excerpt}
          </p>

          <div className="mt-auto">
            <button className="flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-blue-400 transition-colors group-hover:gap-3">
              Read Article <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="blog" className="py-20 bg-[#0b1018] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
            Recent Articles
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thoughts on development, design, and the future of tech.
          </p>
        </div>

        <Slider {...sliderSettings}>
          {blogs.map(renderBlogCard)}
        </Slider>
      </div>
    </section>
  );
}
