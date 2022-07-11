$(document).ready(function () {
    $(".select_payment").select2({
        width: "100%",
    });
    $("#city").select2({
        width: "100%",
        placeholder: "Chọn tỉnh / thành phố",
    });
    $("#district").select2({
        width: "100%",
        placeholder: "Chọn quận / huyện",
    });
    var payment = $(".btn_payment");
    var valPayment = $(".payment");
    payment.click(function () {
        $('.ctn_cart').addClass('payment_show');
    });
    if (valPayment.val()) {
        payment.click();
    }
    $('#city').change(function () {
        var city = $(this).val();
        $.ajax({
            type: "POST",
            url: "/Handles/BillInforController/district",
            dataType: "JSON",
            data: { city: city },
            success: function (response) {
                data = response.data;
                // console.log(data);
                if (response.result == true) {
                    htmlDis = '';
                    $.each(data, function (index, item) {
                        htmlDis += '<option value="" ></option>';
                        htmlDis += '<option value="'+ data[index].dis_id+' "> '+data[index].dis_name +'</option>';
                    });
                    $('#district').html(htmlDis);
                }
            }
        });
    })
    $("#form_payment").validate({
        errorPlacement: function (error, element) {
            error.insertAfter(element);
            error.wrap("<div class='err-red'>");
        },
        rules: {
            user_name: "required",
            phone: "required",
            city: "required",
            district: "required",
            address: "required",
        },
        messages: {
            user_name: "Họ và tên không được để trống",
            phone: "Số điện thoại không được để trống",
            city: "Chọn tỉnh / thành phố",
            district: "Chọn quận / huyện",
            address: "Địa chỉ không được để trống",
        },
        submitHandler: function (form) {
            var formBills = new FormData();
            let addIdCart = [];
            var idCart = [];
            var moneyCart = [];
            var amount = [];
            $('.idCart').each(function () {
                idCart.push($(this).attr('data-cart-id'));
            })
            $('.price_product').each(function () {
                moneyCart.push($(this).text().replace(',', ''));
            })
            $('.amount').each(function () {
                amount.push($(this).val());
            })
            addIdCart.push([idCart, moneyCart, amount]);
            // console.log(addIdCart);

            formBills.append('user_name', $('.user_name').val());
            formBills.append('user_phone', $('.user_phone').val());
            formBills.append('city', $('#city').val());
            formBills.append('district', $('#district').val());
            formBills.append('user_address', $('.user_address').val());
            formBills.append('user_card', $('.user_card').val());
            formBills.append('user_note', $('.user_note').val());
            formBills.append('voucher', $('.idVoucher').val());
            formBills.append('trans_fee', parseInt($('.h_trans_fee').html().replace(',', '')));
            formBills.append('voucher_fee', parseInt($('.h_voucher_fee').html().replace(',', '')));
            formBills.append('total_fee', parseInt($('.h_total_fee').html().replace(',', '')));
            formBills.append('id_cart', JSON.stringify(addIdCart));

            $.ajax({
                type: "POST",
                url: "/Handles/BillInforController/pay",
                dataType: "JSON",
                data: formBills,
                processData: false,
                contentType: false,
                success: function (response) {
                    if (response.result == "true") {
                        alert(response.msg)
                        window.location.href = "/thong-tin-thanh-toan.html";
                    } else {
                        alert(response.msg)
                    }
                }
            });
        }
    });

    $.ajax({
        type: "POST",
        url: "/ProductDetailsController/infoProductInCart",
        dataType: "json",
        success: function (response) {
            check = response.result;
            if (check == true) {
                var cart = response.data;
                if (cart.length > 0) {
                    var htmlCart = '';
                    $.each(cart, function (index, value) {
                        htmlCart += `<div class="k_sp d-flex mb_20 main_cart1 idCart" data-cart-id="` + value.id + `">
                            <button class="btn_t color_d btn_dlt_pro">Xóa</button>
                            <div class="k_card">
                                <img src="` + value.image + `" alt="` + value.name + `" class="img_card" >
                            </div>
                            <div class="ctn_card d-flex flex-column justify-content-center">
                                <p class="cart_t1">` + value.name + `</p>
                                <p class="cart_t2"><span class="cart_t2 price_pro price_product">` + value.price + `</span> VNĐ</p>
                                <div class="ctn_card_k1 d-flex justify-content-between">
                                    <button type="button" class="tang_giam">
                                        <span class="tg_tru btn_down">-</span>
                                        <input type="text" class="tg_value value_amount amount" value="` + value.amount + `">
                                        <span class="tg_cong btn_up">+</span>
                                    </button>
                                    <p class="cart_t3"><span class="cart_t3 total_money"></span> VNĐ</p>
                                </div>
                            </div>
                        </div>`;
                    });
                    $('.cart_l').html(htmlCart);
                    total();
                }
            }
        },
    });
    var check_coupon = []
    $('.btn_km').click(function () {
        if ($('#vou_coupon').val() != '') {
            var coupon = $.trim($('#vou_coupon').val());
            if (check_coupon == '') {
                $.ajax({
                    type: "POST",
                    url: "/Handles/BillInforController/check_coupon",
                    dataType: "json",
                    data: { coupon: coupon },
                    success: function (response) {
                        check = response.result;
                        data = response.data;
                        if (coupon != '') {
                            if (response.result == true) {
                                alert(response.message);
                                check_coupon.push(response.data);
                                $('.btn_km').addClass('coupon');
                                if ($('.btn_km').hasClass('coupon') == true) {
                                    htmlVou = '';
                                    htmlVouTotal = '';
                                    var arrTotal = $('.h_total_fee').text().split(',');
                                    var strTotal = arrTotal.join('');
                                    var arrValSum = $('.valSum').text().split(',');
                                    var strValSum = arrValSum.join('');

                                    if (data['vou_condition'] == 1) {
                                        htmlVou += '<p class="ml-auto order_r tienKM"><span class="h_voucher_fee">' + data['discount'].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '</span> VNĐ</p>';
                                        tongTien = strTotal - data['discount'];
                                        htmlVouTotal += ' <p class="ml-auto order_r total_money color_x"><span class="order_r total_money color_x value_sum h_total_fee" >' + tongTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '</span> VNĐ</p>';
                                    } else if (data['vou_condition'] == 2) {
                                        htmlVou += '<p class="ml-auto order_r tienKM"><span class="h_voucher_fee">' + data['discount'] + '</span> %</p>';
                                        tongTien = strTotal - (strValSum / data['discount']);
                                        htmlVouTotal += ' <p class="ml-auto order_r  total_money color_x"><span class="order_r total_money color_x value_sum h_total_fee" >' + tongTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '</span> VNĐ</p>';
                                    }
                                    $('.tienKM').html(htmlVou);
                                    $('.tongTien').html(htmlVouTotal);
                                    if (data['id'] != '') {
                                        $('#vou_coupon').html('<input type="hidden" class="idVoucher" value="' + data['id'] + '"/>');
                                    } else if (data['id'] == undefined) {
                                        $('#vou_coupon').html('<input type="hidden" class="idVoucher" value=""/>');
                                    }

                                }
                            }
                            else {
                                alert(response.message);
                            }
                        }
                    }
                });
            }
        } else {
            $('.tienKM').html('<p class="ml-auto order_r tienKM"><span class="h_voucher_fee">0</span> VNĐ</p>');
            $('.tongTien').html('<p class="ml-auto order_r  total_money color_x"><span class="order_r total_money color_x value_sum h_total_fee" >' + $('.valSum').text() + '</span> VNĐ</p>')
            check_coupon = [];
        }


    })
});