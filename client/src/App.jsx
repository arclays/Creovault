import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Movies from "./pages/movies/Movies";
import Books from "./pages/books/Books";
import Software from "./pages/software/Software";
import MovieDetails from "./pages/movies/MovieDetails";
import { BrowseMovies } from "./pages/movies/BrowseMovies";
import { BrowseSeries } from "./pages/movies/BrowseSeries";
import { SearchMovies } from "./pages/movies/SearchMovies";
import { SearchProvider } from "./context/SearchContext";

export default function App() {
  return (
    <SearchProvider>
      <div className="min-h-screen text-white bg-[#1a1a1a] transition-all duration-300 ease-in-out">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie_details" element={<MovieDetails />} />
            <Route path="/browse_movie" element={<BrowseMovies />} />
            <Route path="/browse_series" element={<BrowseSeries />} />
            <Route path="/search" element={<SearchMovies />} />{" "}
            {/* Updated route */}
            <Route path="/books" element={<Books />} />
            <Route path="/software" element={<Software />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </SearchProvider>
  );
}
