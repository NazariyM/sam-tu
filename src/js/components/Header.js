import { TweenMax } from 'gsap';
import { $header, css, Resp } from '../modules/dev/_helpers';

class Header {
  constructor() {
    this.$nav = $('.header__nav');
    this.$menuBtn = $('.header__nav-icon');
    this.$navBtn = $('.nav-btn');

    this.init();
  }

  init() {
    this.bindEvents();

  }

  bindEvents() {
    this.show();
    this.toggleDetailedMenu();

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

  toggleDetailedMenu() {
    const _this = this;

    this.$menuBtn.on('click tap', function (e) {
      const $this = $(this);

      $this.parent().siblings().find('.header__nav-menu').hide();
      $this.parent().siblings().removeClass(css.active);
      $this.parent().addClass(css.active);
      $this.next('.header__nav-menu').show();
    });
  }

}

export const HeaderAPI = new Header();
