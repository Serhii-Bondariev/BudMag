import React from 'react';

const handlePhoneClick = () => {
  window.location.href = 'tel:+12345678901';
};

const MainButton = () => {
  return (
    <div className={css.phone} onClick={handlePhoneClick}>
      <FaPhoneAlt
        className={css.phoneIco}
        alt="phone"
        aria-label="Phone number"
      />{' '}
      <span>+38 (097) 692-87-60</span>
    </div>
  );
};

export default MainButton;
