$(() => {
    $('.owl-carousel-main').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        mouseDrag: false,
        nav: false,
        dots: true,
        navText: ["<img src='https://restart.center/wp-content/themes/restart/img/Arrow_5.png'>", "<img src='https://restart.center/wp-content/themes/restart/img/Arrow_4.png'>"],
        animateOut: 'fadeOut',
        navContainer: '.nav-slider',
        dotsContainer: '.dots',
        onInitialized: (e) => {
            let items = e.item.count;
            let buttons = $('.dots button span');
            let im = 1;

            for (let i = 0; i < buttons.length; i++) {
                $(buttons[i]).html(im);
                im++;
            }
        },
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.owl-carousel-clients').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        dots: true,
        navContainer: '.slider-clients_nav',
        dotsContainer: '.slider-clients_dots',
        navText: false,
        responsive: {
            0: {
                items: 1  
            },
            768: {
                items: 3
            },
            1024: {
                items: 3
            },
            1170: {
                items: 4
            }
        }
    });

    $('.owl-carousel-pres').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        dots: true,
        navContainer: '.slider-pres_nav',
        dotsContainer: '.slider-pres_dots',
        navText: false,
        responsive: {
            0: {
                items: 1  
            },
            768: {
                items: 3
            },
            1024: {
                items: 3
            },
            1170: {
                items: 4
            }
        }
    });

    $('.unfocus').hover(function (e) {
        e.preventDefault();

        $(this).removeClass('unfocus');
    }, function () {
        $(this).addClass('unfocus');
    });

    function initMap(center) {

        var mapOptions = {
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: center
        };

        map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var marker = new google.maps.Marker({
            map: map,
            position: center,
            icon: {
                url: "https://restart.center/wp-content/themes/restart/img/marker.svg",
                scaledSize: new google.maps.Size(23, 23)
            }
        });
    }

    $('.sub-link').on('click', (e) => {
        e.preventDefault();
    });

    $(".links-city a").click(function (e) {
        e.preventDefault();

        let x = $(this).data("x");
        let y = $(this).data("y");
        let text = $(this).data("address");
        let center = new google.maps.LatLng(x, y);

        $(this).addClass('active');
        $('.address').html(text);

        $(".links-city a").not($(this)).removeClass('active');

        initMap(center);
    });

    $('.link-phone_top').on('click', (e) => {
        e.preventDefault();

        if ($('.area-popup_phone').hasClass('on')) {
            $('.area-popup_phone').animate({
                display: 'none'
            }, 2000);
            $('.area-popup_phone').removeClass('on');
        } else {
            $('.area-popup_phone').animate({
                display: 'flex'
            }, 2000);
            $('.area-popup_phone').addClass('on');
        }
    });

    $('.link-phone_consult').on('click', (e) => {
        e.preventDefault();

        if ($('.area-popup_consult').hasClass('on')) {
            $('.area-popup_consult').animate({
                display: 'none'
            }, 2000);
            $('.area-popup_consult').removeClass('on');
        } else {
            $('.area-popup_consult').animate({
                display: 'flex'
            }, 2000);
            $('.area-popup_consult').addClass('on');
        }
    });

    $('.link-phone_shw').on('click', (e) => {
        e.preventDefault();

        if ($('.area-popup_consult').hasClass('on')) {
            $('.area-popup_consult').animate({
                display: 'none'
            }, 2000);
            $('.area-popup_consult').removeClass('on');
        } else {
            $('.area-popup_consult').animate({
                display: 'flex'
            }, 2000);
            $('.area-popup_consult').addClass('on');
        }
    });

    $('.link-burger').on('click', (e) => {
        e.preventDefault();

        if ($('header').hasClass('on')) {
            $('header').css({
                left: '-300px'
            });
            $('header').removeClass('on');
        } else {
            $('header').css({
                left: '0'
            });
            $('header').addClass('on');
        }
    });

    $('.close-popup').on('click', (e) => {
        e.preventDefault();

        $('.area-popup').animate({
            display: 'none'
        }, 2000);
        $('.area-popup').removeClass('on');
    });

    $('.close-menu').on('click', (e) => {
        e.preventDefault();

        $('header').css({
            left: '-300px'
        });
        $('header').removeClass('on');
    });

    $('nav li').hover(function () {
        $(this).find('.sub-menu').stop().fadeIn();
    }, function () {
        $(this).find('.sub-menu').fadeOut();
    }, 2000);

    $('.sub-menu').prev().on('click', e => {
        e.preventDefault();
        $(this).attr('href', '#');
    });
    
    $('.sub-menu').prev().attr('href', '#');

    if ($(document).width() < 768) {
        $(document).mouseup(function (e) {
            let header = $('header');

            if (!header.is(e.target) &&
                header.has(e.target).length === 0) {
                $('header').css({
                    left: '-300px'
                });
                $('header').removeClass('on');
            }
        });
    }
});
