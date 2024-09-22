import React from 'react';
import { FaPhoneAlt, FaMailBulk } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';
import css from './Footer.module.css';

const Footer = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+12345678901';
  };
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@company.com';
  };

  const handleOpenMap = () => {
    window.open(
      'https://www.google.com/maps/dir/?api=1&destination=50.698461, 29.589413',
      '_blank'
    );
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div>
          <p className={css.workTime}>
            <strong>Наші контакти:</strong>
          </p>
          <div className={css.contactInfo}>
            <div className={css.phone} onClick={handlePhoneClick}>
              <FaPhoneAlt className={css.phoneIco} alt="phone" /> +38 (097)
              692-87-60
            </div>
            <div className={css.email} onClick={handleEmailClick}>
              <FaMailBulk className={css.emailIco} alt="email" /> info@shop.com
            </div>
          </div>
        </div>
        <div className={css.border}></div>
        <p className={css.workTime}>
          <strong>Соціальні мережі:</strong>
        </p>
        <div className={css.iconSoc}>
          <SocialIcon
            className={css.iconSoc}
            label="facebook"
            target="_blank"
            rel="noreferrer noopener"
            url="https://www.facebook.com"
          />

          <SocialIcon
            className={css.iconSoc}
            label="x"
            target="_blank"
            rel="noreferrer noopener"
            url="https://www.x.com"
          />

          <SocialIcon
            className={css.iconSoc}
            label="Telegram"
            target="_blank"
            rel="noreferrer noopener"
            url="https://web.telegram.org"
          />

          <SocialIcon
            className={css.iconSoc}
            label="Instagram"
            target="_blank"
            rel="noreferrer noopener"
            url="https://www.instagram.com"
          />

          <SocialIcon
            className={css.iconSoc}
            label="youtube"
            target="_blank"
            url="https://www.youtube.com"
          />
        </div>
        <div className={css.border}></div>
        <div>
          <p className={css.workTime}>
            <strong>Наша адреса:</strong>
          </p>
          <p className={css.workDay}>Пісківка, вул. Шкільна 40a</p>
          <div>
            <button className={css.mapBtn} onClick={handleOpenMap}>
              показати на Google карті
            </button>
          </div>
          <p className={css.workTime}>
            <strong>Працюємо без вихідних</strong>
          </p>
          <p className={css.workDay}>Пн-Пт: 9:00-18:00, Сб-Нд: 8:00-16:00</p>
        </div>
        <div className={css.border}></div>
        <div className={css.copyright}>
          <p>
            © 2024 BudMaister.Powered and designed by{' '}
            <a
              href="https://github.com/Serhii-Bondariev"
              about="blank"
              target="_blank"
              rel="noreferrer noopener"
              className={css.copyrightLink}
              title="Serhii Bondariev by Trident Web Studio"
            >
              <span className={css.copyrightLinkSpan}>TRIDENT WEB STUDIO</span>{' '}
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
