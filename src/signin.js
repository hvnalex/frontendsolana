import React, { useState } from "react";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import "./signin.css"

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    // Simulate authentication (Replace with actual API call)
    if (email === "test@example.com" && password === "password") {
      navigate("/dashboard"); // Redirect to Dashboard after successful sign-in
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
