import React, { useState } from "react";

import { useTheme } from "./ThemeContext";
import styled from "styled-components";
import CardModal from "./CardModal";
// import Image from "../images/apple-clone-image.jpg";

const Card = styled.div`
  position: relative;
  width: 100%;
  background: #333;
  color: white;
  border: 1px solid #555;
  border-radius: 3px;
`;
const StyledImg = styled.img`
  display: none;

  // @media (min-width: 550px) {
  //   display: inline;
  //   max-width: 100%;
  //   aspect-ratio: 2/1;
  //   object-fit: cover;
  // }
`;
const CardInfo = styled.div`
  padding: 0.5em 1em;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h3`
  font-size: clamp(1rem, 1.2rem, 2rem);
  font-weight: 400;
  margin: 0;
`;
const StyledTags = styled.span`
  color: #ccc;
  font-size: 0.8rem;
`;
const Button = styled.button`
  display: inline;
  background: ${(props) => props.themecolor};
  color: white;
  border: none;
  padding: 0.1em 0.7em 0.2em;
  border-radius: 3px;
`;

const ProjectCard = ({ title, image, text }) => {
  const theme = useTheme();
  const [visibleModal, setVisibleModal] = useState(false);

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
    <Card>
      <StyledImg
        src={require(`../images/${image}`)}
        themecolor={theme.colors.dark}
      />
      <CardInfo>
        <Flex>
          <div>
            <Title>{title}</Title>
            <StyledTags themecolor={theme.colors.accent1}>
              JS | React | Chart.js | Responsive
            </StyledTags>
          </div>
          <Button
            themecolor={theme.colors.accent1}
            onClick={() => setVisibleModal(true)}
          >
            More
          </Button>
        </Flex>
      </CardInfo>
      {visibleModal && (
        <CardModal
          visible={visibleModal}
          title={title}
          image={image}
          text={text}
          closeModal={() => setVisibleModal(false)}
        />
      )}
    </Card>
  );
};

export default ProjectCard;
