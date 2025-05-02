import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./button";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section id="services" className="w-full py-20 bg-gray-50">
      <div
        className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div
            className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-4">Workflow Automations</h3>
            <p className="text-gray-600 leading-relaxed !text-xl">
            Time is your most valuable asset. Free it up and focus on growing your business, instead of getting stuck running it.
            </p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">What You Get?</h4>
              <div className="card mt-2 text-normal leading-6.5 shadow-2xl p-6 bg-gray-50 rounded-lg" data-aos="fade-up" data-aos-delay="200">
                <p className="text-left text-gray-600">
                  Our process includes the use of N8N for affordability and
                  advanced workflows or Zapier for simplicity.
                  <br />
                  Depending on your needs, we can use either of these tools to
                  create a custom solution for you.
                  <br className="my-3" />
                  Our process usually includes the following steps:
                </p>
                <ul className="text-left list-disc list-inside">
                  <li className="text-gray-600">
                    Initial Audit of your current workflows
                  </li>
                  <li className="text-gray-600">
                    Identify areas of maximum automation benefits in your
                    workflow
                  </li>
                  <li className="text-gray-600">We Develop custom workflows with encrypted API Endpoint for Advanced security
                  </li>
                  <li className="text-gray-600">Testing and Optimizations</li>
                  <li className="text-gray-600">Training and Support</li>
                  <li className="text-gray-600">
                    Deployment and Ongoing Support
                  </li>
                </ul>
                <p className="text-left text-gray-600 my-2">
                  Additionally, we provide CRM Integrations and Custom SOPs as
                  premium addons
                </p>
                <div data-aos="fade-up" data-aos-delay="300"><Button label="Get Started" color="customBlue" /></div>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div
            className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600 leading-relaxed !text-xl">
            Your website isn&apos;t just design. It&apos;s your handshake, your pitch, your reputation. Like they say, first impressions matter.
            </p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">What You Get?</h4>
              <div className="card mt-2 text-normal leading-6.5 shadow-2xl p-6 bg-gray-50 rounded-lg" data-aos="fade-up" data-aos-delay="200">
                <p className="text-left text-gray-600">
                  We build both WordPress and custom websites depending on your
                  needs.
                  <br /> Using React Next.js and Tailwind CSS we build fast,
                  responsive, and user-centered websites deployed with
                  high-grade security standards and Global CDN reach.
                  <br className="my-3" /> Our process usually includes the
                  following steps:
                </p>
                <ul className="text-left list-disc list-inside">
                  <li className="text-gray-600">
                    Initial assessment of your needs
                  </li>
                  <li className="text-gray-600">
                    We Develop tailored schematics
                  </li>
                  <li className="text-gray-600">Development and Design</li>
                  <li className="text-gray-600">Testing and Optimization</li>
                  <li className="text-gray-600">
                    Deployment and Ongoing Support
                  </li>
                </ul>
                <p className="text-left text-gray-600 my-2">
                  Additionally, we provide Branding, Copywriting, and
                  SEO/Digital Marketing as premium addons
                </p>
                <div data-aos="fade-up" data-aos-delay="300"><Button label="Get Started" color="customBlue" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}