import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { MovieHomeCaurosal } from "../components/cards/MovieHomeCaurosal";
import { SubHeader } from "../components/cards/SubHeader";
import img from "../assets/joker1.jpg"; // Image path for testing
import CustomSlider from "../components/cards/MoviesSlider"; // Import the CustomSlider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b bg-neutral-800">
      <main className="flex-grow">
        {/* Movie Carousel */}
        <MovieHomeCaurosal />

        {/* Slider for New Arrivals */}
        <CustomSlider title="New Arrivals" data={cardData} />

        {/* Slider for Trending Movies */}
        <CustomSlider title="Trending Movies" data={cardData} />

        {/* Slider for Upcoming Shows */}
        <CustomSlider title="Upcoming Shows" data={upcomingShows} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
