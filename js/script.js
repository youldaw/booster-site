$(function (){
    
    $('.sub-menu-link').on('click',function(e){
        e.preventDefault();
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
    });

    $('#switch-mode, .mob-settings').on('click',function(e){
        e.preventDefault();
        $('body').toggleClass('light');
    });

    $('.light-mode').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('body').toggleClass('light');
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
        var div = $(".booster-sec, .booster-main, .booster-side-col, #mob-more, .light-mode");
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

        $('.value-25').on('click',function(){
            rangePercent = $('[type="range"]').val(25);
            $('.range-percent').text('25');
        });
        $('.value-50').on('click',function(){
            rangePercent = $('[type="range"]').val(50);
            $('.range-percent').text('50');
        });
        $('.value-75').on('click',function(){
            rangePercent = $('[type="range"]').val(75);
            $('.range-percent').text('75');
        });
        $('.value-100').on('click',function(){
            rangePercent = $('[type="range"]').val(100);
            $('.range-percent').text('100');
        });
    });

    $('.load-more-btn').on('click',function(e){
        e.preventDefault();
        $('.history-table table').addClass('deposite-active');
    });

    $('.withdraw-more-btn').on('click',function(e){
        e.preventDefault();
        $('.history-table table').addClass('withdraw-active');
    });


    function postsCarousel() {
        var checkWidth = $(window).width();
        var owlPost = $(".booster-slide");
        if (checkWidth > 576) {
          if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
          }
          owlPost.removeClass('owl-carousel');
        } else if (checkWidth < 768) {
          owlPost.addClass('owl-carousel');
          owlPost.owlCarousel({
            items: 1.4,
            slideSpeed: 500,
            animateOut: 'fadeOut',
            touchDrag: true,
            mouseDrag: true,
            // autoplay: true,
            // autoplaySpeed: 8000,
            // autoplayTimeout: 8000,
            dots: false,
            loop: false
          });
        }
      }
      
      postsCarousel();
      $(window).resize(postsCarousel);

});

