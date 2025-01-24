import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries, CiMenuBurger } from "react-icons/ci";
import SearchBar from "./Searchbar";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the mobile menu

  const handleSearchToggle = () => {
    setSearchQuery(""); // Clear the search query when clicking the close icon
  };

  // Function to handle toggling the menu visibility
  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // Function to close the menu if clicked outside the menu area
  const handleClickOutside = (e) => {
    // Check if the click target is outside the mobile menu and outside the menu button
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      !e.target.closest(".CiMenuBurger")
    ) {
      setMenuOpen(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  // Adding event listener for clicks outside when the component mounts
  useEffect(() => {
    // Add the event listener to the document for outside clicks
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-transparent backdrop-blur-xl">
      <div className="flex justify-between py-6 px-8 lg:px-20 bg-transparent items-center relative shadow ">
        {/* Logo */}
        <Link to="/" className="text-4xl text-rose-700 font-bold">
          Logo
        </Link>
        {/* Menu Toggle for Small Screens */}
        <div className="md:hidden">
          {menuOpen ? (
            <CiMenuFries
              onClick={handleMenuToggle}
              className="CiMenuBurger text-3xl cursor-pointer"
            />
          ) : (
            <CiMenuBurger
              onClick={handleMenuToggle}
              className="CiMenuBurger text-3xl cursor-pointer"
            />
          )}
        </div>
        {/* Navigation Links for Larger Screens */}
        <div className="hidden md:flex space-x-10">
          <NavLinks />
        </div>
        {/* Search Bar */}
        <div className="hidden md:block">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearchToggle={handleSearchToggle}
          />
        </div>
        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden flex flex-col absolute top-0 left-0 w-4/5 bg-neutral-900 text-white py-6 p-2 space-y-6 transition-transform duration-500 ease-in-out z-50`}
        >
          <NavLinks closeMenu={closeMenu} />
          {/* Search input in mobile view */}
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearchToggle={handleSearchToggle}
          />
        </div>
      </div>
    </div>
  );
}
