import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";
import ToolsSlider from "@/components/ToolsSlider";
import Testimonials from "@/components/Testimonials";
import Portfolio from "@/components/portfolio";
import WhatNext from "@/components/WhatNext";
import PricingSection from "@/components/pricing";


export default function Home() {
  return (
    <main id="home" className="mt-16">
      <Navbar />
      <Hero />
      <ToolsSlider />
      <About />
      <PricingSection /> 
      <Portfolio />
      <Testimonials />
      <WhatNext />
      <Contact />
      <Footer />
    </main>
  )
}