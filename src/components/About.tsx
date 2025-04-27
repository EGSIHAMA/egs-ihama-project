import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4">
        
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed"> Say goodbye to wasted hours, bloated budgets, and stagnant growth. We empower e-commerce, real estate, coaches, and other business SMEs globally for growth. Our n8n automations, deployed affordably from $200, streamline your operations. </p>
          <p className="text-gray-700 leading-relaxed mt-4"> Unlock growth with our premium, responsive React websites, with elite security and limitless scalability, plus expert CRM, marketing, and analytics solutions.</p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 justify-center flex">
          <Image
            src="/About-image.jpg"
            width={400}
            height={400}
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
