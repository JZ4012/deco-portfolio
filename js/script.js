//Fade animation for the arrow on the welcome screen.
$(window).scroll(function(){
    $(".scrollIcon").css("opacity", 1.5 - $(window).scrollTop() / 500);
  });

//scrolls to a select element on the page.
function scrollToSection(id) {
  $('html, body').animate({scrollTop: $("#"+id).offset().top}, 500);
}

//determines if the back to top button and menu button appears.
function scrollfunction() {
  if (document.documentElement.scrollTop > 360) {
    document.getElementById("bttb").style.opacity = "1";
    document.getElementById("menu").style.opacity = "1";
    document.getElementById("bttb").style.cursor = "pointer";
  } else {
    x = 1;
    document.getElementById("bttb").style.opacity = "0";
    document.getElementById("menu").style.opacity = "0";
    document.getElementById("menu").style.height = "2.5%";
    document.getElementById("bttb").style.cursor = "default";
  }
}

var x = 1;
function menuOpenClose() {
  if (x == 0){
      document.getElementById("menu").style.height = "2.5%";
      x = 1;
  }
  else if (x == 1){
    document.getElementById("menu").style.height = "27%";
    x = 0;
  }
}
