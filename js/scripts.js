$(document).ready(function() {
  // Fixed header script - checks position of scroll via window, and adjusts as needed
  $(function() {
    var headerTop = $(".navbar").offset().top + 100;

    $(window).scroll(function() {
      if ($(window).scrollTop() > headerTop) {
        $(".navbar")
          .addClass("scrolled")
          .removeClass("unscrolled");
      } else {
        $(".navbar")
          .removeClass("scrolled")
          .addClass("unscrolled");
      }
    });
  });
});
