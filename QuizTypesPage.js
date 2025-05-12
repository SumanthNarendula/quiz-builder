import React from "react";
import "./QuizTypesPage.css";
import { useNavigate } from "react-router-dom";

const quizTypes = [
  {
    title: "Multiple Choice",
    image: "/images/multiple-choice.png",
    description: "Select one or more correct answers.",
    route: "/quiz/multiple-choice"
  },
  {
    title: "True or False",
    image: "/images/true-or-false.png",
    description: "Choose whether the statement is true or false."
  },
  {
    title: "Poll",
    image: "/images/poll.png",
    description: "Gather audience opinions quickly."
  },
  {
    title: "Rating",
    image: "/images/rating.png",
    description: "Let users rate from 1 to 5 stars."
  },
  {
    title: "Text Response",
    image: "/images/text-response.png",
    description: "Users can write short or long answers."
  },
  {
    title: "Image Quiz",
    image: "/images/image-quiz.png",
    description: "Answer questions based on image content."
  },
  {
    title: "Matching",
    image: "/images/matching.png",
    description: "Match items in one column to another."
  },
  {
    title: "Fill in the Blanks",
    image: "/images/fill-blanks.png",
    description: "Provide the missing words in the sentence."
  },
  {
    title: "Timer Based Quiz",
    image: "/images/timer.png",
    description: "Answer within a specific time limit."
  },
  {
    title: "Survey",
    image: "/images/survey.png",
    description: "Collect feedback or opinions from users."
  }
];

const QuizTypesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="quiz-types-container">
      <h1>Choose a Quiz Type</h1>
      <div className="quiz-type-grid">
        {quizTypes.map((type, index) => (
          <div
            className="quiz-type-card"
            key={index}
            onClick={() => {
              if (type.route) navigate(type.route);
            }}
            style={{ cursor: type.route ? "pointer" : "default" }}
          >
            <img src={type.image} alt={type.title} />
            <h3>{type.title}</h3>
            <p>{type.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizTypesPage;
