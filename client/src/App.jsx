import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Movies from "./pages/movies/Movies";
import Books from "./pages/books/Books";
import Software from "./pages/software/Software";
import SoftwareDetails from "./pages/software/SoftwareDetails";
import MovieDetails from "./pages/movies/MovieDetails";
import { BrowseMovies } from "./pages/movies/BrowseMovies";
import { BrowseSeries } from "./pages/movies/BrowseSeries";
import { SearchMovies } from "./pages/movies/SearchMovies";
import { SearchProvider } from "./context/SearchContext";
import { GenreProvider } from "./context/GenreContext";
import MainLayout from "./layouts/MainLayout";
import MovieLayout from "./layouts/MovieLayout";
import BooksLayout from "./layouts/BooksLayout";
import SoftwareLayout from "./layouts/SoftwareLayout";

export default function App() {
  return (
    <SearchProvider>
      <GenreProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              }
            />
            <Route
              path="/movies"
              element={
                <MovieLayout>
                  <Movies />
                </MovieLayout>
              }
            />
            <Route
              path="/movie_details"
              element={
                <MovieLayout>
                  <MovieDetails />
                </MovieLayout>
              }
            />
            <Route
              path="/browse_movie"
              element={
                <MovieLayout>
                  <BrowseMovies />
                </MovieLayout>
              }
            />
            <Route
              path="/browse_series"
              element={
                <MovieLayout>
                  <BrowseSeries />
                </MovieLayout>
              }
            />
            <Route
              path="/search"
              element={
                <MovieLayout>
                  <SearchMovies />
                </MovieLayout>
              }
            />
            <Route
              path="/books"
              element={
                <BooksLayout>
                  <Books />
                </BooksLayout>
              }
            />
            <Route
              path="/software"
              element={
                <SoftwareLayout>
                  <Software />
                </SoftwareLayout>
              }
            />
            <Route
              path="/software_details"
              element={
                <SoftwareLayout>
                  <SoftwareDetails />
                </SoftwareLayout>
              }
            />
            <Route
              path="*"
              element={
                <MainLayout>
                  <Navigate to="/" />
                </MainLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </GenreProvider>
    </SearchProvider>
  );
}
