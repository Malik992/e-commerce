import React from "react";

import { CircularProgressStyled, SpinnerWrapper, LinearProgressStyled } from "./styles";
import { useDelayNextChildren } from "utils/hooks";

export const CustomSpinner = () => (
  <SpinnerWrapper>
    <CircularProgressStyled />
  </SpinnerWrapper>
);

export const LinearLoader = ({ delay = 0 }) =>
  useDelayNextChildren(
    <div style={{ margin: "1rem 0" }}>
      <LinearProgressStyled opacity={0.6} />
      <LinearProgressStyled opacity={0.4} />
      <LinearProgressStyled opacity={0.3} />
      <LinearProgressStyled opacity={0.2} />
    </div>,
    delay
  );

LinearLoader.defaultProps = {
  delay: 0,
};

interface ImageProps {
  image: string;
}

export const ImageLoader = ({ image }: ImageProps) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "45%",
        left: "45%",
      }}
    >
      <img width="100" src={image} alt="Loding......" />
    </div>
  );
};
