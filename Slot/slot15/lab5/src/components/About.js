import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="about-page mt-5">
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h1 style={{ fontWeight: 700, fontSize: 38, color: "#1a2439" }}>
            About Our Quiz App
          </h1>
          <p style={{ fontSize: 19, color: "#4b587c", margin: "18px 0" }}>
            Welcome to{" "}
            <span style={{ color: "#4263eb", fontWeight: 600 }}>
              Online Quiz App
            </span>
            !
            <br />
            This platform is built to help you practice your knowledge with
            interactive quizzes, news updates, and modern web features.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Row>
                <Col
                  md={6}
                  className="d-flex align-items-center justify-content-center mb-4 mb-md-0"
                >
                  <img
                    src="/images/Like.png"
                    alt="About Banner"
                    style={{
                      maxWidth: "100%",
                      borderRadius: 16,
                      boxShadow: "0 2px 16px rgba(50,80,200,0.09)",
                    }}
                  />
                </Col>
                <Col md={6}>
                  <h4
                    style={{
                      color: "#4263eb",
                      fontWeight: 600,
                      marginBottom: 18,
                    }}
                  >
                    Why choose us?
                  </h4>
                  <ul style={{ fontSize: 17, color: "#445" }}>
                    <li>
                      ✔️ User-friendly interface, responsive on all devices
                    </li>
                    <li>✔️ Wide range of quizzes and topics</li>
                    <li>✔️ Instant feedback and retry option</li>
                    <li>✔️ Modern news & learning resources</li>
                    <li>✔️ Built with latest React, Bootstrap 5</li>
                  </ul>
                  <blockquote
                    className="blockquote mt-4"
                    style={{ color: "#6d7f9d", fontStyle: "italic" }}
                  >
                    <span style={{ fontSize: 20, color: "#4263eb" }}>"</span>
                    <span>
                      Learning is not attained by chance, it must be sought for
                      with ardor and diligence.
                    </span>
                  </blockquote>
                  <div
                    className="blockquote-footer"
                    style={{ color: "#b0b0b0", marginLeft: 10 }}
                  >
                    Abigail Adams
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
