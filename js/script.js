$(function (){
    
    $('.menu-mob, .menu-closer').on('click',function(e){
        e.preventDefault();
        $('.top-left').toggleClass('active');
    });

    $('#switch-mode').on('click',function(e){
        e.preventDefault();
        $('.wrap').toggleClass('light');
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

