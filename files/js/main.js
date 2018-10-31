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
	$('#menu-toggle').click(function () {
		$('#nav').slideToggle(300)
	});
	//	$('nav ul li').click(function(){
	//		$('#nav').slideUp(300)
	//	});
	var bars, navMenu, titles, i, el;
	bars = document.getElementById('navbar-icon');
	navMenu = document.getElementById('navbarNavDropdown');
	/*navMenu.onclick = function () {
		this.classList.remove('show');
	};*/
	//Toggle show hide panel body
	console.log($('.panel-head'));
	$('.panel-head').on('click', function () {
		$(this).next().slideToggle(400);
	});
	$('h4:target').parent().click();
	$('h5:target').parent().parent($('.card')).click();
	/*chnge main header text every 2 seconds*/
	titles = [
                "<span class='ar'>الوثائق والمستندات الإدارية والفنية المطلوبة لاعتماد الوكالة لشركة جيلا (التوكل إليكتريك)</span>",
                "<span class='en'>Administrative and technical documents required to approve the Agency for Gila Company (Tawakel Electric)</span>",
            ];
	i = 0;
	setInterval(
		function () {
			$('h4.mainHeader').html(titles[i]);
			i++;
			if (i > 1) i = 0;
		}, 5000);
	// set address card head background from the attribute data bg url
	el = $('.address-head[data-bg-url]');
	for (i = 0; i < el.length; i++) {
		console.log(el[i]);
		el[i].style.backgroundImage = 'url("../files/media/imgs/cards/' + el[i].getAttribute('data-bg-url') + '")';

	}
});

