import React from 'react';
import css from './Main.module.css';
import AboutUs from '../about/AboutUs';
import VideoIntro from 'components/video/VideoIntro';

const Main = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        {/* <img className={css.mainImg} src={mainImg} alt="random" /> */}

        <div className={css.text}>
          <h3 className={css.title}>
            <span className={css.titleSpan}>БУДМАЙСТЕР</span> <br /> ваш
            надійний партнер у сфері будівництва, ремонту та оздоблення.
          </h3>
          <div className={css.aboutUs}>
            <AboutUs />
            <VideoIntro />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
