import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Background.css";

function Background() {
  return (
    <Container>
      <div className="mx-3">
        <h1 className="py-5">my background</h1>
        <Row style={{ backgroundColor: "#dddddd" }} className="rounded">
          <Col xs="12" md="4" className="py-3">
            <h4 className="pb-4">About Me</h4>
            <p className="lh-2 mx-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel dui sapien. In turpis magna, semper ac tempus non, euismod non
              ex.
            </p>
            <p className="lh-2 mx-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel dui sapien.
            </p>
          </Col>
          <Col xs="12" md="4" className="py-3">
            <h4 className="pb-4">Soft Skills</h4>
            <p className="lh-2 mx-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel dui sapien.
            </p>
            <p className="lh-2 mx-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel dui sapien.
            </p>
            <p className="lh-2 mx-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel dui sapien.
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Background;
