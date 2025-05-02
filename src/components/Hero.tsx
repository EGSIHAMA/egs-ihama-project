import React from "react";
import { motion } from "framer-motion";
import Button from "./button";
import { overlayVariants } from "./animationVariants"; // Import variants
import Image from "next/image";

// Define child animation variants
const childVariants = {
  hidden: { opacity: 0, y: 20 }, // Start offscreen and transparent
  visible: { opacity: 1, y: 0 }, // Animate to visible and on-screen
};

// Define parent container animation with staggerChildren
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Delay between child animations
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      className="hero-section w-full flex flex-col justify-center items-center text-center px-4 py-20 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, ease: "easeInOut" }} // Added ease effect
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/Hero-image2.jpg" // Path to your image
          alt="Hero Background"
          layout="fill" // Makes the image fill the container
          objectFit="cover" // Ensures the image covers the container
          quality={100} // Optional: Set image quality
        />
      </div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeInOut" }} // Added ease effect
      ></motion.div>

      {/* Content */}
      <motion.div
        className="w-full flex flex-col justify-center items-center text-shadow-2xl relative z-10"
        variants={containerVariants} // Parent container with staggerChildren
        initial="hidden"
        animate="visible"
      >
        {/* Child elements */}
        <motion.h1
          className="text-4xl font-bold mb-2 text-white"
          variants={childVariants} // Child animation
        >
          Ai is The Future and Business Automation <br /> is Here to Stay
        </motion.h1>
        <motion.h2
          className="text-2xl font-bold my-0 text-white"
          variants={childVariants} // Child animation
        >
          Adapt or Be Left Behind
        </motion.h2>
        <motion.p
          className="text-lg text-white mb-6 max-w-xl"
          variants={childVariants} // Child animation
        >
          Cost-effective automations and expert consulting for SMEs and
          Solopreneurs. Starting from $200.
        </motion.p>
        <motion.div
          className="flex gap-4"
          variants={childVariants} // Child animation
        >
          <Button label="Book a Free Consultation" color="customGreen" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}