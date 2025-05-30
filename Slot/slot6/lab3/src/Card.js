import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cartImg from "./image.png"; // Thay đường dẫn này nếu cần

const cardData = [
  {
    border: "#3399ff",
    bg: "#3399ff20",
    text: "#0d47a1",
  },
  {
    border: "#fbc02d",
    bg: "#fbc02d20",
    text: "#b78906",
  },
  {
    border: "#d32f2f",
    bg: "#d32f2f20",
    text: "#b71c1c",
  },
];

function CardsColumns() {
  return (
    <div className="container mt-3">
      <h2 style={{ fontWeight: "bold" }}>Cards Columns</h2>
      <Row className="mt-2 g-3">
        {cardData.map((c, idx) => (
          <Col md={4} key={idx}>
            <Card
              style={{
                border: `8px solid ${c.border}`,
                background: c.bg,
                borderRadius: "10px",
                boxShadow: "none",
                textAlign: "center",
              }}
            >
              <Card.Img
                variant="top"
                src={cartImg}
                style={{ width: "90%", margin: "20px auto 0 auto" }}
              />
              <Card.Body style={{ padding: "8px 0 16px 0" }}>
                <Card.Text style={{ color: c.text, fontWeight: 500 }}>
                  Some text inside the first card
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardsColumns;
