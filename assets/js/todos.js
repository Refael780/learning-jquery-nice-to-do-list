
/*
$("li").on("mouseover",function(){
    console.log("its hover");

    $("li").css("cursor","pointer");  
    $(this).css("color", "rgb(127, 127, 127)");
    if ( $(this).on("mouseleave",function(){

        $(this).css("color", "rgb(0, 0, 0)");

    })) {
        
    }
});
*/
$("ul").on("click","li",function(event){

    $(this).toggleClass("completed");
    event.stopPropagation();
})
$("ul").on("mouseover","li",function(){
    $(this).toggleClass("hoverlist");
})
$("ul").on("click","span",function(event){

    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
    if(event.which===13){

       $("ul").append("<li><span><i class='fas fa-trash'></i> </span>" +($(this).val())+"</li>");
    }
})

/*
$("li").on("click",function(){

   
    if ($(this).css("color") === "rgb(128, 128, 128)") 
    {
        console.log("its gray");
        $(this).css({
            textDecoration: "none",
             color:"rgb(0, 0 ,0)"
            });
    }
    else{ 
    $(this).css({
    textDecoration: "line-through",
     color:"rgb(128, 128, 128)"
    });
}
});
*/