import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Impact } from "./components/Impact";
import { HowItWorks } from "./components/HowItWorks";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", overflowX: "hidden" }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Impact />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
