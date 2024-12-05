import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";



const App = () => {
  return (
    <>
      {/* <div className="h-screen flex flex-row justify-center items-center bg-slate-900 text-cyan-50 text-3xl">
        App
      </div> */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">Something</Button>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
