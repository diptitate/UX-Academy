if (matchMedia('only screen and (min-width: 300px) and (max-width: 640px)').matches){
 window.onscroll = function() {myFunction()};
            function myFunction() {
              if (document.body.scrollTop > 8 || document.documentElement.scrollTop > 8) {
                $("#header").css("background-color", "#fff");
               document.getElementById("logo1").src = "images/unifocus_logo1.png";
                $("#header").css("padding", "0px 30px 0px 30px");
                $("#header").css("box-shadow", "2px -4px 7px");
             
                  } else {

                $("#header").css("background-color", "transparent");
                $("#header").css("padding", "0px 30px 0px 30px");
                document.getElementById("logo1").src = "images/unifocus_logo.png";
                $("#header").css("box-shadow", "none");
                
                  }
             }
}else{
function myFunction() {
    document.body.scrollTop > 8 || document.documentElement.scrollTop > 8 ? ($("#header").css("background-color", "#fff"), document.getElementById("logo").src = "images/unifocus_logo1.png", $("#header").css("padding", "0px 60px 0px 60px"), $(".navbar-nav > li > a").css("color", "#282828")) : ($("#header").css("background-color", "transparent"), $(".navbar-nav > li > a").css("color", "white"), $("#header").css("padding", "20px 60px 20px 60px"), document.getElementById("logo").src = "images/unifocus_logo.png")
}	
}


$(function() {
    function k() {
        if (0 != h) {
            var a = $("#clients-list li:first");
            a.animate({
                "margin-left": "-340px"
            }, 600, function() {
                a.remove().css({
                    "margin-left": "0px"
                }), $("#clients-list li:last").after(a)
            })
        }
    }
    var a = $("#testimonial-list"),
        b = a.children().length,
        c = 620 * b + 620;
    a.css("width", c);
    var e = $("#clients-list"),
        f = e.children().length,
        g = 340 * f;
    e.css("width", g);
    var h = !0,
        i = 1700;
    setInterval(k, i);
    $(document).on({
        mouseenter: function() {
            h = !1
        },
        mouseleave: function() {
            h = !0
        }
    }, "#clients")
}), $(function() {
    $(".navbar-toggler").on("click", function(a) {
        a.preventDefault(), $(this).closest(".navbar-minimal").toggleClass("open")
    })
}), jQuery(document).ready(function() {
    $(".dropdown").hover(function() {
        $(".dropdown-menu", this).stop().fadeIn("fast")
    }, function() {
        $(".dropdown-menu", this).stop().fadeOut("fast")
    })
}), $(document).ready(function() {
    $("#tabs1").click(function() {
        $("#tabs1Open1").removeClass("in"), $("#tabs1Open2").removeClass("in")
    }), $("#tabs2").click(function() {
        $("#tabs1Open").removeClass("in"), $("#tabs1Open2").removeClass("in")
    }), $("#tabs3").click(function() {
        $("#tabs1Open").removeClass("in"), $("#tabs1Open1").removeClass("in")
    })
}), $(document).ready(function() {
    function d() {
        1 == c ? (b.hide(), a.removeClass("is-open"), a.addClass("is-closed"), c = !1) : (b.show(), a.removeClass("is-closed"), a.addClass("is-open"), c = !0)
    }
    var a = $(".hamburger"),
        b = $(".overlay"),
        c = !1;
    a.click(function() {
        d()
    }), $('[data-toggle="offcanvas"]').click(function() {
        $("#wrapper").toggleClass("toggled")
    })
}), window.onscroll = function() {
    myFunction()
}, $(document).ready(function() {
    $("#child").height($("#parent").height()), $("#child2").height($("#parent2").height()), $("#child3").height($("#parent3").height()), $("#child4").height($("#parent4").height()), $("#child5").height($("#parent5").height()), $("#schild").height($("#child").height()), $("#schild2").height($("#child2").height()), $("#schild3").height($("#child3").height()), $("#schild4").height($("#child4").height()), $(".servicesImg").height($(".mainService").height())
});