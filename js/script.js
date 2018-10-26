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
        document.getElementById("bttb").style.cursor = "pointer";
    } else {
        document.getElementById("bttb").style.opacity = "0";
        document.getElementById("bttb").style.cursor = "default";
    }
    if (document.documentElement.scrollTop > 1000) {
        document.getElementById("menuico").style.opacity = "1";
        document.getElementById("menuico").style.cursor = "pointer";
    } else {
        document.getElementById("menuico").style.opacity = "0";
        document.getElementById("menuico").style.cursor = "default";
    }
}
