import React from "react";
import styled from "styled-components";

import { useTheme } from "../components/ThemeContext";

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom, black, transparent, transparent);
  }
`;

const StyledImage = styled.img`
  // position: absolute;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: -10;
  object-fit: cover;
`;

const ImageLoader = () => {
  const theme = useTheme();

  return (
    <Overlay>
      <StyledImage
        src={require(`../images/${theme.image}`)}
        loading="lazy"
        alt="view of a mountain"
      />
    </Overlay>
  );
  /* <img
        src={require(`../images/${theme.image}`)}
        alt="view of a mountain"
        style={{ width: "100px", height: "50px" }}
      /> */
};

export default ImageLoader;
