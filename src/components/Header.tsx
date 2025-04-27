import React from "react";

interface HeaderProps {
  title: string;
}

export default function Header({title}: HeaderProps) {
  return (
    <header className="w-full p-4 bg-gray-800 text-gray-900 text-center">
      <meta name="description" content="Egsihama Automation: n8n solutions and consulting for SMEs. Automate leads, build websites, optimize processes from $200." />
      <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
    </header>
  );
}
