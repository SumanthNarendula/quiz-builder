// src/components/Footer.js
import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";

const Footer = () => (
  <Box sx={{ backgroundColor: "#1a1a1a", color: "white", py: 6 }}>
    <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography variant="h6">Subscribe to our newsletter</Typography>
      <Box sx={{ display: "inline-flex", mt: 2 }}>
        <TextField
          placeholder="Input your email"
          variant="outlined"
          size="small"
          sx={{ bgcolor: "white", borderRadius: 1 }}
        />
        <Button variant="contained" color="error" sx={{ ml: 2 }}>
          Subscribe
        </Button>
      </Box>
    </Box>
    <Grid container spacing={4} justifyContent="center">
      {["Pricing", "About us", "Features", "Help Center", "Contact us", "FAQs", "Careers"].map((item) => (
        <Grid item key={item}>
          <Typography>{item}</Typography>
        </Grid>
      ))}
    </Grid>
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="body2">© 2024 Brand, Inc. - Privacy • Terms • Sitemap</Typography>
    </Box>
  </Box>
);

export default Footer;
