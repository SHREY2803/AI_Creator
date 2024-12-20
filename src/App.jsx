import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient"; //this buttongradient is not a svg file, designed to define reusable gradient styles that can be applied to various elements, such as buttons, text, and backgrounds.
import Button from "./components/Button";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
    
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        {/* <Button className="mt-10" href="#login">Something</Button> */}
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
