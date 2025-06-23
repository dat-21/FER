import React from "react";

function Result({ score, total, onRestart }) {
  return (
    <div className="quiz-result quiz-wrapper">
      <div className="completed">Quiz Ended</div>
      <div className="score">
        Your Score: {score} / {total}
      </div>
      <button className="quiz-btn" onClick={onRestart}>
        Try Again
      </button>
    </div>
  );
}

export default Result;
