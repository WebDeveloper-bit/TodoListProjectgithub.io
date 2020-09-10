$("ul").on("click","li",function(){

	$(this).toggleClass("complete")
});

 
$("ul").on("click","span",function(){

	$(this).parent().fadeOut(200,function(event){
		$(this).remove();

		
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{	//input text is put in todotext.
		var todotext = $(this).val();
		$(this).val("");
		//adding input in todo list.
		$("ul").append("<li><span><i class='fa fa-trash m-0'></i></span>"  +  todotext + "</li>");
	}

});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
