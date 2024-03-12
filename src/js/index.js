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

  // payments
  const cardType = document.querySelector("#card-type");
  const cardNumberInput = document.querySelector("#card-number-input");

  cardType.addEventListener("change", () => {
    if (cardType.value === "credit") {
      cardNumberInput.value = "0000 0000 0000 0000";
    } else if (cardType.value === "debit") {
      cardNumberInput.value = "0000 0000 0000 0000";
    } else if (cardType.value === "fawry") {
      cardNumberInput.value = "0000 0000 0000 0000";
    }
  });

  // drop zone upload
  //selecting all required elements
  const dropArea = document.querySelector(".drag-area"),
    dragText = dropArea.querySelector("header"),
    button = dropArea.querySelector(".upload-file"),
    input = dropArea.querySelector("input");
  let file; //this is a global variable and we'll use it inside multiple functions
  button.onclick = () => {
    input.click(); //if user click on the button then the input also clicked
  };
  input.addEventListener("change", function () {
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = this.files[0];
    dropArea.classList.add("active");
    showFile(); //calling function
  });
  //If user Drag File Over DropArea
  dropArea.addEventListener("dragover", (event) => {
    event.preventDefault(); //preventing from default behaviour
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
  });
  //If user leave dragged File from DropArea
  dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  });
  //If user drop File on DropArea
  dropArea.addEventListener("drop", (event) => {
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    showFile(); //calling function
  });
  function showFile() {
    let fileType = file.type; //getting selected file type
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
    if (validExtensions.includes(fileType)) {
      //if user selected file is an image file
      let fileReader = new FileReader(); //creating new FileReader object
      fileReader.onload = () => {
        let fileURL = fileReader.result; //passing user file source in fileURL variable
        let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src
        attribute;
        dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
      };
      fileReader.readAsDataURL(file);
    } else {
      alert("This is not an Image File!");
      dropArea.classList.remove("active");
      dragText.textContent = "Drag & Drop to Upload File";
    }
  }
});
