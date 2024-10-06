import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import css from './Galerry.module.css';

// Динамічний імпорт всіх зображень з папки
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context('../images/photo', false, /\.(png|jpe?g|svg)$/)
);

//https://epicentrk.ua/ua/shop/kley-dlya-plitki-baugut-klf-25-kg.html

const Galerry = () => {
  return (
    <div className={css.container}>
      <Swiper
        className={css.swiperBox}
        spaceBetween={12}
        slidesPerView={1}
        slidesPerGroup={2}
        centeredSlides={true}
        grabCursor={true}
        effect={'coverflow'}
        coverflowEffect={{
          scale: 0.6,
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
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
          1440: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className={css.SwipImage}
              onClick={() => window.open(image)}
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Galerry;
