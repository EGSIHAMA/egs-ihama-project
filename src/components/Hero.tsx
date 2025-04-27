import React from "react";
import Button from "./button";

export default function Hero() {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-gray-100 text-center px-4 pt-20 bg-[url(/Hero-image2.jpg)] bg-cover bg-center relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black" style={{ opacity: 0.6 }} ></div>
      
      <div className="w-full flex flex-col justify-center items-center text-shadow-2xl relative z-10">
      <h1 className="text-4xl font-bold mb-4 text-white">Automate Your SME with N8N: Save Time and Cost, Boost Growth</h1>
      <p className="text-lg text-gray-200 mb-6 max-w-xl">
      Cost-effective N8N automations and expert consulting for e-commerce, real estate, and coaches. Start for $200.
      </p>
      <div className="flex gap-4">
        <Button label="Book a Free Consultation" color="green" />
        <Button label="Learn More" color="blue" />
      </div>

      </div>
    </section>
  );
}

