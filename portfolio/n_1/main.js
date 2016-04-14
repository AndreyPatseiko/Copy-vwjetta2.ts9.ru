	
$('a[href="#"]').on('click', function( event ) {
	event.preventDefault();
	$('#modal').fadeIn();
});
$('#closed').on('click',function(){
	$('#modal').fadeOut();
});
$('.box1').fadeOut();
$('.right').on('click',right);

function right(){
	$('.box1').fadeOut(1500);
	$('.box2').fadeIn(1500);
};

$('.left').on('click',left);
function left(){
	$('.box2').fadeOut(1500);
	$('.box1').fadeIn(1500);
};
function slider(){
	intID = setInterval(function(){
		x = $('.box1').css('display');
		if (x == 'block') {
			right();
		}else{
			left();
		}
	},4000);
};
slider();
$('#background').on('mouseover',function(){
	clearTimeout(intID);
});
$('#background').on('mouseleave',slider);