$(".find").on('click', function() {
    $('#search').toggleClass('fadeInRight');
});
// раскрытие меню


$(".hMeny").on('click', function() {
    $('nav').slideToggle();
});

$(".find").on('click', function() {
    $('#search').toggleClass("resize");
});
if ($(window).width() <= 850)  {
    $('header').mouseleave(function() {
        $('nav').slideUp();
            });

};
 if ($(window).width() <= 850)  {   $('nav').slideUp();
};
// Скролл в верх
$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() != "0") {
            $(this).fadeIn("slow")
        }
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() == "0") {
                $(scrollDiv).fadeOut("slow")
            } else {
                $(scrollDiv).fadeIn("slow")
            }
        });
        $(this).click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, "slow")
        })
    }
});
$(function() {
    $("#toTop").scrollToTop();
});
// конец скролла в верх

// оживляем слайдер
$(function() {
    var slider = $("#slider"),
        item = $("> input", slider),
        block = $(".slides", slider),
        pause = 5000,
        play = true,
        timer;

    function sliderAuto() {
        var i = item.index($(":checked")),
            i = ++i % item.length;
        play && item.eq(i).prop({
            "checked": true
        })
        timer = window.setTimeout(sliderAuto, pause)
    }
    slider.on("mouseenter", function() {
        play = false;
        window.clearTimeout(timer)
    });
    slider.on("mouseleave", function() {
        play = true;
        timer = window.setTimeout(sliderAuto, pause)
    });
    sliderAuto()
});
// КОнец оживлнея

// Плавная прокрутка
$(document).ready(function() {
    $("nav").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});
// КОНЕЦ планой прокрутки
// пдсветка раздела
$(window).scroll(function() {
    $("nav a").each(function() {
        var window_top = $(window).scrollTop();
        var div_1 = $(this).attr('href');
        var div_top = $(div_1).offset().top;

        if (window_top > div_top - 100) {
            $('nav').find('a').removeClass('active');
            $('nav').find('a[href="' + div_1 + '"]').addClass('active');
        } else {
            $('nav').find('a[href="' + div_1 + '"]').removeClass('active');
        };
    });
});
// КОНЕЦ подсветки раздела