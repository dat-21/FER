import React, { useState, useEffect } from "react";
import { quizData } from "../data/quizData";

// Hàm check trùng (case-insensitive)
const isDuplicate = (arr, idx) =>
  arr.filter((v, i) => v.trim().toLowerCase() === arr[idx].trim().toLowerCase())
    .length > 1;

export default function QuizInput({ onQuizUpdate }) {
  const [questions, setQuestions] = useState(quizData);
  const [error, setError] = useState("");

  // Kiểm tra trước khi cập nhật
  const validateQuestions = (qs) => {
    for (let i = 0; i < qs.length; i++) {
      const q = qs[i];
      if (!q.question.trim()) return "Không được để trống câu hỏi!";
      if (
        isDuplicate(
          qs.map((qi) => qi.question),
          i
        )
      )
        return "Câu hỏi bị trùng!";
      if (q.answers.length < 2) return "Phải có ít nhất 2 đáp án!";
      for (let j = 0; j < q.answers.length; j++) {
        if (!q.answers[j].trim())
          return `Không được để trống đáp án ở câu ${i + 1}`;
        if (isDuplicate(q.answers, j)) return `Có đáp án trùng ở câu ${i + 1}`;
      }
      if (!q.correctAnswer.trim())
        return `Phải chọn đáp án đúng cho câu ${i + 1}`;
      if (!q.answers.includes(q.correctAnswer))
        return `Đáp án đúng không nằm trong các đáp án ở câu ${i + 1}`;
    }
    return ""; // hợp lệ
  };

  // Thêm câu hỏi
  const addQuestion = () => {
    const newQuestions = [
      ...questions,
      { question: "", answers: ["", ""], correctAnswer: "" },
    ];
    setQuestions(newQuestions);
    setError(""); // reset lỗi khi thêm mới
    onQuizUpdate(newQuestions);
  };

  // Các hàm update, xóa... như cũ, nhưng nhớ check lỗi khi update!
  const setQuestionsWithValidation = (newQuestions) => {
    setQuestions(newQuestions);
    const err = validateQuestions(newQuestions);
    setError(err);
    onQuizUpdate(newQuestions);
  };

  // Sửa các hàm gọi setQuestions -> setQuestionsWithValidation
  const removeQuestion = (index) => {
    if (questions.length <= 1) return;
    const copy = questions.filter((_, idx) => idx !== index);
    setQuestionsWithValidation(copy);
  };
  const updateQuestion = (index, value) => {
    const copy = [...questions];
    copy[index].question = value;
    setQuestionsWithValidation(copy);
  };
  const updateAnswer = (qIdx, aIdx, value) => {
    const copy = [...questions];
    copy[qIdx].answers[aIdx] = value;
    setQuestionsWithValidation(copy);
  };
  const addAnswer = (qIdx) => {
    const copy = [...questions];
    copy[qIdx].answers.push("");
    setQuestionsWithValidation(copy);
  };
  const removeAnswer = (qIdx, aIdx) => {
    const copy = [...questions];
    if (copy[qIdx].answers.length <= 2) return;
    const removedAnswer = copy[qIdx].answers[aIdx];
    copy[qIdx].answers.splice(aIdx, 1);
    if (copy[qIdx].correctAnswer === removedAnswer) {
      copy[qIdx].correctAnswer = "";
    }
    setQuestionsWithValidation(copy);
  };
  const moveQuestion = (from, to) => {
    if (to < 0 || to >= questions.length) return;
    const copy = [...questions];
    const [moved] = copy.splice(from, 1);
    copy.splice(to, 0, moved);
    setQuestionsWithValidation(copy);
  };
  const updateCorrectAnswer = (qIdx, value) => {
    const copy = [...questions];
    copy[qIdx].correctAnswer = value;
    setQuestionsWithValidation(copy);
  };

  useEffect(() => {
    setError(validateQuestions(questions));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="edit-questions-wrapper">
      <div className="edit-questions-title">Edit Questions</div>
      {error && (
        <div
          style={{
            color: "#e83636",
            background: "#ffe5e8",
            border: "1.5px solid #ffb8c7",
            borderRadius: 8,
            marginBottom: 18,
            padding: 10,
            fontWeight: 500,
          }}
        >
          {error}
        </div>
      )}
      {questions.map((q, qIdx) => (
        <div key={qIdx} className="quiz-question-block">
          {/* Nút di chuyển lên/xuống */}
          <div className="move-btn-group">
            <button
              title="Di chuyển lên"
              className="move-btn"
              disabled={qIdx === 0}
              onClick={() => moveQuestion(qIdx, qIdx - 1)}
            >
              ↑
            </button>
            <button
              title="Di chuyển xuống"
              className="move-btn"
              disabled={qIdx === questions.length - 1}
              onClick={() => moveQuestion(qIdx, qIdx + 1)}
            >
              ↓
            </button>
          </div>
          <input
            type="text"
            className="quiz-question-input"
            value={q.question}
            onChange={(e) => updateQuestion(qIdx, e.target.value)}
            placeholder="Nhập nội dung câu hỏi"
          />
          <button
            title="Xoá câu hỏi"
            className="delete-question-btn"
            onClick={() => removeQuestion(qIdx)}
            disabled={questions.length === 1}
          >
            Xoá
          </button>
          {/* Nhập đáp án và nút xóa đáp án */}
          <div style={{ marginBottom: 6, marginTop: 6 }}>
            {q.answers.map((ans, aIdx) => (
              <span
                key={aIdx}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  marginRight: 7,
                  marginBottom: 4,
                }}
              >
                <input
                  type="text"
                  className="quiz-answer-input"
                  value={ans}
                  onChange={(e) => updateAnswer(qIdx, aIdx, e.target.value)}
                  placeholder={`Đáp án ${aIdx + 1}`}
                />
                <button
                  title="Xoá đáp án"
                  className="delete-answer-btn"
                  disabled={q.answers.length <= 2}
                  onClick={() => removeAnswer(qIdx, aIdx)}
                >
                  ×
                </button>
              </span>
            ))}
            <button className="add-answer-btn" onClick={() => addAnswer(qIdx)}>
              + Thêm đáp án
            </button>
          </div>
          <div>
            <select
              className="correct-answer-select"
              value={q.correctAnswer}
              onChange={(e) => updateCorrectAnswer(qIdx, e.target.value)}
            >
              <option value="">Chọn đáp án đúng</option>
              {q.answers.map((ans, aIdx) => (
                <option key={aIdx} value={ans}>
                  {ans}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
      <button
        className="quiz-btn"
        onClick={addQuestion}
        disabled={!!error}
        title={error ? "Sửa lỗi trước khi thêm mới" : ""}
      >
        Add Question
      </button>
    </div>
  );
}
