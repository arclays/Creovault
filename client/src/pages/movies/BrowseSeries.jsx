import React, { useState, useEffect, Fragment } from "react";
import Footer from "../../components/Footer";
import img from "../../assets/joker1.jpg";

const movies = [
  {
    id: 1,
    title: "Inception",
    image: img,
    genre: "Sci-Fi",
    rating: 8.8,
  },
  {
    id: 2,
    title: "The Dark Knight",
    image: img,
    genre: "Action",
    rating: 9.0,
  },
  {
    id: 3,
    title: "Interstellar",
    image: img,
    genre: "Sci-Fi",
    rating: 8.6,
  },
];

export const BrowseSeries = () => {
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <Fragment className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-neutral-800 to-neutral-900">
      <main className="flex-grow">
        <div className="container mx-auto min-h-screen text-white p-6">
          {/* Header */}
          <h1 className="text-3xl font-bold mb-6 text-center text-red-900 capitalize">
            Browse your Series
          </h1>

          {/* Search Bar */}
          <div className="mb-6 flex justify-center">
            <input
              type="text"
              placeholder="Search series..."
              className="w-full p-3 rounded  bg-neutral-800 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Movies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="relative bg-red-500 bg-opacity-20 backdrop-blur-md rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                >
                  {/* Image with fixed height */}
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-40 object-cover"
                  />

                  {/* Content Section */}
                  <div className="p-4 flex flex-col justify-between h-full bg-black bg-opacity-50 backdrop-blur-sm rounded-b-lg">
                    <h2 className="text-xl font-semibold mb-2 text-white">
                      {movie.title}
                    </h2>
                    <p className="text-gray-300">{movie.genre}</p>
                    <p className="text-yellow-400 font-bold">
                      ⭐ {movie.rating}
                    </p>
                    <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                      Watch Now
                    </button>
                  </div>

                  {/* Hover Overlay (Optional) */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="text-center text-white transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <h2 className="text-xl font-semibold mb-2">
                        {movie.title}
                      </h2>
                      <p className="text-gray-300">{movie.genre}</p>
                      <p className="text-yellow-400 font-bold">
                        ⭐ {movie.rating}
                      </p>
                      <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No movies found</p>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};
