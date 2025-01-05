import React from "react";
import Section from "../design/Section";
import Heading from "../design/Heading";
import { service1, service2, service3, check } from "../assets";
import {
  brainwaveServices,
  brainwaveServicesIcons,
} from "../constants/index.js";

const Services = () => {
  return (
    <Section crosses id="App-usage">
      <div className="container">
        <Heading
          title="Generative AI made for Creators."
          text="BrainWave unlocks the potential for AI-powered applications."
        />
        <div className="relative">
          <div className="relative flex items-center z-1 h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="object-cover w-full h-full md:object-right"
                width={800}
                height={730}
                src={service1}
                alt="AI-img"
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto ">
              <h4 className="mb-4 h4">Modern AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                BrainWave unlocks the potential of AI-powered applications.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img src={check} width={23} height={23} alt="checkmark" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
