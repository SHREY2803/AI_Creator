import React from "react";
import Section from "../design/Section";
import { smallSphere, stars } from "../assets";
import Heading from "../design/Heading.jsx";
import PricingList from "../design/PricingList.jsx";
import { LeftLine, RightLine } from "../design/Pricing.jsx";

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
        className={`md:text-center`}
          tag="Get Started with BrainWave"
          title="Pay once use forever"
        />

        <div className="relative">
          {/* Pricing List */}
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a className="text-xs font-bold tracking-wider uppercase border-b font-code"
          href="/pricing" > See the full details</a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
