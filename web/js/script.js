// window.addEventListener('resize', function() {
//   if (window.innerWidth < 576 || window.innerWidth > 5753) {
//       location.reload();
//   }
// });
//GSAP
let mm = gsap.matchMedia();
mm.add("(min-width: 1200px)", () => {

    gsap.from(".logoSection .container-logo,.logoSection p,.product  h2,.product  h2+p"
, {
  opacity: 0,
  y: 150,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".logoSection,.product",
    scroller: 'body',
    start: "top 50%",
    end: "bottom 20%",
    
  }
});
gsap.from(".plans .d-flex >div, .plans h2", {
  opacity: 0,
  y: 150,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".plans",
    scroller: 'body',
    start: "top 50%",
    end: "bottom 20%",
  }
});

gsap.from(".product-list-item", {
  duration: 1,
  //scale: 0,
  opacity:0,
  y: 100,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".product",
    scroller: 'body',
    start: "top 50%",
    end: "bottom 20%",
  }
});
gsap.from(".our-speciality > div, .our-speciality i,.services ul li ", {
  duration: 0.5,
  //scale: 0,
  opacity:0,
  x: 100,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".product,.services .container-ctn",
    scroller: 'body',
    start: "top 50%",
    end: "bottom 20%",
  }
});
gsap.from(".gradientBg", {
  duration: 1,
  //scale: 0,
  opacity:0,
  x: -100,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".services",
    scroller: 'body',
    start: "top 50%",
    end: "bottom 20%",
  }
});
gsap.from(".expertise h2,.expertise .nav, .expertise .tab-content", {
  duration: 1,
  //scale: 0,
  opacity:0,
  x: -100,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".expertise",
    scroller: 'body',
    start: "top 50%",
    end: "bottom 20%",
  }
});


gsap.from(".clients .clients-testimonial", {
  duration: 1.5,
  scale: 0,
  opacity:0,
  scrollTrigger: {
    trigger: ".clients",
    scroller: 'body',
    start: "top 50%",
    end: "bottom 20%",
  }
});
gsap.from(".cta  video", {
  duration: 1.5,
  scale: 0,
  opacity:0,
  scrollTrigger: {
    trigger: ".cta",
    scroller: 'body',
    start: "top 50%",
    end: "bottom 20%",
  }
});
gsap.from(".cta .cta-container", {
  duration: 2,
  //scale: 0,
  opacity:0,
  y: 200,
  scrollTrigger: {
    trigger: ".cta",
    scroller: 'body',
    start: "top 50%",
    end: "bottom 20%",
  }
});
gsap.from(".faq h2,.faq .faq-tab", {
  duration: 1,
  //scale: 0,
  opacity:0,
  y: 200,
  scrollTrigger: {
    trigger: ".faq",
    scroller: 'body',
    start: "top 50%",
    end: "bottom 20%",
  }
});
gsap.from(".home-blog .d-flex,.home-blog article", {
  duration: 1,
  //scale: 0,
  opacity:0,
  y: 200,
  stagger: 0.2,

  scrollTrigger: {
    trigger: ".home-blog",
    scroller: 'body',
    start: "top 50%",
    end: "bottom 20%",
  }
});
gsap.from(".contact-form-content", {
  duration: 1,
  //scale: 0,
  opacity:0,
  x: -100,
  scrollTrigger: {
    trigger: ".contact-form",
    scroller: 'body',
    start: "top 50%",
    end: "bottom 20%",
  }
});
gsap.from(".contact-form form", {
  duration: 1,
  //scale: 0,
  opacity:0,
  x: 100,
  scrollTrigger: {
    trigger: ".contact-form",
    scroller: 'body',
    start: "top 50%",
    end: "bottom 20%",
  }
});

});
//GSAP

// Banner section fade

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

// ===========Product slider below 576=====================
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
  // ===========Product slider end===============================

  // ===========Testimonial slider below 576=====================
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
// ===========Testimonial sliderend=======================

// ============= Videp load ============================== 
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
// ======================Insert Icon==========================
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
// ======================Insert Icon End==========================

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
// ======================Coustomer Rating End========================

// ======================Lazy Loading ===============================
document.addEventListener("DOMContentLoaded", function() {var lazyImages = document.querySelectorAll("img[data-src][loading='lazy']");var lazyImageObserver = new IntersectionObserver(function(entries, observer) {entries.forEach(function(entry) {if (entry.isIntersecting) {var lazyImage = entry.target;lazyImage.src = lazyImage.dataset.src;lazyImage.alt = lazyImage.dataset.alt;lazyImage.removeAttribute("data-src");lazyImage.removeAttribute("loading");lazyImageObserver.unobserve(lazyImage);}});});lazyImages.forEach(function(lazyImage) {lazyImageObserver.observe(lazyImage);});});
// ======================Lazy Loading End===============================

// ======================Scroll Top ===============================
let mybutton = document.getElementById("scrollBtn");
let floatMenu = document.querySelector(".float-menu");
// ======================Scroll Top End===============================

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
mybutton.addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});
//==================Scroll Top End===============

// Home Page Contact form validation
document.getElementById('contact-form-wrapper').addEventListener('submit', function(event) {
  let valid = true;

  // Validate email
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.value)) {
    email.classList.add('error');
    emailError.style.display = 'block';
    valid = false;
  } else {
    email.classList.remove('error');
    emailError.style.display = 'none';
  }

  // Validate name
  const name = document.getElementById('name');
  const nameError = document.getElementById('nameError');

  if (name.value.trim() === '') {
    name.classList.add('error');
    nameError.style.display = 'block';
    valid = false;
  } else {
    name.classList.remove('error');
    nameError.style.display = 'none';
  }

  // Validate message
  const message = document.getElementById('message');
  const messageError = document.getElementById('messageError');

  if (message.value.trim() === '') {
    message.classList.add('error');
    messageError.style.display = 'block';
    valid = false;
  } else {
    message.classList.remove('error');
    messageError.style.display = 'none';
  }
  // If any field is invalid, prevent form submission
  if (!valid) {
    event.preventDefault();
  }
});