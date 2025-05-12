import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import "./ForgotPasswordPage.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the email to backend to handle recovery
    setSubmitted(true);
  };

  return (
    <Container maxWidth="sm" className="forgot-password-container">
      <Typography variant="h5" gutterBottom>
        Recover Your Password
      </Typography>
      <Typography variant="body1" gutterBottom>
        Enter your email address and we'll send you a link to reset your password.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Send Recovery Link
        </Button>
      </form>
      {submitted && (
        <Typography color="green" sx={{ mt: 2 }}>
          ✅ If an account exists with this email, a reset link has been sent.
        </Typography>
      )}
    </Container>
  );
};

export default ForgotPasswordPage;