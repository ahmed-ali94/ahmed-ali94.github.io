$(document).ready(function () {

    function replaceActiveIcon (selector)
    {
        $('i.link-active').removeClass("link-active");
        $(selector).addClass("link-active");

    }

    function scrollToTarget (selector)
    {
        $('html, body').animate({
            scrollTop: $(selector).offset().top
        }, 1500);

    }

    $("#about-btn").click(function (e) { 
        e.preventDefault();
        replaceActiveIcon($(this));
        scrollToTarget($("#about-me"));
    
    });


    $("#services-btn").click(function (e) { 
        e.preventDefault();
        replaceActiveIcon($(this));
        scrollToTarget($("#services"));
    
    });

    $("#portfolio-btn").click(function (e) { 
        e.preventDefault();
        replaceActiveIcon($(this));
        scrollToTarget($("#portfolio"));
    
    });

    $(".home").click(function (e) { 
        e.preventDefault();
        scrollToTarget($("body"));
    
    });






    
});