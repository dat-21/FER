import React, { useState } from "react";
import "./PageDesign.css";
const questions = [
  {
    id: 1,
    question: "React là gì?",
    options: ["Framework", "Library", "Ngôn ngữ", "Hệ điều hành"],
    answer: "Library",
  },
  {
    id: 2,
    question: "Component trong React là?",
    options: ["Class", "Function", "Cả hai", "Chỉ class"],
    answer: "Cả hai",
  },
];

function Quiz() {
  const [selected, setSelected] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (qid, value) => {
    setSelected((prev) => ({ ...prev, [qid]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  const handleRetry = () => {
    setSelected({});
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-title">Quiz Page</div>
      <form onSubmit={handleSubmit}>
        {questions.map((q) => (
          <div key={q.id}>
            <div className="quiz-question">{q.question}</div>
            <div>
              {q.options.map((opt) => (
                <div className="quiz-options" key={opt}>
                  <input
                    type="radio"
                    name={`question_${q.id}`}
                    value={opt}
                    checked={selected[q.id] === opt}
                    onChange={() => handleOptionChange(q.id, opt)}
                    disabled={showResult}
                  />
                  <label>{opt}</label>
                </div>
              ))}
            </div>
            {showResult && (
              <div
                className={
                  "quiz-feedback " +
                  (selected[q.id] === q.answer ? "correct" : "incorrect")
                }
              >
                {selected[q.id]
                  ? selected[q.id] === q.answer
                    ? "Correct!"
                    : "Incorrect!"
                  : "Bạn chưa chọn đáp án!"}
              </div>
            )}
          </div>
        ))}
        {!showResult && (
          <button
            className="quiz-submit-btn"
            type="submit"
            disabled={Object.keys(selected).length < questions.length}
            onClick={handleSubmit}
          >
            Submit Quiz
          </button>
        )}
        {showResult && (
          <button
            type="button"
            className="quiz-retry-btn"
            onClick={handleRetry}
          >
            Làm lại
          </button>
        )}
      </form>
    </div>
  );
}

export default Quiz;
