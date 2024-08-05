// window.addEventListener('resize', function() {
//   if (window.innerWidth < 576 || window.innerWidth > 5753) {
//       location.reload();
//   }
// });


window.addEventListener('load', function() {
  // Add the 'visible' class to the section
  document.getElementById('fadeSection').classList.add('visible');
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
    // draggable: false,
    // swipeToSlide: false,
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
  const video2 = document.getElementById('videoCta');
  if (video2) {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                video2.load();
                  observer.disconnect();
              }
          });
      });
      observer.observe(video2);
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const specialityDivs = document.querySelectorAll('.our-speciality > div');
  specialityDivs.forEach((div, index) => {
      if (index < specialityDivs.length - 1) {
          const iElement = document.createElement('i');
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

// ======================Scroll Top ===============================


let mybutton = document.getElementById("scrollBtn");
let floatMenu = document.querySelector(".float-menu");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    floatMenu.classList.add("opacity-one");
    floatMenu.classList.remove("opacity-zero");
  } else {
    floatMenu.classList.add("opacity-zero");
    floatMenu.classList.remove("opacity-one");
  }
}

// Add an event listener to the button to scroll to the top
mybutton.addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});