import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md rounded-b-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl md:text-3xl font-bold">EGSiHAMA</div>
        <div className="flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#services" className="text-gray-700 hover:text-blue-500">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
}
