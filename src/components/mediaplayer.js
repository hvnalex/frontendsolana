import React from 'react';
import AudioPlayer from './ExploreMusic';
import VideoPlayer from './VideoPlayer';
import playlist from './playlist'; // Importing the playlist

const MediaLibrary = () => {
  return (
    <div>
      {playlist.map((file, index) => {
        if (file.type === 'audio') {
          return (
            <div key={index} className="audio-player">
              <h3>{file.title}</h3>
              <AudioPlayer src={file.src} />
            </div>
          );
        }
        if (file.type === 'video') {
          return (
            <div key={index} className="video-player">
              <h3>{file.title}</h3>
              <VideoPlayer src={file.src} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default MediaLibrary;
