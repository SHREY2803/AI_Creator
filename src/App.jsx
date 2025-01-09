import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient"; //this buttongradient is not a svg file, designed to define reusable gradient styles that can be applied to various elements, such as buttons, text, and backgrounds.
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Hero from "./design/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
// import { ThreeDCardDemo } from "./test";
import { FloatingDockDemo } from "./test2";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
