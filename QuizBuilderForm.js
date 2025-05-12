import React, { useState } from 'react';
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
} from '@mui/material';
import { AddCircle, Delete } from '@mui/icons-material';

const QuizBuilderForm = () => {
  const [questions, setQuestions] = useState([
    { question: '', options: ['', '', '', ''], answer: '' },
  ]);

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

  const handleAnswerChange = (index, value) => {
    const updated = [...questions];
    updated[index].answer = value;
    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: '', options: ['', '', '', ''], answer: '' },
    ]);
  };

  const removeQuestion = (index) => {
    const updated = questions.filter((_, i) => i !== index);
    setQuestions(updated);
  };

  const handleSubmit = () => {
    console.log('Quiz Submitted:', questions);
    // Submit to backend or show preview
  };

  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Build Your Quiz
        </Typography>

        {questions.map((q, qIndex) => (
          <Card key={qIndex} sx={{ my: 2, p: 2, backgroundColor: '#f9f9f9' }}>
            <TextField
              fullWidth
              label={`Question ${qIndex + 1}`}
              value={q.question}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
              sx={{ mb: 2 }}
            />
            <Grid container spacing={2}>
              {q.options.map((opt, oIndex) => (
                <Grid item xs={6} key={oIndex}>
                  <TextField
                    fullWidth
                    label={`Option ${oIndex + 1}`}
                    value={opt}
                    onChange={(e) =>
                      handleOptionChange(qIndex, oIndex, e.target.value)
                    }
                  />
                </Grid>
              ))}
            </Grid>
            <TextField
              fullWidth
              label="Correct Answer"
              value={q.answer}
              onChange={(e) => handleAnswerChange(qIndex, e.target.value)}
              sx={{ my: 2 }}
            />
            <IconButton onClick={() => removeQuestion(qIndex)} color="error">
              <Delete />
            </IconButton>
          </Card>
        ))}

        <Button
          variant="outlined"
          startIcon={<AddCircle />}
          onClick={addQuestion}
        >
          Add Question
        </Button>

        <Button
          variant="contained"
          sx={{ ml: 2, backgroundColor: '#ff6b6b' }}
          onClick={handleSubmit}
        >
          Submit Quiz
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuizBuilderForm;
