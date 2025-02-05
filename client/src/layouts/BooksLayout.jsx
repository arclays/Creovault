import Navbar from "../components/Navbar";

export default function BooksLayout({ children }) {
  return (
    <div className="min-h-screen text-white bg-[#1a1a1a] transition-all duration-300 ease-in-out">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
