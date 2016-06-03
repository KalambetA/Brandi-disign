
	$(function(){
		var slides=3;
		if($(window).width()<1000){
			slides=1;
		}
		$('.bxslider').bxSlider({
		  minSlides: slides,
		  maxSlides: slides,
		  slideWidth: 1170,
		  slideMargin: 10,
		  moveSlides:1
		})

	$('form').submit(function(e){
		e.preventDefault();
		$(this)
			.find('.checked')
			.each(function(){
				if($(this).val()==''){
					$(this).css('border-color','red')
				}
				else{
					$(this).css('border-color','green')
				}
			})
	})
	
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [49.993349, 36.239665],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'ул.Девичья 6, Харьков',
            balloonContent: 'SPALAH'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/position.png',
            // Размеры метки.
            iconImageSize: [26, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-10, -50]
        });

    myMap.geoObjects.add(myPlacemark);
});

		$('.block3 ul a').click(function(e){
			e.preventDefault()
			$('[data-type]').hide()
				$('[data-type="'+$(this).attr('href')+'"]').show();
		})
	
	$('.filter').click(function(e){
		e.preventDefault();
		$(this)
			.toggleClass('clicked')
		 	.siblings()
		 	.removeClass('clicked');	
	})
	
		$('.block3 ul a[href="all"]').click(function(e){
			e.preventDefault()
			$('.block4 .img').show();
		})
		$('.nav a').click(function(e){
		e.preventDefault();
		var x=$(this).attr('href');
		$('body, html').animate({'scrollTop':$(x).offset().top},400,function(){
			$(x).addClass("current").siblings().removeClass("current");
		})
	})
	$('.go_top').click(function(e){
		e.preventDefault();
		$('body, html').animate({'scrollTop':0},400,function(){
			$('blocks.current').removeClass('current')
		})
	})
	$('.nav a').click(function(e){
		e.preventDefault();
		if($(window).width()<1000)
			$('.nav ul').hide() 
		
	})
	
		$('.nav_call').click(function(e){
		e.preventDefault();
		if($('.nav ul').hide())
			$('.nav ul').css('display','block')
		else{
			$('.nav ul').css('display','none')
		}
		})
		$('.nav_ul').click(function(e){
		e.preventDefault();
		$('.nav ul').hide()
		})
		
})

// $(function(){
// 	$('.img').each(function(){
// 		$(this)
// 			.css('background-image','url('+$(this).find('img').attr('src')+')')
// 			.find('img')
// 			.hide()
// 	})
// })
