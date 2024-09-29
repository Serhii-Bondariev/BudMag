import React from 'react';
import { FaPhoneAlt, FaMailBulk } from 'react-icons/fa';
import css from './Header.module.css';
// import logo from '../../components/images/unnamed.jpg';

const Header = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+380976928760';
  };
  const handleEmailClick = () => {
    window.location.href = 'mailto:budmaister.piskivka@gmail.com';
  };

  return (
    <div className={css.container}>
      <div className={css.header}>
        <div className={css.logoInfo}>
          {/* <img className={css.logo} src={logo} alt="logo" /> */}
          <div className={css.logoDivision}>
            <h1 className={css.logoTitle}>БУДМАЙСТЕР</h1>
            <p className={css.logoSubtitle}>Будівельні матеріали</p>
          </div>
        </div>
        <div className={css.border}></div>

        <div className={css.border}></div>
        {/* <div className={css.addressInfo}>
          <p>Наша адреса: Пісківка, вул. Шкільна 40a</p>
          <p>Графік роботи: Пн-Сб: 8:00-18:00, Нд: 8:00-16:00</p>
        </div> */}
        <div className={css.contactInfo}>
          <div className={css.email} onClick={handleEmailClick}>
            <FaMailBulk
              className={css.emailIco}
              alt="email"
              aria-label="Email"
            />{' '}
            E-MAIL
          </div>
          <div className={css.phone} onClick={handlePhoneClick}>
            <FaPhoneAlt
              className={css.phoneIco}
              alt="phone"
              aria-label="Phone number"
            />{' '}
            <span>+38 (097) 692-87-60</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
