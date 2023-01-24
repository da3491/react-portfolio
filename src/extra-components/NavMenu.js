import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../styles/NavMenu.css";

function NavMenu() {
  return (
    <Navbar expand="md" fixed="top">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav>
          <Nav.Item>
            <Nav.Link href="#">work</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">background</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">resume</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavMenu;
