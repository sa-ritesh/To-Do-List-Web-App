
$("ul").on('click','li',function(){
	$(this).toggleClass("completed");
});

$("input").keypress(function(event){
if(event.which==13){
	var ans= this.value;
	$("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + ans + "</li>");
	this.value="";
}
});
$("ul").on('click','span',function(){
	$(this).parent().remove();
});

