
$(document).ready(function(){
  $( "a" ).click(function() {
    const href = $(this).attr('href');
    if (href.charAt(0) !== '#') return;
    // $("html, body").animate({ scrollTop: $(href).offset().top }, 100);
  });

  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({triggerElement: "#hiddenGems"})
    .setClassToggle("#work-link", "selected-hiddenGems") // add class toggle
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#respira"})
    .setClassToggle("#work-link", "selected-respira") // add class toggle
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#womenInTech"})
    .setClassToggle("#work-link", "selected-womenInTech") // add class toggle
    .addTo(controller);
});


//Navegación de los proyectos con scroll
$(window).scroll(function() {
  var position = $(this).scrollTop();
  if (position > 125) {
   $("#navigation").addClass("selected");
  } else {
    $("#navigation").removeClass("selected");
  }
  $('.seccion-proyecto').each(function() {
    var target = $(this).offset().top - 250;
    var id = $(this).attr('id');

    if (position >= target) {
      $('#navigation > ul > li').removeClass('active');
      $('#navigation > ul > li').removeClass('border-nav');
      $('#navigation > ul > li[href="#' + id + '"]').addClass('active');
      $('#navigation > ul > li[href="#' + id + '"]').addClass('border-nav');
    }
  });
});

$(document).ready(function () {
  $("#hamburger-menu").on('click', function () {
    $(this).toggleClass('is-active')
  })
})

$("#navigation #navigationToggle").on("click", function () {
  $("#navigation").toggleClass("visible");
})

