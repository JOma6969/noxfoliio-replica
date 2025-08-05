import { useEffect, useState } from "react";
import { HiChevronDoubleUp } from "react-icons/hi";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Pricings from "./components/Pricings";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [shouldShowFixedNav, setShouldShowFixedNav] = useState(false);

  useEffect(() => {
    const montiorScroll = () => {
      setScrollPosition(window.scrollY);
      console.log(window.scrollY);
    };

    if (scrollPosition > 620) {
      setShouldShowFixedNav(true);
    } else {
      setShouldShowFixedNav(false);
    }

    window.addEventListener("scroll", montiorScroll);
    return () => window.removeEventListener("scroll", montiorScroll);
  }, [scrollPosition]);

  const goToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen pt-6 top-0 relative max-w-[1440px]">
      {/* grid lines in the background of the pg */}
      <div className="grid -z-5 bg-[#0f0f0f] fixed w-full inset-0 grid-cols-9 h-full">
        {[...Array(9)].map((_, i) => {
          return (
            <div
              className="border-r-[1.5px] pointer-events-none border-[#1f1f1f]"
              key={i}
            />
          );
        })}
      </div>

      {/* button to scroll to the top of the page - (go to top button) */}
      <button
        onClick={goToTop}
        className={`bg-[#c6ff00] ${
          shouldShowFixedNav ? "slide-in-btn" : "slide-out"
        } opacity-0 fixed z-50 bottom-10 p-3 rounded-lg right-10 cursor-pointer`}
        title="return to the top of the page"
      >
        <HiChevronDoubleUp size={24} />
      </button>

      {/* components */}
      <header>
        <Navbar shouldShowFixedNav={shouldShowFixedNav} />
      </header>
      <main>
        <Hero />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <Pricings />
        <Contact />
        <Blog />
        <Clients />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
