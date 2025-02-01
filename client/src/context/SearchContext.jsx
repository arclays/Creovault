import { createContext, useState, useContext } from "react";

// Create Context
const SearchContext = createContext();

// Custom Hook for easy usage
export const useSearch = () => useContext(SearchContext);

// Provider Component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
