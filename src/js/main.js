import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import '@/styles/style.scss';


/*=============== BURGER ===============*/
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const headerMenu = document.querySelector(".header__menu");
if (iconMenu) {
  iconMenu.addEventListener("click", e => {
    headerMenu.classList.toggle("_active");
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  })
}

/*=============== REMOVE BURGER ===============*/
const menuLink = document.querySelectorAll('.menu__link')
const menuLogo = document.querySelectorAll('.menu__logo')
const menuAdress = document.querySelectorAll('.menu__info-adress')

const linkAction = () =>{
    menuBody.classList.remove('_active');
    iconMenu.classList.toggle('_active');
    headerMenu.classList.toggle("_active");
    document.body.classList.toggle('_lock')
}
menuLink.forEach(n => n.addEventListener('click', linkAction))
menuAdress.forEach(n => n.addEventListener('click', linkAction))
menuLogo.forEach(n => n.addEventListener('click', linkAction))

/*=============== REMOVE BURGER ESCAPE?? AND CLICK OUT ===============*/

headerMenu.addEventListener("click", (e) => {
  if (e.target === headerMenu) {
    // document.body.classList.remove("stop-scrolling");
    headerMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
    iconMenu.classList.remove('_active');
    document.body.classList.toggle('_lock')
  }
})
/*=============== TABS ===============*/
const tabs = document.querySelectorAll(".tabs__item");
const contents = document.querySelectorAll(".tabs__content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {

    tabs.forEach((tab) => tab.classList.remove("_active"))
    tab.classList.add("_active");

    contents.forEach(c => c.classList.remove("_active"));
    contents[index].classList.add("_active");
  });
});

tabs[0].click();

/*=============== ADVANTAGES SLIDER ===============*/
var swiperAdvantages = new Swiper(".advantages__swiper", {
  spaceBetween: 10,
  grabCursor: true,
  centerSlides: true,
  slidesPerView: 'auto',
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      spaceBetween: 40,
    },
    1000: {
      spaceBetween: 90,
    },
  }
});




/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header')
  const headerLogo = document.getElementById('header-logo')
  const menuIcon = document.getElementById('menu-icon')

  // const header = document.getElementById('header')
  if (this.scrollY >= 50) 
  {
    header.classList.add('scroll-header');
    headerLogo.classList.add('scroll-logo');
    menuIcon.classList.add('scroll-icon');

  } else {
    header.classList.remove('scroll-header');
    headerLogo.classList.remove('scroll-logo');
    menuIcon.classList.remove('scroll-icon');
  }
  // if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// ROOM SWIPER 
var swiperRoom = new Swiper(".room__swiper", {
  spaceBetween: 80,
  
  slidesPerView: 3,
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});



// const portfolioSlider = new Swiper('.portfolio-section__items', {
//   slidesPerView: 3,
//   spaceBetween: gap,
//   loop: true,
//   modules: [Navigation, Pagination],
//   navigation: {
//     nextEl: '.portfolio-section__next',
//     prevEl: '.portfolio-section__prev',
//   },
// }); 