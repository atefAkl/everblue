//hello
$(document).ready(function () {
	'use strict';
	$('nav.in-tab ul li').on('click', function () {
		$('.' + $(this).attr('class') + '-content').fadeIn(300);
		$('.' + $(this).attr('class') + '-content').siblings().fadeOut(300);
	});
	$('.nav ul li').on('click', function () {
		$('.' + $(this).attr('class') + '-content').fadeIn(1000);
		$('.' + $(this).attr('class') + '-content').siblings().fadeOut(300);
	});
	// toggle ahow / hide side navigation
	$('#menu-toggle').click(function(){
		$('#nav').slideToggle(300)
	});
//	$('nav ul li').click(function(){
//		$('#nav').slideUp(300)
//	});
});
