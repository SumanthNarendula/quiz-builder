import React from "react";
import { Box, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";

const testimonials = [
  {
    name: "Emily Johnson",
    rating: "⭐⭐⭐⭐⭐",
    text: "QuizMaster made learning fun and effective!",
  },
  {
    name: "Michael Smith",
    rating: "⭐⭐⭐⭐⭐",
    text: "A fantastic tool for quick knowledge checks.",
  },
  {
    name: "Sophia Lee",
    rating: "⭐⭐⭐⭐⭐",
    text: "Engaging quizzes that boost my confidence.",
  },
];

const Testimonials = () => (
  <Box sx={{ py: 8, px: 2, textAlign: "center" }}>
    <Typography variant="h5" fontWeight="bold" gutterBottom>
      Hear from our awesome users!
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {testimonials.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Avatar sx={{ mx: "auto", mb: 2 }} />
              <Typography variant="subtitle1" fontWeight="bold">
                {item.name}
              </Typography>
              <Typography>{item.rating}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>{item.text}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Testimonials;
