$(document).ready(function(){
    $('.nav-closed').click(function(){
        $(this).css('display', 'none');
        $('.nav-opened').css('display', 'block');
        $('.menu').toggleClass('active');
    });

    $('.nav-opened').click(function(){
        $(this).css('display', 'none');
        $('.nav-closed').css('display', 'block');
        $('.menu').toggleClass('active');
    });


})



