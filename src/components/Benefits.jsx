import React from "react";
import Section from "../design/Section";
import Heading from "../design/Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow.jsx";
import { GradientLight } from "../design/Benefits.jsx";
import ClipPath from "../assets/svg/ClipPath.jsx"

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder With BrainWave"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="relative block p-0.5 bg-no-repeat bg-[length:100%_100%] 
                md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
            >
              <div className="relative flex flex-col z-2 min-h-[24rem] p-[2.5rem] pointer-events-none">
                <h5 className="mb-5 h5">{item.title}</h5>
                <p className="mb-6 body-2 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    alt={item.title}
                    height={48}
                    width={48}
                  />
                  <p className="ml-auto text-xs font-bold tracking-wider uppercase font-code text-n-1">
                    {" "}
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 transition-opacity opacity-0 hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
              </div>
              
              <ClipPath/>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
