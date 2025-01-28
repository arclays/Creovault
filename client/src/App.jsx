import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import Books from "./pages/Books";
import Software from "./pages/Software";
import MovieDetails from "./pages/MovieDetails";

export default function App() {
  return (
    <div className="min-h-screen text-white bg-[#1a1a1a] transition-all duration-300 ease-in-out">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie_details" element={<MovieDetails />} />
          <Route path="/books" element={<Books />} />
          <Route path="/software" element={<Software />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
