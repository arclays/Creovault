import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { MovieHomeCaurosal } from "../components/cards/MovieHomeCaurosal";
import { SubHeader } from "../components/cards/SubHeader";
import { IoMdPlayCircle } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import img from "../assets/joker1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Movies() {
  const cardData = [
    {
      title: "Joker",
      image: img,
      duration: "2h 32m",
      description: "A failed comedian's descent into madness.",
    },
    {
      title: "Batman",
      image: img,
      duration: "2h 24m",
      description: "Batman faces the Joker in a battle for Gotham's soul.",
    },
    {
      title: "Superman",
      image: img,
      duration: "2h 23m",
      description: "Superman fights to protect Earth from destruction.",
    },
    {
      title: "Wonder Woman",
      image: img,
      duration: "2h 21m",
      description: "Wonder Woman battles to bring peace to the world.",
    },
  ];

  const upcomingShows = [
    {
      title: "Stranger Things",
      image: img,
      description:
        "The new season of Stranger Things brings more supernatural thrills.",
    },
    {
      title: "The Witcher",
      image: img,
      description:
        "Geralt of Rivia returns for more epic adventures in this fantasy series.",
    },
    {
      title: "The Mandalorian",
      image: img,
      description:
        "The Mandalorian's journey continues as he battles his enemies across the galaxy.",
    },
    {
      title: "Loki",
      image: img,
      description:
        "Join Loki in a new adventure that takes him through time and space.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-700">
      {/* Hero Section */}
      <div className="relative w-full h-[600px] md:h-[700px]">
        <img
          src={img}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to MovieZone
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Explore the best of cinema and streaming content
          </p>
          <button className="bg-red-600 text-white py-2 px-6 rounded-full text-lg hover:bg-red-700 transition-all">
            Explore Now
          </button>
        </div>
      </div>

      {/* Subheader */}
      <div className="relative">
        <SubHeader />
      </div>

      <main className="flex-grow">
        {/* Movie Carousel */}
        <MovieHomeCaurosal />

        {/* New Arrivals Section */}
        <div className="mx-5 md:mx-20 my-10">
          <h2 className="text-3xl font-bold mt-12 mb-8 text-slate-300 border-b-2 border-gray-800 pb-7 items-center">
            New Arrivals
            <MdOutlineKeyboardDoubleArrowRight className="inline-block ml-2 text-slate-500" />
          </h2>

          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 5000 }}
            className="mySwiper"
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden shadow-2xl group transform transition duration-500 hover:scale-105 hover:shadow-lg">
                  {/* Card Image */}
                  <div className="relative w-full h-72">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Dark overlay and Movie Title */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-40">
                    <h3 className="text-white text-3xl font-extrabold leading-tight tracking-wide">
                      {card.title}
                    </h3>
                    <p className="text-lg text-gray-300 mt-1">
                      {card.duration}
                    </p>
                    <p className="text-sm text-gray-200 mt-2">
                      {card.description}
                    </p>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <IoMdPlayCircle
                      className="w-16 h-16 text-white cursor-pointer hover:text-red-600 transition-all duration-300"
                      style={{ fontSize: "3rem" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Trending Movies Section */}
        <div className="mx-5 md:mx-20 my-16 bg-gradient-to-r from-blue-800 via-purple-600 to-red-600 p-10 rounded-xl shadow-xl">
          <h2 className="text-4xl font-bold text-white mb-8 tracking-wide">
            Trending Movies
          </h2>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 5000 }}
            className="mySwiper"
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden group transform transition duration-500 hover:scale-105 hover:shadow-xl">
                  <div className="relative w-full h-72 rounded-xl overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
                    />
                  </div>

                  {/* Card Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 flex flex-col justify-end p-6">
                    <h3 className="text-white text-3xl font-extrabold leading-tight tracking-wide group-hover:text-yellow-300 transition-all">
                      {card.title}
                    </h3>
                    <p className="text-lg text-gray-300 mt-1">
                      {card.duration}
                    </p>
                    <p className="text-sm text-gray-200 mt-2">
                      {card.description}
                    </p>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <IoMdPlayCircle
                      className="w-16 h-16 text-white cursor-pointer hover:text-red-600 transition-all duration-300"
                      style={{ fontSize: "3rem" }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Upcoming Shows Section */}
        <div className="mx-5 md:mx-20 my-16 bg-gray-900 text-white p-10 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold mb-8">Upcoming Top Shows</h2>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 5000 }}
            className="mySwiper"
          >
            {upcomingShows.map((show, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden group transform transition duration-500 hover:scale-105 hover:shadow-lg">
                  <div className="relative w-full h-72">
                    <img
                      src={show.image}
                      alt={show.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6">
                    <h3 className="text-white text-3xl font-extrabold leading-tight tracking-wide">
                      {show.title}
                    </h3>
                    <p className="text-lg text-gray-300 mt-1">
                      {show.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Newsletter Section */}
        <div className="bg-black text-white py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg mb-6">
              Subscribe to our newsletter for the latest movie releases and
              news!
            </p>
            <div className="flex justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-4/5 md:w-1/2 px-4 py-2 rounded-full bg-gray-700 text-white border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button className="ml-4 bg-red-600 py-2 px-6 rounded-full text-lg hover:bg-red-700 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
