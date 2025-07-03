import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials'; // ✅ Import Testimonials
import Footer from './components/Footer'; // ✅ Import Footer

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-28 px-4">
        <Hero />
        <About />
        <Services />
        <Testimonials /> {/* ✅ Add Testimonials here */}
        <Faq />
        <Contact />
      </main>
      <Footer /> {/* ✅ Footer remains at the bottom */}
    </>
  );
}

















