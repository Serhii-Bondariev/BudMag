import React from 'react';
import css from './PopularProduct.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
  Keyboard,
  EffectCoverflow,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Cement from '../../assets/popular/cement/Cement.jpg';
import Gazoblok from '../../assets/popular/gazblok/pinoblok.webp';
import Paint from '../../assets/popular/paint/farbaGumova.jpg';
import PowerStation from '../../assets/popular/power/Sumish.png';
import Uteplitel from '../../assets/popular/uteplitel/2916270_2.jpeg';

const products = [
  {
    src: Cement,
    alt: 'Цемент',
    label: 'Цемент швидкий Cemark ПЦ-II/АШ 500 25кг',
    price: '165 ₴.',
  },
  {
    src: Gazoblok,
    alt: 'Блок газобетонний ',
    label: 'Блок газобетонний Стоунлайт 600*300*200 мм D500',
    price: '129 ₴.',
  },
  {
    src: Paint,
    alt: 'Фарба гумова ',
    label: 'Фарба гумова FARBEX Універсальна (в ассортименті), 6 кг',
    price: '1077 ₴.',
  },
  {
    src: PowerStation,
    alt: 'Зарядна станція',
    label:
      'Суміш швидка самовирівнювальна для підлоги (2-80 мм) 414 ТМ "Крайзель" (KRЕISEL) 25кг',
    price: '299.20 ₴/шт.',
  },
  {
    src: Uteplitel,
    alt: 'Утеплювач',
    label: 'Базальтова вата BauGut Universell 30 100 мм 2,88 кв.м',
    price: '370.94 ₴/упак.',
  },
];

const PopularProduct = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+380976928760';
  };
  return (
    <div className={css.container}>
      <h2 className={css.title}>Хіти продажу</h2>
      <Swiper
        className={css.swiperBox}
        spaceBetween={10}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[
          Navigation,
          EffectCoverflow,
          Pagination,
          Autoplay,
          Mousewheel,
          Keyboard,
        ]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className={css.productCard}>
              {/* <h3>{product.label}</h3> */}
              <div>
                <img
                  src={product.src}
                  alt={product.alt}
                  className={css.productImage}
                />
              </div>
              <p className={css.productLabel}>{product.label}</p>
              <p className={css.productPrice}>{product.price}</p>
              <button onClick={handlePhoneClick} className={css.productButton}>
                Замовити
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularProduct;
