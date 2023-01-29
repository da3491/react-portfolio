import React from "react";

// import { ActiveCardContext } from "./Work";
import { useTheme } from "./ThemeContext";
import styled from "styled-components";
// import Image from "../images/apple-clone-image.jpg";

const Card = styled.div`
  width: 100%;
  background: #ccc;
  border-radius: 5px;
  border: 1px solid white;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.h3`
  margin: 1em 0 0 0;
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
`;
const CardText = styled.p`
  padding: 0.5em;
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

// const StyledImg = styled.img`
//   max-width: 100%;
//   aspect-ratio: 2/1;
//   object-fit: cover;
//   border-bottom: 2px solid ${(props) => props.themecolor};
// `;

const ProjectCard = ({ title, image, text }) => {
  const theme = useTheme();

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
      {/* <StyledImg
        src={require(`../images/${image}`)}
        themecolor={theme.colors.dark}
      /> */}
      <CardInfo>
        <Title>{title}</Title>
        <Subtitle themecolor={theme.colors.accent1}>
          JS | React | Chart.js | Responsive
        </Subtitle>
        <div>
          <hr />
          <CardText>{text}</CardText>
          <Flex>
            <Button themecolor={theme.colors.accent1}>live link</Button>
            <Button themecolor={theme.colors.accent1}>repository</Button>
          </Flex>
        </div>
      </CardInfo>
    </Card>
  );
};

export default ProjectCard;
