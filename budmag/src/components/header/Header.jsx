import React from 'react';
import { FaPhoneAlt, FaMailBulk } from 'react-icons/fa';
import css from './Header.module.css';

const Header = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+12345678901';
  };
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@company.com';
  };

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1>БУДМАЙСТЕР</h1>
        <p>Магазин будівельних матеріалів</p>
        <div className={css.border}></div>
        <div className={css.contactInfo}>
          <div className={css.phone} onClick={handlePhoneClick}>
            <FaPhoneAlt className={css.phoneIco} alt="phone" /> +1 (234)
            567-8901
          </div>
          <div className={css.email} onClick={handleEmailClick}>
            <FaMailBulk className={css.emailIco} /> info@company.com
          </div>
        </div>
        <div className={css.border}></div>
        <div>
          <p>Наша адреса: Пісківка, вул. Шкільна 1</p>
          <p>Графік роботи: Пн-Сб: 9:00-18:00, Нд: 8:00-16:00</p>
        </div>
        <div>
          <p>
            <strong>Працюємо за програмою "Є ВІДНОВЛЕННЯ"</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
