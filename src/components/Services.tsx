import React from "react";

export default function Services() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Building fast, responsive, and user-centered websites using the latest technologies.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-600 leading-relaxed">
              Designing intuitive user experiences that engage and convert audiences effectively.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Digital Strategy</h3>
            <p className="text-gray-600 leading-relaxed">
              Crafting strategies that align technology, brand, and business goals for real growth.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
