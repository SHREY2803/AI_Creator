import React from "react";
import SectionSvg from "../assets/svg/SectionSvg.jsx";

const Section = ({
  className,
  id,
  children,
  crosses,
  crossesoffset,
  customPaddings,
}) => {
  return (
    <div
      id={id}
      className={`relative 
        ${
          customPaddings ||
          `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
        }
        ${className || ""}`}
    >
      {children}

      <div className="absolute top-0 hidden h-full pointer-events-none left-5 w-0.25 bg-stroke-1 md:block lg:left-7.5 xl:left-10" />
      <div className="absolute top-0 hidden h-full pointer-events-none right-5 w-0.25 bg-stroke-1 md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`absolute top-0 left-7.5 right-7.5 hidden h-0.25 bg stroke-1 ${
              crossesoffset && crossesoffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesoffset} />
        </>
      )}
    </div>
  );
};

export default Section;
