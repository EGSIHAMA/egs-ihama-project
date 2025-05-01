import React from "react";
import Navbar from "../components/Navbar";

export default function GoogleForm() {
  return (
    <main className="mt-16 ">
      <Navbar />
      
      <section className="w-full bg-gray-100 py-12">
       <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Fill Out Our Form</h2>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe8k9O-tU41MNJ4BXhZhRZyFXJfxHFkTLTBQMJjTvjoZ26NyA/viewform?embedded=true"
            width="100%"
            height="800"
           frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="border border-gray-300 rounded-lg shadow-md"
            title="Google Form"
         >
           Loading…
          </iframe>
        </div>
      </section>
    </main>
  );
}