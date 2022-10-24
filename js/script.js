$(function (){
    
    $('.menu-mob, .menu-closer').on('click',function(e){
        e.preventDefault();
        $('.top-left').toggleClass('active');
    });

});

