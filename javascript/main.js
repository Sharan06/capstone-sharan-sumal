$(document).ready(function() {

	$('#contact-form').on('submit', function(event) {
   event.preventDefault();
   if ( $('#message').val() == '' ) {
      alert('Please type a message.');
   } else {
      $('#contact-form').hide();
      $('.result').fadeIn( 1000 );
   }
	});

});

