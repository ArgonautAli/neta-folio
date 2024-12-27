import React from "react";
import "./bottomBar.css";
import ContributorBox from "../contributorBox/ContributorBox";
import { config } from "../../utils/config";

const BottomBar = () => {
  const { image_first, image_second, image_third, image_right } =
    config.bottomBar;
  const right_image = image_right.src;
  return (
    <div className="bottomBarLayout flex justify-between">
      <div className="flex justify-end z-50">
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
      <div className="content-center align-center">
        <img
          src={right_image}
          style={{
            position: "absolute",
            bottom: 0,
            height: "500px", // Ensure height is set in style
            width: "auto", // Optional: maintain aspect ratio
          }}
        />
        <p
          className="bottom-gradient-text"
          style={{ zIndex: 100, position: "relative", width: "50%" }}
        >
          {image_right.text}
        </p>
      </div>
    </div>
  );
};

export default BottomBar;
