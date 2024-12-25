import React from "react";
import { config } from "../../utils/config";

const Middlebar = () => {
  const { logo, image_left, image_right, text } = config.middleBar;
  return (
    <div className="relative flex justify-around items-center h-full">
      {/* Image 1 */}
      <div className="flex">
        <div className="relative">
          <img
            src={logo.src}
            className="h-[100px] w-[100px] object-cover opacity-70"
            alt="Image 1"
          />
        </div>

        {/* Image 2 */}
        <div className="relative">
          <img
            src={image_left.src}
            className="h-[300px] w-[300px] object-cover opacity-70"
            alt="Image 2"
          />
        </div>
      </div>

      {/* Image 3 */}
      <div className="relative">
        <img
          src={image_right.src}
          className="h-[700px] w-[700px] object-cover "
          alt="Image 3"
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute text-center text-white text-5xl font-bold">
        Overlapping Text
      </div>
    </div>
  );
};

export default Middlebar;
