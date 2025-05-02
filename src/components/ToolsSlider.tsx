import React from "react";

export default function ToolsSlider() {
  const tools = [
    { name: "React", logo: "⚛️" },
    { name: "Node.js", logo: "/next.svg" },
    { name: "TypeScript", logo: "📘" },
    { name: "Tailwind CSS", logo: "🎨" },
    { name: "GitHub", logo: "🐙" },
  ];

  return (
    <div className="slider-container mt-16">
      <div className="slider-track">
        {tools.map((tool, index) => (
          <div key={index} className="slider-item">
            <img 
            src={tool.logo} 
            alt={`${tool.name} logo`} className="slider-logo" />
          </div>
        ))}
        {/* Duplicate the content for seamless looping */}
        {tools.map((tool, index) => (
          <div key={`duplicate-${index}`} className="slider-item">
            <img 
            src={tool.logo} 
            alt={`${tool.name} logo`} className="slider-logo" />
          </div>
        ))}
      </div>
    </div>
  );
}