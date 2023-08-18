/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const introSlider = document.querySelector('.intro__swiper');
const programsSlider = document.querySelector('.programs__slider');
const newsSlider = document.querySelector('.news__swiper');

function swiperIntroInit() {
  if (introSlider) {
    const swiper = new Swiper(introSlider, {
      initialSlide: 2,
      slidesPerView: 1,
      cssMode: true,
      direction: 'horizontal',
      loop: true,
      // autoplay: {
      //   delay: 3000,
      // },

      pagination: {
        el: '.intro__slide-pagination',
        clickable: true,
      },
    });
  }
}

function swiperProgramsInit() {
  if (programsSlider) {
    const swiper = new Swiper(programsSlider, {
      slidesPerView: 3,
      cssMode: true,
      direction: 'horizontal',
      loop: false,

      breakpoints: {
        // when window width is >= 1200px
        1200: {
          slidesPerView: 3,
          spaceBetween: 32,
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
          },
        },
        // when window width is >= 768px
        768: {
          scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
          },
          slidesPerView: 'auto',
          spaceBetween: 30,
          initialSlide: 0,
        },
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          initialSlide: 0,
        },
      },

      navigation: {
        nextEl: '.programs__button--next',
        prevEl: '.programs__button--prev',
      },
    });
  }
}

function swiperNewsInit() {
  if (newsSlider) {
    const swiper = new Swiper(newsSlider, {
      direction: 'horizontal',
      loop: false,

      breakpoints: {
        // when window width is >= 1200px
        1200: {
          initialSlide: 0,
          slidesPerView: 'auto',
          spaceBetween: 32,
        },
        // when window width is >= 768px
        768: {
          grid: {
            rows: 2,
          },
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
          initialSlide: 0,
        },
      },

      pagination: {
        el: '.news__slider-pagination',
        clickable: true,
        renderBullet(index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },

      navigation: {
        nextEl: '.news__slider-button--next',
        prevEl: '.news__slider-button--prev',
      },
    });
  }
}

export {swiperIntroInit, swiperProgramsInit, swiperNewsInit};
