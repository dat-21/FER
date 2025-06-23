import React from "react";
import Result from "./Results";
import Question from "./Question";

class QuizApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter",
        },
        // Add more questions if needed
      ],
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
      showFeedback: false,
      feedback: "",
    };
  }

  handleSelect = (option) => {
    this.setState({ selectedOption: option, showFeedback: false });
  };

  handleSubmit = () => {
    const { questions, currentQuestion, selectedOption, score } = this.state;
    const correct = selectedOption === questions[currentQuestion].answer;
    this.setState({
      showFeedback: true,
      feedback: correct ? "Correct!" : "Incorrect!",
      score: correct ? score + 1 : score,
    });
  };

  handleNext = () => {
    const { currentQuestion, questions } = this.state;
    if (currentQuestion < questions.length - 1) {
      this.setState({
        currentQuestion: currentQuestion + 1,
        selectedOption: "",
        showFeedback: false,
      });
    } else {
      this.setState({ quizEnd: true });
    }
  };

  handleRestart = () => {
    this.setState({
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
      showFeedback: false,
      feedback: "",
    });
  };

  render() {
    const {
      questions,
      currentQuestion,
      selectedOption,
      quizEnd,
      score,
      showFeedback,
      feedback,
    } = this.state;

    if (quizEnd) {
      return (
        <Result
          score={score}
          total={questions.length}
          onRestart={this.handleRestart}
        />
      );
    }

    return (
      <div className="quiz-wrapper">
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          selectedOption={selectedOption}
          onSelect={this.handleSelect}
          onSubmit={this.handleSubmit}
          onNext={this.handleNext}
          showFeedback={showFeedback}
          feedback={feedback}
          currentQuestion={currentQuestion}
          total={questions.length}
          disabled={selectedOption === ""}
        />
      </div>
    );
  }
}

export default QuizApp;
