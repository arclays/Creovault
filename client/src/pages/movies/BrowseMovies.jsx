import React, { useState, useEffect, Fragment } from "react";
import { SubHeader } from "../../components/cards/SubHeader";
import Footer from "../../components/Footer";

const movies = [
  {
    id: 1,
    title: "Inception",
    image: "https://via.placeholder.com/200",
    genre: "Sci-Fi",
    rating: 8.8,
  },
  {
    id: 2,
    title: "The Dark Knight",
    image: "https://via.placeholder.com/200",
    genre: "Action",
    rating: 9.0,
  },
  {
    id: 3,
    title: "Interstellar",
    image: "https://via.placeholder.com/200",
    genre: "Sci-Fi",
    rating: 8.6,
  },
];

export const BrowseMovies = () => {
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
    <Fragment className="flex flex-col min-h-screen bg-gradient-to-b bg-neutral-800">
      <main className="flex-grow">
        <div className="relative">
          <SubHeader />
        </div>

        <div className="min-h-screen bg-gray-900 text-white p-6">
          {/* Header */}
          <h1 className="text-3xl font-bold mb-6 text-center">Browse Movies</h1>

          {/* Search Bar */}
          <div className="mb-6 flex justify-center">
            <input
              type="text"
              placeholder="Search movies..."
              className="w-full max-w-md p-3 rounded-lg text-black outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Movies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{movie.title}</h2>
                    <p className="text-gray-400">{movie.genre}</p>
                    <p className="text-yellow-400 font-bold">
                      ⭐ {movie.rating}
                    </p>
                    <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
                      Watch Now
                    </button>
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
