import NameList from "./components/NameList";
import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";
import StudentCard from "./components/StudentCard";
import "./App.css";
import img1 from "./image1.png";
import img2 from "./image2.png";
import img3 from "./image3.png";
function App() {
  const userData = { name: "traltb@fe.edu.vn", age: 39 };
  const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];
  const students = [
    { name: "traltb1@fe.edu.vn", age: 39, avatar: img1 },
    { name: "traltb2@fe.edu.vn", age: 40, avatar: img2 },
    { name: "traltb3@fe.edu.vn", age: 41, avatar: img3 },
  ];

  return (
    <>
      <Welcome name="traltb@fe.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <div className="app-container ">
        <h1 className="title" style={{ textAlign: "center" }}>
          Student information
        </h1>
        <div
          className="cards-container"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            // hover: "pointer",
          }}
        >
          {students.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
