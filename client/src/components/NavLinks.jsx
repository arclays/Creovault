import { Link, useLocation } from "react-router-dom";

const NavLinks = ({ closeMenu }) => {
  const location = useLocation(); // This gives us the current path

  // Function to check if the link is the active one
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Link
        to="/movies"
        className={`hover:text-rose-600 ${
          isActive("/movies") ? "font-bold text-red-600 hover:text-red-600" : ""
        }`}
        onClick={closeMenu} // Close menu when clicked
      >
        Movies
      </Link>
      <Link
        to="/books"
        className={`hover:text-rose-600 ${
          isActive("/books") ? "font-bold text-red-600 hover:text-red-600" : ""
        }`}
        onClick={closeMenu} // Close menu when clicked
      >
        Books
      </Link>
      <Link
        to="/software"
        className={`hover:text-rose-600 ${
          isActive("/software")
            ? "font-bold text-red-600 hover:text-red-600"
            : ""
        }`}
        onClick={closeMenu} // Close menu when clicked
      >
        Software
      </Link>
    </>
  );
};

export default NavLinks;
