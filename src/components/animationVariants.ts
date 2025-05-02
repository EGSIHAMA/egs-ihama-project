export const heroVariants = {
  hidden: { opacity: 0, y: -50 }, // Initial state (offscreen and transparent)
  visible: { opacity: 1, y: 0 }, // Final state (onscreen and fully visible)
};

export const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.6 },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between child animations
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};