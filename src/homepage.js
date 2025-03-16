import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function HomePage() {
  const navigate = useNavigate();
  const songs = [
    {
      title: "Boney Radio",
      artist: "Artist 1",
      cover: "https://example.com/song1.jpg",
    },
    {
      title: "Rap Soul",
      artist: "Artist 2",
      cover: "https://example.com/song2.jpg",
    },
    // Add more songs as needed
  ];

  const handleSongClick = (song) => {
    navigate("/dashboard", { state: { featuredSong: song } });
  };

  return (
    <div className="homepage-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Geezo</h1>
        <div className="nav-buttons">
          <button onClick={() => navigate("/signin")} className="nav-button">
            Sign In
          </button>
          <button onClick={() => navigate("/signup")} className="nav-button signup">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Discover the Sound of the Future</h2>
        <p>Stream music, explore new tracks, and dive into your favorite radio stations.</p>
        <button className="cta-button" onClick={() => navigate("/signin")}>Get Started</button>
      </section>

      {/* Trending Music Section */}
      <section className="trending">
        <h3>Trending Now</h3>
        <div className="music-grid">
          {songs.map((song, index) => (
            <div
              key={index}
              className="music-card"
              onClick={() => handleSongClick(song)}
            >
              <img src={song.cover} alt={song.title} />
              <p>{song.title}</p>
              <small>{song.artist}</small>
            </div>
          ))}
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="signup-section">
        <h3>Join the Experience</h3>
        <p>Sign up now and start streaming instantly.</p>
        <button onClick={() => navigate("/signup")} className="cta-button">
          Sign Up
        </button>
      </section>
    </div>
  );
}
