import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          component={Link}
          to="/"
          sx={{ cursor: "pointer", textDecoration: 'none', color: 'inherit' }}
        >
          QuizBuilder
        </Typography>
        <Box>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/quiz" color="inherit">
            Quizzes
          </Button>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
        </Box>
        <Box>
          <Button
            component={Link}
            to="/start"
            color="error"
            variant="outlined"
            sx={{ mr: 1 }}
          >
            Start Quiz
          </Button>
          <Button
            component={Link}
            to="/login"
            color="error"
            variant="contained"
          >
            Sign In
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
