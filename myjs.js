$(document).ready ( function (){

    $("figure .curssor img").mousemove(function (){
        $(this).attr('class','makeItGray');
        movePreview( $(this));
        
    });

    $("figure .curssor img").mouseleave(function (){
        $(this).attr('class','makeItNormal');
        removePreview($(this));
        
    });

    function movePreview(e) {
        var name = 'img/'+e.attr('id')+'-large.jpg'
        e.attr('src',name);

    }

    function removePreview(e){
        var name = 'img/'+e.attr('id')+'-small.jpg'
        e.attr('src',name);
     
    }
    
})