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
        className="outline-none border-none font-semibold text-lg p-3 text-gray-600 bg-slate-300 rounded pr-5 md:pr-10"
        placeholder="Search favorites"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery ? (
        <IoClose
          onClick={handleClearSearch} // Use the new function to stop event propagation
          className="absolute text-gray-500 left-60 md:right-4 top-4 translate-x-2 text-xl cursor-pointer"
        />
      ) : (
        <FaSearch className="absolute text-gray-500 left-60 md:right-4 top-4 text-xl" />
      )}
    </form>
  );
}
