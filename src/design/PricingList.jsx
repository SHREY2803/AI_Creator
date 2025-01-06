import React from "react";
import { pricing } from "../constants/index.js";
import Button from "../components/Button.jsx";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8"
        >
          <h4 className="mb-4 h4">{item.title}</h4>
          <p>{item.description}</p>
          {item.price && (
            <>
              <div>$</div>
              <div>{item.price}</div>
            </>
          )}
          <Button
          className="w-full mb-6"
          href={item.price ? '/pricing': 'mailto:shrey280302@gmail.com'
          }
          white={!!item.price}>{item.price ? 'Get Started':'Contact Us'}</Button>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
