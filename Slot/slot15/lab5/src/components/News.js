import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import newsList from "../data/newsData"; // Đường dẫn đúng
import "../../src/design/GlobalStyles.css";

function News() {
  return (
    <div className="news-wrapper">
      <h2 className="news-title">News Category</h2>
      <Row>
        {newsList.map((news, idx) => (
          <Col md={3} key={news.id} className="mb-4">
            <Card
              className="news-card animated"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <Card.Img variant="top" src={news.images} className="news-img" />
              <Card.Body className="news-card-body">
                <Card.Title className="news-card-title">
                  {news.title}
                </Card.Title>
                <Card.Text className="news-card-text">
                  {news.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default News;
