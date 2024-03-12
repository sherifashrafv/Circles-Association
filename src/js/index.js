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
  // faqs
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");
    const num = item.querySelector(".accordion-num"); // Select the accordion-num element

    header.addEventListener("click", () => {
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".accordion-content").style.height = 0;
          otherItem
            .querySelector(".accordion-header")
            .classList.remove("active");
          otherItem.querySelector(".accordion-num").classList.remove("active"); // Remove active class from other accordion-num elements
        }
      });

      const isActive = item.classList.contains("active");
      if (!isActive) {
        item.classList.add("active");
        header.classList.add("active");
        content.style.height = `${content.scrollHeight}px`;
        num.classList.add("active"); // Add active class to accordion-num element
      } else {
        item.classList.remove("active");
        header.classList.remove("active");
        content.style.height = 0;
        num.classList.remove("active"); // Remove active class from accordion-num element
      }
    });
  });
});
