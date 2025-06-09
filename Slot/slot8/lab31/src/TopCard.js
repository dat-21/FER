import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "./eee.jpg";

function Header() {
  return (
    <Card
      className="text-center"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        maxHeight: "900px",
        maxWidth: "100%",
      }}
    >
      <div style={{ width: "700px", height: "100%", overflow: "hidden" }}>
        <Card.Img variant="top" src={image} />
      </div>
      <div style={{ flex: 1, paddingRight: "0px" }}>
        <Card.Body>
          <Card.Title>Hoai Nguyen - FPT DaNang</Card.Title>
          <Card.Text>Mobile: 0123456789</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}

export default Header;
