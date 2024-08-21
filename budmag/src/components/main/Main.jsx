import React from 'react';
import css from './Main.module.css';

const Main = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        {/* <img className={css.mainImg} src={mainImg} alt="random" /> */}
      </div>
      <div className={css.text}>
        <p className={css.title}>
          <strong>
            БУДМАЙСТЕР - це ваш надійний партнер у сфері будівництва, ремонту та
            оздоблення.
          </strong>
          {/* <br /> Ми пропонуємо широкий асортимент якісних будівельних
          матеріалів, інструментів та аксесуарів для будь-яких будівельних
          потреб.
          <br />
          <strong>Що ми пропонуємо: </strong> Широкий асортимент: У нашому
          каталозі ви знайдете все необхідне для будівництва та ремонту - від
          цегли, цементу та утеплювачів до оздоблювальних матеріалів, сантехніки
          та електрики.
          <br />
          <strong> Якісна продукція:</strong> Ми співпрацюємо лише з
          перевіреними виробниками та постачальниками, що гарантує високу якість
          кожного товару.
          <br />
          <strong>Конкурентні ціни: </strong> Ми пропонуємо вигідні ціни на всі
          товари, регулярні акції та знижки, що робить покупки у нас ще більш
          вигідними. <br />
          <strong>Зручний сервіс: </strong> Простий та інтуїтивно зрозумілий
          інтерфейс нашого сайту дозволяє легко знайти потрібні товари, оформити
          замовлення та оплатити його онлайн.
          <br />
          <strong>Швидка доставка: </strong> Ми організовуємо оперативну
          доставку по всій країні, забезпечуючи швидке та безпечне перевезення
          ваших замовлень.
          <br />
          <strong>Професійна консультація: </strong>Професійна консультація:
          Наші спеціалісти завжди готові надати кваліфіковану консультацію,
          допомогти з вибором матеріалів та інструментів. <br />
          <strong>Чому обирають нас:</strong> Надійність та довіра: Ми цінуємо
          кожного клієнта і гарантуємо високий рівень обслуговування.
          <br /> <strong> Зручність покупок:</strong> Замовляйте будівельні
          матеріали, не виходячи з дому, та отримуйте все необхідне в найкоротші
          терміни.
          <br /> <strong>Актуальний асортимент: </strong>Актуальний асортимент:
          Постійне оновлення товарів та широкий вибір продукції задовольнять
          потреби як професіоналів, так і аматорів. Ми прагнемо зробити процес
          покупки будівельних матеріалів максимально простим та приємним для
          вас.
          <br />
          <strong>Дякуємо, що обираєте наш інтернет-магазин! </strong> */}
        </p>
      </div>
    </div>
  );
};

export default Main;
