class Popup {
  constructor () {
    this.$btn = $('.js-popup-btn');
    this.$el = $('.js-popup');

    if (this.$btn.length) this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {

    this.$btn.on('click tap', () => {
      $.fancybox.open(this.$el);
    });

  }
}

export default new Popup();
