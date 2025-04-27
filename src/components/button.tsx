import React from "react";

interface ButtonProps {
  label: string;
  color?: "blue" | "green" | "red"; // limit allowed colors
}

export default function Button({ label, color = "blue" }: ButtonProps) {
  const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button className={`px-6 py-2 rounded-md text-white font-medium transition ${colorClasses[color]}`}
>
      {label}
    </button>
  );
}
