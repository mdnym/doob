$(document).ready(function(){
  "use strict";
    

// =====Search=====
    $('#search-trigger').on('click', function() {
        $('#search').addClass('active').find('.search').focus();
    });

    $('#search').on('click', function() {
        $(this).find('.search').focus();
    });

    $('#close').on('click', function() {
        $('#search').removeClass('active');
    });



// ===== Owl Carosal =====

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    dots:false,
    autoplay: true,
    slideTransition: 'linear',
    autoplaySpeed: 5000,
    autoplayHoverPause: true,
    fluidSpeed:.1,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:1
        },
        576:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});





//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});




$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeInOutExpo');
        event.preventDefault();
    });
});





window.addEventListener('scroll', function() {
           
    if (window.scrollY > 200) {
        document.getElementById('cnav').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
    } else {
        document.getElementById('cnav').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
    } 
});




});









