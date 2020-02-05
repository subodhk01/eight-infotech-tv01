
$(function() {
    var left_container = $(".image-container");
    var right_container = $(".landing-container");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if(scroll >= 700){
            left_container.removeClass('col-md-11').addClass("col-md-12");
            right_container.removeClass('col-md-7').addClass('width-zero');
        }
        else if(scroll >= 600){
            left_container.removeClass('col-md-10').addClass("col-md-11");
            right_container.removeClass('col-md-7').addClass('width-zero');
        }
        else if(scroll >= 500){
            left_container.removeClass('col-md-9').addClass("col-md-10");
            right_container.removeClass('col-md-7').addClass('width-zero');
        }
        else if(scroll >= 400){
            left_container.removeClass('col-md-8').addClass("col-md-9");
            right_container.removeClass('col-md-7').addClass('width-zero');
        }
        else if(scroll >= 300){
            left_container.removeClass('col-md-7').addClass("col-md-8");
            right_container.removeClass('col-md-7').addClass('width-zero');
        }
        else if(scroll >= 200){
            left_container.removeClass('col-md-6').addClass("col-md-7");
            right_container.removeClass('col-md-7').addClass('width-zero');
        }
        else if(scroll >= 100){
            left_container.removeClass('col-md-5').addClass("col-md-6");
            right_container.removeClass('col-md-7').addClass('width-zero');
        }
        
    });
});