$(document).ready( function() {
    $('.main-page-slider-nav-item').on('click', function() {
        var slideItem = $(this).data("target");
        $('.main-page-slider-nav-item').removeClass('active');
        $('.main-page-slide-item').removeClass('active');
        $(this).addClass('active');
        $(".main-page-slide-item[data-target='" + slideItem + "']").addClass('active');
    });

    $('.tp-item').on('click', function() {
        var slideItem = $(this).data("target");
        $('.tp-item-circle').removeClass('active');
        $('.tp-iphone-img').removeClass('active');
        $(this).children('.tp-item-circle').addClass('active');
        $(".tp-iphone-img[data-target='" + slideItem + "']").addClass('active');
    });

    $('.tab-item').on('click', function() {
        var slideItem = $(this).data("target");
        $('.tab-item').removeClass('active');
        $('.four-page-slider').removeClass('active');
        $('.four-page .prevArrow, .four-page .nextArrow').removeClass('active');
        $(this).addClass('active');
        $(".four-page-slider[data-target='" + slideItem + "']").addClass('active');
        $(".four-page .prevArrow[data-target='" + slideItem + "']").addClass('active');
        $(".four-page .nextArrow[data-target='" + slideItem + "']").addClass('active');
    });

    var scroll = $(window).scrollTop();
    if( scroll > 10 ) {
      $('header').css({
          'background':'#4e5366',
          'padding' : '10px 0',
          'box-shadow' : '.214rem .214rem .64rem 0px rgba(0, 0, 0, 0.1)'
      });
      $('.logo-wrapper').css({
          'font-size':'1.42rem'
      });
      $('.logo-right').css({
          'color':'#fff'
      });
    } else { 
      $('header').css({
          'background':'none',
          'padding' : '2.85rem 0',
          'box-shadow' : 'none'
      });
      $('.logo-wrapper').css({
          'font-size':'2.14rem'
      });
      $('.logo-right').css({
          'color':'rgb(22, 25, 36)'
      });
    }

    $(document).on('scroll', onScroll);

    $(document).on('scroll', onScroll);

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    function onScroll() {
      $('header .menu li').each(function () {
          var scrollPos = $(document).scrollTop();
          var currLink = $(this).children('a');
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top - 222 <= scrollPos && refElement.position().top - 222 + refElement.height() > scrollPos) {
              $('.menu li').removeClass("active");
              $('header .menu li').eq(currLink.parent('li').index()).addClass('active');
              $('footer .menu li').eq(currLink.parent('li').index()).addClass('active');
          }
      });
    }

    $(".menu li").click(function (event) {
      event.preventDefault();
      $(document).off("scroll", onScroll);
      $('.menu li').removeClass('active');
      $('header .menu li').eq($(this).index()).addClass('active');

      var id  = $(this).children('a').attr('href');
      $('html, body').stop().animate({
          'scrollTop': $(id).offset().top-93
      }, 1000, 'swing', function () {
          $(document).on("scroll", onScroll);
      });
  });

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if( scroll > 10 ) {
            $('header').css({
              'background':'#4e5366',
              'padding' : '10px 0',
              'box-shadow' : '.214rem .214rem .64rem 0px rgba(0, 0, 0, 0.1)'
            });
            $('.logo-wrapper').css({
              'font-size':'1.42rem'
            });
            $('.logo-right').css({
              'color':'#fff'
            });
        } else { 
            $('header').css({
              'background':'none',
              'padding' : '2.85rem 0',
              'box-shadow' : 'none'
            });
            $('.logo-wrapper').css({
              'font-size':'2.14rem'
            });
            $('.logo-right').css({
              'color':'rgb(22, 25, 36)'
            });
        }
    });

    $('.four-page-slider-item-inner').click(function () {
      if ($(this).children('video').get(0) !== undefined) {
        if ($(this).children('video').get(0).paused) {
          $(this).children('video').get(0).play();
          $(this).children(".playPause").fadeOut();
        } else {
            $(this).children('video').get(0).pause();
            $(this).children(".playPause").fadeIn();
        }
      }
    });

    ///hover container lang menu
    $("#lang-menu").hover(
      function(){
          $("#lang-menu div").eq(0).addClass("cls-borderbottom-lang");
          $("#lang-menu div.menu_list").stop().slideToggle(100);
      },
      function() {
          $("#lang-menu div").eq(0).removeClass("cls-borderbottom-lang");
          $("#lang-menu div.menu_list").stop().slideToggle(100);  
      }
  );
  /// click languages
  $("#lang-menu div.menu_list ul li").on("click", function(){
      //select lang and apply changes
      $lang = $(this).text();
      $("#lang-menu + div").text($lang);
  });

    $('.reviews-slider').on('afterChange', function(slick, currentSlide){
        var slideItem = $('.reviews-slider .slick-current').data("target");
        $('.user-circle').removeClass('active');
        $(".user-circle[data-target='" + slideItem + "']").addClass('active');
    });

    $(".user-circle").on("click", function(){
        var slideItem = $(this).data("target");
        $('.reviews-slider').slick('slickGoTo', slideItem - 1, false);
    });

    $("#hamburger").click(function () {
      $('.menu').toggleClass('active');
      $('header').toggleClass('active');
      $(this).toggleClass('open');
    });

    $('.sp-slide-item-wrapper').slick({
      slidesPerRow: 3,
      rows: 2,
      appendArrows: $('.slider-arrows'),
      prevArrow: $('.prevArrow'),
      nextArrow: $('.nextArrow')
    });

    $('#fp-slider1').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: $('.prevArrow1'),
      nextArrow: $('.nextArrow1')
    });

    $('#fp-slider2').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: $('.prevArrow2'),
      nextArrow: $('.nextArrow2')
    });

    $('#fp-slider3').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: $('.prevArrow3'),
      nextArrow: $('.nextArrow3')
    });

    $('#fp-slider4').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: $('.prevArrow4'),
      nextArrow: $('.nextArrow4')
    });

    $('#fp-slider5').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: $('.prevArrow5'),
      nextArrow: $('.nextArrow5')
    });

    $('#fp-slider6').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: $('.prevArrow6'),
      nextArrow: $('.nextArrow6')
    });

    $('.six-page-slider').slick({
      slidesToShow: 5,
      prevArrow: $('.six-page-prevArrow'),
      nextArrow: $('.six-page-nextArrow')
    });

    $('.before-after-slider').slick({
      slidesToShow: 3,
      prevArrow: $('.before-after-prevArrow'),
      nextArrow: $('.before-after-nextArrow')
    });

    $('.reviews-slider').slick({
      slidesToShow: 1,
      prevArrow: $('.reviews-prevArrow'),
      nextArrow: $('.reviews-nextArrow')
    });
});