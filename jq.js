/*start menu*/
$(".menu a").click(function(){
    const x= $(this).attr("href");
    const y = $(x).offset().top;
    $("html , body").animate({scrollTop:y},3000);  
})

$(".open").click(function(){
    $(".menu").animate({ width:'200px'},70)
   $(".landing-page").animate({marginLeft :'240px'},70)
})

$(".close").click(function(){
    $(".menu").animate({ width:'200px'},70)
   $(".landing-page").animate({marginLeft :''},70)
})
/*end menu*/

/*start according*/ 
$('.according .header').click(function(){
    $('.item').not($(this).next()).slideUp(700);
    $(this).next().slideToggle(700);
});
/*end according*/

/*start counter*/ 
  function TimerDown() {	
    var endTime = new Date("23 October 2022 2:00:00 ");	
        var now = new Date();
        now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
			endTime = (Date.parse(endTime) / 1000);
			var now = new Date();
			now = (Date.parse(now) / 1000);
			var timeLeft = endTime - now;
			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
			$("#days").html(days +"<span> D</span>");
			$("#hours").html(hours +"<span> H</span>");
			$("#minutes").html(minutes + "<span> M</span>");
			$("#seconds").html(seconds +"<span> S</span>");		
	}
	setInterval(function() { TimerDown(); 
    }, 1000);  
/*end counter*/ 
 
/*start contact*/ 
var maxLength = 100;
$('textarea').keyup(function() {
  var textlength = maxLength- $(this).val().length;
  $('#Reamining').text(textlength);
}); 
/*end contact*/ 
