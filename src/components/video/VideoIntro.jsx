import React from 'react';
import css from './VideoIntro.module.css';

function VideoIntro() {
  return (
    <div className={css.videoContainer}>
      <video
        // src="/src/assets/intro.mp4"
        type="video/mp4"
        className={css.video}
        autoPlay
        loop
        muted
        playsInline
        width="100%"
        height="auto"
        controls
      >
        <source src="src/assets/video/intro.mp4" type="video/mp4" />
        Ваш браузер не підтримує відео тег.
      </video>
    </div>
  );
}

export default VideoIntro;
