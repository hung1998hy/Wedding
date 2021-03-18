// ============== Search icon ===========
let searchShow = document.querySelector(".search__overlay");
let searchClick = document.querySelector(".search__click");
searchClick.addEventListener('click', function() {
    searchShow.classList.toggle("st__show")
    if (searchShow.classList.contains("st__show")) {
        searchClick.firstElementChild.classList.remove("fa-search");
        searchClick.firstElementChild.classList.add("fa-times")
    } else {
        searchClick.firstElementChild.classList.add("fa-search");
        searchClick.firstElementChild.classList.remove("fa-times")
    }
})

// ============== Menu Dropdown=========================
let menuShow = document.querySelector(".menu__toggle");
let menuMobile = document.querySelector(".menu__mobile");

menuShow.addEventListener('click', function() {
    menuMobile.classList.toggle("show");
    if (menuMobile.classList.contains("show")) {
        menuShow.firstElementChild.classList.remove("fa-bars");
        menuShow.firstElementChild.classList.add("fa-times");
    } else {
        menuShow.firstElementChild.classList.add("fa-bars");
        menuShow.firstElementChild.classList.remove("fa-times");
    }
})

// ===================== Scroll menu ========================
let header = document.querySelector(".header__top-nav")

window.addEventListener('scroll', () => {
    header.classList.toggle("sticky", window.scrollY > 0);

})


//===== Owl Carousel =====//
$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});
$(".banner__img").owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        425: {
            items: 1,
        },
        576: {
            items: 1,
        },
        992: {
            items: 1,
        },
        1200: {
            items: 1,
        },
    },
});

$(".upComing__content-slide").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    nav: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        425: {
            items: 1,
        },
        576: {
            items: 1,
        },
        767: {
            items: 2,
        },
        991: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1200: {
            items: 3,
        },
    },
});

$(".feedback__content-slide").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    nav: true,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        425: {
            items: 1,
        },
        576: {
            items: 1,
        },
        767: {
            items: 1,
        },
        991: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1200: {
            items: 3,
        },
    },
});

$(".blog__slide").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    nav: false,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        425: {
            items: 1,
        },
        576: {
            items: 1,
        },
        767: {
            items: 1,
        },
        991: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1200: {
            items: 3,
        },
    },
});

$(".aboutTeam__member").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        425: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 3,
        },
    },
});

// Fancybox
$(document).ready(function() {
    $('.over__cover-sreach').fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 60000,
        'speedOut': 20000,
        'overlayShow': true
    });
});


// ===================iso================
var $grid = $('.grid').imagesLoaded(function() {
    // init Isotope after all images have loaded
    $grid.isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        gutter: 0,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-sizer'
        }
    });
});

// Isotope click function
$('.iso__content-nav a').click(function() {
    $('.iso__content-nav a').removeClass('active');
    $(this).addClass('active');

    let selector = $(this).attr('data-filter');
    $('.grid').isotope({
        filter: selector
    });
    return false;
});

// Back to Top //
// Show or hide the sticky footer button
$(window).on('scroll', function(event) {
    if ($(this).scrollTop() > 600) {
        $('.back-to-top').fadeIn(200);
    } else {
        $('.back-to-top').fadeOut(200);
    }
});
//Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
            scrollTop: 0
        },
        800
    );
});

// vanilla menu

// function functionScroll() {
//     var section = document.querySelectorAll('.actions');
//     sections = {};
//     let i = 0;

//     Array.prototype.forEach.call(section, function(e) {
//         sections[e.id] = e.offsetTop;
//     });

//     for (i in sections) {
//         if (sections[i] <= window.pageYOffset + 72) {
//             document.querySelector('.showColor').classList.remove('showColor');
//             document.querySelector('a[href*= ' + i + ']').classList.add('showColor');
//         }
//     }
// }

// window.addEventListener('scroll', functionScroll);
// window.addEventListener('resize', functionScroll);