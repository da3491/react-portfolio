import React, { useState } from "react";
import styled from "styled-components";
// import Projects from "./Projects";
const Projects = React.lazy(() => import("./Projects"));
// import Skills from "./Skills";
const Skills = React.lazy(() => import("./Skills"));

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  @media (max-aspect-ratio: 3/4) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 1400px) {
    gap: 8em;
  }
`;
const Bio = styled.div``;
const Header = styled.h1`
  position: relative;
  font-size: var(--fs-5);
  margin-bottom: 1em;
  font-weight: 300;
  text-align: left;
  color: white;
`;
const StyledParagraph = styled.p`
  line-height: 1.2;
  font-size: var(--fs-0);
  color: white;
  padding: var(--space-s) var(--space-m);
  margin: clamp(0.25em, 1em, 2.2em) 0;
`;
const ContentSection = styled.div`
  width: 100%;
`;
const ContentButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;

  margin-bottom: var(--space-m);
`;
const ContentButton = styled.button`
  background: none;
  border: none;

  display: inline;
  color: white;
  font-size: var(--fs-3);
  font-weight: 300;

  &:hover,
  &:active {
    box-shadow: inset 0px -2px 0px -1px white;
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
          <ContentButton onClick={() => setContent(true)}>
            <span>Projects</span>
          </ContentButton>
          <ContentButton onClick={() => setContent(false)}>
            <span>Skills</span>
          </ContentButton>
        </ContentButtons>
        <React.Suspense>{content ? <Projects /> : <Skills />}</React.Suspense>
      </ContentSection>
    </Container>
  );
};

export default Home;
