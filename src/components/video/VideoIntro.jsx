import React from 'react';

function VideoIntro() {
  return (
    <div className="video-container">
      <video width="100%" height="auto" controls>
        <source src="../../assets/video/intro.mp4" type="video/mp4" />
        Ваш браузер не підтримує відео тег.
      </video>
    </div>
  );
}

export default VideoIntro;
