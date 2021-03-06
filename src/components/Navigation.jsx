import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navigation = (props) => {
  const location = useLocation();

  return (
    <div id="navbar-container">
      <div id="navbar">
        <Navbar
          collapseOnSelect
          fixed="top"
          expand="sm"
          // bg="primary"
          // variant="dark"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Navbar.Brand as={Link} to="/"></Navbar.Brand>
              {/* activeKey={location} */}
              <Nav className="justify-content-end">
                <Nav.Link as={NavHashLink} to="/#home">
                  Home
                </Nav.Link>
                <Nav.Link as={NavHashLink} to="#portfolio">
                  Portfolio
                </Nav.Link>

                <Nav.Link as={NavHashLink} to="/#about">
                  About
                </Nav.Link>

                <Nav.Link as={NavHashLink} to="/blog">
                  Blog
                </Nav.Link>
                <Nav.Link as={NavHashLink} to="/#connect">
                  Connect
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
