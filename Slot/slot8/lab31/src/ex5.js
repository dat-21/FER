import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./eee.jpg"; // Đảm bảo bạn có logo đúng đường dẫn
import "./App.css"; // Nếu bạn muốn sử dụng thêm file CSS riêng

function ListExample() {
  return (
    <Nav className="xs-auto" style={{ justifyContent: "center" }}>
      <Nav.Item style={{ listStyle: "none", margin: "0 10px" }}>
        <Nav.Link href="#home" style={{ color: "white" }}>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item style={{ listStyle: "none", margin: "0 10px" }}>
        <Nav.Link href="#about" style={{ color: "white" }}>
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item style={{ listStyle: "none", margin: "0 10px" }}>
        <Nav.Link href="#contact" style={{ color: "white" }}>
          Contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

function Info() {
  return (
    <div>
      {/* Header Section */}
      <div
        className="container-fluid"
        style={{
          maxHeight: "900px",
          backgroundColor: "#f78c1f",
          height: "300px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "550px", marginBottom: "5px", margin: "10 5" }} 
        />
        <ListExample />
      </div>

      <div
        id="about"
        style={{
          padding: "30px 15px",
          maxWidth: "600px",
          margin: "10px auto",
          textAlign: "center",
          fontSize: "14px", 
        }}
      >
        <h3>About</h3>
        <p>This is the about section of the website.</p>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        style={{
          padding: "30px 15px",
          maxWidth: "600px",
          margin: "10px auto",
          textAlign: "center",
          fontSize: "14px", // Giảm kích thước font chữ ở phần Contact
        }}
      >
        <h3>Contact</h3>
        <p>
          For any inquiries, please contact us at{" "}
          <a href="mailto:example@example.com">example@example.com</a>.
        </p>
      </div>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: "#f4c87f",
          textAlign: "center",
          padding: "15px 0",
          fontSize: "14px", // Font chữ nhỏ trong footer
          color: "#555",
        }}
      >
        <p>&copy; 2023 Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Info;
