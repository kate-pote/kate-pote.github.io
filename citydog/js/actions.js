//Кнопка "наверх"
function add_gotop_button(){
    var scroll_start=400,
    	min_width=1350,
    	top=0;
    $('.mainWrapper').append('<a href="#" class="gotop" title="Наверх"></a>');
    var s = $('.gotop'),
    	f = $('.footer'),
    	w = $(window),
		b = $('body');

    function gotop_scroll(){
        if ( w.width() < min_width ) { s.hide(); }
        //Не опускать кнопку ниже футера
        visibleFooter = w.height() - (f.offset().top - w.scrollTop());
        if(visibleFooter > 0) s.css({'bottom' : visibleFooter + 41});
        else s.css({'bottom' : 41});
        //Показать/Скрыть кнопку
        top=w.scrollTop();
        if(top<scroll_start) s.fadeOut(400);
        else s.fadeIn(400);
    };
	
	function addClass_scroll () {
		top > 0 ? b.addClass("scrollOn") : b.removeClass("scrollOn")
	};

    w.scroll(function(){
		if (w.width() > 1000) {
			gotop_scroll();
			addClass_scroll();
		} else {
			b.removeClass("scrollOn");
		};
	});
	
	w.resize(function(){
		if (w.width() > 1000) {
			gotop_scroll();
			addClass_scroll();
		} else {
			b.removeClass("scrollOn");
		};
	});

    s.on({
        mouseenter:function(){
            if(top>scroll_start)s.fadeTo(200,1.0)
            },
        mouseleave:function(){
            if(top>scroll_start)s.fadeTo(400,0.5)
            },
        click:function(){
            $('html,body').animate({ scrollTop:0},'slow');
            return false
            }
    }, s)
}

$(document).ready(function(){
	add_gotop_button();
});
