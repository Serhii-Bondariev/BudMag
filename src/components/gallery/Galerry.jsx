import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Динамічний імпорт всіх зображень з папки
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context('../images/photo', false, /\.(png|jpe?g|svg)$/)
);

const Galerry = () => {
  return (
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
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Galerry;
