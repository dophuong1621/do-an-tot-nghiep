$(document).ready(function () {
    var sec = 60;
    var timer = setInterval(function () {
        $('#hideMsg span').text(sec--);
        if (sec == -1) {
            clearInterval(timer);
        }
    }, 1000);
    // if($('#hideMsg span').text(sec--) == 0){
    $('.resend').click(function (e) {
        e.preventDefault();
        var sec = 60;
        var timer = setInterval(function () {
            $('#hideMsg span').text(sec--);
            if (sec == -1) {
                clearInterval(timer);
            }
        }, 1000);
        var email = $.trim($('#email').val());
        $.ajax({
            type: "POST",
            url: "/Handles/EmailSend/send",
            data: {
                email: email,
            },
            dataType: "json",
        });
        return false;
    });
    // }
   
})