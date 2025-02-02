import React, { useEffect, useState, Fragment } from "react";
import Footer from "../../components/Footer";
import { useSearch } from "../../context/SearchContext";
import { useGenre } from "../../context/GenreContext";

// Sample movie data (Replace with API)
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
  {
    id: 4,
    title: "Titanic",
    image: "https://via.placeholder.com/200",
    genre: "Romance",
    rating: 7.9,
  },
  {
    id: 5,
    title: "Parasite",
    image: "https://via.placeholder.com/200",
    genre: "Thriller",
    rating: 8.6,
  },
];

export const SearchMovies = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const { selectedGenre, setSelectedGenre } = useGenre();
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    let filtered = movies;

    // Search works independently
    if (searchQuery) {
      filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSelectedGenre(""); // Clear genre filter when searching
    }
    // Genre filter works independently
    else if (selectedGenre) {
      filtered = movies.filter((movie) => movie.genre === selectedGenre);
      setSearchQuery(""); // Clear search filter when selecting a genre
    }

    setFilteredMovies(filtered);
  }, [searchQuery, selectedGenre]);

  return (
    <Fragment>
      <main className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Search Results */}
        <div className="px-6 py-10">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            {searchQuery
              ? `Search Results for: "${searchQuery}"`
              : selectedGenre
              ? `Showing ${selectedGenre} Movies`
              : "All Movies"}
          </h2>

          {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredMovies.map((movie) => (
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
                    <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg">
                      Watch Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 mt-10">No movies found</p>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};
