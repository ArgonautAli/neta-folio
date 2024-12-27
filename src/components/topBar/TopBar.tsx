import React from "react";
import { config } from "../../utils/config";
import "./topBar.css";

const TopBar = () => {
  const { logo, heading, upper_right } = config.upperBar;
  return (
    <div className="flex justify-evenly items-center w-full">
      <div className="flex flex-col items-center">
        <img src={logo.src} style={{ height: "100px" }} alt="Logo" />
      </div>
      <div className="flex flex-col items-center">
        <div className="gradient-text-heading">{heading.text}</div>
      </div>
      <div></div>
      {upper_right.src.map((img: string) => (
        <div className="flex flex-col items-center justify-between">
          <img
            src={img}
            className="h-[100px] w-[100px] rounded-full object-cover border-2 border-gray-300"
            alt="Upper Left"
          />
        </div>
      ))}
    </div>
  );
};

export default TopBar;
