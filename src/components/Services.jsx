import React from "react";
import Section from "../design/Section";
import Heading from "../design/Heading";
import { service1, service2, service3, check } from "../assets";
import {
  brainwaveServices,
  brainwaveServicesIcons,
} from "../constants/index.js";
import Generating from "../design/Generating.jsx";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "../design/Services.jsx";

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

            <Generating className="absolute border lg:-translate-x-1/2 left-4 right-4 bottom-4 border-n-1/10 lg:left-1/2 lg-right-auto lg:bottom-8" />
          </div>

          <div className="grid gap-5 realtive z-1 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="secondRobo"
                  className="object-cover w-full h-full"
                  width={630}
                  height={750}
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-16">
                <h4 className="mb-4 h4">Photo Editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically ehnance your photos using AI's app's photo edit
                  feature to make your photos look professional.
                </p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className="p-4 overflow-hidden bg-n-7 rounded-3xl lg:min-h-[46rem]">
              <div className="px-4 py-12 xl:px-8">
                <h4 className="mb-4 h4 ">Video Generation</h4>
                <p className="mb-[2rem] body-2 text-n-3">
                  The world's most powerful AI photo and video art generation.
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={` rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[3.5rem] md:h-[3.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} alt={item} width={24} height={24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
