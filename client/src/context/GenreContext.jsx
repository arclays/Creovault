import { createContext, useContext, useState } from "react";

const GenreContext = createContext();

export const useGenre = () => useContext(GenreContext);

export const GenreProvider = ({ children }) => {
  const [selectedGenre, setSelectedGenre] = useState("");

  return (
    <GenreContext.Provider value={{ selectedGenre, setSelectedGenre }}>
      {children}
    </GenreContext.Provider>
  );
};
