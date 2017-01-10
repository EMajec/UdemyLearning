$("ul").on("click", "li", function() {
	$(this).toggleClass("complete");
	// $(this).css("text-decoration", "line-through");
});

$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropogation();

})

$("input[type='text']").on("keypress",function(event){
	if (event.which === 13){
	var todoText = $(this).val();
	$(this).val("");
	$("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>").appendTo("ul");
	}

	// event.stopPropogation();
})

$(".fa-plus-circle").on("click", function(){
	$("input[type='text']").fadeToggle();

})

// $(body).on("click", function(){
// 	$(this).toggleClass("body")

// })