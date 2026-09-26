import Navbar from "./components/nav";
import Hero from "./components/hero";
import Testimonials from "./components/testimonal";
import Pricing from "./components/prices";
import FAQs from "./components/faqs";
import Footer from "./components/footer";
import About from "./components/about";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Testimonials />
        <Pricing />
        <FAQs />
      </main>

      <Footer />
    </>
  );
}