import '../scss/style.scss';
//cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';

ps: console.log('Works!')

let elementsParent = document.querySelector('.mySwiper');
let textShow = document.getElementsByClassName('btn-show');
let textChanged = textShow.lastElementChild;
let iconChanged = textShow.firstElementChild;
let isHidden = false;


textShow.addEventListener('click', function () {
  if (isHidden) {
    // textChanged.textContent = 'Показать все';
    elementsParent.style.height = '170px'
    iconChanged.classList.add('icon-open')
    iconChanged.classList.remove('icon-hide')
  } else {
    // textChanged.textContent = 'Скрыть';
    elementsParent.style.height = 'auto'
    iconChanged.classList.add('icon-hide')
    iconChanged.classList.remove('icon-open')
  }
  isHidden = !isHidden
});

// burger-navigation
const openButton = document.querySelector('.burger');
const closeButton = document.querySelector('.burger_close');
const sidebar = document.querySelector('.burger_navigation');
let switcher = true;

function openMenuButton() {
  if (switcher) {
    Object.assign(sidebar.style, {
      display: 'block',
      position: 'absolute',
      top: '0'
    })
  } else {
    sidebar.style.display = 'none'
  }

  switcher = !switcher
};

function closeMenuButton() {
  sidebar.style.display = 'none'
  switcher = !switcher
};

openButton.addEventListener('click', openMenuButton);
closeButton.addEventListener('click', closeMenuButton);

// Swyper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {
    780: {
      toggle: false,
      loop: false,
      spaceBetween: 'auto',
      slidesPerView: 'auto',
      centeredSlides: false
    }
  }
})
