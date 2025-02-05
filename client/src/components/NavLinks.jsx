import { Link, useLocation } from "react-router-dom";

const NavLinks = ({ closeMenu }) => {
  const location = useLocation(); // This gives us the current path

  // Function to check if the link is the active one
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Link
        to="/"
        className={`hover:text-rose-600 uppercase ${
          isActive("/") ? "font-bold text-red-600 hover:text-red-600" : ""
        }`}
        onClick={closeMenu} // Close menu when clicked
      >
        Home
      </Link>
      <Link
        to="/movies"
        className={`hover:text-rose-600 uppercase ${
          isActive("/movies") ? "font-bold text-red-600 hover:text-red-600" : ""
        }`}
        onClick={closeMenu} // Close menu when clicked
      >
        Movies
      </Link>
      {/* <Link
        to="/books"
        className={`hover:text-rose-600 uppercase ${
          isActive("/books") ? "font-bold text-red-600 hover:text-red-600" : ""
        }`}
        onClick={closeMenu} // Close menu when clicked
      >
        Books
      </Link> */}
      <Link
        to="/software"
        className={`hover:text-rose-600 uppercase ${
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
