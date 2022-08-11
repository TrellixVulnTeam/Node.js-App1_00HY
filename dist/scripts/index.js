$(document).ready(function(){

    var button = $("#close");
    var wwa = $(".wwa_opn");

    button.click(function(){
        $(".wwa_modal").css("display","none");
        $(".fake_layout").css("display","none");
    })
    wwa.click(function(){
        $(".wwa_modal").css("display","flex");
        $(".fake_layout").css("display","flex");

    })
    $("#gooey-button").click(function(){
        $(".form_modal").css("display","flex");
    })
    $(".close_modall").click(function(){
        $(".form_modal").css("display","none");
    })
    $("#homepage").click(function(){
        window.location.href = "http://localhost:5500/";
    })

})