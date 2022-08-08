$(document).ready(function () { 
    $('.huy').click(function(){
        var huy = $(this).attr('data-id');
        $.ajax({
            type: "POST",
            url: "/Admin/Handles/Bill/canceled",
            data: {huy: huy},
            dataType: "JSON",
            success: function (response) {
                if (response.result == true) {
                    alert(response.message);
                    location.reload();
                } else {
                    alert(response.message);
                }
            }
        });
    })
})