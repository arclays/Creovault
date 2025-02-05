import React from "react";
import Slider from "react-slick";
import { IoMdPlayCircle } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-7 z-10 opacity-60 text-white hover:text-red-700"
    style={{ top: "-10%", transform: "translateY(-50%)" }}
    aria-label="Previous Slide"
  >
    <FaChevronLeft className="text-lg" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 z-10 pl-1 border-l-2 opacity-60 text-white border-l-neutral-700 hover:text-red-700"
    style={{ top: "-10%", transform: "translateY(-50%)" }}
    aria-label="Next Slide"
  >
    <FaChevronRight className="text-lg" />
  </button>
);

const MovieSliderShowOne = ({ title, data }) => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    rows: 2,
    speed: 600,
    arrows: true, // Enable arrows
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    centerMode: true, // Keep items centered
    centerPadding: "0", // Ensure no padding by default
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0", // Remove padding here as well
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0", // Ensure no padding on smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0", // Remove padding for small screens
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-5">
      {" "}
      {/* Ensure full width with some padding */}
      <h2 className="font-bold mb-8 border-b-2 pb-3 text-red-800 capitalize border-neutral-700">
        {title}
      </h2>
      <div className="relative w-full h-full mx-auto">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-md group transform m-2 transition-transform duration-500 hover:scale-105"
            >
              {/* Card Image */}
              <div
                className="relative w-full h-72 cursor-pointer"
                onClick={() => navigate(`/movie_details`)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay with Details */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black to-transparent cursor-pointer flex flex-col justify-end p-4"
                onClick={() => navigate(`/movie_details`)}
              >
                <h3 className="text-white text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">{item.duration}</p>
                <p className="text-xs text-gray-400 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieSliderShowOne;
