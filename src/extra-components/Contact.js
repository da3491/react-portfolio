import React from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import "../styles/Contact.css";

function Contact() {
  return (
    <Container className="bg-black px-4 mt-5">
      <h1 className="pt-3 text-white m-0">contact me</h1>
      <div>d.annese3491@gmail.com</div>
      <Form className="text-start">
        <Form.Group className="py-2">
          <Form.Label className="text-white mb-0">Name</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Form.Group className="py-2">
          <Form.Label className="text-white mb-0">Email</Form.Label>
          <Form.Control type="email"></Form.Control>
        </Form.Group>
        <Form.Group className="py-2">
          <Form.Label className="text-white mb-0">Message</Form.Label>
          <Form.Control type="text" style={{ height: "200px" }}></Form.Control>
        </Form.Group>
        <Col>
          <Button className="ms-auto px-3 mb-3">Send</Button>
        </Col>
      </Form>
    </Container>
  );
}

export default Contact;
