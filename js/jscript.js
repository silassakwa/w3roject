
$(document).ready(function(){
  $(".product-image").click(function(event){
    $(".hide").slideToggle();
    $(".show").slideToggle();
    $(".show").slideToggle();
  });
});

$(document).ready(function(){
  $(".design-image").click(function(event){
    $(".hide3").slideToggle();
    $(".show3").slideToggle();
    $(".show3").slideToggle();
  });
});

$(document).ready(function(){
  $(".develoment-image").click(function(event){
    $(".hide2").slideToggle();
    $(".show2").slideToggle();
    $(".show2").slideToggle();
  });
});
//hover effects
$(document).ready(function(){
  $("#work1").hover(function(){
    $(".img1").css("background-color", "yellow");
  
  });
});

$(document).ready(function(){
  $(form).submit(function(){
    var name=$("input#name").val();
    var name=$("input#email").val();
    var name=$("input#comment").val();
    if($("input#name").val() && $("input#email").val())
    {
      alert(name+",we have received your message,thank you for reaching to us");

    }

else
{
  alert("enter your name and email address");
}
  });
});