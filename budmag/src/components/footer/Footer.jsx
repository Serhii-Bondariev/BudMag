import React from 'react';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div>
          <p>
            <strong>Наші контакти:</strong>
          </p>
          <a href="mailto:info@company.com">info@company.com</a>
          <br />
          <a href="tel:+12345678901">+1 (234) 567-8901</a>
        </div>
        <div className={css.border}></div>
        <div>
          <p>
            <strong>Наші соціальні мережі:</strong>
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
          <p>123 Main St, Anytown USA</p>
          <p>Пн-Пт: 9:00-17:00, Сб-Нд: 9:00-14:00</p>
        </div>
        <div className={css.border}></div>
        <div className={css.copyright}>
          <p>© 2023 Company Name. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
