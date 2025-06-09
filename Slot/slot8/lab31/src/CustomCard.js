import React from "react";
import Card from "react-bootstrap/Card";
import datdeptrai from "./datdeptrai.jpg";
function CustomCard() {
  return (
    <Card style={{ width: "30rem", border: "2px solid blue" }}>
      <Card.Body style={{ padding: "0" }}>
        <div style={{ display: "flex" }}>
          <Card.Img
            variant="top"
            src={datdeptrai}
            style={{
              width: "30%",
              height: "auto",
              objectFit: "cover",
              backgroundColor: "yellow",
            }}
          />
          <div style={{ paddingLeft: "15px", flex: 1 }}>
            <Card.Title style={{ fontSize: "24px", color: "orange" }}>
              Mai Nguyễn Tiến Đạt Infor
            </Card.Title>
            <Card.Text style={{ color: "gray" }}>
              Xin chào mai nêm ít đạt{" "}
            </Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
