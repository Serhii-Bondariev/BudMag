// import React, { useState } from 'react';
// import css from './AboutUs.module.css';
// import { FaPhoneAlt } from 'react-icons/fa';

// const AboutUs = () => {
//   // Створюємо стан для керування видимістю тексту
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handlePhoneClick = () => {
//     window.location.href = 'tel:+12345678901';
//   };

//   // Функція для зміни стану при натисканні на кнопку
//   const toggleText = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div>
//       <div className={css.aboutUsText}>
//         <div className={css.AbtUsbutton}>
//           <button className={css.aboutUsBtn} onClick={toggleText}>
//             Про нас
//           </button>
//         </div>
//         {isExpanded && (
//           <div className={css.aboutUs}>
//             <p className={`${css.title} ${isExpanded ? css.expanded : ''}`}>
//               <strong>Що ми пропонуємо: </strong> Широкий асортимент: У нашому
//               каталозі ви знайдете все необхідне для будівництва та ремонту -
//               від цегли, цементу та утеплювачів до оздоблювальних матеріалів,
//               сантехніки та електрики.{' '}
//             </p>
//             <p className={`${css.title} ${isExpanded ? css.expanded : ''}`}>
//               <strong> Якісна продукція:</strong> Ми співпрацюємо лише з
//               перевіреними виробниками та постачальниками, що гарантує високу
//               якість кожного товару.
//             </p>
//             <p className={`${css.title} ${isExpanded ? css.expanded : ''}`}>
//               <strong>Конкурентні ціни: </strong> Ми пропонуємо вигідні ціни на
//               всі товари, регулярні акції та знижки, що робить покупки у нас ще
//               більш вигідними.{' '}
//             </p>
//             <p className={`${css.title} ${isExpanded ? css.expanded : ''}`}>
//               <strong>Зручний сервіс: </strong> Простий та інтуїтивно зрозумілий
//               інтерфейс нашого сайту дозволяє легко знайти потрібні товари,
//               оформити замовлення та оплатити його онлайн.
//             </p>
//             <p className={`${css.title} ${isExpanded ? css.expanded : ''}`}>
//               <strong>Швидка доставка: </strong> Ми організовуємо оперативну
//               доставку по всій країні, забезпечуючи швидке та безпечне
//               перевезення ваших замовлень.
//             </p>
//             <p className={`${css.title} ${isExpanded ? css.expanded : ''}`}>
//               <strong>Професійна консультація: </strong>Професійна консультація:
//               Наші спеціалісти завжди готові надати кваліфіковану консультацію,
//               допомогти з вибором матеріалів та інструментів.{' '}
//             </p>
//             <p className={`${css.title} ${isExpanded ? css.expanded : ''}`}>
//               {' '}
//               <strong>Чому обирають нас:</strong> Надійність та довіра: Ми
//               цінуємо кожного клієнта і гарантуємо високий рівень
//               обслуговування.
//             </p>
//             <p className={`${css.title} ${isExpanded ? css.expanded : ''}`}>
//               <strong> Зручність покупок:</strong> Замовляйте будівельні
//               матеріали, не виходячи з дому, та отримуйте все необхідне в
//               найкоротші терміни.
//             </p>
//             <p className={`${css.title} ${isExpanded ? css.expanded : ''}`}>
//               <strong>Актуальний асортимент: </strong>Актуальний асортимент:
//               Постійне оновлення товарів та широкий вибір продукції задовольнять
//               потреби як професіоналів, так і аматорів. Ми прагнемо зробити
//               процес покупки будівельних матеріалів максимально простим та
//               приємним для вас.
//             </p>{' '}
//             <strong className={css.enDtitle}>
//               Дякуємо, що обираєте наш магазин!{' '}
//             </strong>
//             <div className={css.phone} onClick={handlePhoneClick}>
//               <FaPhoneAlt
//                 className={css.phoneIco}
//                 alt="phone"
//                 aria-label="Phone number"
//               />{' '}
//               <span>+38 (097) 692-87-60</span>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

import React, { useState } from 'react';
import css from './AboutUs.module.css';
import {
  FaPhoneAlt,
  FaHammer,
  FaTools,
  FaTruck,
  FaTag,
  FaCheckCircle,
} from 'react-icons/fa';

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePhoneClick = () => {
    window.location.href = 'tel:+12345678901';
  };

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className={css.aboutUsText}>
        <div className={css.AbtUsbutton}>
          <button className={css.aboutUsBtn} onClick={toggleText}>
            Про нас
          </button>
        </div>
        {isExpanded && (
          <div className={css.aboutUs}>
            <p className={`${css.title} ${isExpanded ? css.expanded : ''}`}>
              <strong>
                <FaHammer /> Що ми пропонуємо:
              </strong>{' '}
              Широкий асортимент: У нашому каталозі ви знайдете все необхідне
              для будівництва та ремонту - від цегли, цементу та утеплювачів до
              оздоблювальних матеріалів, сантехніки та електрики.
            </p>
            <p className={`${css.title} ${isExpanded ? css.expanded : ''}`}>
              <strong>
                <FaCheckCircle /> Якісна продукція:
              </strong>{' '}
              Ми співпрацюємо лише з перевіреними виробниками та
              постачальниками, що гарантує високу якість кожного товару.
            </p>
            <p className={`${css.title} ${isExpanded ? css.expanded : ''}`}>
              <strong>
                <FaTag /> Конкурентні ціни:
              </strong>{' '}
              Ми пропонуємо вигідні ціни на всі товари, регулярні акції та
              знижки, що робить покупки у нас ще більш вигідними.
            </p>
            <p className={`${css.title} ${isExpanded ? css.expanded : ''}`}>
              <strong>
                <FaTools /> Професійна консультація:
              </strong>{' '}
              Наші спеціалісти завжди готові надати кваліфіковану консультацію,
              допомогти з вибором матеріалів та інструментів.
            </p>
            <p className={`${css.title} ${isExpanded ? css.expanded : ''}`}>
              <strong>
                <FaTruck /> Швидка доставка:
              </strong>{' '}
              Ми організовуємо оперативну доставку по всій країні, забезпечуючи
              швидке та безпечне перевезення ваших замовлень.
            </p>
            <p className={`${css.title} ${isExpanded ? css.expanded : ''}`}>
              <strong>
                <FaCheckCircle /> Надійність та довіра:
              </strong>{' '}
              Ми цінуємо кожного клієнта і гарантуємо високий рівень
              обслуговування.
            </p>
            <p className={`${css.title} ${isExpanded ? css.expanded : ''}`}>
              <strong>
                <FaHammer /> Актуальний асортимент:
              </strong>{' '}
              Постійне оновлення товарів та широкий вибір продукції задовольнять
              потреби як професіоналів, так і аматорів. Ми прагнемо зробити
              процес покупки будівельних матеріалів максимально простим та
              приємним для вас.
            </p>
            <strong className={css.enDtitle}>
              Дякуємо, що обираєте наш магазин!
            </strong>
            <div className={css.phone} onClick={handlePhoneClick}>
              <FaPhoneAlt
                className={css.phoneIco}
                alt="phone"
                aria-label="Phone number"
              />{' '}
              <span>+38 (097) 692-87-60</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
