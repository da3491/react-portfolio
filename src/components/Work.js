import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/Work.css";
import ProjectCard from "./ProjectCard";

function Work() {
  return (
    <Container>
      <div>
        <h1 className="text-center py-5">my work</h1>
        <Row className="gy-4">
          <Col md={6}>
            <ProjectCard />
          </Col>
          <Col md={6}>
            <ProjectCard />
          </Col>
          <Col md={6}>
            <ProjectCard />
          </Col>
          <Col md={6}>
            <ProjectCard />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Work;
