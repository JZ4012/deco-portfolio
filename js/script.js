//Fade animation for the arrow.
$(window).scroll(function(){
    $(".scrollIcon").css("opacity", 1.5 - $(window).scrollTop() / 500);
  });

//scrolls to a select element on the page.
function scrollToSection(id) {
  $('html, body').animate({scrollTop: $("#"+id).offset().top}, 500);
}

//decides if the back to top button appears.
function scrollfunction() {
    if (document.documentElement.scrollTop > 360) {
        document.getElementById("bttb").style.opacity = "1";
    } else {
        document.getElementById("bttb").style.opacity = "0";
    }
}
