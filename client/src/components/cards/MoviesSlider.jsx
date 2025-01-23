import React from "react";
import Slider from "react-slick";
import { IoMdPlayCircle } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 z-10 bg-red-800 text-white p-3 rounded-full shadow-lg hover:bg-red-700 focus:outline-none"
    style={{ top: "50%", transform: "translateY(-50%)" }}
    aria-label="Previous Slide"
  >
    <FaChevronLeft className="text-lg" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 z-10 bg-red-800 text-white p-3 rounded-full shadow-lg hover:bg-red-700 focus:outline-none"
    style={{ top: "50%", transform: "translateY(-50%)" }}
    aria-label="Next Slide"
  >
    <FaChevronRight className="text-lg" />
  </button>
);

const CustomSlider = ({ title, data }) => {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    arrows: true, // Enable arrows
    prevArrow: <CustomPrevArrow />, // Pass custom previous arrow
    nextArrow: <CustomNextArrow />, // Pass custom next arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-16 px-5 md:px-20">
      <h2 className="text-3xl font-bold text-gray-200 mb-8 border-b-2 pb-3 border-neutral-700">
        {title}
      </h2>
      <div className="relative">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md group transform transition-transform duration-500 hover:scale-105"
            >
              {/* Card Image */}
              <div className="relative w-full h-72">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay with Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">{item.duration}</p>
                <p className="text-xs text-gray-400 mt-1">{item.description}</p>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <IoMdPlayCircle
                  className="w-16 h-16 text-white cursor-pointer hover:text-red-500 transition-all"
                  style={{ fontSize: "4rem" }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomSlider;
