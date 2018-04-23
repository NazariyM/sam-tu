class ContactMap {
  constructor() {
    this.$block = $('.contact-map');

    if (this.$block.length) this.init();
  }

  init() {
    this.createMap();
  }

  createMap() {
    ymaps.ready(init);

    function init() {
      const contactMap = new ymaps.Map('contact-map', {
        center: [53.202714093637596, 50.148667339286796],
        zoom: 17,
        controls: []
      });
    }

  }

}

export const ContactMapAPI = new ContactMap();
