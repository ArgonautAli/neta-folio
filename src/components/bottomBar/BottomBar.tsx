import React from "react";
import "./bottomBar.css";
import ContributorBox from "../contributorBox/ContributorBox";
import { config } from "../../utils/config";

const BottomBar = () => {
  const { image_first, image_second, image_third, image_right } =
    config.bottomBar;
  const right_image = image_right.src;
  return (
    <div className="bottomBarLayout">
      <div className="flex justify-center">
        <ContributorBox
          image={image_first.src}
          text={image_first.text}
          social={image_first.social}
          link={image_first.link}
        />
        <ContributorBox
          image={image_second.src}
          text={image_second.text}
          social={image_second.social}
          link={image_second.link}
        />
        <ContributorBox
          image={image_third.src}
          text={image_third.text}
          social={image_third.social}
          link={image_third.link}
        />
      </div>
      <div
        className="content-center text-5xl font-bold text-amber-400 align-center"
        style={{
          textShadow:
            "2px 2px 0px red, -2px -2px 0px red, 2px -2px 0px red, -2px 2px 0px red",
        }}
      >
        <img
          src={right_image}
          style={{
            position: "absolute",
            bottom: 0,
            height: "500px", // Ensure height is set in style
            width: "auto", // Optional: maintain aspect ratio
          }}
        />
        <p style={{ zIndex: 100, position: "relative" }}>{image_right.text}</p>
      </div>
    </div>
  );
};

export default BottomBar;
