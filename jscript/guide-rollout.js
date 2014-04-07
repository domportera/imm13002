jQuery(document).ready(function($){
  // Hide the answers using jQuery
  $('.hidden-text').hide();
  
  $('.icon-title').click( function() {

    
    $(this).next().animate({
      
      // The combo of height and opacity gives a nice open-and-fade effect
      height: 'toggle',
      opacity: 'toggle',
  
    });
  });
  
});
