import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./dashboard.css";

const API_URL = "https://api.deezer.com/chart/0/tracks?limit=4";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://cors-anywhere.herokuapp.com/${API_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching songs:", error);
        setLoading(false);
      });
  }, []);

  const featuredSong = location.state?.featuredSong || songs[0];

  const handleSongClick = (song) => {
    if (song?.album?.cover_medium) {
      navigate("/music-landing", {
        state: {
          title: song.title,
          artist: song.artist.name,
          image: song.album.cover_medium,
        },
      });
    } else {
      console.error("Song album or cover_medium is missing:", song);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      className="dashboard-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="hero-title">Welcome to Your Music Dashboard!</h1>
        <p className="hero-description">
          Discover trending tracks, explore new artists, and enjoy your favorite music.
        </p>
        <motion.button
          className="cta-btn"
          onClick={() => navigate("/explore")}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Explore Music
        </motion.button>
      </motion.section>

      {/* Featured Song Section */}
      <motion.section
        className="featured"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {featuredSong?.album?.cover_medium ? (
          <div className="featured-song" onClick={() => handleSongClick(featuredSong)}>
            <img src={featuredSong.album.cover_medium} alt="Featured Song" />
            <div className="song-info">
              <h3>{featuredSong.title}</h3>
              <p>{featuredSong.artist.name}</p>
            </div>
          </div>
        ) : (
          <div>No Featured Song Available</div>
        )}
      </motion.section>

      {/* Popular Songs Section */}
      <section className="popular">
        <h3>Most Popular</h3>
        <motion.div className="popular-grid">
          {songs.map((song) => (
            <motion.div
              key={song.id}
              className="popular-card"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => handleSongClick(song)}
            >
              {song.album?.cover_medium ? (
                <>
                  <img src={song.album.cover_medium} alt={song.title} />
                  <p>{song.title.substring(0, 12)}...</p>
                  <small>{song.artist.name}</small>
                </>
              ) : (
                <div>No Image Available</div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Home Button */}
      <motion.button
        className="home-btn"
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        Return to Homepage
      </motion.button>
    </motion.div>
  );
};

export default Dashboard;
