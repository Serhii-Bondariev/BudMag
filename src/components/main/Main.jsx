import React from 'react';
import css from './Main.module.css';

const Main = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        {/* <img className={css.mainImg} src={mainImg} alt="random" /> */}

        <div className={css.text}>
          <p className={css.title}>
            <strong>
              БУДМАЙСТЕР - це ваш надійний партнер у сфері будівництва, ремонту
              та оздоблення.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
