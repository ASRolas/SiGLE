$(document).ready(function(){
    $(".v").hide();
  $(".r").click(function(){
    $(".v").show();
    $(".rv").css("width", "60px");
  });
  $(".v").click(function(){
    $(".v").hide();
    $(".rv").css("width", "250px");
  });
});

