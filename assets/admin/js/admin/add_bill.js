$(document).ready(function () {
    var k_sale = $('.k_sale');
    $('#form_add_product').submit(function (e) {
        e.preventDefault();
        var name = $.trim($('#name').val());
        var phone = $.trim($('#phone').val());
        var amount = $.trim($('#value_amount').val());
        var product_name = $.trim($('#product_name').text());
        var product_id = $.trim($('#product_name').val());
        var price_product = $.trim($('#product_price').val());
        price_pro = price_product.replace(",", "");
        var card_name = $.trim($('#card_name').val());
        var voucher = $.trim($('#voucher').val());
        var total_voucher = $.trim($('.dis_voucher').val());
        var total_price = $.trim($('.value_sum').text().split(",").join(""));
        var note = $.trim($('#note').val());
        var flag = true;
        if (name == '') {
            $('.name_error').text('Tên người đặt không được để trống');
            flag = false;
        } else {
            $('.name_error').text('');
        }
        if (phone == '') {
            $('.phone_error').text('Số điện thoại không được để trống');
            flag = false;
        } else {
            $('.phone_error').text('');
        }
        if (amount == '') {
            $('.value_amount_error').text('Số lượng không được để trống');
            flag = false;
        } else {
            $('.value_amount_error').text('');
        }
        if (product_name == '') {
            $('.product_name_error').text('Tên sản phẩm không được để trống');
            flag = false;
        } else {
            $('.product_name_error').text('');
        }
        if (product_id == '') {
            $('.product_id_error').text('Tên sản phẩm không được để trống');
            flag = false;
        } else {
            $('.product_id_error').text('');
        }
        if (card_name == '') {
            $('.card_name_error').text('Tên in trên thẻ không được để trống');
            flag = false;
        } else {
            $('.card_name_error').text('');
        }
        if (flag) {
            $.ajax({
                url: "/Admin/Handles/Bill/add_bill",
                type: "POST",
                data: {
                    name : name,
                    phone: phone,
                    amount: amount,
                    product_id: product_id,
                    price_pro: price_pro,
                    card_name: card_name,
                    voucher: voucher,
                    total_voucher: total_voucher,
                    note: note,
                    total_price : total_price,
                },
                // processData: false,
                // contentType: false,
                // cache: false,
                // async: false,
                dataType: "json",
                success: function (response) {
                    check = response.result;
                    alert(response.message);
                    if (check == true) {
                        window.location.href = '/admin/unapproved_invoice';
                    }
                },
            });
        }
    });
    $('#product_name').change(function () {
        var name = $(this).val();
        $.ajax({
            type: "POST",
            url: "/Admin/Handles/Bill/price_product",
            dataType: "JSON",
            data: { name: name },
            success: function (response) {
                data = response.data;
                if (response.result == true) {
                    if (response.result != '') {
                        htmlPrice = '';
                        htmlPrice += '<div class="d-flex mb-3">';
                        htmlPrice += '<label for="exampleInputEmail1" class="d-flex col-xl-3">Giá sản phẩm</label>';
                        htmlPrice += '<div class="w-100 text-right">';
                        htmlPrice += '<input type="text" class="form-control col-xl-12 mb-1" value="' + data.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '"  name="product_price" id="product_price" disabled>';
                        htmlPrice += '</div>';
                        htmlPrice += '</div>';
                        $('.pro_price').html(htmlPrice);
                    }
                } else {
                    htmlPrice = '';
                    htmlPrice += '';
                    $('.pro_price').html(htmlPrice);
                }
            }
        });
    })
    $('#voucher').change(function () {
        var vou = $(this).val();
        $.ajax({
            type: "POST",
            url: "/Admin/Handles/Bill/vou",
            dataType: "JSON",
            data: { vou: vou },
            success: function (response) {
                data = response.data;
                if (response.result == true) {
                    if (response.result != '') {
                        dis = '';
                        if (data.vou_condition == 1) {
                            dis += data.discount.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' VNĐ';
                        } else {
                            dis += data.discount + '%';
                        }
                        htmlVou = '';
                        htmlVou += '<div class="d-flex mb-3">';
                        htmlVou += '<label for="" class="d-flex col-xl-3">Giảm</label>';
                        htmlVou += '<div class="w-100 text-right">';
                        htmlVou += '<input type="text" class="form-control col-xl-12 mb-1 dis_voucher" value="' + dis + '"  name="dis_voucher" id="dis_voucher" disabled>';
                        htmlVou += '</div>';
                        htmlVou += '</div>';
                        $('.giam_vou').html(htmlVou);
                    }
                }
            }
        });
    })
    function tinhTongtien($dongHienTai) {
        var dongia = $dongHienTai.find('#product_price').val();
        var donGia = dongia.split(',').join('');
        var soLuong = $dongHienTai.find('#value_amount').val();
        var coupon = $dongHienTai.find('#dis_voucher').val();
        donGia = parseFloat(donGia);
        soLuong = parseFloat(soLuong);
        if($dongHienTai.find('#voucher').val() == ''){
            var thanhTien = (donGia * soLuong);
            thanhTien = thanhTien;
        }else{
            // console.log(coupon.length);
            if (coupon.length <= 4) {
                var coupon = coupon.split('%').join('');
                var thanhTien = (donGia * soLuong) / coupon;
            } else {
                var coupon = coupon.split(',').join('');
                var coupon = coupon.split(' VNĐ').join('');
                var thanhTien = (donGia * soLuong) - coupon;
            }
        }
        
        $dongHienTai.find('.value_sum').text(thanhTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
    $(document).on('change', '#product_price, #value_amount, #dis_voucher', function () {
        var myTr = $(this).parent().parent().parent();
        tinhTongtien(myTr);
    })
});