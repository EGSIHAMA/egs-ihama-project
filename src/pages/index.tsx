import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="mt-16">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}