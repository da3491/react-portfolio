import React from "react";
import styled from "styled-components";

const StyledDisplay = styled.div`
  width: 100%;
  height: 100%;

  //   &:before {
  //     content: "";
  //     // z-index: 1;
  //     position: absolute;
  //     border-radius: 5px;
  //     background-color: black;
  //     // background-image: linear-gradient(black);
  //     top: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 100%;
  //     opacity: 0.3;
  //   }
`;

function ContentDisplay() {
  return <StyledDisplay></StyledDisplay>;
}

export default ContentDisplay;
