import React, { useState, useContext } from "react";
import { Accordion, Col } from "react-bootstrap";

// import { ActiveCardContext } from "./Work";
import { useTheme } from "../components/ThemeContext";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import Image from "../images/apple-clone-image.jpg";

const Card = styled(Col)`
  width: 100%;
  background: #ccc;
  border-radius: 5px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.h3`
  display: inline;
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
`;
const Subtitle = styled.span`
  color: ${(props) => props.themecolor};
  padding-left: 0.5em;
  font-size: 0.8rem;
  font-weight: 600;
`;
const CardInfo = styled.div`
  padding: 1em;
  padding-top: 0;

  ${Flex}:first-of-type {
    justify-content: space-between;
    align-items: flex-start;
  }
`;
const CardText = styled.p`
  padding: 0.5em;
`;
const ToggleButton = styled.button`
  display: inline-block;
  width: 20px;
  height: 20px;

  position: relative;
  background: transparent;
  border: none;
  float: right;
  color: ${(props) => props.themecolor};

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scale(2, 1.5);
  }
`;
const Button = styled.button`
  background: ${(props) => props.themecolor};
  color: white;
  font-weight: 500;
  font-size: 1.1em;
  border: none;
  border-radius: 5px;
  padding: 0.3em 0.7em;
  margin: 0 1em;
`;
const Collapse = styled.div`
  display: ${(props) => (props.visible ? "inline" : "none")};
`;
const StyledImg = styled.img`
  max-width: 100%;
  aspect-ratio: 2/1;
  object-fit: cover;
  border-bottom: 2px solid ${(props) => props.themecolor};
`;

const ProjectCard = ({ name, title, image, text }) => {
  const theme = useTheme();
  // const { activeCard, setActiveCard } = useContext(ActiveCardContext);
  const [isOpen, setIsOpen] = useState(false);
  // const isActive = activeCard === name;

  if (!title) {
    title = "project1";
  }
  if (!image) {
    image = "airbnb-news-clone-image.jpg";
  }
  if (!text) {
    text = "Standard text";
  }

  return (
    <Card xs={12} md={6}>
      <StyledImg
        src={require(`../images/${image}`)}
        themecolor={theme.colors.dark}
      />
      <CardInfo>
        <Flex>
          <Title>{title}</Title>
          <ToggleButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiChevronDown themecolor={theme.colors.accent1} />
            ) : (
              <FiChevronUp />
            )}
          </ToggleButton>
        </Flex>
        <Subtitle themecolor={theme.colors.accent1}>
          JS | React | Chart.js | Responsive
        </Subtitle>
        <Collapse visible={isOpen}>
          <hr />
          <CardText>{text}</CardText>
          <Flex>
            <Button themecolor={theme.colors.accent1}>live link</Button>
            <Button themecolor={theme.colors.accent1}>repository</Button>
          </Flex>
        </Collapse>
      </CardInfo>
    </Card>
  );
};

export default ProjectCard;
