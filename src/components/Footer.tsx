import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 flex justify-center items-center">
        <p className="text-gray-600 text-sm tracking-wide">
          &copy; {new Date().getFullYear()} EGSiHAMA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
