import React from "react";
import styled from "styled-components";
import projects from "../utils/projects.js";
// import projects from "../utils/projects-dummy.js";
import ProjectCard from "./ProjectCard.js";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
width: 100%;
height: 100%:
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1;
  gap: 0.1em;

  @media (min-aspect-ratio: 9/16) {
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
