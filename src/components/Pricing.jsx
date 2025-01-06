import React from "react";
import Section from "../design/Section";
import { smallSphere, stars } from "../assets";
import Heading from "../design/Heading.jsx";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" crosses id="pricing">
      <div className="container relative z-2">
        <div className="relative justify-center hidden mb-[6.5rem] lg:flex">
          <img
            className="relative z-1"
            src={smallSphere}
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[60rem] pointer-events-none">
            <img
              className="w-full"
              src={stars}
              width={950}
              height={400}
              alt="star"
            />
          </div>
        </div>
        <Heading
        tag="Get Started with BrainWave"
        title="Pay once, use forever"/>
      </div>
    </Section>
  );
};

export default Pricing;
