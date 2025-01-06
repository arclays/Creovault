import img from "../assets/con.webp";
import img_movies from "../assets/online_movies.jpg";
import img_books from "../assets/books_online.jpeg";
import img_software from "../assets/online_software.jpeg";
import { FiArrowUpRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import TrendMoviesCaurosal from "../components/cards/TrendMoviesCaurosal";

export default function Dashboard() {
  return (
    <div className="">
      {/* Hero Section with Background Image */}
      <div
        className="bg-white h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
        {/* Lighter background for contrast */}
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 md:px-0">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Discover the World of Movies, Books, and Software
          </h1>
          <p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
            Explore amazing content, build your library, and enhance your
            productivity with the best software solutions.
          </p>
          <div className="flex md:flex-row flex-col-reverse gap-10 justify-center items-center">
            <a
              href="#explore"
              className="bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-gradient-to-r hover:from-yellow-500 hover:from-10% hover:via-red-500 hover:via-30% hover:to-purple-500 hover:to-90% transition duration-700 ease-out  hover:duration-150 shadow-lg hover:scale-105"
            >
              Start Exploring
              <FiArrowUpRight className="inline-block ml-2" />
            </a>
            {/* Login Button */}
            <a
              href="#login"
              className="border text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-500 hover:border-blue-500 transition duration-300 ease-in-out"
            >
              <FcGoogle className="inline-block mr-4 size-8" />
              Continue with Google
            </a>
          </div>
        </div>
      </div>

      {/* Movie, Book, and Software Sections */}
      <div id="explore" className="py-20 px-8 bg-neutral-800">
        <h2 className="text-4xl font-bold text-center mb-12">
          Explore Our Collections
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

      <TrendMoviesCaurosal />

      {/* Footer Section */}
      <footer className="bg-neutral-900 text-white py-10">
        <div className="text-center">
          <p className="mb-4">&copy; 2025 YourSite. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
