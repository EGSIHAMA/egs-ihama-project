import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the menu when the user scrolls or clicks anywhere on the page
  useEffect(() => {
    const handleScrollOrClick = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScrollOrClick);
    window.addEventListener("click", handleScrollOrClick);

    return () => {
      window.removeEventListener("scroll", handleScrollOrClick);
      window.removeEventListener("click", handleScrollOrClick);
    };
  }, []);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click event from propagating to the window
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md rounded-b-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl md:text-3xl font-bold"><a href="#home"> EGSiHAMA </a></div>

        {/* Navigation Links for Large Screens */}
        <div className="hidden lg:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-500">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-500">
            Services
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </div>

        {/* Hamburger Icon for Small and Medium Screens */}
        <button
          className="block lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links for Small and Medium Screens */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 lg:hidden`}
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from closing it
        >
          <a
            href="#home"
            className="block text-gray-700 hover:text-blue-500 px-4 py-2"
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-gray-700 hover:text-blue-500 px-4 py-2"
          >
            About
          </a>
          <a
            href="#services"
            className="block text-gray-700 hover:text-blue-500 px-4 py-2"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block text-gray-700 hover:text-blue-500 px-4 py-2"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}