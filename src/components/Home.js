import React, { useState } from "react";
import styled from "styled-components";
import Work from "./Work";
import Skills from "./Skills";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-aspect-ratio: 3/4) {
    flex-direction: row;
  }
  @media (min-width: 1400px) {
    gap: 8em;
  }
`;
const Bio = styled.div``;
const Header = styled.h1`
  position: relative;
  font-size: clamp(2rem, 2.8rem, 5rem);
  font-weight: 300;
  text-align: left;
  color: white;
`;
const StyledParagraph = styled.p`
  line-height: 1.2;
  font-size: clamp(1rem, 1.2rem, 1.4rem);
  color: white;
  padding: 1em;
  margin: 2em 0;
`;
const ContentSection = styled.div`
  width: 100%;
`;
const ContentLoaded = styled.div``;
const ContentButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;

  @media (min-aspect-ratio: 9/16) {
    margin-bottom: 2em;
  }
`;
const ContentButton = styled.button`
  background: none;
  border: none;

  display: inline;
  color: white;
  font-size: 2rem;
  font-weight: 300;

  &:hover,
  &:active {
    box-shadow: inset 0px -2px 0px -1px white;
  }

  @media (min-width: 1200px) {
    font-size: 3rem;
  }
`;

const Home = () => {
  const [content, setContent] = useState(true);
  return (
    <Container>
      <Bio>
        <Header>Hey, there.</Header>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
          augue euismod, bibendum justo et, facilisis nibh. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </StyledParagraph>
      </Bio>
      <ContentSection>
        <ContentButtons>
          <ContentButton
            className="custom-btn"
            onClick={() => setContent(true)}
          >
            <span>Projects</span>
          </ContentButton>
          <ContentButton
            className="custom-btn"
            onClick={() => setContent(false)}
          >
            <span>Skills</span>
          </ContentButton>
        </ContentButtons>
        <ContentLoaded>{content ? <Work /> : <Skills />}</ContentLoaded>
      </ContentSection>
    </Container>
  );
};

export default Home;
