/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const introSlider = document.querySelector('.intro__swiper');

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

export {swiperIntroInit};
