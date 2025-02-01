import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();

  const handleClearSearch = (e) => {
    e.stopPropagation();
    setSearchQuery("");
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Update searchQuery in context
    if (query.trim()) {
      navigate("/search"); // Redirect to search page as the user types
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="outline-none font-semibold text-lg p-3 text-gray-300 bg-neutral-700 rounded pr-5 md:pr-10 border-2 border-neutral-700 focus:opacity-60 focus:border-red-600"
        placeholder="Search favorites"
        value={searchQuery}
        onChange={handleSearchChange} // Trigger search on input change
      />
      {searchQuery ? (
        <IoClose
          onClick={handleClearSearch}
          className="absolute text-red-600 left-60 md:right-4 top-4 opacity-60 translate-x-2 text-xl cursor-pointer"
        />
      ) : (
        <FaSearch className="absolute text-red-600 font-extrabold left-60 opacity-60 md:right-4 top-4 text-xl" />
      )}
    </div>
  );
}
