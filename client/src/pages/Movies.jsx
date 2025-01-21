import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { MovieHomeCaurosal } from "../components/cards/MovieHomeCaurosal";
import { SubHeader } from "../components/cards/SubHeader";
import { IoMdPlayCircle } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import img from "../assets/joker1.jpg";

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

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-700">
      <div className="relative">
        <SubHeader />
      </div>
      <main className="flex-grow">
        <MovieHomeCaurosal />
        <div className="mx-5 md:mx-20 my-10">
          <h2 className="text-3xl font-bold mt-12 mb-8 text-slate-300 border-b-2 border-gray-800 pb-7 items-center">
            New Arrivals
            <MdOutlineKeyboardDoubleArrowRight className="inline-block ml-2 text-slate-500" />
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="relative overflow-hidden shadow-2xl group transform transition duration-500 hover:scale-105 hover:shadow-lg"
              >
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
                  <p className="text-lg text-gray-300 mt-1">{card.duration}</p>
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
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
