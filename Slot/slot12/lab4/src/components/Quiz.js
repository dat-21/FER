import React, { useContext, useState } from "react";
import { QuizContext } from "./QuizProvider";

export default function Quiz({ questions }) {
  const { selectedAnswers, setSelectedAnswers } = useContext(QuizContext);

  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  // Khi chọn đáp án
  const handleSelect = (answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [step]: answer,
    }));
  };

  // Next sang câu tiếp
  const handleNext = () => {
    if (selectedAnswers[step] === questions[step].correctAnswer) {
      setScore((prev) => prev + 1);
    }
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setCompleted(true);
    }
  };

  // Quay lại câu trước
  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  // Nếu đã hoàn thành
  if (completed) {
    // Cộng thêm điểm câu cuối nếu chọn đúng
    const finalScore =
      selectedAnswers[step] === questions[step].correctAnswer
        ? score + 1
        : score;
    return (
      <div className="quiz-taking-wrapper quiz-result">
        <div className="completed">Quiz Completed!</div>
        <div className="score">Your score: {finalScore}</div>
        <button
          className="quiz-btn"
          onClick={() => {
            setCompleted(false);
            setStep(0);
            setScore(0);
            setSelectedAnswers({});
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  const q = questions[step];

  return (
    <div className="quiz-taking-wrapper">
      <div className="quiz-number">Question {step + 1}</div>
      <div className="quiz-question">{q.question}</div>
      <div className="options-list">
        {q.answers.map((ans, idx) => (
          <label key={idx}>
            <input
              type="radio"
              name={`q${step}`}
              value={ans}
              checked={selectedAnswers[step] === ans}
              onChange={() => handleSelect(ans)}
            />
            <span>{ans}</span>
          </label>
        ))}
      </div>
      <div className="quiz-actions">
        <button
          className="quiz-btn quiz-btn-secondary"
          onClick={handleBack}
          disabled={step === 0}
        >
          Back
        </button>
        <button
          className="quiz-btn"
          onClick={handleNext}
          disabled={!selectedAnswers[step]}
        >
          {step === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
