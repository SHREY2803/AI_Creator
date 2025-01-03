import React from "react";
import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <div className="flex-1">
        <h6 className="mb-1 text-base font-semibold ">{title}</h6>
      </div>

      <div className="flex items-center justify-between">
        <ul className="flex gap-2 -m-0.5">
          {notificationImages.map((image, index) => (
            <li key={index} className="flex w-6 h-6 overflow-hidden border-2 rounded-full border-n-12 " >
              <img 
              src={image}
              className= "w-full"
              alt={image} 
              width={20} 
              height={20} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notification;
