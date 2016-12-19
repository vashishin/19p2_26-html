$(document).ready(function() {
    
    // наша анимация и сортировка работ в партфолио
    $("#portfolio_grid").mixItUp();
    
    // функция для меню в партфолио для клика по меню
    $(".s_portfolio li").click(function(){
        $(".s_portfolio li").removeClass("active");
        $(this).addClass("active");
    });
    
    
    
    // менеджер отвечающий за всплывающие окна (наше фото) (открывается полностью картинка)
    $(".popup").magnificPopup({type:'image'});
    
    // всплывающие окно для описания работы в разделе резюме
    $(".popup_content").magnificPopup({
        type: "inline",
        midClick: true
    });
    
    // анимация Рамки с фамилией
    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    
    // анимация текста с професией
    $(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
    
    // анимация в разделе обо мне
     $(".animation_1").animated("flipInY", "flipOutY");
     $(".animation_2").animated("fadeInLeft", "fadeOutLeft");
     $(".animation_3").animated("fadeInRight", "fadeOutRight");
     
    //анимация в разделе резюме
    $(".left .resume_item").animated("fadeInLeft", "fadeOutLeft");
    $(".right .resume_item").animated("fadeInRight", "fadeOutRight");
    
    // делает высоту хедера по высоте экрана (т.е на любом экране картинка смотрится хорошо)
    function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
    
    // анимация для кнопки меню
    $(".toogle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });
    
    
    // функция для закрытия меню когда нажимаем по ссылки и прописываем еще span для отображения прозрачного бекграунда при наведении
    $(".top_mnu li a").click(function(){
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    }).append("<span>");
    
    // клик по меню появления меню и исчезновения c эффектом fadeInUp animated с сайта css
    $(".toogle_mnu").click(function() {
        if($(".top_mnu").is(":visible")){
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });
    
    // скрипт для раставления айдишников и якорных ссылок в партфолио
    $(".portfolio_item").each(function(i){
        $(this).find("a").attr("href", "#work_" + i);
        $(this).find(".podrt_descr").attr("id", "work_" + i);
    });
    
//    $("input, select, textarea").jqBootstrapValidation();
    
    $(".top_mnu ul a").mPageScroll2id();
    	
});

// ярлычок загрузки
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

//	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
//	$(".top_text p").animated("fadeInUp", "fadeOutDown");

}); 