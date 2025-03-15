import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import MusicLanding from "./music";
import SignIn from "./signin";
import SignUp from "./signup";
import HomePage from "./homepage";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/music" element={<MusicLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
