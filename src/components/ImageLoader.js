import React from "react";
import styled from "styled-components";

import { useTheme } from "../components/ThemeContext";

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const StyledImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: -10;
  object-fit: cover;
  z-index: -1000;
`;

const ImageLoader = () => {
  const theme = useTheme();

  return (
    <Overlay>
      <StyledImage
        priority
        src={require(`../images/${theme.imageDesktop}`)}
        role="presentation"
        fetchpriority="high"
      />
    </Overlay>
  );
};

export default ImageLoader;
