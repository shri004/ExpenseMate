import React, { useRef } from "react";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Features from "./Components/Features";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar"; 

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Pass scrollToSection function to Navbar */}
      <Navbar
        scrollToSection={(sectionName) => {
          if (sectionName === "home") scrollToSection(homeRef);
          else if (sectionName === "about") scrollToSection(aboutRef);
          else if (sectionName === "features") scrollToSection(featuresRef);
          else if (sectionName === "contact") scrollToSection(contactRef);
        }}
      />
      {/* Sections with refs */}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={featuresRef}>
        <Features />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

/*import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Features from "./Components/Features";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; */
