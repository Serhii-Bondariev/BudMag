import React from 'react';
import ReactPlayer from 'react-player';
import css from './VideoIntro.module.css';

function VideoIntro() {
  return (
    <div className={css.videoContainer}>
      <ReactPlayer
        url="https://youtu.be/hups21yh5oE" // Переконайся, що шлях правильний
        className={css.video}
        playing
        loop
        muted
        width="100%"
        height="550px"
        controls
      />
    </div>
  );
}

export default VideoIntro;
