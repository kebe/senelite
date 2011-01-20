 /*$(document).ready(function(){
  $(".menu-570").hover(function(){ // news category
    $("#news-menu").show(); 
	$("ul#main-menu").css('border-bottom','0px');
	$("#subnav").hide(); 
 },  
 function(){
    $("#news-menu").hide(); 
	$("ul#main-menu").css('border-bottom','1px ridge #BBBBBB');
	$("#subnav").show(); 

 }
 );
 
 
 $("#news-menu").hover(function(){
    $("#news-menu").show(); 
	$("ul#main-menu").css('border-bottom','0px');
	$(".menu-570 a").css('color','black');
	$(".menu-570").addClass("menuhoverbg");
	$("#subnav").hide(); 

 },  
 function(){
    $("#news-menu").hide(); 
	$("ul#main-menu").css('border-bottom','1px ridge #BBBBBB');
	$(".menu-570 a").css('color','#FFFFFF');
	$(".menu-570").removeClass("menuhoverbg");
	$("#subnav").show(); 
 }
 );
});*/
 
 $(document).ready(function(){
  $(".menu-570").hover(function(){ // news category
  alert("hello");
    $(".menu-570").append('
		<ul class ="hovermenu" id="news-menu" style="display:visible">
		<li><a href="/news/world" title="">World</a></li> 
		<li><a href="/news/business" title="">Business</a></li> 
		<li><a href="/news/politics" title="">Politics</a></li> 
		<li><a href="/news/economy" title="">Economy</a></li> 
		<li><a href="/news/technology" title="">Technology</a></li> 
		<li><a href="/news/science" title="">Science</a></li> 
		<li><a href="/news/health" title="">Health</a></li> 
	</ul>
	'); 
 }
 });