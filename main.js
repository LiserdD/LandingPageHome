// нижняя кнопка
function ifShow(){
	if($(window).scrollTop() == 0){
		$('#bottom-b').hide();
	}		
	else{
		$('#bottom-b').show();
	}
	}
	ifShow();
	
$(window).on('scroll', ifShow);

$('#bottom-b').on('click', function(){
		
		$('html, body').animate({
			scrollTop: 0
		}, 700);
});

//Ссылки меню
$('.head-menu_item a').on('click', function(e){
 	e.preventDefault();

 	var menuItem = $(this).attr('href');

 	$('html, body').animate({
		scrollTop: $(menuItem).offset().top - 50
	}, 700);

});
