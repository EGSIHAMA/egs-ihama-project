import React from "react";

interface ButtonProps {
  label: string;
  color?: "blue" | "green" | "red" | "customBlue" | "customGreen" | "customRed"; // Add custom colors
}

export default function Button({ label, color = "blue" }: ButtonProps) {
  const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-600 hover:bg-red-700",
    customBlue: "button-custom-blue",
    customGreen: "button-custom-green",
    customRed: "button-custom-red",
  };

  return (
    <button
      className={`cursor-pointer px-6 py-2 rounded-md text-white font-medium transition ${colorClasses[color]}`}
    >
      {label}
    </button>
  );
}