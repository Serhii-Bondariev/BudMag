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
        <img src="/src/component/images/telega.jpg" alt="logo" />
        <h1>БУДМАЙСТЕР</h1>
        <p>Магазин будівельних матеріалів</p>
        <div className={css.border}></div>
        <div className={css.contactInfo}>
          <div className={css.phone} onClick={handlePhoneClick}>
            <FaPhoneAlt className={css.phoneIco} alt="phone" />{' '}
            <span>+38 (097) 692-87-60</span>
          </div>
          <div className={css.email} onClick={handleEmailClick}>
            <FaMailBulk className={css.emailIco} /> info@company.com
          </div>
        </div>
        <div className={css.border}></div>
        <div>
          <p>Наша адреса: Пісківка, вул. Шкільна 40a</p>
          <p>Графік роботи: Пн-Сб: 8:00-18:00, Нд: 8:00-16:00</p>
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
