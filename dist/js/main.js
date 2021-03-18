$(function() {
	// owlCarousel slider
	$('.slider__wrap').owlCarousel({
		loop       : true,
		dots       : false,
		nav        : false,
		autoplay   : true,
		responsive : {
			0 : {
				items : 1
			}
		}
	});

	// Slider Jobs
	$('.jobs__carousel').owlCarousel({
		smartSpeed         : 1000,
		margin             : 0,
		autoplay           : true,
		autoplayHoverPause : true,
		nav                : false,
		dots               : false,
		loop               : true,
		responsive         : {
			0    : {
				items : 1
			},
			768  : {
				items : 1
			},
			1000 : {
				items : 1
			}
		}
	});

	// Slider Teachers
	$('.teachers__list').owlCarousel({
		smartSpeed         : 1000,
		margin             : 20,
		autoplay           : false,
		autoplayHoverPause : true,
		nav                : false,
		dots               : false,
		loop               : true,
		responsive         : {
			0    : {
				items : 1
			},
			768  : {
				items : 2
			},
			1000 : {
				items : 3
			}
		}
	});

	// Slider Course
	$('.freeCourse__box').owlCarousel({
		smartSpeed         : 1000,
		margin             : 20,
		autoplay           : false,
		autoplayHoverPause : true,
		nav                : false,
		dots               : false,
		loop               : true,
		responsive         : {
			0    : {
				items : 1
			},
			768  : {
				items : 2
			},
			1000 : {
				items : 4
			}
		}
	});

	// Back to Top //
	// Show or hide the sticky footer button
	$(window).on('scroll', function(event) {
		if ($(this).scrollTop() > 600) {
			$('.back-to-top').fadeIn(200);
		}
		else {
			$('.back-to-top').fadeOut(200);
		}
	});
	//Animate the scroll to top
	$('.back-to-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate(
			{
				scrollTop : 0
			},
			800
		);
	});

	//===== Owl Carousel =====//
	$('.owl-featureJob').owlCarousel({
		loop   : true,
		items  : 1,
		dots   : true,
		margin : 0
		// autoplay: true,
		// autoplayTimeout: 5000,
		// autoplayHoverPause: true,
	});

	$('.owl-salaryJob').owlCarousel({
		loop   : true,
		items  : 1,
		dots   : true,
		margin : 0
		// autoplay: true,
		// autoplayTimeout: 5000,
		// autoplayHoverPause: true,
	});

	//===== Scroll Sticky Image =====//
	// let item = document.querySelector('.image__scroll-item');
	// let footer = document.querySelector('.footer');
	// let imageScroll = document.querySelector('.image__scroll');
	// window.onscroll = function() {
	// 	scrollFunction();
	// };
	// function scrollFunction() {
	// 	if (item) {
	// 		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 200) {
	// 			item.classList.add('fixed');
	// 		}
	// 		else {
	// 			item.classList.remove('fixed');
	// 		}
	// 	}
	// }

	let upDown = Array.from(document.querySelectorAll('.general__syllabus-link'));

	upDown.forEach(function(item) {
		item.addEventListener('click', function() {
			this.lastElementChild.firstElementChild.classList.toggle('upDown');
		});
	});

	let readMore = document.querySelector('.general__moreRead');
	let hide = document.querySelector('.general__lessRead');
	if (readMore) {
		readMore.addEventListener('click', () => {
			readMore.classList.add('d-none');
			hide.classList.add('d-flex');
			hide.classList.add('shows');
		});
	}

	if (hide) {
		hide.addEventListener('click', () => {
			readMore.classList.remove('d-none');
			hide.classList.remove('d-flex');
		});
	}

	// video
	let playVideo = document.querySelector('.header__card-img');
	let video = document.querySelector('.header__card-video');

	if (playVideo && video) {
		playVideo.addEventListener('click', function() {
			playVideo.classList.add('d-none');
			video.classList.add('display__block');
		});
	}

	// menu
	let menuBtn = document.querySelector('.header__mobile-btn');
	let menuMobile = document.querySelector('.header__mobile-menu');
	let closeBtn = document.querySelector('.btn-close');
	let subMenuBtn = document.querySelectorAll('.header__mobile-menu .header__list-item');
	// let goBack = document.querySelectorAll('.go-back');
	let menuList = document.querySelectorAll('.header .header__menu-link');

	menuBtn.addEventListener('click', function() {
		menuMobile.classList.add('active');
	});

	closeBtn.addEventListener('click', function() {
		menuMobile.classList.remove('active');
	});

	subMenuBtn.forEach(function(item) {
		item.addEventListener('click', function(e) {
			e.preventDefault();
			this.getElementsByClassName('header__mobile-category')[0].classList.add('active');

			this.getElementsByClassName('go-back')[0].addEventListener('click', function(e) {
				e.stopPropagation();
				this.parentElement.classList.remove('active');
			});
		});
	});

	// Menu active

	var cururl = window.location.pathname;
	var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
	var hash = window.location.hash.substr(1);

	if ((curpage == '' || curpage == '/' || curpage == 'admin') && hash == '') {
		//$("nav .navbar-nav > li:first-child").addClass("active");
	}
	else {
		$('.header__menu-list li').each(function() {
			$(this).removeClass('active');
		});
		if (hash != '') $(".header__menu-list li a[href*='" + hash + "']").parents('li').addClass('active');
		else $(".header__menu-list li a[href*='" + curpage + "']").parents('li').addClass('active');
	}
});
