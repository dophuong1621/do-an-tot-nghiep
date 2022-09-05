$(document).ready(function () { 
    $('.duyet').click(function(){
        var duyet = $(this).attr('data-id');
        // console.log(duyet);
        $.ajax({
            type: "POST",
            url: "/Admin/Handles/Evaluate/unapproved",
            data: {duyet: duyet},
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