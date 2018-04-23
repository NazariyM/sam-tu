import { TimelineMax, TweenMax } from 'gsap';
import ScrollAnim from '../modules/dev/animation/scrollAnim';

class About {
  constructor () {
    this.$block = $('.about');
    this.$title = this.$block.find('.about__info-title');
    this.$itemCount = this.$block.find('.about__item-count');
    this.$itemText = this.$block.find('.about__item-text');
    this.$infoDescr = this.$block.find('.about__info-descr p');
    this.$infoBtn = this.$block.find('.about__info-btn');
    this.$evItems = this.$block.find('.about__events-inner').children();
    this.$evMask = this.$block.find('.about__events-mask');

    if (this.$block.length) this.init();
  }

  init() {
    this.scrollAnim();
  }

  scrollAnim() {
    const _this = this;

    new ScrollAnim({
      el: _this.$block[0],
      hook: .7,
      onEnter() {

        _this.anim();
        _this.animateNumbers();
      }
    });
  }

  anim() {
    const tl = new TimelineMax();

    tl
      .to(this.$title, .4, { x: 0, autoAlpha: 1 })
      .to(this.$itemCount, .7, { y: 0, autoAlpha: 1 }, 'together')
      .to(this.$itemText, .7, { y: 0, autoAlpha: 1 }, 'together')
      .staggerTo(this.$infoDescr, .3, { x: 0, autoAlpha: 1 }, .2, '-=.3')
      .to(this.$infoBtn, .3, { x: 0, autoAlpha: 1 }, '+=.2')
      .to(this.$evMask, .3, { y: 0, autoAlpha: 1 }, 'together')
      .staggerTo(this.$evItems, .3, { y: 0, autoAlpha: 1 }, .3, 'together');
  }

  animateNumbers() {
    const $elem = $('[data-anim-count]');

    $elem.each(function (index, item) {
      const $this = $(this);
      let number = parseInt($this.text());
      let counter = { var: 0 };

      TweenMax.to(counter, 3, {
        var: number,
        onUpdate: function () {
          $this.html(Math.ceil(counter.var));
        },
        ease: Circ.easeOut
      });
    });
  }
}

export default new About();
