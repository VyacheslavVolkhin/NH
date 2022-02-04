$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};
    
    
	//popup block
	$('.js-popup-wrap .js-btn-toggle').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('menu-show');
		} else {
			$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
			$(this).addClass('active');
			if ($(this).parent().hasClass('main-menu-wrap')) {
				$('body').addClass('menu-show');
			}
		}
		return false;
	})
	$('.js-popup-wrap .js-btn-close').on('click', function() {
		$(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
		$('body').removeClass('menu-show');
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".js-popup-block").length) return;
	    $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
	    $('body').removeClass('menu-show');
        $('.header-nav-panel .btn-menu.open').removeClass('open');
        $('.header .menu-popup-wrap.active').removeClass('active');
	    event.stopPropagation();
	});
	$('.js-popup-wrap').each(function() {
		if ($(this).hasClass('js-popup-select')) {
			// alert(1)
			if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
				$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
			}
			var currentSelect = $(this).find('.js-popup-block').find('.active').html();
			$(this).find('.js-btn-toggle').html(currentSelect);
		}
	})
	$('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
			$(this).addClass('active');
		}
		$('.js-popup-wrap').each(function() {
			if ($(this).hasClass('js-popup-select')) {
				if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
					$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
				}
				var currentSelect = $(this).find('.js-popup-block').find('.active').html();
				$(this).find('.js-btn-toggle').html(currentSelect);
			}
		})
		$(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
		return false;
	})

	//tabs
	$('.js-tabs-nav').each(function() {
		$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
	})
	$('.js-tab-title').each(function() {
		if ($(this).hasClass('active')) {
			$(this).next('.js-tab-content').show(0);
		}
	})
	$('.js-tabs-nav li a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$('.js-tab-block').removeClass('active');
			$(this).parents('.js-tabs-nav').find('.active').removeClass('active');
			$(this).addClass('active');
			$('.js-tabs-nav').each(function() {
				$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
			})
		}
		return false;
	})
	$('.js-tab-title').on('click' , function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next('.js-tab-content').slideUp(200);
		} else {
			$(this).addClass('active').next('.js-tab-content').slideDown(200);
		}
	})


    //mobile menu
    $('.header-menu-wrap li ul').each(function () {
        $(this).parent().addClass('submenu');
    })
    $('.header-menu-wrap.menu-top li a').on('click', function () {
        if ($(this).next('ul').length > 0) {
            if ($(window).innerWidth() < 1024) {
                if ($(this).parent().hasClass('open')) {
                    $(this).parent().removeClass('open').children('ul').slideUp(200);
                } else {
                    $('.header-menu-wrap li.open').removeClass('open').children('ul').slideUp(200);
                    $(this).parent().addClass('open').children('ul').slideDown(200);
                }
                return false;
            }
        }
    })
    $('.header-menu-wrap.menu-catalog li a').on('click', function () {
        if ($(this).next('ul').length > 0) {
            if ($(window).innerWidth() < 768) {
                if ($(this).parent().hasClass('open')) {
                    $(this).parent().removeClass('open').children('ul').slideUp(200);
                } else {
                    $('.header-menu-wrap li.open').removeClass('open').children('ul').slideUp(200);
                    $(this).parent().addClass('open').children('ul').slideDown(200);
                }
                return false;
            }
        }
    })
    $('.header-menu-wrap .button-scroll').on('click', function() {
        let scrollL = $('.header-menu-wrap.menu-catalog .menu-block').scrollLeft();
        $('.header-menu-wrap.menu-catalog .menu-block').scrollLeft($('.header-menu-wrap.menu-catalog .menu-block').scrollLeft()+50);
        /*if (scrollL === $('.header-menu-wrap.menu-catalog .menu-block').scrollLeft()) {
            $('.header-menu-wrap .button-scroll').addClass('active');
        } else {
            $('.header-menu-wrap .button-scroll').removeClass('active');
        }*/
        return false;
    })
    
    //nav menu desktop
    $('.header-nav-panel .btn-menu[data-menu]').on('click', function() {
        if ($(window).innerWidth() > 1023) {
            let menuCurrent = $(this).attr('data-menu');
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $('.header .menu-popup-wrap.active').removeClass('active');
            } else {
                $('.header-nav-panel .btn-menu.open').removeClass('open');
                $('.header .menu-popup-wrap.active').removeClass('active');
                $(this).addClass('open');
                $('.header .menu-popup-wrap[data-menu="'+menuCurrent+'"]').addClass('active');
            }
            return false;
        }
    })


    //main-partners-box
    $('.main-partners-box .slider').slick({
        dots: false,
        slidesToShow: 1,
        variableWidth: false,
        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
    });
    $('.main-partners-box .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $('.main-partners-box .slider-counter .sl-dot').removeClass('active');
        $('.main-partners-box .slider-counter .sl-dot[data-slide="' + currentSlide + '"]').addClass('active');
    });
    
    
    //filter
    $('.side-filter-box .section-title').on('click', function() {
        $(this).parent('.filter-section').toggleClass('section-open');
        return false;
    })
    $('.side-filter-box .section-actions a').on('click', function() {
        $(this).parents('.filter-section').toggleClass('section-all');
        return false;
    })


    //main-top-box
    if (!!$('.main-top-box').offset()) {
        $('.main-top-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                    }
                },
            ]
        });
        $('.main-top-box .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.main-top-box .slider-counter .sl-dot').removeClass('active');
            $('.main-top-box .slider-counter .sl-dot[data-slide="' + currentSlide + '"]').addClass('active');
        });
    }


    //reviews-box
    if (!!$('.reviews-box').offset()) {
        $('.reviews-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        });
        $('.reviews-box .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.reviews-box .slider-counter .sl-dot').removeClass('active');
            $('.reviews-box .slider-counter .sl-dot[data-slide="' + currentSlide + '"]').addClass('active');
        });
    }


    //about-info-box
    if (!!$('.about-info-box').offset()) {
        $('.about-info-box .slider').slick({
            dots: false,
            slidesToShow: 2,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
        $('.about-info-box .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.about-info-box .slider-counter .sl-dot').removeClass('active');
            $('.about-info-box .slider-counter .sl-dot[data-slide="' + currentSlide + '"]').addClass('active');
        });
    }


    //main-stat-box
    if (!!$('.main-stat-box').offset()) {
        $('.main-stat-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        });
        $('.main-stat-box .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.main-stat-box .slider-counter .sl-dot').removeClass('active');
            $('.main-stat-box .slider-counter .sl-dot[data-slide="' + currentSlide + '"]').addClass('active');
        });
    }
    
    
    //cnt-top-box
    if (!!$('.cnt-top-box').offset()) {
        $('.cnt-top-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        });
        $('.cnt-top-box .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.cnt-top-box .slider-counter .sl-dot').removeClass('active');
            $('.cnt-top-box .slider-counter .sl-dot[data-slide="' + currentSlide + '"]').addClass('active');
        });
    }
    
    
    
    

    
    
});


