import React from "react";

function Question(props) {
  const {
    question,
    options,
    selectedOption,
    onSelect,
    onSubmit,
    onNext,
    showFeedback,
    feedback,
    currentQuestion,
    total,
    disabled,
  } = props;

  return (
    <div>
      <div className="question-number">
        Question {currentQuestion + 1} / {total}
      </div>
      <div className="question-text">{question}</div>
      <ul className="options-list">
        {options.map((option, idx) => (
          <label key={idx}>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => onSelect(option)}
              disabled={showFeedback}
            />
            <span>{option}</span>
          </label>
        ))}
      </ul>
      {!showFeedback ? (
        <button className="quiz-btn" onClick={onSubmit} disabled={disabled}>
          Submit
        </button>
      ) : (
        <>
          <div
            className={`feedback ${
              feedback === "Correct!" ? "correct" : "incorrect"
            }`}
            style={{
              margin: "16px 0 10px 0",
              color: feedback === "Correct!" ? "#2dc46b" : "#e53935",
              fontWeight: 600,
              fontSize: "1.1rem",
            }}
          >
            {feedback}
          </div>
          <button className="quiz-btn" onClick={onNext}>
            {currentQuestion === total - 1 ? "Finish" : "Next"}
          </button>
        </>
      )}
    </div>
  );
}

export default Question;
