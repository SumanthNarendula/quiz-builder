import React, { useState } from "react";
import "./TakeTestPage.css";
import { Button, LinearProgress, Typography } from "@mui/material";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["A) Paris", "B) Berlin", "C) Madrid", "D) Rome"],
    correctAnswer: "A) Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["A) 3", "B) 4", "C) 5", "D) 6"],
    correctAnswer: "B) 4"
  },
  // Add more questions as needed
];

const TakeTestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz completed! Your score: ${score + (selectedOption === questions[currentQuestion].correctAnswer ? 1 : 0)}/${questions.length}`);
    }
  };

  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="take-test-container">
      <Typography variant="h5" className="progress-label">Quiz Progress</Typography>
      <LinearProgress variant="determinate" value={progressPercent} className="progress-bar" />
      <Typography variant="body1" className="question-counter">
        Question {currentQuestion + 1} of {questions.length}
      </Typography>

      <Typography variant="h4" className="quiz-time">Quiz Time!</Typography>
      <Typography variant="h6" className="quiz-question">
        {questions[currentQuestion].question}
      </Typography>

      <div className="options-container">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === option ? "selected" : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="navigation-section">
        <Button
          variant="contained"
          color="error"
          onClick={handleNext}
          endIcon={<span>➡️</span>}
          className="next-button"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TakeTestPage;
