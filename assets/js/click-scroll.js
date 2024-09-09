//jquery-click-scroll

var sectionArray = [2, 3, 4, 5,6,7];

$.each(sectionArray, function(index, value){

     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top - 94;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;



     });

    $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 94;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
    });

});
