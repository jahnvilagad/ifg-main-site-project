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

// $(document).ready(function () {
//   $('.slider-accreditations').slick({
//     centerMode: true,
//     slidesToShow: 3,
//     dots: false,
//     prevArrow: $('.prev4'),
//     nextArrow: $('.next4'),
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     slidesToScroll: 1,
//   });
// });


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
// });
// $(document).ready(function () {
//   $('.university').slick({
//     centerMode: true,
//     slidesToShow: 3,
//     dots: false,
//     prevArrow: $('.prev4'),
//     nextArrow: $('.next4'),
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     slidesToScroll: 1,
//     arrows:true,
//   });
// });


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



if (window.location.pathname=='/accommodation-in-abu-dhabi.html') {
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


// if (window.location.pathname=='/') {
// $(document).ready(function () {
//   $(window).scrollTop($target.offset().top - 100)
// });
// }

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



jQuery(function ($) {
  var show_char = 280;
  var ellipses = "... ";
  var content = $(".text-block").text();

  if (content.length > show_char) {
    var a = content.substr(0, show_char);
    var b = content.substr(show_char);
    var html = a + "<span class='truncated'>" + ellipses + "</span><span class='truncated' style='display:none'>" + b + "</span> <a class='read-more text-primary' href='#'>Read more</a>"; // move read more outside
    $(".text-block").html("<p>" + html + "</p>");
  }

  $(".text-block").on("click", ".read-more", function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.text() == "Read more" ? $this.text("Read less") : $this.text("Read more");
    $this.siblings(".truncated").toggle();
  });
});




// $(document).ready(function(){
//   $(".btn-close").click(function(){
//     $(".offcanvas , .offcanvas-backdrop").toggle("d-none");
//   });
// });