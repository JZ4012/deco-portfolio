//Fade animation for the arrow.
$(window).scroll(function(){
    $(".scrollIcon").css("opacity", 1.5 - $(window).scrollTop() / 500);
  });

//animated scroll to top function.
function backToTop() {
    $("html, body").animate({scrollTop:0}, 'swing');
}
