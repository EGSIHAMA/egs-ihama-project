import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      description: "CEO, Example Corp",
      content: "This is an amazing service! Highly recommended.",
    },
    {
      id: 2,
      name: "Jane Smith",
      description: "Marketing Manager, ABC Ltd",
      content: "The team was professional and delivered great results.",
    },
    {
      id: 3,
      name: "Michael Brown",
      description: "Freelancer",
      content: "I loved the experience. Will definitely use it again.",
    },
    {
      id: 4,
      name: "Emily Davis",
      description: "Product Designer",
      content: "The quality of work exceeded my expectations.",
    },
    {
      id: 5,
      name: "Chris Wilson",
      description: "Software Engineer",
      content: "Fantastic support and great attention to detail.",
    },
    {
      id: 6,
      name: "Sophia Johnson",
      description: "Entrepreneur",
      content: "A wonderful experience from start to finish.",
    },
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
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          Testimonials
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card bg-white rounded-lg p-6 shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              data-aos="fade-up" // AOS animation for each card
            >
              <h3 className="text-lg font-bold mb-2">{testimonial.name}</h3>
              <h4 className="text-sm text-gray-500 mb-4">
                {testimonial.description}
              </h4>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}