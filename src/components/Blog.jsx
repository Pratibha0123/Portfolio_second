
import Slider from "react-slick";
import { blogs } from "../data/blogs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Blog() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="border-white/5 py-12 px-6">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Latest Blogs
      </h2>

      <Slider {...settings}>
        {blogs.map((blog, index) => (
          <div key={index} className="px-3">
            <div className="bg-Rich-Black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

          
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white truncate">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2 line-clamp-3 overflow-hidden">
                  {blog.excerpt}
                </p>
                <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition text-center">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

