import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import { MovieHomeCaurosal } from "../../components/cards/movies/MovieHomeCaurosal";
import img from "../../assets/joker1.jpg"; // Image path for testing
import MovieSlider from "../../components/cards/movies/MoviesSlider"; // Import the CustomSlider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieSliderShowOne from "../../components/cards/movies/MovieSliderShowOne";

export default function Movies() {
  const cardData = [
    {
      title: "Joker",
      image: img, // Ensure the path is correct
      duration: "2h 32m",
      description: "A failed comedian's descent into madness.",
    },
    {
      title: "Batman",
      image: img, // Ensure the path is correct
      duration: "2h 24m",
      description: "Batman faces the Joker in a battle for Gotham's soul.",
    },
    {
      title: "Superman",
      image: img, // Ensure the path is correct
      duration: "2h 23m",
      description: "Superman fights to protect Earth from destruction.",
    },
    {
      title: "Wonder Woman",
      image: img, // Ensure the path is correct
      duration: "2h 21m",
      description: "Wonder Woman battles to bring peace to the world.",
    },
  ];

  const upcomingShows = [
    {
      title: "Stranger Things",
      image: img, // Ensure the path is correct
      description:
        "The new season of Stranger Things brings more supernatural thrills.",
    },
    {
      title: "The Witcher",
      image: img, // Ensure the path is correct
      description:
        "Geralt of Rivia returns for more epic adventures in this fantasy series.",
    },
    {
      title: "The Mandalorian",
      image: img, // Ensure the path is correct
      description:
        "The Mandalorian's journey continues as he battles his enemies across the galaxy.",
    },
    {
      title: "Loki",
      image: img, // Ensure the path is correct
      description:
        "Join Loki in a new adventure that takes him through time and space.",
    },
  ];

  const showOne = [
    {
      title: "Stranger Things",
      image: img, // Ensure the path is correct
      description:
        "The new season of Stranger Things brings more supernatural thrills.",
    },
    {
      title: "The Witcher",
      image: img, // Ensure the path is correct
      description:
        "Geralt of Rivia returns for more epic adventures in this fantasy series.",
    },
    {
      title: "The Mandalorian",
      image: img, // Ensure the path is correct
      description:
        "The Mandalorian's journey continues as he battles his enemies across the galaxy.",
    },
    {
      title: "Loki",
      image: img, // Ensure the path is correct
      description:
        "Join Loki in a new adventure that takes him through time and space.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b bg-neutral-800">
      <main className="flex-grow">
        {/* Movie Carousel */}
        <MovieHomeCaurosal />

        {/* Slider for New Arrivals */}
        <MovieSlider title="New Arrivals" data={cardData} />

        {/* Slider for Upcoming Shows */}
        <MovieSlider title="Trending Shows" data={upcomingShows} />

        <div className="shadow-lg shadow-neutral-900 rounded bg-neutral-900 text-white py-12  container mx-auto px-5 md:px-28">
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
                className="w-4/5 md:w-1/2 px-4 py-2 rounded bg-neutral-700 text-white border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button className="ml-4 bg-red-600 py-2 px-3 rounded-full text-lg hover:bg-red-700 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto px-5 md:px-20 gap-7 py-10">
          <MovieSliderShowOne title="Upcoming Shows" data={showOne} />
          <MovieSliderShowOne title="Top movies" data={showOne} />
          <MovieSliderShowOne title="Top Series" data={showOne} />
          <MovieSliderShowOne title="Popular Shows" data={showOne} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
