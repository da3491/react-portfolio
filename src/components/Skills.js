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
  height: 100%;
  width: 100%;
  background: #333;
  color: white;
  padding: 1.25em;
  border-radius: 3px;
  border: 1px solid #555;

  &:after {
    content: "";
    backdrop-filter: blur(20px);
  }
`;
const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
`;
const Col = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25em;
`;
const Flex = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1em;
  padding: 0 0.5em;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  &:nth-of-type(6) svg {
    transform: scale(2.2, 2.2);
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
        <Col className="glass">
          {/* HTML/CSS */}
          <Flex>
            <div>HTML/CSS</div>
            <div>
              <FaHtml5 />
              <FaCss3Alt />
            </div>
          </Flex>
          {/* Bootstrap */}
          <Flex>
            <div>Bootstrap</div>
            <FaBootstrap />
          </Flex>
          {/* JavaScript */}
          <Flex>
            <div>JavaScript</div>
            <SiJavascript />
          </Flex>
          {/* React */}
          <Flex>
            <div>React</div>
            <FaReact />
          </Flex>
          {/* Ruby */}
          <Flex>
            <div>Ruby</div>
            <SiRuby />
          </Flex>
          {/* Rails */}
          <Flex>
            <div>RoR</div>
            <SiRubyonrails />
          </Flex>
        </Col>
        <Col className="glass">
          {/* Git */}
          <Flex>
            <div>Git</div>
            <FaGitAlt />
          </Flex>
          {/* Heroku */}
          <Flex>
            <div>Heroku</div>
            <SiHeroku />
          </Flex>
          {/* Netlify */}
          <Flex>
            <div>Netlify</div>
            <SiNetlify />
          </Flex>
        </Col>
      </Grid>
    </Container>
  );
};

export default Skills;
