import React, { useState } from "react";
import { QuizProvider } from "./components/QuizProvider";
import Quiz from "./components/Quiz";
import QuizInput from "./components/QuizInput";
import { quizData } from "./data/quizData";
import "./design/quiz.css";

export default function App() {
  const [quizQuestions, setQuizQuestions] = useState(quizData);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleQuizUpdate = (updatedQuestions) => {
    setQuizQuestions(updatedQuestions);
  };

  // Reset trạng thái về ban đầu (tuỳ chọn)
  const handleReset = () => {
    setQuizQuestions(quizData);
    setShowQuiz(false);
    setShowInput(false);
  };

  return (
    <QuizProvider>
      <div style={{ maxWidth: 600, margin: "auto" }}>
        {/* Bước 1: 2 nút điều khiển */}
        {!showInput && !showQuiz && (
          <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
            <button className="quiz-btn" onClick={() => setShowInput(true)}>
              Thêm câu hỏi
            </button>
            <button className="quiz-btn" onClick={() => setShowQuiz(true)}>
              Kiểm tra
            </button>
          </div>
        )}

        {/* Bước 2: Hiện form nhập câu hỏi */}
        {showInput && !showQuiz && (
          <>
            <QuizInput onQuizUpdate={handleQuizUpdate} />
            <div style={{ marginTop: 8 }}>
              <button
                className="quiz-btn"
                onClick={() => setShowQuiz(true)}
                style={{ marginRight: 8 }}
              >
                Kiểm tra
              </button>
              <button
                className="quiz-btn quiz-btn-secondary"
                onClick={handleReset}
              >
                Quay lại
              </button>
            </div>
          </>
        )}

        {/* Bước 3: Hiện Quiz để làm bài */}
        {showQuiz && (
          <>
            <Quiz questions={quizQuestions} />
            <div style={{ marginTop: 8 }}>
              <button
                className="quiz-btn quiz-btn-secondary"
                onClick={handleReset}
              >
                Quay lại
              </button>
            </div>
          </>
        )}
      </div>
    </QuizProvider>
  );
}
