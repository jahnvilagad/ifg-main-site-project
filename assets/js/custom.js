(function () {
  window.onload = function () {
    var preloader = document.querySelector('.page-loading');
    preloader.classList.remove('active');
    setTimeout(function () {
      preloader.remove();
    }, 1000);
  };
})();


/*partners js*/
$(document).ready(function () {
  $(".SlickCarousel").slick({
    rtl: false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay: true,
    autoplaySpeed: 5000, //  Slide Delay
    speed: 800, // Transition Speed
    slidesToShow: 4, // Number Of Carousel
    slidesToScroll: 1, // Slide To Move 
    pauseOnHover: false,
    appendArrows: $(".partners-slider .Head .Arrows"), // Class For Arrows Buttons
    prevArrow: '<span class="Slick-Prev"></span>',
    nextArrow: '<span class="Slick-Next"></span>',
    easing: "linear",
    responsive: [
      {
        breakpoint: 801, settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 641, settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 481, settings: {
          slidesToShow: 2,
        }
      },
    ],
  })
});

$(document).ready(function () {
  $('.center').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    speed: 500,
    variableWidth: true,
  });
  $('.center').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log('beforeChange', currentSlide, nextSlide);
  });
  $('.center').on('afterChange', function (event, slick, currentSlide) {
    console.log('afterChange', currentSlide);
  });
});


/*partners say about us */
$(document).ready(function () {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    loop: true,
    arrows: true,
    dots: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    effect: 'slide',
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });

});

$(document).ready(function () {
  const swiper = new Swiper('.swiper-container-1', {
    slidesPerView: 1,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    dots: true,
    arrows: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    effect: 'slide',
  });

});


$(document).ready(function () {
  $('.university').slick({
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    centerPadding: '10px',
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
  });
});

$(document).ready(function () {
  $('.slider-accreditations').slick({
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    centerPadding: '10px',
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
  });
});


//ifg advantage slider
$(document).ready(function () {
  $('.testimonial-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    cssEase: 'linear',
    speed: 1000,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 1000,
    rows: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          dots: true,
          slidesToScroll: 1,
          rows: 1
        }
      }

    ]
  });

});


$(document).ready(function () {
  $(".testimonial-slider button").empty();
});



if (window.location.pathname == '/accommodation-in-abu-dhabi.html') {
  document.addEventListener('DOMContentLoaded', function () {
    // Initialize LightGallery
    const lightGalleryElement = document.getElementById('lightgallery');
    lightGallery(lightGalleryElement, {
      plugins: [lgThumbnail, lgZoom],
      thumbnail: true,
      animateThumb: false,
      showThumbByDefault: false
    });

    // Trigger LightGallery when the single image is clicked
    document.getElementById('triggerImage').addEventListener('click', function () {
      lightGalleryElement.querySelector('a').click();
    });
  });
}



if (('.page_hero-talents_items').length) {
  var myVar = setInterval(() => {
    let parent = document.querySelector('.page_hero-talents_items');
    if (parent) {
      let children = parent.children;
      let changeItem = children[0];
      parent.removeChild(changeItem);
      parent.appendChild(changeItem);
    }
  }, 4000);
}
if (('.page_hero-talents_items2').length) {
  var myVar = setInterval(() => {
    let parent = document.querySelector('.page_hero-talents_items2');
    if (parent) {
      let children = parent.children;
      let changeItem = children[0];
      parent.removeChild(changeItem);
      parent.appendChild(changeItem);
    }
  }, 4000);
}

$(document).ready(function () {
  const swiper = new Swiper('.swiper-container.two', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    effect: 'coverflow',
    loop: true,
    speed: 5000,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
      rotate: 0,
      stretch: 100,
      depth: 150,
      modifier: 1.5,
      slideShadows: false,
    }
  });
});

$(document).ready(function () {
  $('.sub-nav').on('click', function (e) {
    e.preventDefault();

    var $this = $(this);
    var target = $this.data('target');
    var $subContent = $('.sub-content', this);
    var dtitle = $subContent.data('title');
    var ddesc = $subContent.data('desc');
    var dcontent = $subContent.clone();

    $(target + " .offcanvas-title").html(dtitle);
    $(target + " .intro").html(ddesc);
    $(target + " .sub-menu-content").html(dcontent);

    var bsOffcanvas = new bootstrap.Offcanvas($(target)[0]);
    bsOffcanvas.show();
  });

  $(".btn-close").on('click', function () {
    var $this = $(this);
    var subnav = $this.closest('.offcanvas').attr('id');
    var bsOffcanvas = bootstrap.Offcanvas.getInstance($("#" + subnav)[0]);
    bsOffcanvas.hide();

    $("#" + subnav + " .offcanvas-title").html('');
    $("#" + subnav + " .intro").html('');
    $("#" + subnav + " .sub-menu-content").html('');
  });
});



$('.courses-scroll a[href*="#"]').on('click', function (e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: ($($(this).attr('href')).offset().top) - 100,
    },
    500,
    'linear'
  )
})

$('a[href*="#become-a-partner-center"]').on('click', function (e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: ($($(this).attr('href')).offset().top) - 100,
    },
    500,
    'linear'
  )
})


$(document).ready(function () {
  function AddReadMore() {
    //This limit you can set after how much characters you want to show Read More.
    var carLmt = 300;
    // Text to show when text is collapsed
    var readMoreTxt = " ...read more";
    // Text to show when text is expanded
    var readLessTxt = " read less";


    //Traverse all selectors with this class and manupulate HTML part to show Read More
    $(".add-read-more").each(function () {
      if ($(this).find(".first-section").length)
        return;

      var allstr = $(this).text();
      if (allstr.length > carLmt) {
        var firstSet = allstr.substring(0, carLmt);
        var secdHalf = allstr.substring(carLmt, allstr.length);
        var strtoadd = firstSet + "<span class='second-section'>" + secdHalf +
          "</span><span class='read-more text-primary'  title='Click to Show More'>" + readMoreTxt +
          "</span><span class='read-less text-primary' title='Click to Show Less'>" + readLessTxt + "</span>";
        $(this).html(strtoadd);
      }
    });

    //Read More and Read Less Click Event binding
    $(document).on("click", ".read-more,.read-less", function () {
      $(this).closest(".add-read-more").toggleClass("show-less-content show-more-content");
    });
  }

  AddReadMore();
});



document.addEventListener('DOMContentLoaded', function () {
  const openMainMenuBtns  = document.querySelectorAll('.navbar-toggler');
  const openNestedMenuBtns = document.querySelectorAll('.sub-nav');

  const closeMainMenuBtns  = document.querySelectorAll('.btn-close');
  const closeNestedMenuBtns  = document.querySelectorAll('.btn-close');

  const mainMenu = document.querySelector('.offcanvas-bottom');
  const nestedMenu = document.querySelector('.offcanvas-start');

  // Function to close all offcanvas menus
  function closeAllMenus() {
    mainMenu.classList.remove('show');
    nestedMenu.classList.remove('show');
  }

  // Open main menu (for each button that opens main menu)
  openMainMenuBtns.forEach(button => {
    button.addEventListener('click', function () {
      closeAllMenus();  // Close any open menu before opening the main menu
      mainMenu.classList.add('show');
    });
  });

  // Open nested menu (for each button that opens nested menu)
  openNestedMenuBtns.forEach(button => {
    button.addEventListener('click', function () {
      mainMenu.classList.remove('show'); // Close main menu
      nestedMenu.classList.add('show');  // Open nested menu
    });
  });

  // Close main menu (for each button that closes main menu)
  closeMainMenuBtns.forEach(button => {
    button.addEventListener('click', function () {
      mainMenu.classList.remove('show');
    });
  });

  // Close nested menu (for each button that closes nested menu)
  closeNestedMenuBtns.forEach(button => {
    button.addEventListener('click', function () {
      nestedMenu.classList.remove('show');
    });
  });

  // Close any menu when clicking outside
  window.addEventListener('click', function (event) {
    if (!mainMenu.contains(event.target) && !nestedMenu.contains(event.target) &&
        !event.target.classList.contains('navbar-toggler') && 
        !event.target.classList.contains('sub-nav')) {
      closeAllMenus(); // Close all if clicking outside
    }
  });
});





$(document).ready(function () {
  $(".pop-card-down-arrow").click(function () {
    $(".pop-card-wrapper").slideToggle("slow", function () {
      // Toggle the icon after the slideToggle animation completes
      let icon = $(".pop-card-down-arrow i");
      if ($(".pop-card-wrapper").is(":visible")) {
        icon.removeClass("bi bi-chevron-up").addClass("bi bi-chevron-down");
      } else {
        icon.removeClass("bi bi-chevron-down").addClass("bi bi-chevron-up");
      }
    });
  });
});






/*chat slider js start */


// For the first slider
if (document.querySelectorAll('.page_hero-talents_items').length) {
  var myVar1 = setInterval(() => {
    let parent = document.querySelector('.page_hero-talents_items');
    if (parent) {
      let children = parent.children;
      let changeItem = children[0];
      parent.removeChild(changeItem);
      parent.appendChild(changeItem);
    }
  }, 3000);
}

// For the second slider
if (document.querySelectorAll('.page_hero-talents_items2').length) {
  var myVar2 = setInterval(() => {
    let parent = document.querySelector('.page_hero-talents_items2');
    if (parent) {
      let children = parent.children;
      let changeItem = children[0];
      parent.removeChild(changeItem);
      parent.appendChild(changeItem);
    }
  }, 3000);
}


$('.btn-close').click(function () { $('video').each(function () { $(this).get(0).pause(); }) });