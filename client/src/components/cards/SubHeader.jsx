import { Link } from "react-router-dom";
import { MdRectangle } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export const SubHeader = () => {
  const [showGenre, setShowGenre] = useState("");

  const handleGenreToggle = () => {
    setShowGenre(!showGenre);
  };
  return (
    <div className="flex justify-center md:justify-end gap-3 bg-neutral-900 py-7 pr-16">
      <Link to="" className="text-amber-700 font-bold hover:text-amber-500">
        Movies
      </Link>
      <Link to="" className="text-amber-700 font-bold hover:text-amber-500">
        Series
      </Link>
      <div className="relative">
        <div
          className="text-amber-700 font-bold hover:text-amber-500 cursor-pointer"
          onClick={handleGenreToggle}
        >
          Genre
          <IoIosArrowDown className="inline-block ml-1 size-3" />
        </div>
        {showGenre && (
          <div>
            <MdRectangle className="absolute text-2xl rotate-45 text-slate-600 top-8 right-5" />
            <div className="absolute bg-slate-800 top-10 right-5 md:right-5 z-20 rounded">
              <div className="flex flex-col text-sm text-white">
                <a href="" className="bg-slate-600 w-40 hover:bg-slate-500">
                  <p className="p-2">Action</p>
                </a>
                <a href="" className="bg-slate-600 w-40 hover:bg-slate-500">
                  <p className="p-2">Documetary</p>
                </a>
                <a href="" className="bg-slate-600 w-40 hover:bg-slate-500">
                  <p className="p-2">Horror</p>
                </a>
                <a href="" className="bg-slate-600 w-40 hover:bg-slate-500">
                  <p className="p-2">Romance</p>
                </a>
                <a href="" className="bg-slate-600 w-40 hover:bg-slate-500">
                  <p className="p-2">Thriller</p>
                </a>
                <a href="" className="bg-slate-600 w-40 hover:bg-slate-500">
                  <p className="p-2">Mystery</p>
                </a>
                <a href="" className="bg-slate-600 w-40 hover:bg-slate-500">
                  <p className="p-2">Sports</p>
                </a>
                <a href="" className="bg-slate-600 w-40 hover:bg-slate-500">
                  <p className="p-2">Sci-fi</p>
                </a>
                <a href="" className="bg-slate-600 w-40 hover:bg-slate-500">
                  <p className="p-2">Fatansy</p>
                </a>
                <a href="" className="bg-slate-600 w-40 hover:bg-slate-500">
                  <p className="p-2">Family</p>
                </a>
                <a href="" className="bg-slate-600 w-40 hover:bg-slate-500">
                  <p className="p-2">War</p>
                </a>
                <a href="" className="bg-slate-600 w-40 hover:bg-slate-500">
                  <p className="p-2">Comedy</p>
                </a>
                <a href="" className="bg-slate-600 w-40 hover:bg-slate-500">
                  <p className="p-2">Adventure</p>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
