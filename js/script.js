$(function (){
    
    $('.sub-menu-link').on('click',function(e){
        e.preventDefault();
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
    });

    $('#switch-mode').on('click',function(e){
        e.preventDefault();
        $('.wrap').toggleClass('light');
    });

    $('.welcome-btns .metamask-btn, #mob-overview').on('click',function(e){
        e.preventDefault();
        $('.mob-block').addClass('hide');
        $('.booster-sec').addClass('active-overview');
    });

    $('#mob-pools').on('click',function(e){
        e.preventDefault();
        $('.mob-block').addClass('hide');
        $('.booster-sec').addClass('active-pools');
    });

    $('#mob-history').on('click',function(e){
        e.preventDefault();
        $('.mob-block').addClass('hide');
        $('.booster-sec').addClass('active-history');
    });

    $('.side-tab li a').on('click',function(e){
        e.preventDefault();
        $('.booster-side-col').addClass('hide');
        $('.booster-main').addClass('active');
    });

    $('.back-position').on('click',function(e){
        e.preventDefault();
        $('.booster-side-col').removeClass('hide');
        $('.booster-main').removeClass('active');
    });
    
    $(document).mouseup(function (e){
        var div = $(".booster-sec, .booster-main, .booster-side-col, #mob-more");
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) {
            div.removeClass('active-pools');
            div.removeClass('active-overview');
            div.removeClass('active-history');
            div.removeClass('active-exchange');
            div.removeClass('active');
            div.removeClass('hide');
        }
    });

    $('#mob-more').on('click',function(e){
        e.preventDefault();
        $(this).parent().parent().parent().toggleClass('active');
    });

    $(".metamask-btn").prop("disabled", true);
	$(".welcome-check input[type='checkbox']").on('change', function () {
        if ($(".agree:checked").length > 0) {
          $(".metamask-btn").prop("disabled", false);
        } else {
          $(".metamask-btn").prop("disabled", true);
        }
	});


    $(function() {
        var rangePercent = $('[type="range"]').val();
        $('[type="range"]').on('change input', function() {
            rangePercent = $('[type="range"]').val();
            $('.range-percent').text(rangePercent);
            // $('[type="range"]').css('filter', 'hue-rotate(-' + rangePercent + 'deg)');
        });
    });
});

