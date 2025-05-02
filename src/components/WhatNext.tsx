import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhatNext() {
  const automationSteps = [
    "Step 1: Analyze your workflow",
    "Step 2: Identify repetitive tasks",
    "Step 3: Implement automation tools",
    "Step 4: Monitor and optimize",
  ];

  const webDevSteps = [
    "Step 1: Plan your website",
    "Step 2: Design the layout",
    "Step 3: Develop the website",
    "Step 4: Test and deploy",
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="w-full bg-gray-100 py-12" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-8"
          data-aos="fade-up"
        >
          What Next?
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos="fade-up"
        >
          {/* Card 1: Automation */}
          <div
            className="card bg-white rounded-lg shadow-md p-6 relative"
            data-aos="fade-right" // AOS animation for the first card
          >
            <h3 className="text-xl font-bold mb-4 text-center">Automation</h3>
            <div className="h-64 space-y-4">
              {automationSteps.map((step, index) => (
                <div
                  key={index}
                  className="step-card bg-blue-100 rounded-lg p-4 shadow-sm"
                  data-aos="fade-up" // AOS animation for each step
                  data-aos-delay={index * 100} // Add delay for staggered animation
                >
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Web Development */}
          <div
            className="card bg-white rounded-lg shadow-md p-6 relative"
            data-aos="fade-left" // AOS animation for the second card
          >
            <h3 className="text-xl font-bold mb-4 text-center">
              Web Development
            </h3>
            <div className="h-64 space-y-4">
              {webDevSteps.map((step, index) => (
                <div
                  key={index}
                  className="step-card bg-green-100 rounded-lg p-4 shadow-sm"
                  data-aos="fade-up" // AOS animation for each step
                  data-aos-delay={index * 100} // Add delay for staggered animation
                >
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}