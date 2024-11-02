import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import css from './PopularProduct.module.css';
import Cement from '../../assets/popular/cement/Cement.png';
import Gazoblok from '../../assets/popular/gazblok/pinoblok.png';
import Paint from '../../assets/popular/paint/farba.png';
import sumish from '../../assets/popular/power/sumish.png';
import Uteplitel from '../../assets/popular/uteplitel/2916270_2.png';

const products = [
  {
    src: Cement,
    alt: 'Цемент',
    label: 'Цемент швидкий Cemark ПЦ-II/АШ 500 25кг',
    price: '165 ₴.',
    backgroundColorClass: 'bgGradientCement',
  },
  {
    src: Gazoblok,
    alt: 'Блок газобетонний',
    label: 'Блок газобетонний Стоунлайт 600*300*200 мм D500',
    price: '129 ₴.',
    backgroundColorClass: 'bgGradientGazblok',
  },
  {
    src: Paint,
    alt: 'Фарба гумова',
    label:
      'Зробіть ваш простір вираженим та унікальним із нашою лінійкою декоративних дисперсійних матеріалів Deco Line',
    price: '1077 ₴.',
    backgroundColorClass: 'bgGradientPaint',
  },
  {
    src: sumish,
    alt: 'Еластична суміш для заповнення міжплиточних швів',
    label:
      'Ваш дизайн заслуговує на краще. Виберіть еластичну затирку F-14 та надайте своїм ідеям вільність та стійкість!',
    price: '299.20 ₴/шт.',
    backgroundColorClass: 'bgGradientSumish',
  },
  {
    src: Uteplitel,
    alt: 'Утеплювач',
    label: 'Базальтова вата BauGut Universell 30 100 мм 2,88 кв.м',
    price: '370.94 ₴/упак.',
    backgroundColorClass: 'bgGradientUteplitel',
  },
];

const PopularProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+380976928760';
  };

  return (
    <section className={css.container}>
      <Slider {...settings} className={css.slider}>
        {products.map((product, index) => (
          <div
            key={index}
            className={`${css.slide} ${css.slideWithGradient} ${
              css[product.backgroundColorClass]
            }`}
          >
            <h2 className={css.title}>Популярні товари</h2>
            <div className={css.productCardDesctop}>
              <div className={css.productImageWrapper}>
                <img
                  src={product.src}
                  alt={product.alt}
                  className={css.productImage}
                  loading="lazy"
                />
              </div>
              <div className={css.productInfoDesktop}>
                <p className={css.productLabel}>{product.label}</p>
                {/* <p className={css.productPrice}>{product.price}</p> */}
                <button
                  onClick={handlePhoneClick}
                  className={css.productButton}
                >
                  Зателефонувати менеджеру
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

// Кастомні стрілки для навігації
const NextArrow = ({ onClick }) => (
  <div className={`${css.arrow} ${css.nextArrow}`} onClick={onClick}>
    &gt;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className={`${css.arrow} ${css.prevArrow}`} onClick={onClick}>
    &lt;
  </div>
);

export default PopularProduct;
