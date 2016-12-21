$('.online-button').click(function () {
  $('.online-button').addClass('to-opacity-0');
  $('.offline-button').addClass('to-opacity-0');
  $('.footer').addClass('to-opacity-0');
  $('body').addClass('to-overflow-auto');

  $('.sun-popup').addClass('opened-popup');
  $('.online-popup').addClass('to-opacity-1');
});

$('.offline-button').click(function () {
  $('.online-button').addClass('to-opacity-0');
  $('.offline-button').addClass('to-opacity-0');
  $('.footer').addClass('to-opacity-0');
  $('body').addClass('to-overflow-auto');

  $('.sun-popup').addClass('opened-popup');
  $('.offline-popup').addClass('to-opacity-1');
});

$('#password-field').keypress(function(e) {
    if(e.which == 13) {
    	if($('#password-field').val() == 'douddi') {
        	$('.password-wrapper').addClass('to-display-none');
        	$('.private').addClass('to-opacity-1');
    	} else {
    		$('#password-field').val('');
    	}
    }
});
