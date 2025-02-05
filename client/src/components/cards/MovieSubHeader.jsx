import { Link } from "react-router-dom";
import { MdRectangle } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useRef } from "react";
import { useGenre } from "../../context/GenreContext";

const genres = [
  "Documentary",
  "Action",
  "Horror",
  "Romance",
  "Thriller",
  "Mystery",
  "Sports",
  "Sci-fi",
  "Fantasy",
  "Family",
  "War",
  "Comedy",
  "Adventure",
];

const MovieSubHeader = () => {
  const [showGenre, setShowGenre] = useState(false);
  const [timer, setTimer] = useState(null);
  const { setSelectedGenre } = useGenre();
  const dropdownRef = useRef(null);

  // Open genre dropdown
  const handleMouseEnter = () => {
    if (timer) clearTimeout(timer);
    setShowGenre(true);
  };

  // Close genre dropdown with delay
  const handleMouseLeave = () => {
    const newTimer = setTimeout(() => {
      setShowGenre(false);
    }, 200);
    setTimer(newTimer);
  };

  // Mobile touch events for opening/closing dropdown
  const handleTouchStart = () => {
    setShowGenre((prev) => !prev); // Toggle on touch
  };

  // Select genre & close dropdown immediately
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setShowGenre(false);
  };

  return (
    <div className="flex justify-center md:justify-end gap-6 bg-neutral-900 py-7 pr-4 md:pr-16">
      <Link
        to="/browse_movie"
        className="text-red-700 font-bold hover:text-red-900"
      >
        Movies
      </Link>
      <Link
        to="/browse_series"
        className="text-red-700 font-bold hover:text-red-900"
      >
        Series
      </Link>

      {/* Genre Dropdown */}
      <div
        className="relative"
        ref={dropdownRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart} // Handle mobile touch
      >
        <div className="text-red-700 font-bold hover:text-red-900 cursor-pointer flex items-center gap-1">
          Genre
          <IoIosArrowDown
            className={`size-3 transition-transform ${
              showGenre ? "rotate-180" : ""
            }`}
          />
        </div>

        {showGenre && (
          <div className="absolute top-10 -right-20 sm:right-0 z-20">
            {/* Dropdown Pointer */}
            <MdRectangle className="absolute text-2xl rotate-45 text-red-950 -top-2 right-24 sm:right-4" />
            {/* Genre List */}
            <div
              className="bg-red-950 rounded-lg shadow-lg p-4 w-[90vw] max-w-[24rem] overflow-auto" // Make the dropdown scrollable if needed
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart} // Mobile touch interaction
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {genres.map((genre, index) => (
                  <button
                    key={index}
                    onClick={() => handleGenreSelect(genre)}
                    className="block w-full rounded bg-red-700 hover:bg-red-500 text-white text-sm px-3 py-2 text-center whitespace-nowrap"
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieSubHeader;
