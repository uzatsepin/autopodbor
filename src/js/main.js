import './_vendor';
import './_functions';
import './_components';

$(document).ready(function () {
  const owl = $('.owl-carousel');
  owl.owlCarousel({
    margin: 48,
    autoWidth: true,
    nav: false,
    dots: false,
    loop: true,
    responsive: {
      768: {
        margin: 48
      },
      0: {
        margin: 16,
      }
    }
  });

  $('.work__top-btns-next').click(function () {
    owl.trigger('next.owl.carousel');
  });

  $('.work__top-btns-prev').click(function () {
    owl.trigger('prev.owl.carousel');
  });


  $('.accordion__header').click(function () {
    $(this).next().slideToggle(400);
    $(this).closest(".accordion__item").toggleClass("open-accordion");
  });


  $(window).scroll(function () {
    $(".scroll").each(function () {
      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (position < scroll + windowHeight - 100) {
        $(this).addClass("visible");
      }
    });
  });

  $('.mobile-nav-button').on('click', function () {
    $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)").toggleClass("mobile-nav-button__line--1");
    $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)").toggleClass("mobile-nav-button__line--2");
    $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)").toggleClass("mobile-nav-button__line--3");

    $('.mobile-menu').toggleClass('mobile-menu--open');
    return false;
  });
})
