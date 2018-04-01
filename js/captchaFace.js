$('.smile>li').click(function () {
    if($(this).children('.verifed').css('opacity') == 0){
        $(this).children('.verifed').css('opacity',1);
        $(this).children('.verifed').siblings().addClass('narrow');
    }else {
        $(this).children('.verifed').css('opacity',0);
        $(this).children('.verifed').siblings().removeClass('narrow');
    }
});

function validation() {
    var verify = []; // define a array to store the name of selected img
    $.map($('.narrow'),function (i) {
        var imgs = i.src;
        verify.push(imgs.substring(imgs.lastIndexOf('/')+1))
    });
    $('.verifybtn>a>img').attr('src', 'img/button-submitting.png');
    setTimeout(function () {
        $('.verifybtn>a>img').attr('src', 'img/button-submitted.png');
        $('.smile>li').children('.verifed').css('opacity',0);
        $('.smile>li').children('.verifed').siblings().removeClass('narrow');
    }, 800);
    console.log(verify)
    return verify;
}
