// // QuizInput.js
// import React, { useState, useEffect } from "react";
// import { quizData } from "../data/quizData";

// export default function QuizInput({ onQuizUpdate }) {
//   const [questions, setQuestions] = useState(quizData);

//   const addQuestion = () => {
//     setQuestions([
//       ...questions,
//       { question: "", answers: ["", "", ""], correctAnswer: "" },
//     ]);
//   };

//   const updateQuestion = (index, value) => {
//     const copy = [...questions];
//     copy[index].question = value;
//     setQuestions(copy);
//     onQuizUpdate(copy);
//   };

//   const updateAnswer = (qIdx, aIdx, value) => {
//     const copy = [...questions];
//     copy[qIdx].answers[aIdx] = value;
//     setQuestions(copy);
//     onQuizUpdate(copy);
//   };

//   const updateCorrectAnswer = (qIdx, value) => {
//     const copy = [...questions];
//     copy[qIdx].correctAnswer = value;
//     setQuestions(copy);
//     onQuizUpdate(copy);
//   };

//   useEffect(() => {
//     onQuizUpdate(questions);
//     // eslint-disable-next-line
//   }, []);

//   return (
//     <div className="quiz-wrapper" style={{ marginBottom: 20 }}>
//       <div className="quiz-title">Edit Questions</div>
//       {questions.map((q, qIdx) => (
//         <div
//           key={qIdx}
//           style={{ marginBottom: 10, borderBottom: "1px solid #eee" }}
//         >
//           <input
//             type="text"
//             value={q.question}
//             onChange={(e) => updateQuestion(qIdx, e.target.value)}
//             placeholder="Enter question"
//             style={{
//               width: "85%",
//               marginBottom: 6,
//               padding: 7,
//               fontSize: 16,
//               borderRadius: 5,
//               border: "1px solid #e0e0e0",
//             }}
//           />
//           <div>
//             {q.answers.map((ans, aIdx) => (
//               <input
//                 key={aIdx}
//                 type="text"
//                 value={ans}
//                 onChange={(e) => updateAnswer(qIdx, aIdx, e.target.value)}
//                 placeholder={`Option ${aIdx + 1}`}
//                 style={{
//                   width: 220,
//                   marginRight: 10,
//                   marginBottom: 4,
//                   padding: 7,
//                   fontSize: 16,
//                   borderRadius: 5,
//                   border: "1px solid #e0e0e0",
//                 }}
//               />
//             ))}
//           </div>
//           <div>
//             <select
//               value={q.correctAnswer}
//               onChange={(e) => updateCorrectAnswer(qIdx, e.target.value)}
//               style={{
//                 padding: 5,
//                 fontSize: 15,
//                 marginBottom: 10,
//                 borderRadius: 5,
//                 border: "1px solid #e0e0e0",
//               }}
//             >
//               <option value="">Select correct answer</option>
//               {q.answers.map((ans, aIdx) => (
//                 <option key={aIdx} value={ans}>
//                   {ans}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       ))}
//       <button className="quiz-btn" onClick={addQuestion}>
//         Add Question
//       </button>
//     </div>
//   );
// }
