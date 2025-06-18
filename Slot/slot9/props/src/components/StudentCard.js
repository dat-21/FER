// src/components/StudentCard.js
import "./StudentCard.css";
const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <img
        src={student.avatar || "/images/fallback.jpg"}
        alt={`${student.name}'s avatar`}
        className="card-img"
      />
      <div className="card-content">
        <p className="card-name">{student.name}</p>
        <p className="card-age">Age: {student.age}</p>
        <button className="edit-btn">Edit</button>
      </div>
    </div>
  );
};

export default StudentCard;
