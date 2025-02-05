import img from "../assets/con.webp";
import img_movies from "../assets/online_movies.jpg";
import img_books from "../assets/books_online.jpeg";
import img_software from "../assets/online_software.jpeg";
import { FiArrowUpRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Slider from "../components/cards/Slider";
import Footer from "../components/Footer";

const movieData = {
  title: "Trending Movies",
  movies: [
    {
      title: "Coder man",
      description:
        "Time to navigate the world for more movies and more data for updates",
      url: "https://images.unsplash.com/photo-1660130643232-a85efb07d60b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Coder man",
      description:
        "Time to navigate the world for more movies and more data for updates",
      url: "https://images.unsplash.com/photo-1657299142014-34b66b73e68e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Coder man",
      description:
        "Time to navigate the world for more movies and more data for updates",
      url: "https://images.unsplash.com/photo-1660092626872-bdc79892b910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Coder man",
      description:
        "Time to navigate the world for more movies and more data for updates",
      url: "https://images.unsplash.com/photo-1657299156147-13f929a63ce4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Coder man",
      description:
        "Time to navigate the world for more movies and more data for updates",
      url: "https://images.unsplash.com/photo-1657299142014-34b66b73e68e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Coder man",
      description:
        "Time to navigate the world for more movies and more data for updates",
      url: "https://images.unsplash.com/photo-1660130643232-a85efb07d60b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Coder man",
      description:
        "Time to navigate the world for more movies and more data for updates",
      url: "https://images.unsplash.com/photo-1660092626872-bdc79892b910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Coder man",
      description:
        "Time to navigate the world for more movies and more data for updates",
      url: "https://images.unsplash.com/photo-1657299156147-13f929a63ce4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    },
  ],
};

const SoftwareData = {
  title: "Popular Softwares",
  movies: [
    {
      title: "Coder man",
      description:
        "Time to navigate the world for more movies and more data for updates",
      url: "https://images.unsplash.com/photo-1660130643232-a85efb07d60b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Coder man",
      description:
        "Time to navigate the world for more movies and more data for updates",
      url: "https://images.unsplash.com/photo-1657299142014-34b66b73e68e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Coder man",
      description:
        "Time to navigate the world for more movies and more data for updates",
      url: "https://images.unsplash.com/photo-1660092626872-bdc79892b910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Coder man",
      description:
        "Time to navigate the world for more movies and more data for updates",
      url: "https://images.unsplash.com/photo-1657299156147-13f929a63ce4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Coder man",
      description:
        "Time to navigate the world for more movies and more data for updates",
      url: "https://images.unsplash.com/photo-1657299142014-34b66b73e68e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Coder man",
      description:
        "Time to navigate the world for more movies and more data for updates",
      url: "https://images.unsplash.com/photo-1660130643232-a85efb07d60b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Coder man",
      description:
        "Time to navigate the world for more movies and more data for updates",
      url: "https://images.unsplash.com/photo-1660092626872-bdc79892b910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Coder man",
      description:
        "Time to navigate the world for more movies and more data for updates",
      url: "https://images.unsplash.com/photo-1657299156147-13f929a63ce4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    },
  ],
};

export default function Home() {
  return (
    <div className="">
      {/* Hero Section with Background Image */}
      <div
        className="bg-white h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>{" "}
        {/* Lighter background for contrast */}
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 md:px-0">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Discover the World of Movies and Software
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
              className="border text-white py-3 px-6 rounded-full text-lg font-semibold hover:text-black hover:bg-slate-200 hover:border-slate-200 transition duration-300 ease-in-out"
            >
              <FcGoogle className="inline-block mr-4 size-8" />
              Continue with Google
            </a>
          </div>
        </div>
      </div>

      {/* Movie and Software Sections */}
      <div id="explore" className="py-20 px-8 bg-neutral-800">
        <h2 className="text-4xl font-bold text-center mb-12">
          Explore Our Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-8">
          {/* Movie Section */}
          <div className="relative group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <div
              className="absolute inset-0 bg-cover bg-center brightness-75 group-hover:brightness-50 transition-all duration-300"
              style={{ backgroundImage: `url(${img_movies})` }}
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm group-hover:bg-black/60 transition-all duration-300" />
            <div className="relative z-10 p-8 text-white">
              <h3 className="text-3xl font-extrabold mb-4">🎬 Movies</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Explore a vast library of blockbusters, classics, and exclusive
                releases.
              </p>
              <a
                href="#movies"
                className="mt-6 inline-block px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 transition-all duration-300"
              >
                Watch Now &rarr;
              </a>
            </div>
          </div>

          {/* Software Section */}
          <div className="relative group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <div
              className="absolute inset-0 bg-cover bg-center brightness-75 group-hover:brightness-50 transition-all duration-300"
              style={{ backgroundImage: `url(${img_software})` }}
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm group-hover:bg-black/60 transition-all duration-300" />
            <div className="relative z-10 p-8 text-white">
              <h3 className="text-3xl font-extrabold mb-4">🖥️ Software</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Discover powerful tools, productivity apps, and software
                solutions.
              </p>
              <a
                href="#software"
                className="mt-6 inline-block px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
              >
                Explore Software &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
      <Slider
        info={movieData.movies}
        title={movieData.title}
        link={"/movies"}
      />
      <Slider
        info={SoftwareData.movies}
        title={SoftwareData.title}
        link={"/software"}
      />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
