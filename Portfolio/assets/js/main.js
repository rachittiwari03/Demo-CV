$(document).ready(function () {
    $(window).scroll(function () {
      if (this.scrollY > 80) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
    /* Typing animation */
    var typed = new Typed(".home-typing", {
      strings: ["Pre-Final Year Student", "Developer", "Tech enthusiast", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop:true
    });
  
    var typed = new Typed(".about-typing", {
      strings: ["Mobile Developer", "Web Developer", "Python Devloper", "Java Devloper"],
      typeSpeed: 100,
      backSpeed: 60,
      loop:true
    });
  
    /* slide-up */
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
    });
    /* Toggle Menu/ NavBar Script */
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
    $(".navbar .menu li a").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    /* OWL CAROUSEL */
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 1200,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  });