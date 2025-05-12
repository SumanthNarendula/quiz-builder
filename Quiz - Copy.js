// src/pages/Quiz.js
import React, { useState } from "react";
import "./Quiz.css";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [quizTitle, setQuizTitle] = useState("");

  const handleCreateQuiz = () => {
    if (quizTitle.trim()) {
      setQuizzes([...quizzes, quizTitle]);
      setQuizTitle("");
    }
  };

  return (
    <div className="quiz-container">
      <h2>Create Your Quiz</h2>
      <input
        type="text"
        placeholder="Enter quiz title"
        value={quizTitle}
        onChange={(e) => setQuizTitle(e.target.value)}
      />
      <button onClick={handleCreateQuiz}>Create Quiz</button>

      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index}>{quiz}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
