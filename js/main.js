// Sticky nav
$(window).on('scroll',function(){
    if($(window).scrollTop() > 550){
        $('nav').addClass('sticky');
    }
    else{
        $('nav').removeClass('sticky');
    }
});


// mixitup
$(document).ready(function(){
    var mixer = mixitup('.containt',{
        animation: {
            duration: 500
        }
    });
});


// scroll top
$(window).scroll(function () {
    if ($(this).scrollTop() >400) {
        $('#scroll-top').fadeIn();
    } else {
        $('#scroll-top').fadeOut();
    }
});