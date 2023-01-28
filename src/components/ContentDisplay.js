import React from "react";
import styled from "styled-components";

// import Skills from "../extra-components/Skills.js";
import Work from "../extra-components/Work.js";
// import Background from "../extra-components/Background.js";

const StyledDisplay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  overflow: scroll;

  // &:before {
  //   content: "";
  //   z-index: -5;
  //   position: absolute;
  //   border-radius: 5px;
  //   background-color: black;
  //   // background-image: linear-gradient(black);
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   opacity: 0.3;
  // }
`;

// const StyledParagraph = styled.p`
//   display: inline-block;
//   margin-left: 4em;
//   font-size: 2.5rem;
//   font-weight: 600;
//   line-height: 1.2;
//   color: white;

//   @media (max-width: 600px) {
//     font-size: 1.5rem;
//     margin-left: 3em;
//   } ;
// `;

const ContentDisplay = ({ children }) => {
  return (
    <StyledDisplay>
      {children}
      {/* <StyledParagraph className="default">
        Front-End <br /> Learner <br /> Problem Solver
      </StyledParagraph> */}
      {/* <Skills /> */}
      <Work />
    </StyledDisplay>
  );
};

export default ContentDisplay;
