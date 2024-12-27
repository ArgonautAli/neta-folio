import React from "react";
import "./contributorBox.css";

interface ContributorBoxProps {
  image: string;
  text: string;
  social: string;
  link: string;
}

const ContributorBox: React.FC<ContributorBoxProps> = ({
  image,
  text,
  social,
  link,
}) => {
  return (
    <div className="my-4 text-center contributor-container">
      <img src={image} alt={text} style={{ maxHeight: "125px" }} />
      <p
        className="text-lg font-extrabold text-orange-700 drop-shadow-lg"
        style={{
          textShadow: "4px 4px 6px rgba(0, 0, 0, 0.5)",
        }}
      >
        {text}
      </p>
      <a className="font-bold text-red-500" href={link}>
        {social}
      </a>
    </div>
  );
};

export default ContributorBox;
