import { useState, useEffect } from "react";
import img from "../../../assets/books_online.jpeg";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";

export const MovieHomeCaurosal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [img, img, img, img, img];
  const slideInterval = 5000; // Auto-slide interval in milliseconds

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, slideInterval);

    // Cleanup interval on component unmount or state change
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div>
      {" "}
      <div className="relative w-full h-full md:h-[60vh] overflow-hidden">
        {/* Carousel Image */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>

        {/* Controls */}
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={handlePrev}
            className="bg-gray-900 ml-10 md:ml-20 bg-opacity-50 text-white p-2 rounded-full shadow-lg hover:bg-red-600 hover:opacity-70 focus:outline-none"
          >
            <TbArrowBadgeLeft className="text-3xl md:text-5xl" />
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-900 mr-10 md:mr-20 bg-opacity-50 text-white p-2 rounded-full shadow-lg hover:bg-red-600 hover:opacity-7 focus:outline-none"
          >
            <TbArrowBadgeRight className="text-3xl md:text-5xl" />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-red-500" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
