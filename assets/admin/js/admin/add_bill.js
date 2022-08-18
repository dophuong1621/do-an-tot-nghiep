$(document).ready(function() {
    var k_sale = $('.k_sale');
    $('#form_add_product').submit(function(e){
        e.preventDefault();
        var name        = $.trim($('#name').val());
        var phone       = $.trim($('#phone').val());
        var amount      = $.trim($('#amount').val());
        var product_name       = $.trim($('#product_name').val());
        var card_name   = $.trim($('#card_name').val());
        var voucher        = $.trim($('#voucher').val());
        var note       = $.trim($('#note').val());
        var flag = true;
        if (name == ''){
            $('.name_error').text('Tên đăng nhập không được để trống');
            flag = false;
        } else{
            $('.name_error').text('');
        }
        if (phone == ''){
            $('.phone_error').text('Số điện thoại không được để trống');
            flag = false;
        } else{
            $('.phone_error').text('');
        }
        if (amount == ''){
            $('.amount_error').text('Số lượng không được để trống');
            flag = false;
        } else{
            $('.amount_error').text('');
        }
        if (product_name == ''){
            $('.product_name_error').text('Tên sản phẩm không được để trống');
            flag = false;
        } else{
            $('.product_name_error').text('');
        }
        if (card_name == ''){
            $('.card_name_error').text('Tên in trên thẻ không được để trống');
            flag = false;
        } else{
            $('.card_name_error').text('');
        }
        if (flag) {
            $.ajax({
                url: "/Admin/Handles/Bill/add_bill",
                type: "POST",
                data: new FormData(this),
                processData: false,
                contentType: false,
                cache: false,
                async: false,
                dataType: "json",
                success: function(response) {
                    check = response.result;
                    alert(response.message);
                    if (check == true) {
                        window.location.href = '/admin/unapproved_invoice';
                    } 
                },
            });
        }
    });
    

});