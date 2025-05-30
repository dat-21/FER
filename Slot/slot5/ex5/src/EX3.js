import React from "react";

const students = [
  {
    id: "DE161612",
    name: "Nguyễn Văn Quốc Kiên",
    status: "Absent",
    img: "https://sieupet.com/sites/default/files/hinh_anh_meo_dep.jpg", // Thay bằng URL ảnh thật hoặc import ảnh
  },
  {
    id: "DE160777",
    name: "Chuy Văn Thiện",
    status: "Absent",
    img: "https://img.thuthuat123.com/uploads/2019/06/11/anh-nen-meo-de-thuong_093846627.jpg",
  },
  {
    id: "DE160547",
    name: "Đỗ Nguyễn Phúc",
    status: "Absent",
    img: "https://img.meta.com.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-16.jpg",
  },
  {
    id: "DE160409",
    name: "Lê Hoàng Minh",
    status: "Absent",
    img: "https://toigingiuvedep.vn/wp-content/uploads/2021/04/hinh-anh-nen-con-meo-cute.jpg",
  },
];

function StudentCard({ student }) {
  const [status, setStatus] = React.useState(student.status);

  return (
    <div
      style={{
        width: "200px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 0 5px #ccc",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={student.img}
        alt={student.name}
        style={{ width: "100%", borderRadius: "5px", height: "150px" }}
      />
      <div style={{ marginTop: "8px", fontSize: "12px", color: "#555" }}>
        {student.id}
      </div>
      <div style={{ fontWeight: "bold", marginTop: "6px" }}>{student.name}</div>
      <div style={{ marginTop: "6px", fontSize: "12px" }}>
        <label>
          <input
            type="radio"
            name={`status-${student.id}`}
            value="Absent"
            checked={status === "Absent"}
            onChange={() => setStatus("Absent")}
          />{" "}
          Absent
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            name={`status-${student.id}`}
            value="Present"
            checked={status === "Present"}
            onChange={() => setStatus("Present")}
          />{" "}
          Present
        </label>
      </div>
      <button
        style={{
          marginTop: "8px",
          backgroundColor: "#f18d00",
          border: "none",
          color: "#fff",
          padding: "5px 10px",
          borderRadius: "3px",
          cursor: "pointer",
          fontSize: "12px",
        }}
        onClick={() => alert(`${student.name} marked as ${status}`)}
      >
        Submit
      </button>
    </div>
  );
}

function EX3() {
  return (
    <>
      <header
        style={{
          backgroundColor: "#ef8958",
          padding: "10px 15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "Arial, sans-serif",
          fontSize: "12px",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://i.imgur.com/NX9H1dW.png" // Logo (thay bằng link thật hoặc import)
            alt="Logo"
            style={{ height: "30px", marginRight: "10px" }}
          />
          <nav>
            <a
              href="/"
              style={{
                color: "#fff",
                marginRight: "10px",
                textDecoration: "none",
              }}
            >
              Trang chủ
            </a>
            <a
              href="/students"
              style={{
                color: "#fff",
                marginRight: "10px",
                textDecoration: "none",
              }}
            >
              Sinh viên
            </a>
            <a
              href="/teachers"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Giảng viên
            </a>
          </nav>
        </div>
        <div>
          <input
            type="search"
            placeholder="Search..."
            style={{ padding: "3px", fontSize: "12px" }}
          />
        </div>
      </header>

      <div
        style={{
          backgroundColor: "#f18221",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <img
          src="https://pethouse.com.vn/wp-content/uploads/2022/12/anh-meo-anh-long-ngan-9988838880.jpg" // Ảnh nhóm (thay bằng link thật hoặc import)
          alt="Students group"
          style={{ maxWidth: "90%", maxHeight: "300px", objectFit: "cover" }}
        />
      </div>

      <div
        style={{
          maxWidth: "1000px",
          margin: "15px auto",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          color: "#555",
        }}
      >
        <div style={{ marginBottom: "10px", fontSize: "12px", color: "#999" }}>
          Home / Students
        </div>
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Students Detail
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>

      <footer
        style={{
          backgroundColor: "#ef8958",
          color: "#fff",
          padding: "15px",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div style={{ minWidth: "250px", marginBottom: "10px" }}>
            <h4 style={{ fontSize: "16px", marginBottom: "8px" }}>
              Our Address
            </h4>
            <div>123 Đường ABC, Phường 1, Quận 1, TP.HCM</div>
            <div>📞 0123456789</div>
            <div>📧 contact@example.com</div>
          </div>
          <div
            style={{
              minWidth: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              fontSize: "20px",
            }}
          >
            {/* Các icon có thể dùng thư viện icon hoặc thay bằng hình */}
            <a
              href="#"
              style={{ color: "#fff", textDecoration: "none" }}
              aria-label="Google Plus"
            >
              G+
            </a>
            <a
              href="#"
              style={{ color: "#fff", textDecoration: "none" }}
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="#"
              style={{ color: "#fff", textDecoration: "none" }}
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="#"
              style={{ color: "#fff", textDecoration: "none" }}
              aria-label="Twitter"
            >
              🐦
            </a>
            <a
              href="#"
              style={{ color: "#fff", textDecoration: "none" }}
              aria-label="Email"
            >
              ✉
            </a>
          </div>
        </div>
        <div style={{ marginTop: "10px", fontSize: "12px" }}>
          © Copyright 2023
        </div>
      </footer>
    </>
  );
}

export default EX3;
