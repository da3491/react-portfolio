import React from "react";
import styled from "styled-components";
import projects from "../utils/projects.js";
// import projects from "../utils/projects-dummy.js";
import ProjectCard from "./ProjectCard.js";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-row: 3/5;
  grid-template-columns: 1;
  gap: var(--space-3xs);
`;

const Projects = () => {
  return (
    <Container>
      {Object.keys(projects).map((key) => (
        <ProjectCard
          key={key}
          title={projects[key].title}
          image={projects[key].image}
          text={projects[key].text}
        />
      ))}
    </Container>
  );
};

export default Projects;
