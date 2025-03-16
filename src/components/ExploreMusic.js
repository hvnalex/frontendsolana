import React, { useState } from 'react';
import "./exploreMusic.css"

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src="/path/to/your-audio-file.mp3" />
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioPlayer;
