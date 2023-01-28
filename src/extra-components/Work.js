import React, { useState } from "react";
import styled from "styled-components";
import projects from "../utils/projects.js";
import ProjectCard from "./ProjectCard";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1;
  gap: 1.5em;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
  }
`;

const Work = () => {
  const [activeCard, setActiveCard] = useState(Object.keys(projects)[0]);

  const handleToggle = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <Container>
      {/* <h2 className="text-center py-5">my work</h2> */}
      <Grid>
        {Object.keys(projects).map((name) => (
          <ProjectCard
            key={name}
            name={name}
            image={projects[name].image}
            text={projects[name].text}
            isActive={activeCard.name}
            handleToggle={handleToggle}
          />
        ))}
        {/* <ProjectCard /> */}
      </Grid>
    </Container>
  );
};

export default Work;
