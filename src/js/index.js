$(document).ready(function () {
  const root = document.documentElement;
  const owl = $(".owl-carousel");
  const marqueeElementsDisplayed = parseInt(
    $(".marquee-content").css("--marquee-elements-displayed")
  );
  // for partnaers slide animation
  const marqueeContent = $("ul.marquee-content");
  root.style.setProperty(
    "--marquee-elements",
    marqueeContent.children().length
  );
  for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.append(marqueeContent.children().eq(i).clone(true));
  }

  // owl carousel sliders
  // constrollers
  //  next
  $("._next").click(function () {
    owl.trigger("next.owl.carousel");
  });
  //  prev
  $("._prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });
  // carousel
  $(".stg-1").owlCarousel({
    margin: 10,
    nav: false,
    dots: false,
    // animateIn: "linear",
    // animateOut: "linear",
    // center: true,
    autoplayTimeout: 1520,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  $(".stg-2").owlCarousel({
    margin: 10,
    nav: false,
    dots: false,
    autoplayTimeout: 1520,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
