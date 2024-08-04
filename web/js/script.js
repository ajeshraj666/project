window.addEventListener('resize', function() {
  if (window.innerWidth < 576 || window.innerWidth > 5753) {
      location.reload();
  }
});




// Banner Slider

$(document).ready(function () {
  $(".bannerText").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    // fade: true,
    cssEase: "linear",
    speed: 800,
  });
});

// ===========what we do=====================

$(document).ready(function () {
  $(".logoSlider").slick({
    slidesToShow: 5.2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 200,
    draggable: false,
    swipeToSlide: false,
    cssEase: 'linear',
    responsive: [
    
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          slidesToShow: 3,
        },
      },
    ],
  });
});


$(document).ready(function () {
  function initSlider() {
    if ($(window).width() <= 575) {
      if (!$(".product-list").hasClass("slick-initialized")) {
        $(".product-list").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          autoplay:true,
          rows: 2,
          responsive: [
            
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }
    } else {
      if ($(".product-list").hasClass("slick-initialized")) {
        $(".product-list").slick("unslick");
      }
    }
  }

  initSlider();

  $(window).resize(function () {
    initSlider();
  });
  function initTestimonialSlider() {
    if ($(window).width() <= 575) {
      if (!$(".clients-testimonial").hasClass("slick-initialized")) {
        $(".clients-testimonial").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          autoplay:true,
          responsive: [
            
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }
    } else {
      if ($(".clients-testimonial").hasClass("slick-initialized")) {
        $(".clients-testimonial").slick("unslick");
      }
    }
  }

  initTestimonialSlider();

  $(window).resize(function () {
    initTestimonialSlider();
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//   const video = document.querySelector('video');
//   const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               video.load();
//               observer.disconnect();
//           }
//       });
//   });
//   observer.observe(video);
// });



document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById('videoBanner');
  if (video) {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  video.load();
                  observer.disconnect();
              }
          });
      });
      observer.observe(video);
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const specialityDivs = document.querySelectorAll('.our-speciality > div');
  specialityDivs.forEach((div, index) => {
      if (index < specialityDivs.length - 1) {
          const iElement = document.createElement('i');
          // iElement.innerHTML = '<svg width="110" height="34" viewBox="0 0 110 34" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="55" cy="17" r="16.75" stroke="url(#paint0_linear_532_3351)" stroke-width="0.5"/> <circle cx="55" cy="17" r="16.75" stroke="url(#paint1_linear_532_3351)" stroke-width="0.5"/> <line y1="16.75" x2="110" y2="16.75" stroke="url(#paint2_linear_532_3351)" stroke-width="0.5"/> <line y1="16.75" x2="110" y2="16.75" stroke="url(#paint3_linear_532_3351)" stroke-width="0.5"/> <circle cx="55" cy="17" r="1.5" fill="white" stroke="url(#paint4_linear_532_3351)"/> <defs> <linearGradient id="paint0_linear_532_3351" x1="38" y1="17" x2="72" y2="17" gradientUnits="userSpaceOnUse"> <stop stop-color="#3412E0"/> <stop offset="0.479138" stop-color="#7928E5"/> <stop offset="1" stop-color="#07B4CC"/> </linearGradient> <linearGradient id="paint1_linear_532_3351" x1="38" y1="17" x2="72" y2="17" gradientUnits="userSpaceOnUse"> <stop stop-color="#6F7E97"/> <stop offset="1" stop-color="#242931"/> </linearGradient> <linearGradient id="paint2_linear_532_3351" x1="0" y1="17.5" x2="110" y2="17.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#3412E0"/> <stop offset="0.479138" stop-color="#7928E5"/> <stop offset="1" stop-color="#07B4CC"/> </linearGradient> <linearGradient id="paint3_linear_532_3351" x1="0" y1="17.5" x2="110" y2="17.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#6F7E97"/> <stop offset="1" stop-color="#242931"/> </linearGradient> <linearGradient id="paint4_linear_532_3351" x1="53" y1="17" x2="57" y2="17" gradientUnits="userSpaceOnUse"> <stop stop-color="#6F7E97"/> <stop offset="1" stop-color="#242931"/> </linearGradient> </defs> </svg>'
          iElement.innerHTML = '<img src= "web/images/icons/step.webp" alt="icon"  width="110" height="34">'
          div.parentNode.insertBefore(iElement, div.nextSibling);
      }
  });
});

// ======================Coustomer Rating==========================
$(document).ready(function () {
  $(".my-rating-readonly").starRating({
    starSize: 19,
    initialRating: 5,
    useFullStars: true,
    readOnly: true,
    starShape: 'rounded',
  });
});

// ======================Lazy Loading ===============================

document.addEventListener("DOMContentLoaded", function() {var lazyImages = document.querySelectorAll("img[data-src][loading='lazy']");var lazyImageObserver = new IntersectionObserver(function(entries, observer) {entries.forEach(function(entry) {if (entry.isIntersecting) {var lazyImage = entry.target;lazyImage.src = lazyImage.dataset.src;lazyImage.alt = lazyImage.dataset.alt;lazyImage.removeAttribute("data-src");lazyImage.removeAttribute("loading");lazyImageObserver.unobserve(lazyImage);}});});lazyImages.forEach(function(lazyImage) {lazyImageObserver.observe(lazyImage);});});