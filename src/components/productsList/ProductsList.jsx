import React from 'react';
import css from './ProductsList.module.css';

import budmaterialy from '../../assets/budmaterialy.png';
import gipsokarton from '../../assets/gipsokarton.jpg';
import isolationMaterialy from '../../assets/isolationMaterialy.jpg';
import komposit from '../../assets/komposit.jpg';
import Kraski from '../../assets/Kraski.jpg';
import kriplennja from '../../assets/kriplennja.jpg';
import ListoviMaterialy from '../../assets/ListoviMaterialy.jpeg';
import metalocherepitca from '../../assets/metalocherepitca.jpg';
import metaloprokat from '../../assets/metaloprokat.jpeg';
import polykarbonat from '../../assets/polykarbonat.jpg';
import setka from '../../assets/setka.jpg';
import sukhiSumishi from '../../assets/sukhiSumishi.jpg';
import uteplitel from '../../assets/uteplitel.jpeg';
import vodostochnaSistema from '../../assets/vodostochnaSistema.png';
import zabor from '../../assets/zabor.jpeg';
import santehnika from '../../assets/santehnika.jpg';
import opalennja from '../../assets/opalennja.png';
import instrument from '../../assets/instrument.jpg';
import electrica from '../../assets/electrica.jpg';
import keramo from '../../assets/keramo.jpeg';
import cement from '../../assets/Cement.jpg';
import pinoblok from '../../assets/pinoblok.webp';

const products = [
  { src: budmaterialy, alt: 'Будматеріали', label: 'Будматеріали' },
  {
    src: keramo,
    alt: 'Керамічна плитка та керамограніт',
    label: 'Керамічна плитка та керамограніт',
  },
  { src: electrica, alt: 'Єлектрика', label: 'Єлектрика' },
  { src: gipsokarton, alt: 'Гіпсокартон', label: 'Гіпсокартон' },
  {
    src: isolationMaterialy,
    alt: 'Ізоляційні матеріали',
    label: 'Ізоляційні матеріали',
  },
  { src: komposit, alt: 'Композитні матеріали', label: 'Композитні матеріали' },
  { src: Kraski, alt: 'Фарби, лаки, емалі', label: 'Фарби, лаки, емалі' },
  { src: kriplennja, alt: 'Кріплення', label: 'Кріплення' },
  {
    src: ListoviMaterialy,
    alt: 'Листові матеріали',
    label: 'Листові матеріали',
  },
  { src: metalocherepitca, alt: 'Металочерепиця', label: 'Металочерепиця' },
  { src: metaloprokat, alt: 'Металопрокат', label: 'Металопрокат' },
  { src: polykarbonat, alt: 'Полікарбонат', label: 'Полікарбонат' },
  { src: setka, alt: 'Сітки', label: 'Сітки' },
  { src: sukhiSumishi, alt: 'Сухі суміші', label: 'Сухі суміші' },
  { src: uteplitel, alt: 'Утеплювачі', label: 'Утеплювачі' },
  {
    src: vodostochnaSistema,
    alt: 'Водосточні системи',
    label: 'Водосточні системи',
  },
  {
    src: zabor,
    alt: 'Паркани та комплектуючі',
    label: 'Паркани та комплектуючі',
  },
  {
    src: opalennja,
    alt: 'Опалення та водопостачання',
    label: 'Опалення та водопостачання',
  },
  {
    src: santehnika,
    alt: 'Сантехніка',
    label: 'Сантехніка',
  },
  {
    src: instrument,
    alt: 'Інструменти',
    label: 'Інструменти',
  },
  {
    src: pinoblok,
    alt: 'Піноблоки',
    label: 'Газоблоки',
  },
  {
    src: cement,
    alt: 'Цемент',
    label: 'Цемент',
  },
];

const ProductsList = () => {
  return (
    <div className={css.wrapper}>
      {/* <h2 className={css.title}>Ми пропонуємо широкий вибір будматеріалів </h2> */}
      <div className={css.productsList}>
        {products.map((product, index) => (
          <div key={index} className={css.productCard}>
            <img
              src={product.src}
              alt={product.alt}
              className={css.productImage}
            />
            <p className={css.productLabel}>{product.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
