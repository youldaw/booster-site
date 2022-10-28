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

    $('.welcome-btns .metamask-btn').on('click',function(e){
        e.preventDefault();
        $('.mob-block').addClass('hide');
        $('.side-top').addClass('show');
        $('.performens-history').addClass('show');
        $('.hello-block').addClass('show');
    });

    $('#mob-pools').on('click',function(e){
        e.preventDefault();
        $('.mob-block, .side-top, .performens-history, .hello-block').addClass('hide');
        $('.booster-sec').addClass('active-pools');
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

