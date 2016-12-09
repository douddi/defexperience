$('.online-button').click(function () {
  $('.online-button').addClass('to-opacity-0');
  $('.offline-button').addClass('to-opacity-0');
  $('body').addClass('to-overflow-auto');

  $('.sun-popup').addClass('opened-popup');
  $('.online-popup').addClass('to-opacity-1');
});
