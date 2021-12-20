

// Already Added for Fixed Header and Scroll



$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("fixed");
  }
  else{
    $('header').removeClass("fixed");
  }
});






$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}) 
});