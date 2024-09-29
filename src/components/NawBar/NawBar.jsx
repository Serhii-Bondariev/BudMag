// import React, { useState } from 'react';
// import {
//   faHome,
//   faUser,
//   faClipboardList,
//   faBriefcase,
//   faAddressBook,
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import css from './NawBar.module.css';

// const NawBar = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const menuItems = [
//     { icon: faUser, text: 'About us' },
//     { icon: faClipboardList, text: 'Services' },
//     { icon: faHome, text: 'Home' },
//     { icon: faBriefcase, text: 'Portfolio' },
//     { icon: faAddressBook, text: 'Contact' },
//   ];

//   const handleClick = index => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className={css.wrapper}>
//       <div className={css.navigation}>
//         <ul>
//           {menuItems.map((item, index) => (
//             <li
//               key={index}
//               className={`${css.list} ${
//                 index === activeIndex ? css.active : ''
//               }`}
//               onClick={() => handleClick(index)}
//             >
//               <a href="#">
//                 <div className={css.icon}>
//                   <FontAwesomeIcon icon={item.icon} />
//                 </div>
//                 <span className={css.text}>{item.text}</span>
//               </a>
//             </li>
//           ))}
//           <div
//             className={css.circle}
//             style={{ transform: `translateX(${activeIndex * 60}px)` }}
//           ></div>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default NawBar;

import React, { useState } from 'react';
import {
  faHome,
  faUser,
  faClipboardList,
  faBriefcase,
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './NawBar.module.css';

const NawBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: faHome, text: 'Home' },
    { icon: faUser, text: 'About us' },
    { icon: faClipboardList, text: 'Services' },
    { icon: faBriefcase, text: 'Portfolio' },
    { icon: faAddressBook, text: 'Contact' },
  ];

  const handleClick = index => {
    setActiveIndex(index);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.navigation}>
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${css.list} ${
                index === activeIndex ? css.active : ''
              }`}
              onClick={() => handleClick(index)}
            >
              <button className={css.button}>
                <div className={css.icon}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <span className={css.text}>{item.text}</span>
              </button>
            </li>
          ))}
          <div
            className={css.circle}
            style={{ transform: `translateX(${activeIndex * 60}px)` }}
          ></div>
        </ul>
      </div>
    </div>
  );
};

export default NawBar;
