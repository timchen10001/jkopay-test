import "../../styles/BackgroundImage.css";
import React from "react";

interface BackgroundImageProps {
  bgImage: string;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  bgImage,
}) => {
  return (
    <div className="background__image">
      <img src={bgImage} alt="bgImg" />
    </div>
  );
};
