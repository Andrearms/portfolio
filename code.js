function actualizarLinkSeleccionado() {
    if (true) return;
    $('a.scrollLink').each(function(idx, el) {
      const nLink = $(el);
      if (nLink.attr('href') && nLink.attr('href').match(/(#.*)/)[1] === window.location.hash) {
        return nLink.addClass('selected')
      }
      nLink.removeClass('selected')
    })
}

$(document).ready(function(){
  $( "a" ).click(function() {
    const href = $(this).attr('href');
    if (href.charAt(0) !== '#') return;
    $("html, body").animate({ scrollTop: $(href).offset().top }, 100);
  });
  window.onhashchange = actualizarLinkSeleccionado;
  actualizarLinkSeleccionado();

  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({triggerElement: "#netflix"})
    .setClassToggle("#work-link", "selected-netflix") // add class toggle
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#respira"})
    .setClassToggle("#work-link", "selected-respira") // add class toggle
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#womenInTech"})
    .setClassToggle("#work-link", "selected-womenInTech") // add class toggle
    .addTo(controller);
});
