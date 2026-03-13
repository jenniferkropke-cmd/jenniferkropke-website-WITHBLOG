import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const projects = [
  {
    title: "Dehkhoda Education Foundation",
    description: "Multimedia storytelling for a servant leadership education nonprofit",
  },
  {
    title: "Say Yes To Childcare",
    description: "Digital campaign and resources for childcare accessibility",
  },
  {
    title: "Kids Academy Early Learning Center",
    description: "Brand identity, website design, and virtual tour",
  },
  {
    title: "Twinkle Toes Today",
    description: "Social media content and brand development for dance education",
  },
];

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-6 h-6 text-gray-800" />
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all"
      aria-label="Next slide"
    >
      <ChevronRight className="w-6 h-6 text-gray-800" />
    </button>
  );
}

export function FeaturedWorkSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-12">Featured Work</h2>
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-gray-900 hover:gap-3 transition-all"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}