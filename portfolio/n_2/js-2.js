	
$('a[href="#"]').on('click', function( event ) {
	event.preventDefault();
	$('#modal').fadeIn();
});

$('#closed').on('click',function(){
	$('#modal').fadeOut();
});

$('.header_list a').on('click',function( event){
	event.preventDefault();
	$('.header_list a').removeClass('active');
	$(this).addClass('active');
});
// ---slider---
var i=2;
function slider(){
	intID = setInterval(function(){			
		var pik = '#pik_'+i;
		var point = '#point'+i;
		$(".wrapper div").fadeOut();
		$(pik).fadeIn();	
		$('.points a').removeClass('active');
		$(point).addClass('active');	
		i++;				
		if( i > 4){i=1};
	},2000);
};
$('.points a').on('click',function(){
	i = $(this).attr('data-value');
	flash(i);
});	
function flash( par ){
	i = par;
	var pik = '#pik_'+i;
	var point = '#point'+i;
	$(".wrapper div").fadeOut();
	$(pik).fadeIn();	
	$('.points a').removeClass('active');
	$(point).addClass('active');
	i++;
	if( i > 4){i=1};		
};
slider();
$('#pik_1').fadeIn();
$('#point1').addClass('active');

$('.priwey').on('mouseover',function(){
	clearTimeout(intID);
});
$('.priwey').on('mouseleave',slider);
// ---end slider---