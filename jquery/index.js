$(function (){
	
	var nav=$('.header .header-inner-nav');
	var list=$('.header .header-inner-nav li');
	
	list.on('click',nav.eq(0),function (){
		$(this).addClass('focus');
		$(this).siblings('li').removeClass('focus');
	})
	
	var back=$(".back");
		back.click(function (){
			var t=$(window).scrollTop();
			var timer=t/5;
			$('body,html').animate({
				'scrollTop': 0
			},timer)
			list.eq(0).addClass('focus');
			list.eq(0).siblings('li').removeClass('focus');
		})
		
	list.eq(1).click(function (){
		$('body,html').animate({
			'scrollTop': 820
		},164)
	})
		
	list.eq(2).click(function (){
		$('body,html').animate({
			'scrollTop': 2220
		},444)
	})	
		
	list.eq(3).click(function (){
		var t;
		if(document.documentElement.scrollHeight){
			t=document.documentElement.scrollHeight;
		}else{
			t=document.body.scrollHeight;
		}
		console.log(t)
		
		$('body,html').animate({
			'scrollTop': t
		},905)
	})	
		
	list.eq(4).click(function (){
		var t;
		if(document.documentElement.scrollHeight){
			t=document.documentElement.scrollHeight;
		}else{
			t=document.body.scrollHeight;
		}
		console.log(t)
		
		$('body,html').animate({
			'scrollTop': t
		},905)
	})		
		
	var mySwiper=new Swiper('.swiper-container',{
		autoplay: {
		autoplay: true,
		disableOnInteraction:false,
		},
		effect:'fade',
		fadeEffect:true,
		loop:true,
		pagination: {
		    el: '.swiper-pagination',
		    clickable :true,
		},
		preventClicks : false,
		on:{
			
	  	 	click: function(){
	  	 		window.open("index.html");
	    	},
		},	
	})
	
	var shade=$('.sort .shade');

	shade.each(function (){
		this.style.height=$(this).next('img').css('height');
		this.style.width=$(this).next('img').css('width');
	})
	
	var glassbox=$('.sort .glassbox');

	glassbox.each(function (){
		this.style.height=$(this).next('.shade').css('height')
		this.style.width=$(this).next('.shade').css('width')
		
		$(this).mouseenter(function (){
			$(this).next('.shade').fadeOut(500)
		}).mouseleave(function (){
			$(this).next('.shade').fadeIn(500);
		})
		
		$(this).click(function(){
			window.location="index.html"
		})
	})
	
})

$(function (){
	
		var ul=$(".proshow .pros-list")
		var btn=true;
		
		$(window).scroll(function (){
			
			var viewHeight=document.documentElement.clientHeight;
			var scrollY=document.documentElement.scrollTop||document.body.scrollTop;
			var Top=viewHeight+scrollY;
			
			if(ul.eq(0).offset().top <= Top && btn){
				btn=false;
				$.ajax({
					type:"get",
					url:"index.json",
					async:true,
					success: function (data){
						
					
						for(var i=0;i<data.list.length;i++){
						
						var list=data.list[i];
						
						for(var j=0;j<list.src.length;j++){
							
							var oli=$('<li class="pros-dt"></li>');
							var odiv=$('<div class="dt-br"></div>');
							var price=$('<span></span>');
							price.html(list.price[j]);
							price.addClass("br-pr")
							
							var cu=$('<span class="br-cu">¥</span>')
							var buy=$('<span class="br-buying">立即抢购</span>')
							odiv.html('<span class="br-title">'+ list.title[j]+'</span>');
							cu.appendTo(odiv);
							price.appendTo(odiv);
							buy.appendTo(odiv);
							
							oli.html('<img src="'+ list.src[j] +'"/>');
							odiv.appendTo(oli);
							
							ul.append(oli);
						}
					}	
					}
				});
			}
		})	
})

