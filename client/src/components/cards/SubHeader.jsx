import { Link } from "react-router-dom";
import { MdRectangle } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

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

export const SubHeader = () => {
  const [showGenre, setShowGenre] = useState(false);

  const handleGenreToggle = () => {
    setShowGenre(!showGenre);
  };

  return (
    <div className="flex justify-center md:justify-end gap-6 bg-neutral-900 py-7 pr-4 md:pr-16">
      <Link to="" className="text-red-700 font-bold hover:text-red-900">
        Movies
      </Link>
      <Link to="" className="text-red-700 font-bold hover:text-red-900">
        Series
      </Link>
      <div className="relative">
        <div
          className="text-red-700 font-bold hover:text-red-900 cursor-pointer"
          onClick={handleGenreToggle}
        >
          Genre
          <IoIosArrowDown className="inline-block ml-1 size-3" />
        </div>
        {showGenre && (
          <div className="absolute top-10 -right-14 sm:right-5 z-20">
            <MdRectangle className="absolute text-2xl rotate-45 text-red-950 -top-2 right-16 sm:right-4" />
            <div className="bg-red-950 rounded-lg shadow-lg p-4 w-[90vw] max-w-[24rem]">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {genres.map((genre, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block rounded bg-red-700 hover:bg-red-500 text-white text-sm px-3 py-2 text-center whitespace-nowrap"
                  >
                    {genre}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
