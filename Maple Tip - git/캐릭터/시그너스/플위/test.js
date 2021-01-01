$(document).ready(function () 
{
    $('h1').hover(function(){
        $(this).css('color','blue');
    }, function() {
        $(this).css('color','red');
    });
});
