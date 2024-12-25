import React from "react";

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
    <div className="my-4 text-center">
      <img src={image} alt={text} style={{ maxHeight: "125px" }} />
      <p
        className="text-lg font-extrabold text-amber-500 drop-shadow-lg"
        style={{
          textShadow: "4px 4px 6px rgba(0, 0, 0, 0.5)",
        }}
      >
        {text}
      </p>
      <a href={link}>{social}</a>
    </div>
  );
};

export default ContributorBox;