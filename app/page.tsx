import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FadeIn from "./components/ui/FadeIn";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import FeaturedArtists from "./components/sections/FeaturedArtists";
import Experiences from "./components/sections/Experiences";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
         <FeaturedArtists />
      </FadeIn>
      <FadeIn>
        <Experiences />
      </FadeIn>
      <FadeIn>
         <Testimonials />
      </FadeIn>
      <FadeIn>
         <Contact />
      </FadeIn>
      <Footer />
    </main>
  );
}