import { Resp } from '../modules/dev/_helpers';

if (Resp.isMobile) initTabs();

function initTabs() {
  const $tabs = $('.js-tabs');
  $tabs.each(function () {
    const $this = $(this);
    const $tabsNav = $this.find('.js-tabs-nav');
    const $tabsContent = $this.find('.js-tabs-item');

    $tabsNav.on('click', function(ev) {
      ev.preventDefault();
      $tabsNav.removeClass('is-active').eq($(this).index()).addClass('is-active');
      $tabsContent.hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('is-active');

    $tabsNav.first().trigger('click');
  });
}