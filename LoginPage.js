import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8082/api/auth/login", {
        email,
        password,
      });

      if (res.status === 200) {
        alert("Login successful");
        navigate("/quiz");
      }
    } catch (err) {
      console.error(err);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Access Account</h2>
      <p>Ready to test your knowledge?</p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="forgot-password">
          <Link to="/forgot-password" className="forgot-password-link">
            Forgot your password?
          </Link>
        </div>
        <button type="submit" className="login-button">
          LOG IN
        </button>
      </form>

      <hr />
      <p>Or</p>

      <button className="google-button" disabled>
        CONTINUE WITH GOOGLE
      </button>

      <p>
        Need to create an account?{" "}
        <span className="signup-link">Sign Up</span>
      </p>
    </div>
  );
};

export default LoginPage;
