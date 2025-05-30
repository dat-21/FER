import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function AutoLayoutExample() {
  return (
    <Container className="mt-4 ">
      <div className="container text-center">
        <Row>
          <Col className="border border-primary p-3">1 of 2</Col>
          <Col className="border border-primary p-3">2 of 2</Col>
        </Row>
        <Row className="mt-3">
          <Col className="border border-success p-3">1 of 3</Col>
          <Col className="border border-success p-3">2 of 3</Col>
          <Col className="border border-success p-3">3 of 3</Col>
        </Row>
        <Row className="mt-3">
          <Col className="border border-danger p-3">1 of 4</Col>
          <Col className="border border-danger p-3">2 of 4</Col>
          <Col className="border border-danger p-3">3 of 4</Col>
          <Col className="border border-danger p-3">4 of 4</Col>
        </Row>
      </div>
    </Container>
  );
}
function EX1() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "grey",
          height: "200px",
          width: "100%",
          fontSize: "50px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Let's test the grid!?!?!?!?!??!
      </div>
      <BasicExample />
      <AutoLayoutExample />
      <br />
      <div
        style={{
          backgroundColor: "grey",
          height: "70px",
          width: "100%",
          fontSize: "50px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Create by ABCDEFG ??????????
      </div>
    </div>
  );
}

export default EX1;
