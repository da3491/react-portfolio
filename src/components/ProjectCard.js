import React, { useState } from "react";

import { useTheme } from "./ThemeContext";
import styled from "styled-components";
// import CardModal from "./CardModal";
const CardModal = React.lazy(() => import("./CardModal"));
// import Image from "../images/apple-clone-image.jpg";

const Card = styled.div`
  position: relative;
  width: 100%;
  background: ${(props) => props.themecolor};
  // background: #333;
  color: white;
  border: 1px solid #333;
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
  padding: clamp(0.5em, 0.8em, 1.5em) clamp(0em, 1.5em, 3em);
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h3`
  font-size: var(--fs-0);
  font-weight: 300;
  margin: 0;
`;
const StyledTags = styled.span`
  color: ${(props) => props.themecolor};
  font-size: var(--fs--2);
`;
const Button = styled.button`
  display: inline;
  font-size: var(--fs-0);
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
    <Card themecolor={theme.colors.darkGrey}>
      <StyledImg
        // loading="lazy"
        // fetchPriority="low"
        src={require(`../images/${image}`)}
      />
      <CardInfo>
        <Flex>
          <div>
            <Title>{title}</Title>
            <StyledTags themecolor={theme.colors.lightGrey}>
              JS | React | Chart.js | Responsive
            </StyledTags>
          </div>
          <Button
            themecolor={theme.colors.accent}
            onClick={() => setVisibleModal(true)}
          >
            More
          </Button>
        </Flex>
      </CardInfo>
      <React.Suspense>
        {visibleModal && (
          <CardModal
            visible={visibleModal}
            title={title}
            image={image}
            text={text}
            closeModal={() => setVisibleModal(false)}
          />
        )}
      </React.Suspense>
    </Card>
  );
};

export default ProjectCard;
