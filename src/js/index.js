import '../scss/style.scss';
import showTextElements from './showText-Elements.mjs';
showTextElements();
import showElements from './showGrid-Elements.mjs';
showElements()
import showBurger from './showBurger-menu.mjs'; 
showBurger();

console.log('Works!')



// // burger-navigation
// const openButton = document.querySelector('.burger');
// const closeButton = document.querySelector('.burger_close');
// const sidebar = document.querySelector('.burger_navigation');
// let switcher = true;

// function openMenuButton() {
//   if (switcher) {
//     Object.assign(sidebar.style, {
//       display: 'block',
//       position: 'absolute',
//       top: '0'
//     })
//   } else {
//     sidebar.style.display = 'none'
//   }

//   switcher = !switcher
// };

// function closeMenuButton() {
//   sidebar.style.display = 'none'
//   switcher = !switcher
// };

// openButton.addEventListener('click', openMenuButton);
// closeButton.addEventListener('click', closeMenuButton);

// // Swyper
// const swiper = new Swiper('.swiper', {
//   direction: 'horizontal',
//   loop: true,

//   slidesPerView: 'auto',
//   spaceBetween: 16,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   },

//   breakpoints: {
//     780: {
//       toggle: false,
//       loop: false,
//       spaceBetween: 'auto',
//       slidesPerView: 'auto',
//       centeredSlides: false
//     }
//   }
// })
