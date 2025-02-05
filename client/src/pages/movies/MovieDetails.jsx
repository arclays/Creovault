import React from "react";
import Footer from "../../components/Footer";
import {
  FaStar,
  FaCalendarAlt,
  FaUser,
  FaPlayCircle,
  FaDownload,
  FaComment,
} from "react-icons/fa";

export default function MovieDetails() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-neutral-800 to-neutral-900 text-white">
      <section
        className="relative h-auto md:h-96 flex items-end justify-start p-4 md:p-8 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1500x500')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
            <img
              src="https://via.placeholder.com/300x450"
              alt="Movie Poster"
              className="w-32 h-48 md:w-48 md:h-64 rounded-lg shadow-lg"
            />
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl md:text-4xl font-bold">Movie Title</h1>
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                <span className="flex items-center space-x-2">
                  <FaStar className="text-yellow-400" />
                  <span>8.5/10</span>
                </span>
                <span className="flex items-center space-x-2">
                  <FaCalendarAlt />
                  <span>2023-10-01</span>
                </span>
                <span className="flex items-center space-x-2">
                  <FaUser />
                  <span>John Doe</span>
                </span>
              </div>
              <p className="text-gray-300 text-sm md:text-base max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4">
                <button className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300">
                  <FaPlayCircle />
                  <span>Watch Trailer</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300">
                  <FaDownload />
                  <span>Download</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-300">
                  <FaPlayCircle />
                  <span>Watch Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Cast Section */}
          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Cast</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Cast Member"
                    className="w-16 h-16 md:w-24 md:h-24 rounded-full mb-2"
                  />
                  <p className="font-semibold text-sm md:text-base">
                    Actor Name
                  </p>
                  <p className="text-xs md:text-sm text-gray-400">
                    Character Name
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Reviews Section */}
          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Reviews</h2>
            <div className="space-y-4">
              {[1, 2].map((item) => (
                <div key={item} className="bg-neutral-700 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Reviewer"
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-sm md:text-base">
                        Reviewer Name
                      </p>
                      <p className="text-xs md:text-sm text-gray-400">
                        October 5, 2023
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-300 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Comment Section */}
          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Comments</h2>
            <div className="space-y-4">
              {/* Comment Input Field */}
              <div className="bg-neutral-700 p-4 rounded-lg">
                <textarea
                  className="w-full bg-neutral-600 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  rows="3"
                  placeholder="Write your comment..."
                ></textarea>
                <button className="mt-2 flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300">
                  <FaComment />
                  <span>Post Comment</span>
                </button>
              </div>

              {/* Display Comments */}
              {[1, 2].map((item) => (
                <div key={item} className="bg-neutral-700 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Commenter"
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-sm md:text-base">
                        Commenter Name
                      </p>
                      <p className="text-xs md:text-sm text-gray-400">
                        October 6, 2023
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-300 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
