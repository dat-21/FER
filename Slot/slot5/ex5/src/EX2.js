import React from "react";
import logo from "./image.png";
import Nav from "react-bootstrap/Nav";

function ListExample() {
  return (
    <Nav defaultActiveKey="/home" as="ul" style={{ justifyContent: "center" }}>
      <Nav.Item as="li" style={{ listStyle: "none", margin: "0 10px" }}>
        <Nav.Link href="/home" style={{ color: "white" }}>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" style={{ listStyle: "none", margin: "0 10px" }}>
        <Nav.Link href="#about" style={{ color: "white" }}>
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" style={{ listStyle: "none", margin: "0 10px" }}>
        <Nav.Link href="#contact" style={{ color: "white" }}>
          Contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

function EX2() {
  return (
    <>
      <div
        className="container-fluid flex-column"
        style={{
          backgroundColor: "orange",
          height: "150px",
          width: "100%",
          fontSize: "50px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 0",
        }}
      >
        <img
          src={logo}
          alt="hihi"
          style={{ width: "250px", marginBottom: "5px" }}
        />
        <ListExample />
      </div>

      <div
        style={{
          padding: "30px 15px",
          maxWidth: "600px",
          margin: "30px auto",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h3>About</h3>
        <p>This is the about section of the website.</p>

        <h3 id="contact" style={{ marginTop: "40px" }}>
          Contact
        </h3>
        <p>For any inquiries, please contact us at example@example.com.</p>
      </div>

      <footer
        style={{
          backgroundColor: "#f4c87f",
          textAlign: "center",
          padding: "15px 0",
          fontSize: "14px",
          color: "#555",
        }}
      >
        © 2023 Website. All rights reserved.
      </footer>
    </>
  );
}

export default EX2;
