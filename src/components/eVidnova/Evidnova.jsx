import React from 'react';
import e_widnova from '../images/evidnovlennya1.png';
import css from './Evidnova.module.css';

const Evidnova = () => {
  return (
    <div>
      <img
        className={css.e_vidnovlennya}
        src={e_widnova}
        alt="e_vidnovlennya"
      />
    </div>
  );
};

export default Evidnova;
