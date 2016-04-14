$('a[href="#"]').on('click', function( event ) {
    event.preventDefault();
    $('#modal').fadeIn();
});
$('a[href="/"]').on('click', function( event ) {
    event.preventDefault();
});

$('#closed').on('click',function(){
    $('#modal').fadeOut();
});

$('.spis>li>a').on('click',function( event){
    event.preventDefault();
    $('.spis>li>a').removeClass('active');
    $(this).addClass('active');
    $('#notactive').removeClass('active');
});

$('#one').on('click',function(){
    $('#content_box2').fadeOut('slow');
    $('#content_box1').fadeIn('slow');
    $('.tic li').removeClass('tic_active');
    $(this).addClass('tic_active');
});
$('#too').on('click',function(){
    $('#content_box1').fadeOut('slow');
    $('#content_box2').fadeIn('slow');
    $('.tic li').removeClass('tic_active');
    $(this).addClass('tic_active');
});
$('#down').on('click',function(){
    $('.sidebar a').removeClass('activ');
    $(this).addClass('activ');
    $('#box1').css('margin-top','-193px');
    $('#up').css('visibility','visible')
});
$('#up').on('click',function(){
    $('.sidebar a').removeClass('activ');
    $(this).addClass('activ');
    $('#box1').css('margin-top','0');
});