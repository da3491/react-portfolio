import React from "react";
import styled from "styled-components";
import projects from "../utils/projects.js";
import ProjectCard from "./ProjectCard.js";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
  width: 90%;
  margin-bottom: 2em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1;
  // grid-template-rows: min-content;
  gap: 1.5em;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
  }
`;

const Work = () => {
  return (
    <Container>
      <Grid>
        {Object.keys(projects).map((key) => (
          <ProjectCard
            key={key}
            title={projects[key].title}
            image={projects[key].image}
            text={projects[key].text}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Work;
