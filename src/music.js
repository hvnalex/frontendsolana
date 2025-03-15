import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

const MusicLanding = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract song details from location state
  const { title, artist, image } = location.state || {};

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 100));
      }, 100); // Increment progress every 100ms
      return () => clearInterval(interval);
    } else {
      setProgress(0); // Reset progress if not playing
    }
  }, [isPlaying]);

  return (
    <div className="music-player">
      <div className="header">
        <div className="profile-pic"></div>
        <button className="spotify-btn">Open in Spotify</button>
      </div>

      <div className="player">
        <div className="circle">
          <img src={image} alt="Song Cover" className="song-cover" />
          <button className="play-btn" onClick={togglePlay}>
            {isPlaying ? "❚❚" : "▶"}
          </button>
        </div>

        <div className="song-info">
          <h3 className="song-title">{title}</h3>
          <p className="artist">{artist}</p>
        </div>

        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="controls">
          <button className="prev">⏮</button>
          <span className="time">2:34</span> {/* Dynamic time logic can be added here */}
          <button className="next">⏭</button>
        </div>
      </div>

      {/* Playlist Section */}
      <div className="playlist">
        <h3>Next up</h3>
        <ul id="playlist">
          {/* Example static list of next songs */}
          <li>Song 1 - Artist</li>
          <li>Song 2 - Artist</li>
          <li>Song 3 - Artist</li>
        </ul>
      </div>

      {/* Home Button */}
      <button className="home-btn" onClick={() => navigate("/")}>Return to Homepage</button>
    </div>
  );
};

export default MusicLanding;
