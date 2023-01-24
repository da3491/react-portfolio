import React from "react";
import { useTheme } from "../components/ThemeContext";
import { ImageLoader } from "./ImageLoader";
import Navigation from "./Navigation";

import { FaFileAlt, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const StyledHero = styled.div`
  // position: relative;
  height: 100%;
  width: 100%;

  .top-level {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Container = styled.div`
  height: 90%;
  width: 90%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-left: 1px solid white;
`;

const StyledLinks = styled.a`
  color: inherit;
  line-height: 1.1;

  &:hover {
    color: white;
  }
`;

const StyledHeader = styled.h1`
  position: relative;
  display: inline;
  font-size: 2.4rem;
  font-weight: 600;
  text-align: left;
  padding-left: 0.5em;
  // z-index: 100;
  color: white;
`;

const StyledIconGroup = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${(props) => props.themecolor};

  display: flex;
  flex-direction: column;
  font-size: 2.6rem;
`;

const Hero = ({ children }) => {
  const theme = useTheme();

  return (
    <StyledHero id="hero">
      <ImageLoader />
      <Container>
        <div className="top-level">
          <StyledHeader>Drew Annese</StyledHeader>
          <Navigation />
        </div>
        <StyledIconGroup themecolor={theme.colors.accent1}>
          <StyledLinks href="/resume.com">
            <FaFileAlt />
          </StyledLinks>
          <StyledLinks href="https://github.com/da3491">
            <FaGithubSquare />
          </StyledLinks>
          <StyledLinks href="https://linkedin.com/da3491">
            <FaLinkedin />
          </StyledLinks>
        </StyledIconGroup>
        {children}
      </Container>
    </StyledHero>
  );
};

export default Hero;
