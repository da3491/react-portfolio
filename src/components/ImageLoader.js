import React from "react";
import styled from "styled-components";

import { useTheme } from "../components/ThemeContext";

const StyledImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -10;
  object-fit: cover;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;

    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom, black, transparent);
  }
`;

const ImageLoader = () => {
  const theme = useTheme();

  return (
    <StyledImage
      src={require(`../images/${theme.image}`)}
      loading="lazy"
      alt="view of a mountain"
    />
  );
  /* <img
        src={require(`../images/${theme.image}`)}
        alt="view of a mountain"
        style={{ width: "100px", height: "50px" }}
      /> */
};

export default ImageLoader;
