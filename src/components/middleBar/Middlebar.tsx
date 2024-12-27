import React from "react";
import { config } from "../../utils/config";
import "./middleBar.css";

const Middlebar = () => {
  const { logo, image_left, image_right, text } = config.middleBar;

  return (
    <div className="relative flex justify-center items-center h-full">
      {/* Background Images */}
      <div className="absolute inset-0 z-0 flex justify-center items-center w-full h-full">
        <div className="flex space-x-4">
          <div>
            {/* {logo.src.map((img: string) => (
              <img
                src={img}
                className="h-[75px] object-contain my-2"
                alt="Logo"
              />
            ))} */}

            {/* <img
              src={logo.src}
              className="h-[75px] object-contain"
              alt="Logo"
            />
            <img
              src={logo.src}
              className="h-[75px] object-contain"
              alt="Logo"
            /> */}
          </div>
          <img
            src={image_left.src}
            className="h-[500px] object-contain opacity-50"
            alt="Image Left"
          />
        </div>
        <img
          src={image_right.src}
          className="h-[500px] object-contain relative -top-20" // Moves the right image up
          alt="Image Right"
        />
      </div>

      {/* Foreground Content */}
      <div className="absolute z-10 text-end">
        <div className="gradient-text-upper text-center">{text.upper}</div>
        <div className="gradient-text-upper">{text.middle}</div>
        <p className="gradient-text-lower">{text.lower}</p>
      </div>
    </div>
  );
};

export default Middlebar;
