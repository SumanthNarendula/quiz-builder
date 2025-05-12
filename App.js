// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import QuizTypesPage from "./pages/QuizTypesPage";
import MultipleChoiceBuilder from "./pages/MultipleChoiceBuilder";
import TakeTestPage from "./pages/TakeTestPage";
import TakeQuiz from "./components/TakeQuiz";
import ForgotPasswordPage from "./pages/ForgotPasswordPage"; // ✅ Import added
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="overlay">
              <div className="main-content">
                <Navbar />
                <HeroSection />
                <Features />
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/quiz" element={<QuizTypesPage />} />
        <Route path="/quiz/multiple-choice" element={<MultipleChoiceBuilder />} />
        <Route path="/take-test" element={<TakeTestPage />} />
        <Route path="/take-quiz" element={<TakeQuiz />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* ✅ New route */}
      </Routes>
    </Router>
  );
}

export default App;
