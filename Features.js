import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import QuizIcon from '@mui/icons-material/Quiz';
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';

const features = [
  { icon: <QuizIcon fontSize="large" />, title: "Custom Quizzes" },
  { icon: <StarIcon fontSize="large" />, title: "Track Your Progress" },
  { icon: <GroupIcon fontSize="large" />, title: "Compete with Friends" }
];

const Features = () => (
  <Box sx={{ py: 6, backgroundColor: 'rgba(255,255,255,0.05)', color: 'white' }}>
    <Typography variant="h4" align="center" gutterBottom>
      Why Choose QuizBuilder?
    </Typography>
    <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              textAlign: 'center',
              backgroundColor: 'rgba(213, 200, 200, 0.1)',
              color: 'white',
              borderRadius: 3
            }}
          >
            <Box sx={{ mb: 2 }}>{feature.icon}</Box>
            <Typography variant="h6">{feature.title}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Features;
