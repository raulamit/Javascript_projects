$(document).ready(function() {
	
	//Calculate the height of <header>
    var aboveHeight = $('header').outerHeight();
	console.log(aboveHeight);
    $(window).scroll(function(){
		
        if ($(window).scrollTop() > aboveHeight){
			
//fixed class to the nav or sub nav
			$('nav').addClass('fixed').css('top','40px').next().css('padding-top','60px');
        } else {
		//  scroll up or less than aboveHeight remove the "fixed" class, and the padding-top
            $('nav').removeClass('fixed').next().css('padding-top','0');
        }
    });
});
