// src/components/HeroSection.js
import React from "react";
import { Typography, Button, Box, Container } from "@mui/material";

const HeroSection = () => (
  <Container sx={{ textAlign: "center", py: 8 }}>
    <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: "white" }}>
      Build Your Knowledge
    </Typography>
    <Typography variant="h6" gutterBottom sx={{ color: "white" }}>
      Challenge yourself with exciting quizzes and become a trivia master
    </Typography>

    <Box sx={{ mt: 4 }}>
      <Button
        variant="contained"
        color="error"
        sx={{ mx: 1, color: "white", backgroundColor: "#ff6f61", '&:hover': { backgroundColor: "#ff3d3d" } }}
      >
        Join us now
      </Button>
      <Button
        variant="outlined"
        color="error"
        sx={{
          mx: 1,
          borderColor: "white",
          color: "white",
          '&:hover': { backgroundColor: "rgba(23, 2, 2, 0.1)" }
        }}
      >
        Request demo
      </Button>
    </Box>

    <Box mt={6}>
      <img
        src="https://via.placeholder.com/800x400.png?text=Quiz+Builder"
        alt="Quiz illustration"
        style={{ borderRadius: 20, maxWidth: "100%", boxShadow: "0 4px 12px rgba(14, 16, 14, 0.5)" }}
      />
    </Box>
  </Container>
);

export default HeroSection;
