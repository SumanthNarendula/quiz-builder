// src/pages/QuizBuilderPage.js
import React from "react";
import "./QuizBuilderPage.css";

const QuizBuilderPage = () => {
  return (
    <div className="quiz-builder-container">
      <h1 className="quiz-title">Untitled quiz</h1>
      <p className="quick-start">Quick start with</p>

      <div className="quiz-options-grid">
        <button className="quiz-option">Choice</button>
        <button className="quiz-option">Text</button>
        <button className="quiz-option">Rating</button>
        <button className="quiz-option">Date</button>
        <button className="quiz-option">Ranking</button>
        <button className="quiz-option">Likert</button>
        <button className="quiz-option">Upload File</button>
        <button className="quiz-option">Net Promoter Score®</button>
        <button className="quiz-option">Section</button>
      </div>
    </div>
  );
};

export default QuizBuilderPage;
