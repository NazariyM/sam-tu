import { TweenMax } from 'gsap';
import { $header, css, Resp } from '../modules/dev/_helpers';

class Header {
  constructor() {
    this.$nav = $('.header__nav');
    this.$navBtn = $('.nav-btn');

    this.init();
  }

  init() {
    this.bindEvents();

  }

  bindEvents() {
    this.show();

    if (!Resp.isDesk) {
      this.toggleNav();
      this.toggleDropDown();
    }
  }

  show() {
    const $headerItem = $header.children();
    TweenMax.staggerTo($headerItem, .7, { y: 0, autoAlpha: 1, delay: .5 }, 0.3);
  }

  toggleNav() {
    const _this = this;
    this.$navBtn.on('click tap', function () {
      $(this).toggleClass(css.active);
      _this.$nav.slideToggle();
    });
  }

  toggleDropDown() {
    const $btn = this.$nav.find('.nav-dropdown-btn');

    $btn.on('click tap', function (e) {
      const $this = $(this);

      e.preventDefault();
      $this.next().slideToggle();
      $this.toggleClass(css.active);
      $this.parent().siblings().find('ul').slideUp();
      $this.parent().siblings().find('a').removeClass(css.active);
    });
  }

}

export const HeaderAPI = new Header();
