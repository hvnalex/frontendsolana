import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import SignIn from "./signin";
import SignUp from "./signup";
import HomePage from "./homepage";
import VideoPlayer from "./components/VideoPlayer";
import AudioPlayer from "./components/ExploreMusic";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/VideoPlayer" element={<VideoPlayer />} /> 
        <Route path="/ExploreMusic" element={<ExploreMusic />} /> 
      </Routes>
    </Router>
  );
}

export default App;
