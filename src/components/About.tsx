import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Animation Variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Delay between child animations
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 }, // Start offscreen and transparent
  visible: { opacity: 1, y: 0 }, // Animate to visible and on-screen
};

export default function About() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <motion.section id="about"
      className="w-full py-20 bg-white"
      variants={containerVariants} // Parent container animation
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4"
        variants={childVariants} // Animate the container
      >
        {/* Text Section */}
        <div
          className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
          data-aos="fade-up" // AOS animation for the text section
        >
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="!text-xl md:!text-2xl text-gray-700 leading-relaxed">
            We are making AI and tech solutions accessible to forward-thinking SMEs and entrepreneurs, equipping them to innovate, automate, and lead in the future of business.
          </p>
          <p className="!text-xl md:!text-2xl text-gray-700 leading-relaxed mt-4">
            With extensive experience and growing expertise in business operations, working with founders and business leaders in high-pressure, high-stakes engagements, we have the insight to identify inefficiencies and the growing technical expertise to optimize them.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="md:w-1/2 justify-center flex"
          data-aos="fade-left" // AOS animation for the image section
        >
          <Image
            src="/About-image.jpg"
            width={300}
            height={300}
            alt="About Us"
            className="rounded-lg shadow-lg md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
          />
        </div>
      </motion.div>

      {/* Quote Section */}
      <div
        className="flex justify-center mt-8"
        data-aos="zoom-in" // AOS animation for the quote section
      >
        <h4 className="text-xl md:text-3xl lg:text-4xl quoted-text italic text-center leading-10 tracking-wide md:leading-15 md:tracking-wider">
          We don&apos;t just offer services.
          <br /> We guide forward-thinkers on their transformation journey.
        </h4>
      </div>
    </motion.section>
  );
}