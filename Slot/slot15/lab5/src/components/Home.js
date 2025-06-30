import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../src/design/GlobalStyles.css";
const foodMenu = [
  { src: "/images/food1.png", alt: "Food 1", name: "Pizza" },
  { src: "/images/food2.png", alt: "Food 2", name: "Burger" },
  { src: "/images/food3.png", alt: "Food 3", name: "Salad" },
  { src: "/images/food4.png", alt: "Food 4", name: "Noodles" },
  { src: "/images/food5.png", alt: "Food 5", name: "Pasta" },
  { src: "/images/food6.png", alt: "Food 6", name: "Rice" },
];

function Home() {
  return (
    <div style={{ background: "#faf9f6", minHeight: "100vh" }}>
      {/* Banner */}
      <Carousel>
        <Carousel.Item>
          <img
            src="/images/banner.png"
            className="d-block w-100"
            style={{ height: 500, objectFit: "cover" }}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/banner2.jpg"
            className="d-block w-100"
            style={{ height: 500, objectFit: "cover" }}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/banner3.jpg"
            className="d-block w-100"
            style={{ height: 500, objectFit: "cover" }}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Dòng chữ đỏ */}
      <h2
        style={{
          color: "#e53935",
          marginTop: 32,
          marginBottom: 40,
          fontWeight: 700,
          textAlign: "center",
          letterSpacing: 1.2,
        }}
      >
        This is Home Page
      </h2>

      {/* Food menu hình tròn */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 36,
          flexWrap: "wrap",
          marginBottom: 48,
        }}
      >
        {foodMenu.map((food, idx) => (
          <div
            key={idx}
            style={{
              textAlign: "center",
              transition:
                "transform 0.18s cubic-bezier(.5,2,.5,1), box-shadow 0.18s",
              cursor: "pointer",
            }}
            className="food-circle"
          >
            <img
              src={food.src}
              alt={food.alt}
              style={{
                width: 110,
                height: 110,
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #fff",
                boxShadow: "0 3px 18px rgba(30,80,110,0.10)",
                marginBottom: 12,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              className="food-img"
            />
            <div
              style={{
                fontSize: 16,
                color: "#222",
                fontWeight: 500,
                letterSpacing: 0.4,
                textShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              {food.name}
            </div>
          </div>
        ))}
      </div>
      {/* Bạn có thể thêm nội dung khác phía dưới nếu muốn */}
    </div>
  );
}

export default Home;
