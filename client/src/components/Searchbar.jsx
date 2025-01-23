import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  handleSearchToggle,
}) {
  const handleClearSearch = (e) => {
    e.stopPropagation(); // Prevent the event from bubbling up to the document
    handleSearchToggle();
  };

  return (
    <form className="relative">
      <input
        type="text"
        className="outline-none font-semibold text-lg p-3 text-gray-300 bg-neutral-800 rounded pr-5 md:pr-10 border-2 border-neutral-800 focus:opacity-60 focus:border-red-600"
        placeholder="Search favorites"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery ? (
        <IoClose
          onClick={handleClearSearch} // Use the new function to stop event propagation
          className="absolute text-red-600 left-60 md:right-4 top-4 opacity-60 translate-x-2 text-xl cursor-pointer"
        />
      ) : (
        <FaSearch className="absolute text-red-600 font-extrabold left-60  opacity-60 md:right-4 top-4 text-xl" />
      )}
    </form>
  );
}
