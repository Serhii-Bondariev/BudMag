import React from 'react';
import { FaPhoneAlt, FaMailBulk } from 'react-icons/fa';
import css from './Footer.module.css';

const Footer = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+12345678901';
  };
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@company.com';
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div>
          <p>
            <strong>Наші контакти:</strong>
          </p>
          <div className={css.contactInfo}>
            <div className={css.phone} onClick={handlePhoneClick}>
              <FaPhoneAlt className={css.phoneIco} alt="phone" /> +38 (097)
              692-87-60
            </div>
            <div className={css.email} onClick={handleEmailClick}>
              <FaMailBulk className={css.emailIco} /> info@company.com
            </div>
          </div>
        </div>
        <div className={css.border}></div>
        <div>
          <p>
            <strong>Соціальні мережі:</strong>
          </p>
          <a href="https://www.facebook.com/">Facebook</a>
          <br />
          <a href="https://www.twitter.com/">Twitter</a>
          <br />
          <a href="https://www.linkedin.com/">LinkedIn</a>
          <br />
          <a href="https://www.instagram.com/">Instagram</a>
          <br />
          <a href="https://www.youtube.com/">YouTube</a>
        </div>
        <div>
          <p>
            <strong>Наш офіс:</strong>
          </p>
          <p>Пісківка, вул. Шкільна 1</p>
          <p>Пн-Пт: 9:00-18:00, Сб-Нд: 8:00-16:00</p>
        </div>
        <div className={css.border}></div>
        <div className={css.copyright}>
          <p>
            © 2024 BudMaister.Powered and designed by Serhii Bondariev. All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
