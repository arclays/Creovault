import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const Slider = ({ title, info, link }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setItemsPerScreen(2);
      } else if (window.innerWidth < 1000) {
        setItemsPerScreen(3);
      } else {
        setItemsPerScreen(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.ceil(info.length / itemsPerScreen) - 1;

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === maxIndex ? 0 : currentIndex + 1);
  };

  return (
    <div className="flex flex-col space-y-4 md:mx-14">
      <div className="flex justify-between items-center px-6 pt-10">
        <h3 className="text-2xl capitalize font-bold text-neutral-200">
          {title}
        </h3>
        {/* <div className="flex gap-1">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <div
              key={i}
              className={`w-6 h-2 bg-gray-400 rounded-sm ${
                i === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div> */}
        <Link
          to={link}
          className="gap-2 flex items-center text-xs text-white-500 font-bold hover:bg-red-600 hover:border-red-600 rounded cursor-pointer border p-2"
        >
          <FaPlus className="inline-block mr-1" /> <span>View More</span>
        </Link>
      </div>
      <div className="flex justify-center items-center overflow-hidden relative">
        {/* Left Wall */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-gray-800 to-transparent z-20"></div> */}

        {/* Slider Content */}
        <button
          onClick={handlePrevClick}
          className="absolute left-2 z-50 p-4 bg-opacity-50 text-red-600 text-7xl hover:text-red-800 transition"
        >
          &#8249;
        </button>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${(info.length / itemsPerScreen) * 100}%`,
          }}
        >
          {info.map((item, index) => (
            <div
              key={index}
              className="flex-none p-2"
              style={{
                flex: `0 0 ${100 / itemsPerScreen}%`,
                position: "relative",
              }}
            >
              <div className="relative group">
                <img
                  src={item.url}
                  alt={`Slide ${index}`}
                  className="w-full h-64 object-cover shadow-md transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-20"
                  style={{
                    zIndex: 1,
                    transition:
                      "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
                  }}
                />
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4
                    className="font-bold text-red-700 text-xl mb-3 capitalize"
                    style={{ textShadow: "2px 2px black" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Wall */}
        {/* <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-gray-800 to-transparent z-0"></div> */}

        {/* Right Button */}
        <button
          onClick={handleNextClick}
          className="absolute right-2 z-10 p-4  bg-opacity-50 text-red-600 hover:text-red-800 text-7xl transition"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Slider;
