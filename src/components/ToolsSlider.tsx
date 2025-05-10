import React from "react";

export default function ToolsSlider() {
  const tools = [
    { name: "React", logo: "sliderTools/reacttool.svg" },
    { name: "Node.js", logo: "sliderTools/nodetool.svg" },
    { name: "Egsihama", logo: "sliderTools/egs.svg" },
    { name: "Vscode", logo: "sliderTools/vsctool.svg"},
    { name: "Zapier", logo: "sliderTools/zapiertool.svg" }
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