import Navbar from "../components/Navbar";
import MovieSubHeader from "../components/cards/MovieSubHeader";

export default function MovieLayout({ children }) {
  return (
    <div className="min-h-screen text-white bg-[#1a1a1a] transition-all duration-300 ease-in-out">
      <Navbar />
      <MovieSubHeader />
      <main>{children}</main>
    </div>
  );
}
