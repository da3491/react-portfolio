import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const Header = styled.h1`
  position: relative;
  font-size: 3.4rem;
  font-weight: 600;
  text-align: left;
  color: white;
  padding: 3em 0 0 2em;
  // z-index: 100;

  @media (max-width: 600px) {
    font-size: 2rem;
    padding: 0 0 0 1em;
    margin-top: 3em;
  } ;
`;
const StyledParagraph = styled.p`
  display: inline-block;
  margin-left: 4em;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
  color: white;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-left: 3em;
  } ;
`;

const Home = () => {
  return (
    <Container>
      <Header>Hi, I'm Drew</Header>
      <StyledParagraph className="default">
        Front-End <br /> Learner <br /> Problem Solver
      </StyledParagraph>
    </Container>
  );
};

export default Home;
