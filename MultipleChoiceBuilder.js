import React, { useState } from "react";
import "./MultipleChoiceBuilderPage.css";
import { Button, TextField, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from 'react-router-dom';

const MultipleChoiceBuilderPage = () => {
  const [questions, setQuestions] = useState([
    { question: "", options: ["", ""] },
  ]);
  const navigate = useNavigate();

  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index].question = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

  const addOption = (qIndex) => {
    const updated = [...questions];
    if (updated[qIndex].options.length < 5) {
      updated[qIndex].options.push("");
      setQuestions(updated);
    }
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", ""] }]);
  };

  const deleteQuestion = (index) => {
    const updated = [...questions];
    updated.splice(index, 1);
    setQuestions(updated);
  };

  const handleStartTest = () => {
  if (questions.length === 0) return;
  navigate("/take-test", { state: { questions } });
};
  return (
    <div className="multiple-choice-container">
      <h2>Create Multiple Choice Quiz</h2>

      {questions.map((q, qIndex) => (
        <Box key={qIndex} className="question-box">
          <TextField
            fullWidth
            label={`Question ${qIndex + 1}`}
            value={q.question}
            onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
            margin="normal"
          />

          {q.options.map((opt, oIndex) => (
            <TextField
              key={oIndex}
              fullWidth
              label={`Option ${oIndex + 1}`}
              value={opt}
              onChange={(e) =>
                handleOptionChange(qIndex, oIndex, e.target.value)
              }
              margin="dense"
            />
          ))}

          {q.options.length < 5 && (
            <Button onClick={() => addOption(qIndex)} sx={{ mt: 1 }}>
              + Add Option
            </Button>
          )}

          <IconButton onClick={() => deleteQuestion(qIndex)} sx={{ mt: 2 }}>
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      ))}

      <Button
        variant="contained"
        color="primary"
        onClick={addQuestion}
        sx={{ mt: 3 }}
      >
        + Add Question
      </Button>

      {questions.length > 0 && (
        <Button
          variant="outlined"
          color="success"
          size="large"
          onClick={handleStartTest}
          sx={{ mt: 3 }}
        >
          Take Test
        </Button>
      )}
    </div>
  );
};

export default MultipleChoiceBuilderPage;