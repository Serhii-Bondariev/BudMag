import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const handlePhoneClick = () => {
  window.location.href = 'tel:+12345678901';
};

const MainButton = () => {
  return (
    <div onClick={handlePhoneClick}>
      <FaPhoneAlt alt="phone" aria-label="Phone number" />{' '}
      <span>+38 (097) 692-87-60</span>
    </div>
  );
};

export default MainButton;
