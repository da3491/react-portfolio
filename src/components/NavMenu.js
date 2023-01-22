import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../styles/NavMenu.css";

function NavMenu() {
  return (
    <Navbar expand="md" fixed="top">
      <Navbar.Toggle
        aria-controls="navbar-nav"
        className="ms-auto px-2 mx-2 b-0"
      />
      <Navbar.Collapse id="navbar-nav" className="justify-content-center">
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
