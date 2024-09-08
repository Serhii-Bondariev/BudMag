import React from 'react';
import css from './PopularProduct.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import clue from '../../assets/popular/clue/112053_7.jpeg';
import Lantren from '../../assets/popular/lighter/7017213_1.webp';
import Paint from '../../assets/popular/paint/26697_6.webp';
import PowerStation from '../../assets/popular/power/6941133_6.webp';
import Uteplitel from '../../assets/popular/uteplitel/2916270_2.jpeg';

const products = [
  {
    src: clue,
    alt: 'Клей для плитки',
    label: 'Клей для плитки',
    price: '350 грн.',
  },
  {
    src: Lantren,
    alt: 'Ліхтар аккумуляторний ',
    label: 'Ліхтар аккумуляторний',
    price: '300 грн.',
  },
  {
    src: Paint,
    alt: 'Фарба акрилова',
    label: 'Фарба акрилова',
    price: '250 грн.',
  },
  {
    src: PowerStation,
    alt: 'Зарядна станція',
    label: 'Зарядна станція',
    price: '34000 грн.',
  },
  {
    src: Uteplitel,
    alt: 'Утеплювач',
    label: 'Утеплювач',
    price: '200 грн.',
  },
];

const PopularProduct = () => {
  return (
    <div>
      <h2 className={css.title}>Популярні продукти</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className={css.productCard}>
              <img
                src={product.src}
                alt={product.alt}
                className={css.productImage}
              />
              <p>{product.label}</p>
              <p>{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularProduct;
