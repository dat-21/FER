// App.js
import React, { useState } from "react";
import { QuizProvider } from "./components/QuizProvider";
import Quiz from "./components/Quiz";
import { quizData } from "./data/quizData";
import "./design/quiz.css";

export default function App() {
  const [quizQuestions] = useState(quizData);

  return (
    <QuizProvider>
      <div>
        <Quiz questions={quizQuestions} />
      </div>
    </QuizProvider>
  );
}
