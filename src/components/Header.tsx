import React from "react";

interface HeaderProps {
  title: string;
}

export default function Header({title}: HeaderProps) {
  return (
    <header className="w-full p-4 bg-gray-800 text-gray-800 text-center">
      <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>
    </header>
  );
}
