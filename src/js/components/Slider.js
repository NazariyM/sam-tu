import { css } from '../modules/dev/_helpers';
import ScrollAnim from '../modules/dev/animation/scrollAnim';
import { TweenMax, TimelineMax } from 'gsap';
import $ from 'jquery';
import 'slick-carousel';

class Slider {

  constructor () {
    this.$slider = $('.slider');
    this.$mobSlider = $('.mob-slider');

    this.arrRight = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="22"
     viewBox="0 0 24 22">
    <defs>
        <path id="mwaba" d="M283.4 259l-2.48 2.4 5.75 5.84H273l.04 3.51h13.6l-5.68 5.88 2.39 2.37 9.65-10z"/>
    </defs>
    <g>
        <g transform="translate(-271 -258)">
            <use xlink:href="#mwaba"/>
        </g>
    </g>
</svg>`;

    this.arrLeft = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="22"
     viewBox="0 0 24 22">
    <defs>
        <path id="oqava" d="M34.6 259l2.48 2.4-5.75 5.84H45l-.04 3.51h-13.6l5.68 5.88-2.39 2.37L25 269z"/>
    </defs>
    <g>
        <g transform="translate(-23 -258)">
            <use xlink:href="#oqava"/>
        </g>
    </g>
</svg>`;

    this.init();
  }

  init () {
    this.createSlider();
    this.createMobileSlider();
  }

  createMobileSlider() {
    const defaultOptions = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: false,
      arrows: true,
      speed: 400,
      cssEase: 'cubic-bezier(0.74, 0.1, 0.32, 0.98)',
      useTransform: true,
      adaptiveHeight: true,
      mobileFirst: true,
      accessibility: false,
      rows: 0,
      prevArrow: `<button type="button" class="slider__btn slider__btn_prev">${this.arrLeft}</button>`,
      nextArrow: `<button type="button" class="slider__btn slider__btn_next">${this.arrRight}</button>`
    };

    this.$mobSlider.slick($.extend({}, defaultOptions, {
      responsive: [{
        breakpoint: 1023,
        settings: 'unslick'
      }]
    }));

  }

  createSlider () {
    const $screen = $('.screen');
    const $testimonialsSld = $('.testimonials__inner');

    const defaultOptions = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      arrows: true,
      speed: 600,
      cssEase: 'cubic-bezier(0.74, 0.1, 0.32, 0.98)',
      useTransform: true,
      adaptiveHeight: false,
      accessibility: false,
      swipe: true,
      rows: 0,
      prevArrow: `<button type="button" class="slider__btn slider__btn_prev">${this.arrLeft}</button>`,
      nextArrow: `<button type="button" class="slider__btn slider__btn_next">${this.arrRight}</button>`
    };

    $screen.slick($.extend({}, defaultOptions, {
      arrows: false,
      speed: 800,
      autoplay: true,
      fade: true,
      autoplaySpeed: 2500
    }));

    $testimonialsSld.slick($.extend({}, defaultOptions, {
      slidesToShow: 6,
      slidesToScroll: 1,
    }));
  }
}

export const sliderAPI = new Slider();
