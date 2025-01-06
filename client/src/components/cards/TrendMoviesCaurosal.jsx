import { useState, useEffect } from "react";
import img_movies from "../..//assets/online_movies.jpg";
import img_books from "../../assets/books_online.jpeg";
import img_software from "../../assets/online_software.jpeg";
import { FiArrowUpRight } from "react-icons/fi";

const TrendMoviesCaurosal = () => {
  return (
    <div>
      <div id="explore" className="py-10 px-8 bg-neutral-800">
        <h2 className="text-4xl font-bold mb-12">
          Trending Movies{" "}
          <span className="inline-block ml-5 font-bold">&rarr;</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Movie Section */}
          <div
            className="bg-cover bg-center rounded-lg overflow-hidden hover:scale-105 transition duration-300 ease-in-out"
            style={{ backgroundImage: `url(${img_movies})` }}
          >
            <div className="p-6 bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">Movies</h3>
              <p className="text-gray-200">
                Discover a wide range of blockbuster movies, classics, and
                exclusive releases for movie lovers.
              </p>
              <a href="#movies" className="text-red-600 mt-4 block font-bold">
                Watch Now &rarr;
              </a>
            </div>
          </div>

          {/* Book Section */}
          <div
            className="bg-cover bg-center rounded-lg overflow-hidden hover:scale-105 transition duration-300 ease-in-out"
            style={{ backgroundImage: `url(${img_books})` }}
          >
            <div className="p-6 bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">Books</h3>
              <p className="text-gray-200">
                Dive into an extensive collection of bestsellers, timeless
                literature, and educational resources.
              </p>
              <a href="#books" className="text-red-600 mt-4 block font-bold">
                Go Read &rarr;
              </a>
            </div>
          </div>

          {/* Software Section */}
          <div
            className="bg-cover bg-center rounded-lg overflow-hidden hover:scale-105 transition duration-300 ease-in-out"
            style={{ backgroundImage: `url(${img_software})` }}
          >
            <div className="p-6 bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Software
              </h3>
              <p className="text-gray-200">
                Enhance your workflow with the best tools, productivity apps,
                and software solutions available today.
              </p>
              <a href="#software" className="text-red-600 mt-4 block font-bold">
                Explore Software &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendMoviesCaurosal;
