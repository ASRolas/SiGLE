$(document).ready(function(){
    $(".v").show();
    $(".v").click(function(){
        $(".v").hide();
        $(".rv").css("width", "250px");
    });
    $(".r").click(function(){
        $(".v").show();
        $(".rv").css("width", "60px");
    });
});

