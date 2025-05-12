import React, { useState } from 'react';
import { Button, Card, Typography, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

const TakeQuiz = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === 'hello') {
      alert('Correct!');
    } else {
      alert('Incorrect. Try again!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>Take Quiz</Typography>
      <Card style={{ margin: '20px auto', padding: '20px', width: '400px' }}>
        <Typography variant="h6">1. hello</Typography>
        <FormControl component="fieldset">
          <RadioGroup value={selectedOption} onChange={handleOptionChange}>
            <FormControlLabel value="hi" control={<Radio />} label="hi" />
            <FormControlLabel value="hello" control={<Radio />} label="hello" />
          </RadioGroup>
        </FormControl>
      </Card>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Quiz
      </Button>
    </div>
  );
};

export default TakeQuiz;
