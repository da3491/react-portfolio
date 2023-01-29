import React from "react";
import styled from "styled-components";
import { useTheme } from "./ThemeContext";

import {
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import {
  SiJavascript,
  SiRuby,
  SiRubyonrails,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 2;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1;
    gap: 1em;
  }
`;
const Col = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const StyledHeader = styled.h3`
  width: 70%;
  text-align: center;
  font-size: 1.5rem;
  background: #ccc;
  border-radius: 5px;
  border: 1px solid white;
  padding: 0.5em 1em;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 70%;
  background: #ccc;
  border-radius: 5px;
  border: 1px solid white;
  font-size: 0.8rem;
  font-weight: 600;

  margin: 0.3em;
  padding: 0.5em 1em;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  svg:nth-of-type(6) {
    transform: scale(2.4, 2.4);
  }

  svg {
    transform: scale(1.4, 1.4);
  }
`;

const Skills = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid>
        <Col>
          <StyledHeader>Technologies</StyledHeader>
          {/* HTML/CSS */}
          <Flex>
            <div>
              <FaHtml5 />
              <FaCss3Alt />
            </div>
            <div>HTML/CSS</div>
          </Flex>
          {/* Bootstrap */}
          <Flex>
            <FaBootstrap />
            <div>Bootstrap</div>
          </Flex>
          {/* JavaScript */}
          <Flex>
            <SiJavascript />
            <div>JavaScript</div>
          </Flex>
          {/* React */}
          <Flex>
            <FaReact />
            <div>React</div>
          </Flex>
          {/* Ruby */}
          <Flex>
            <SiRuby />
            <div>Ruby</div>
          </Flex>
          {/* Rails */}
          <Flex>
            <SiRubyonrails />
            <div>Ruby on Rails</div>
          </Flex>
        </Col>
        <Col>
          <StyledHeader>Tools & Libraries</StyledHeader>
          {/* Git */}
          <Flex>
            <FaGitAlt />
            <div>Git</div>
          </Flex>
          {/* Heroku */}
          <Flex>
            <SiHeroku />
            <div>Heroku</div>
          </Flex>
          {/* Netlify */}
          <Flex>
            <SiNetlify />
            <div>Netlify</div>
          </Flex>
        </Col>
      </Grid>
    </Container>
  );
};

export default Skills;
