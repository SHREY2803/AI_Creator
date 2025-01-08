import React from "react";
import Section from "../design/Section";
import { collabApps, collabContent, collabText, collabSecondText } from "../constants";
import { brainwaveSymbol, check } from "../assets";
import Button from "./Button";
import { RightCurve,LeftCurve } from "../design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="mb-4 h2 md:mb-8">
            AI Chat App for seamless Collaboration.
          </h2>
          <ul className="max-w-[25rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="py-3 mb-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} alt="checkmark" width={24} height={24} />
                  <h6 className="ml-5 body-2">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="mt-3f text-n-4 body-2">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-3">
          <p className="mb-8 body-2 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto ">
            {collabSecondText}
          </p>

          <div className="relative flex left-1/2 w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="relative flex m-auto border rounded-full w-60 aspect-square border-n-6">
              <div
                className="w-[6rem]
              aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full"
              >
                <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8">
                  <img
                    src={brainwaveSymbol}
                    alt="BrainWaveSymbol"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((item, index) => (
                <li
                  key={item.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative flex -top-[1.6rem] w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={item.width}
                      height={item.height}
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve/>
            <RightCurve/>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
