import React, { useState } from "react";
import { Card, Button, Collapse } from "react-bootstrap";
import Image from "../images/apple-clone-image.jpg";

function ProjectCard() {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <Card.Img src={Image} />
      <Card.Body className="pt-0">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Card.Title className="text-start">Project Title</Card.Title>
            <Card.Subtitle className="text-secondary pb-2">
              JS | React | Chart.js | Responsive
            </Card.Subtitle>
          </div>
          <a
            onClick={() => setOpen(!open)}
            aria-expanded="false"
            aria-controls="cardIfno"
            href="#"
          >
            ^
          </a>
        </div>
        <Collapse in={open}>
          <div id="cardInfo">
            <hr />
            <Card.Text className="text-start">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. This will express additional
              information relating to the project.
            </Card.Text>
            <div className="d-flex justify-content-end">
              <Button className="mx-2">live link</Button>
              <Button className="mx-2">repository</Button>
            </div>
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
