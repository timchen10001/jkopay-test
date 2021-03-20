import React from "react";
import useRWD from "../../hooks/useRWD";

interface BackgroundImageProps {
  bgImage: string;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  bgImage
}) => {
  const device = useRWD();
  const isMobile = device === "mobile";
  return (
    <img
      src={bgImage}
      alt="bgImg"
      style={{
        position: "fixed",
        width: "100vw",
        bottom: "-50px",
        right: "3rem",
        zIndex: -1,
        opacity: isMobile ? ".8" : ".6"
      }}
    />
  );
};
