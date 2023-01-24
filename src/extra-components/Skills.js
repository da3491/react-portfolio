import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import {
  SiJavascript,
  SiRuby,
  SiRubyonrails,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";
import "../styles/Skills.css";

function Skills() {
  return (
    <Container>
      <h1 className="py-5">my skills</h1>
      <div style={{ backgroundColor: "#dddddd" }} className="rounded">
        <Row>
          <Col xs="12" md="4" className="py-3 px-4">
            <h4 className="pb-4">Technologies</h4>
            {/* HTML/CSS */}
            <div className="d-flex align-items-center my-2">
              <Col xs={3}>
                <FaHtml5 />
                <FaCss3Alt />
              </Col>
              <Col className="bg-white rounded">
                <div className="d-inline">HTML/CSS</div>
              </Col>
            </div>
            {/* Bootstrap */}
            <div className="d-flex align-items-center my-2">
              <Col xs={3}>
                <FaBootstrap />
              </Col>
              <Col className="bg-white rounded">
                <div className="d-inline">Bootstrap</div>
              </Col>
            </div>
            {/* JavaScript */}
            <div className="d-flex align-items-center my-2">
              <Col xs={3}>
                <SiJavascript />
              </Col>
              <Col className="bg-white rounded">
                <div className="d-inline">JavaScript</div>
              </Col>
            </div>
            {/* React */}
            <div className="d-flex align-items-center my-2">
              <Col xs={3}>
                <FaReact />
              </Col>
              <Col className="bg-white rounded">
                <div className="d-inline">React</div>
              </Col>
            </div>
            {/* Ruby */}
            <div className="d-flex align-items-center my-2">
              <Col xs={3}>
                <SiRuby />
              </Col>
              <Col className="bg-white rounded">
                <div className="d-inline">Ruby</div>
              </Col>
            </div>
            {/* Rails */}
            <div className="d-flex align-items-center my-2">
              <Col xs={3}>
                <SiRubyonrails />
              </Col>
              <Col className="bg-white rounded">
                <div className="d-inline">Ruby on Rails</div>
              </Col>
            </div>
          </Col>
          <Col xs="12" md="4" className="py-3 px-4">
            <h4 className="pb-4">Tools & Libraries</h4>
            {/* Git */}
            <div className="d-flex align-items-center my-2">
              <Col xs={3}>
                <FaGitAlt />
              </Col>
              <Col className="bg-white rounded">Git</Col>
            </div>
            {/* Heroku */}
            <div className="d-flex align-items-center my-2">
              <Col xs={3}>
                <SiHeroku />
              </Col>
              <Col className="bg-white rounded">Heroku</Col>
            </div>
            {/* Netlify */}
            <div className="d-flex align-items-center my-2">
              <Col xs={3}>
                <SiNetlify />
              </Col>
              <Col className="bg-white rounded">Netlify</Col>
            </div>
          </Col>
          <Col xs="12" md="4" className="py-3 px-4"></Col>
        </Row>
        <Button
          style={{
            background: "orange",
            color: "black",
            border: "none",
            fontWeight: "600",
          }}
          className="mx-auto my-4 col-sm-8 col-md-4"
        >
          view my resume
        </Button>
      </div>
    </Container>
  );
}

export default Skills;
