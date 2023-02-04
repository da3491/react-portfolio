import React from "react";
import styled from "styled-components";
import projects from "../utils/projects.js";
// import projects from "../utils/projects-dummy.js";
import ProjectCard from "./ProjectCard.js";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1;
  gap: clamp(0em, 0.25em, 1em);
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
