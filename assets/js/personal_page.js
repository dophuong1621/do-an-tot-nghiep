const contact = [{
    "image": "/assets/images/sdt.png",
    "title": "Số điện thoại",
    "title1": "Thêm số điện thoại",
    "title2": "Số điện thoại"
}, {
    "image": "/assets/images/email.png",
    "title": "Email",
    "title1": "Thêm tài khoản Email",
    "title2": "Email"
}, {
    "image": "/assets/images/dc.png",
    "title": "Địa chỉ",
    "title1": "Thêm địa chỉ",
    "title2": "Link địa chỉ"
}, {
    "image": "/assets/images/skype.png",
    "title": "Skype",
    "title1": "Thêm tài khoản Skype",
    "title2": "Link Skype"
}, {
    "image": "/assets/images/fb.png",
    "title": "Facebook",
    "title1": "Thêm tài khoản Facebook",
    "title2": "Link Facebook cá nhân"
}, {
    "image": "/assets/images/insta.png",
    "title": "Instagram",
    "title1": "Thêm tài khoản Instagram",
    "title2": "Link Instagram"
}, {
    "image": "/assets/images/twitter.png",
    "title": "Twitter",
    "title1": "Thêm tài khoản Twitter",
    "title2": "Link Twitter"
}, {
    "image": "/assets/images/tiktok.png",
    "title": "Tiktok",
    "title1": "Thêm tài khoản Tiktok",
    "title2": "Link Tiktok"
}, {
    "image": "/assets/images/zalo.png",
    "title": "Zalo",
    "title1": "Thêm tài khoản Zalo",
    "title2": "Nhập số điện thoại đăng ký Zalo"
}, {
    "image": "/assets/images/ytb.png",
    "title": "Youtube",
    "title1": "Thêm tài khoản Youtube",
    "title2": "Link Youtube"
}, {
    "image": "/assets/images/snap.png",
    "title": "Snapchat",
    "title1": "Thêm tài khoản Snapchat",
    "title2": "Link Snapchat"
}, {
    "image": "/assets/images/in.png",
    "title": "LinkedIn",
    "title1": "Thêm tài khoản LinkedIn",
    "title2": "Link LinkedIn"
}, {
    "image": "/assets/images/pin.png",
    "title": "Pinterest",
    "title1": "Thêm tài khoản Pinterest",
    "title2": "Link Pinterest"
}, {
    "image": "/assets/images/be.png",
    "title": "Behance",
    "title1": "Thêm tài khoản Behance",
    "title2": "Link Behance"
}, {
    "image": "/assets/images/momo.png",
    "title": "Ví momo",
    "title1": "Thêm tài khoản Ví momo",
    "title2": "Nhập số điện thoại đăng ký Momo"
}, {
    "image": "/assets/images/pay.png",
    "title": "Paypal",
    "title1": "Thêm tài khoản Paypal",
    "title2": "Link Paypal"
}, {
    "image": "/assets/images/tknh.png",
    "title": "Tài khoản ngân hàng",
    "title1": "Thêm tài khoản ngân hàng"
}, {
    "image": "/assets/images/dd.png",
    "title": "Đường dẫn",
    "title1": "Thêm đường dẫn",
    "title2": "Link đường dẫn"
}];
var bank = ['Agribank', 'BIDV', 'Vietcombank', 'Vietinbank', 'OCB', 'ACB', 'TP Bank', 'Maritime Bank', 'Sacombank', 'DongA Bank', 'Eximbank', 'Nam A Bank', 'Saigon Bank', 'VP Bank', 'Techcombank', 'MB Bank', 'Bac A Bank', 'VIB', 'SeA Bank'];

$(document).ready(function () {

    $('.back').click(function(){
        $('#modal_edit_link').modal('hide');
        $('#modal_info_bank').modal('hide');
    })
    var k_username = $('.k_username');
    var ctn_page = $('.ctn_page');
    $('.edit_name').click(function () {
        k_username.addClass('edit_username');
    });
    $('.cn_h').click(function () {
        k_username.removeClass('edit_username');
    });
    $('.cn_l').click(function () {
        $('.user_name1').text($('#user_name').val());
        var username = $('#user_name').val();
        $.ajax({
            type: 'POST',
            url: "/Handles/PersonalPageController/edit_user_name",
            data: {
                user_name: username,
                check: true
            },
            success: function (data) {
                // alert("Thêm được rồi nhé");
            },
        });
        k_username.removeClass('edit_username');
    });
    $('.btn_edit_info').click(function () {
        ctn_page.addClass('edit_info');
    });
    // $('.btn_huy').click(function () {
    //     ctn_page.removeClass('edit_info');
    // });
    $('.k_info1').click(function () {
        ctn_page.addClass('edit_info');
    });
    $('.k_info2').click(function () {
        ctn_page.addClass('edit_info');
    });
    $('.btn_hb').click(function () {
        location.reload();
    });



    $.each(contact, function (index, value) {
        var khoi = $('.ctn_k');
        if (index < 4) {
            khoi = $('.ctn_ttlh');
        } else if (index > 3 && index < 14) {
            khoi = $('.ctn_mxh');
        } else if (index > 9 && index < 17) {
            khoi = $('.ctn_tc');
        }
        khoi.append(`<div class="k_tlh_t d-flex align-items-center">
            <img src="`+ value.image + `" alt="` + value.title + `" class="icon_tlh">
            <p class="text_tlh1">`+ value.title + `</p>
            <button type="button" class="btn_t ml-auto btn_tlh" data-id="`+ index + `">+</button>
          </div>`);
    });
    var id_lh = 0;
    $('.btn_tlh').click(function () {
        var elm = $(this);
        var id = elm.attr('data-id');
        id_lh = id;
        var image = contact[id].image;
        var title = contact[id].title;
        var title1 = contact[id].title1;
        var title2 = contact[id].title2;
        $('#modal_add_contact').modal('hide');
        $('#modal_add_link').modal('show');
        $('.icon_ttlh2').attr('src', image);
        var htmlAdd = '';
        if (id == 16) {
            var option = '';
            $.each(bank, function (index, value) {
                option += '<option value=' + index + '>' + value + '</option>';
            });
            htmlAdd = `<div class="k_td d-flex" data-id="` + id + `">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh2" >
                    <div class="add_tknh">
                    <div class="mb_20">
                    <select class="select_bank subtitleCont">
                    <option value=''>Chọn ngân hàng</option>
                        `+ option + `
                    </select>
                    <p id="validate1_error" class="error_vld"></p>
                    </div>
                    <input type="text" class="text_td4 contentCont" placeholder="Số tài khoản"> 
                    <p id="validate2_error" class="error_vld"></p>
                    </div>
                </div>`;
        } else {
            var text = '';
            if (id == 0) { text = 'text_td5'; }
            htmlAdd = `<div class="k_td d-flex" data-id="` + id + `">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh2" >
                    <div class="k_td_r">
                        <input type="text" class="text_td1 " value="`+ title + `" readonly> 
                        <input type="text"  class="text_td2 subtitleCont" placeholder="Tiêu đề phụ (chỉ hiển thị ở dạng xem danh sách)"> 
                        <p id="validate1_error" class="error_vld"></p>
                    </div>
                </div>
                <input type="text" class="text_td3 contentCont `+ text + `" placeholder="` + title2 + `">
                <p id="validate2_error" class="error_vld"></p> `;
            if (id == 8) { text = 'text_td5'; }
            htmlAdd = `<div class="k_td d-flex" data-id="` + id + `">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh2">
                    <div class="k_td_r">
                        <input type="text" class="text_td1 " value="`+ title + `" readonly> 
                        <input type="text" class="text_td2 subtitleCont" placeholder="Tiêu đề phụ (chỉ hiển thị ở dạng xem danh sách)"> 
                        <p id="validate1_error" class="error_vld"></p>
                    </div>
                </div>
                <input type="text" class="text_td3 contentCont `+ text + `" placeholder="` + title2 + `">
                <p id="validate2_error" class="error_vld"></p> `;
            if (id == 14) { text = 'text_td5'; }
            htmlAdd = `<div class="k_td d-flex" data-id="` + id + `">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh2">
                    <div class="k_td_r">
                        <input type="text" class="text_td1 " value="`+ title + `" readonly> 
                        <input type="text" id="" class="text_td2 subtitleCont" placeholder="Tiêu đề phụ (chỉ hiển thị ở dạng xem danh sách)"> 
                        <p id="validate1_error" class="error_vld"></p>
                    </div>
                </div>
                <input type="text" class="text_td3 contentCont `+ text + `" placeholder="` + title2 + `">
                <p id="validate2_error" class="error_vld"></p> `;
        }

        $('#modal_add_link .modal-body').html(htmlAdd);
        $('#modal_add_link .modal-title').text(title1);
        $('.select_bank').select2({
            width: "100%",
            placeholder: "Chọn ngân hàng",
        });
    });
    var data_link = [];
    var arr_phone = [];
    var arr_email = [];
    var arr_address = [];
    var arr_skype = [];
    var arr_facebook = [];
    var arr_instagram = [];
    var arr_twitter = [];
    var arr_tiktok = [];
    var arr_zalo = [];
    var arr_youtube = [];
    var arr_snapchat = [];
    var arr_linkedIn = [];
    var arr_pinterest = [];
    var arr_behance = [];
    var arr_momo = [];
    var arr_paypal = [];
    var arr_bank = [];
    var arr_link = [];
    $('#modal_add_link .btn_luu').click(function () {
        var flag = true;
        var dataId = $('.modal-body .d-flex').attr('data-id');
        var subtitle = $('.subtitleCont').val();
        var content = $('.contentCont').val();


        var validate1 = $('#validate1_error');
        var validate2 = $('#validate2_error');
        var image = contact[id_lh].image;
        var title = contact[id_lh].title;
        var title1 = contact[id_lh].title1;
        var title2 = contact[id_lh].title2;
        if (id_lh == 16) {
            var text_td2 = $('.select_bank').val();
            var text_td3 = $.trim($('.text_td4').val());
            var tdp = bank[text_td2];
            var tdp4 = text_td3;
            if (text_td2 == '') {
                validate1.text('Chọn ngân hàng');
                flag = false;
            } else {
                validate1.text('');
            }
            if (text_td3 == '') {
                validate2.text('Không được để trống');
                flag = false;
            } else {
                validate2.text('');
                arr_bank.push([id_lh, $('.select_bank').val(), content]);
            }
            change_input($('.select_bank'), validate1);
            change_input($('.text_td4'), validate2);
        } else {
            var text_td2 = $.trim($('#modal_add_link .text_td2').val());
            var text_td3 = $.trim($('#modal_add_link .text_td3').val());
            var tdp = text_td2;
            var tdp2 = text_td3

            if (id_lh == 1) {
                if (text_td3 == '') {
                    validate2.text('Email không được để trống');
                    flag = false;
                } else if (!isEmail(text_td3)) {
                    validate2.text('Nhập đúng định dạng email');
                    flag = false;
                } else {
                    validate2.text('');
                    arr_email.push([id_lh, subtitle, content]);
                }
            } else if (id_lh == 0) {
                if (text_td3 == '') {
                    validate2.text('Số điện thoại không được để trống');
                    flag = false;
                } else if (!isPhone(text_td3)) {
                    validate2.text('Nhập đúng định dạng số điện thoại');
                    flag = false;
                } else {
                    validate2.text('');
                    arr_phone.push([id_lh, subtitle, content]);
                }
            } else if (id_lh == 8) {
                if (text_td3 == '') {
                    validate2.text('Số điện thoại không được để trống');
                    flag = false;
                } else if (!isPhone(text_td3)) {
                    validate2.text('Nhập đúng định dạng số điện thoại');
                    flag = false;
                } else {
                    arr_zalo.push([id_lh, subtitle, content]);
                    validate2.text('');
                }
            } else if (id_lh == 14) {
                if (text_td3 == '') {
                    validate2.text('Số điện thoại không được để trống');
                    flag = false;
                } else if (!isPhone(text_td3)) {
                    validate2.text('Nhập đúng định dạng số điện thoại');
                    flag = false;
                } else {
                    validate2.text('');
                    arr_momo.push([id_lh, subtitle, content]);
                }
            } else {

                if (text_td3 == '') {
                    validate2.text('Không được để trống');
                    flag = false;
                } else {
                    validate2.text('');
                    if (dataId == 2) {
                        arr_address.push([id_lh, subtitle, content]);
                    } else if (dataId == 3) {
                        arr_skype.push([id_lh, subtitle, content]);
                    } else if (dataId == 4) {
                        arr_facebook.push([id_lh, subtitle, content]);
                    } else if (dataId == 5) {
                        arr_instagram.push([id_lh, subtitle, content]);
                    } else if (dataId == 6) {
                        arr_twitter.push([id_lh, subtitle, content]);
                    } else if (dataId == 7) {
                        arr_tiktok.push([id_lh, subtitle, content]);
                    } else if (dataId == 9) {
                        arr_youtube.push([id_lh, subtitle, content]);
                    } else if (dataId == 10) {
                        arr_snapchat.push([id_lh, subtitle, content]);
                    } else if (dataId == 11) {
                        arr_linkedIn.push([id_lh, subtitle, content]);
                    } else if (dataId == 12) {
                        arr_pinterest.push([id_lh, subtitle, content]);
                    } else if (dataId == 13) {
                        arr_behance.push([id_lh, subtitle, content]);
                    } else if (dataId == 15) {
                        arr_paypal.push([id_lh, subtitle, content]);
                    } else if (dataId == 17) {
                        arr_link.push([id_lh, subtitle, content]);
                    }
                }
            }
            change_input($('.text_td2'), validate1);
            change_input($('.text_td3'), validate2);
        }

        if (flag) {
            $('#modal_add_link').modal('hide');
            var data_id = data_link.length;
            if (id_lh == 16) {
                var text_tab1 = `<button type="button" class="btn_t k_link" data-toggle="modal" data-target="#modal_info_bank">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh">
                    <div class="ttlh">
                        <p class="t_tdc">`+ title + `</p>
                        <p class="t_nd">`+ tdp + `</p>
                        <p class="t_ct none">`+ tdp4 + `</p>
                    </div>
                </button>`;
                var text_tab2 = `<button type="button" href="` + text_td3 + `" class="btn_none k_link1" data-toggle="modal" data-target="#modal_info_bank">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh1">
                    <p class="t_tdc">`+ title + `</p>
                </button>`;
            } else if (id_lh == 0) {
                var text_tab1 = `<a href="tel:` + text_td3 + `" class="k_link" target="_blank">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh">
                    <div class="ttlh">
                        <p class="t_tdc">`+ title + `</p>
                        <p class="t_nd">`+ tdp + `</p>
                        <p class="t_ct none">`+ tdp2 + `</p>
                    </div>
                </a>`;
                var text_tab2 = `<a href="tel:` + text_td3 + `" class="btn_none k_link1" target="_blank">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh1">
                    <p class="t_tdc">`+ title + `</p>
                </a>`;
            } else if (id_lh == 1) {
                var text_tab1 = `<a href="mailto:` + text_td3 + `" class="k_link" target="_blank">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh">
                    <div class="ttlh">
                        <p class="t_tdc">`+ title + `</p>
                        <p class="t_nd">`+ tdp + `</p>
                        <p class="t_ct none">`+ tdp2 + `</p>
                    </div>
                </a>`;
                var text_tab2 = `<a href="mailto:` + text_td3 + `" class="btn_none k_link1" target="_blank">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh1">
                    <p class="t_tdc">`+ title + `</p>
                </a>`;
            } else if (id_lh == 8) {
                var text_tab1 = `<a href="zalo.me/` + text_td3 + `" class="k_link" target="_blank">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh">
                    <div class="ttlh">
                        <p class="t_tdc">`+ title + `</p>
                        <p class="t_nd">`+ tdp + `</p>
                        <p class="t_ct none">`+ tdp2 + `</p>
                    </div>
                </a>`;
                var text_tab2 = `<a href="zalo.me/` + text_td3 + `" class="btn_none k_link1" target="_blank">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh1">
                    <p class="t_tdc">`+ title + `</p>
                </a>`;
            } else if (id_lh == 14) {
                var text_tab1 = `<a href="nhantien.momo.vn/` + text_td3 + `" class="k_link" target="_blank">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh">
                    <div class="ttlh">
                        <p class="t_tdc">`+ title + `</p>
                        <p class="t_nd">`+ tdp + `</p>
                        <p class="t_ct none">`+ tdp2 + `</p>
                    </div>
                </a>`;
                var text_tab2 = `<a href="nhantien.momo.vn/` + text_td3 + `" class="btn_none k_link1" target="_blank">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh1">
                    <p class="t_tdc">`+ title + `</p>
                </a>`;
            } else {
                var text_tab1 = `<a href="` + text_td3 + `" class="k_link" target="_blank">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh">
                    <div class="ttlh">
                        <p class="t_tdc">`+ title + `</p>
                        <p class="t_nd">`+ tdp + `</p>
                        <p class="t_ct none">`+ tdp2 + `</p>
                    </div>
                </a>`;
                var text_tab2 = `<a href="` + text_td3 + `" class="btn_none k_link1" target="_blank">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh1">
                    <p class="t_tdc">`+ title + `</p>
                </a>`;
            }
            $(`<div class="k_tab1 d-flex align-items-center justify-content-between" data-link-id="` + data_id + `">
                <div class="k_ttlh_l d-flex align-items-center">
                    <button type="button" class="btn_none menu_tt"><img src="/assets/images/menu1.svg" alt="Menu" class="icon_menu1"></button>
                    `+ text_tab1 + `
                </div>
                <img src="/assets/images/mt.svg" alt="Mũi tên" class="k_block icon_mt">
                <div class="btn_hide k_none btn_cn">
                    <button class="btn_none edit_ttcn"><img src="/assets/images/edit_2.svg" alt="Chỉnh sửa" class="icon_edit_2"></button>
                    <button class="btn_none dlt_ttcn btn_dlt2"><img src="/assets/images/dlt.svg" alt="Xóa" class="icon_dlt"></button>
                </div>
            </div>`).insertBefore('.add1');
            $(`<div class="k_tab2" data-link-id="` + data_id + `">
                <div class="ttlh1">
                    `+ text_tab2 + `
                    <button class="k_none btn_edit3"><img src="/assets/images/edit_3.svg" alt="Chỉnh sửa" class="icon_edit"></button>
                    <button class="k_none btn_dlt1 btn_dlt2"><img src="/assets/images/dlt.svg" alt="Chỉnh sửa" class="icon_edit"></button>
                </div>
            </div>`).insertBefore('.k_tab2_n');
            data_link.push({
                "link_id": id_lh,
                "image": image,
                "title": title,
                "title1": title1,
                "title2": title2,
                "text_td2": text_td2,
                "text_td3": text_td3
            });
        }
    });

    //upload_image
    var upload_avata = $('.upload_avata');
    var select_avata = $('.select_avata');
    var img_avata = $('.img_avata');
    var upload_bia = $('.upload_bia');
    var select_bia = $('.select_bia');
    var icon_bia = $('.icon_bia');

    uploadImg(upload_avata, select_avata, img_avata);
    uploadImg(upload_bia, select_bia, icon_bia);

    $('.add_ttcn').click(function () {
        $('.ctn_ttcn').append(`<div class="k_ttcn_b">
            <input type="text" class="k_none ttcn_t1 ttcn_t3 title_prof"  placeholder="Nhập tiêu đề"> 
            <input type="text" class="k_none ttcn_t3 content_prof" placeholder="Nhập nội dung"> 
            <button class="k_none btn_t dlt_k_ttcn"><img src="/assets/images/dlt.svg" alt="Xóa" class="icon_dlt1"></button>
        </div>`);
    });
    //chinh sua lien he
    edit_link(data_link, bank);

    // chỉnh sửa avatar
    $('#update_avatar').change(function () {
        var file_data = $('#update_avatar').prop('files')[0];
        var form_data = new FormData();
        form_data.append('avata', file_data);
        $.ajax({
            url: '/Handles/PersonalPageController/upload_avata',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            dataType: "JSON",
            success: function (response) {
                check = response.result;
                if (check == true) {
                    alert(response.message);
                } else {
                    alert(response.message);
                }
            }
        });
        location.reload();
    });
    // chỉnh sửa ảnh bìa
    $('#upload_bia').change(function () {
        var file_data = $('#upload_bia').prop('files')[0];
        var formData = new FormData();
        formData.append('cover', file_data);
        $.ajax({
            url: '/Handles/PersonalPageController/upload_cover',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: formData,
            type: 'post',
            dataType: "JSON",
            success: function (response) {
                check = response.result;
                if (check == true) {
                    alert(response.message);
                } else {
                    alert(response.message);
                }
            }
        });
        location.reload();
    });
    $('.btn_ltd').click(function () {
        $('#modal_save').modal('show');
    });
    ////liên kết thẻ
    $('.btn-the').click(function () {
        var the = $('.the-val').val();
        $.ajax({
            url: '/Handles/PersonalPageController/the',
            dataType: 'text',
            data: { the: the },
            type: 'post',
            dataType: "JSON",
            success: function (response) {
                if (response.result == true) {
                    alert(response.message)
                } else {
                    alert(response.message)
                }
            }
        });
        location.reload();

    });
    // Lưu thay đổi
    $('#modal_save .btn_luu').click(function () {
        // chỉnh sửa thông tin cá nhân
        var date = new Date($('#date_birth').val());
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        datebirthVal = [day, month, year].join('/');
        $('.full_name').text($('#full_name').val());
        $('.date_birth').text(datebirthVal);
        $('.company').text($('#company').val());
        $('.position').text($('#position').val());
        $('.descrip').text($('#descrip').val());

        var fullname = $('#full_name').val();
        var datebirth = $('#date_birth').val();
        var company = $('#company').val();
        var position = $('#position').val();
        var descrip = $('#descrip').val();

        $.ajax({
            type: 'POST',
            url: "/Handles/PersonalPageController/edit_personal_page",
            data: {
                full_name: fullname,
                date_birth: datebirth,
                company: company,
                position: position,
                descrip: descrip,
            },
            success: function () {
            },
        });
        ctn_page.removeClass('edit_info');
        if ($('.k_tab1').length > 0) {
            $('.k_info1').css('display', 'none');
            $('.k_info2').css('display', 'none');
        }

        // thêm thông tin cá nhân   
        var formData = new FormData();
        let addTitle = [];
        let addContent = [];
        $('.title_prof').each(function () {
            addTitle.push($(this).val());
        });
        $('.content_prof').each(function () {
            addContent.push($(this).val());
        });
        formData.append('title', addTitle);
        formData.append('content', addContent);
        if (addContent != '' && addTitle != '') {
            $.ajax({
                type: 'POST',
                url: "/Handles/PersonalPageController/create_user_details",
                data: formData,
                processData: false,
                contentType: false,
                dataType: "JSON",
            });
        } else if (addContent != '' && addTitle == '') {
            alert('Bạn phải điền đầy đủ thông tin');
            $('.ctn_page').addClass('edit_info')
            $('#modal_save').modal('hide');
            return false;
        } else if (addContent == '' && addTitle != '') {
            alert('Bạn phải điền đầy đủ thông tin cá nhân');
            $('.ctn_page').addClass('edit_info')
            $('#modal_save').modal('hide');
            return false;
        }

        // update user details
        var formData = new FormData();
        var id = [];
        var title = [];
        var content = [];
        $('.u_ttcn').each(function () {
            id.push($(this).data("id"));
        });
        $('.title').each(function () {
            title.push($(this).val());
        });
        $('.content').each(function () {
            content.push($(this).val());
        });
        formData.append('id', id);
        formData.append('title', title);
        formData.append('content', content);
        $.ajax({
            type: 'POST',
            url: "/Handles/PersonalPageController/update_user_details",
            data: formData,
            processData: false,
            contentType: false,
            dataType: "JSON",
        });

        // thêm thông tin liên hệ
        var addTTCN = new FormData();
        if (arr_phone != '') {
            addTTCN.append('phone', JSON.stringify(arr_phone));
        } if (arr_email != '') {
            addTTCN.append('email', JSON.stringify(arr_email));
        } if (arr_address != '') {
            addTTCN.append('address', JSON.stringify(arr_address));
        } if (arr_skype != '') {
            addTTCN.append('skype', JSON.stringify(arr_skype));
        } if (arr_facebook != '') {
            addTTCN.append('facebook', JSON.stringify(arr_facebook));
        } if (arr_instagram != '') {
            addTTCN.append('instagram', JSON.stringify(arr_instagram));
        } if (arr_twitter != '') {
            addTTCN.append('twitter', JSON.stringify(arr_twitter));
        } if (arr_tiktok != '') {
            addTTCN.append('tiktok', JSON.stringify(arr_tiktok));
        } if (arr_zalo != '') {
            addTTCN.append('zalo', JSON.stringify(arr_zalo));
        } if (arr_youtube != '') {
            addTTCN.append('youtube', JSON.stringify(arr_youtube));
        } if (arr_snapchat != '') {
            addTTCN.append('snapchat', JSON.stringify(arr_snapchat));
        } if (arr_linkedIn != '') {
            addTTCN.append('linkedIn', JSON.stringify(arr_linkedIn));
        } if (arr_pinterest != '') {
            aaddTTCN.append('pinterest', JSON.stringify(arr_pinterest));
        } if (arr_behance != '') {
            addTTCN.append('behance', JSON.stringify(arr_behance));
        } if (arr_momo != '') {
            addTTCN.append('momo', JSON.stringify(arr_momo));
        } if (arr_paypal != '') {
            addTTCN.append('paypal', JSON.stringify(arr_paypal));
        } if (arr_bank != '') {
            addTTCN.append('bank', JSON.stringify(arr_bank));
        } if (arr_link != '') {
            addTTCN.append('link', JSON.stringify(arr_link));
        }
        $.ajax({
            type: 'POST',
            url: "/Handles/PersonalPageController/create_contact",
            data: addTTCN,
            dataType: "JSON",
            processData: false,
            contentType: false,
        });

        // update thông tin liên hệ
        var upTTCN = new FormData();
        if (UpCont != '') {
            upTTCN.append('upCont', JSON.stringify(UpCont));
        } else if (UpBank != '') {
            upTTCN.append('upBank', JSON.stringify(UpBank));
        }

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "/Handles/PersonalPageController/update_contact",
            data: upTTCN,
            processData: false,
            contentType: false,
        });

        // xoá thông tin cá nhân
        $.ajax({
            type: "POST",
            url: "/Handles/PersonalPageController/delete_user_details",
            data: {
                id: delIdTTCN,
            },
        });
        // xoá thông tin liên hệ
        $.ajax({
            type: "POST",
            url: "/Handles/PersonalPageController/delete_contact",
            data: {
                id: delIdCont,
            },
        });
        location.reload();
    });

});
var delIdTTCN = [];
var delIdCont = [];
var UpCont = [];
var UpBank = [];
function edit_link(data_link, bank) {
    var id = 0;
    // var id = 8;
    // var id = 14;
    var link_id = 0;
    $(document).on("click", ".btn_edit3", function () {
        $('#modal_edit_link').modal('show');
        var formIndexCont = new FormData();
        var elm = $(this);
        var idIndexCont = [];
        idCont = elm.parent().parent().attr('data-id');
        subtitle = elm.parent().parent();
        // link_id = idCont;
        idIndexCont.push(idCont);
        formIndexCont.append('id', idIndexCont);
        // đổ dữ liệu thông tin liên hệ
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "/Handles/PersonalPageController/index_contact",
            data: formIndexCont,
            processData: false,
            contentType: false,
            success: function (res) {
                res.forEach(data => {
                    var htmlUp = '';
                    var option = '';
                    var text = '';
                    $.each(bank, function (index, value) {
                        checkbank = '';
                        console.log(subtitle);
                        if (subtitle.find('.t_nd2').attr('data-bank') == index) {
                            option += '<option class="checkbank" value=" ' + index + '" selected> ' + value + '</option > ';
                        } else {
                            option += '<option class="checkbank" value=" ' + index + '"> ' + value + '</option > ';
                        }

                    });
                    if (data.type == 16) {
                        htmlUp += '<div class="k_td d-flex upCont" data-upCont="' + data.id + '" data-type="' + data.type + '">';
                        htmlUp += '<img src="' + contact[data.type].image + '" alt="" class="icon_ttlh2">';
                        htmlUp += '<div class="add_tknh">';
                        htmlUp += '<div class="mb_20">';
                        htmlUp += '<select class="select_bank subtitleCont subUpBank">';
                        htmlUp += '<option value="">Chọn ngân hàng</option>';
                        htmlUp += option;
                        htmlUp += '</select>';
                        htmlUp += '<p id="validate1_error" class="error_vld"></p>';
                        htmlUp += '</div>';
                        htmlUp += '<input type="text" class="text_td4 text_td5" placeholder="Số tài khoản" value="' + subtitle.find('.t_ct2').text() + '"> ';
                        htmlUp += '<p id="validate2_error" class="error_vld"></p>';
                        htmlUp += '</div>';
                        htmlUp += '</div>';
                    } else {
                        htmlUp += '<div class="k_td d-flex upCont" data-upCont="' + data.id + '" data-type="' + data.type + '">';
                        htmlUp += '<img src="' + contact[data.type].image + '" alt="" class="icon_ttlh2">';
                        htmlUp += '<div class="k_td_r">';
                        htmlUp += '<input type="text" class="text_td1" value="' + contact[data.type].title + '" readonly> ';
                        htmlUp += '<input type="text" class="text_td2 subUpCont"  placeholder="' + contact[data.type].title + '" value="' + subtitle.find('.t_nd2').text() + '">';
                        htmlUp += '<p id="validate1_error" class="error_vld"></p>';
                        htmlUp += '</div>';
                        htmlUp += '</div>';
                        if (data.type == 8) {
                            text = 'text_td5';
                            // data.content
                            htmlUp += '<input type="text" class="text_td3 ctUpCont ' + text + '" placeholder="' + contact[data.type].title2 + '" value="' + subtitle.find('.t_ct2').text() + '"> ';
                        } else if (data.type == 0) {
                            text = 'text_td5';
                            htmlUp += '<input type="text" class="text_td3 ctUpCont ' + text + '" placeholder="' + contact[data.type].title + '" value="' + subtitle.find('.t_ct2').text() + '"> ';
                        } else if (data.type == 14) {
                            text = 'text_td5';
                            htmlUp += '<input type="text" class="text_td3 ctUpCont ' + text + '" placeholder="' + contact[data.type].title + '" value="' + subtitle.find('.t_ct2').text() + '"> ';
                        } else {
                            htmlUp += '<input type="text" class="text_td3 ctUpCont" placeholder="' + contact[data.type].title + '" value="' + subtitle.find('.t_ct2').text() + '"> ';

                        }
                        htmlUp += '<p id="validate2_error" class="error_vld"></p>';
                        htmlUp += '</div>';
                    }

                    $('#modal_edit_link .modal-body').html(htmlUp);
                });
                $('.select_bank').select2({
                    width: "100%",
                    placeholder: "Chọn ngân hàng",
                });
            },

        });
        id = elm.parent().parent().attr('data-link-id');
        link_id = id;
        link_id = data_link[id].link_id;
        var image = data_link[id].image;
        var title = data_link[id].title;
        var title2 = data_link[id].title2;
        var text_td2 = data_link[id].text_td2;
        var text_td3 = data_link[id].text_td3;
        var htmlAdd = '';
        var option = '';
        if (link_id == 16) {
            $.each(bank, function (index, value) {
                var selectedBank = '';
                if (text_td2 == index) {
                    selectedBank = 'selected';
                }
                option += '<option value=' + index + ' ' + selectedBank + '>' + value + '</option>';
            });
            htmlAdd = `<div class="k_td d-flex">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh2">
                    <div class="add_tknh">
                    <div class="mb_20">
                    <select class="select_bank">
                    <option value=''>Chọn ngân hàng</option>
                        `+ option + `
                    </select>
                    <p id="validate1_error" class="error_vld"></p>
                    </div>
                    <input type="text" class="text_td4" placeholder="Số tài khoản" value="`+ text_td3 + `"> 
                    <p id="validate2_error" class="error_vld"></p>
                    </div>
                </div>`;
        } else {
            var text = '';
            if (id == 0) { text = 'text_td5'; }
            htmlAdd = `<div class="k_td d-flex">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh2">
                    <div class="k_td_r">
                        <input type="text" class="text_td1 " value="`+ title + `" readonly> 
                        <input type="text" class="text_td2 subtitleCont" placeholder="Tiêu đề phụ (chỉ hiển thị ở dạng xem danh sách)" value="`+ text_td2 + `"> 
                        <p id="validate1_error" class="error_vld"></p>
                    </div>
                </div>
                <input type="text" class="text_td3 contentCont `+ text + `" placeholder="` + title2 + `" value="` + text_td3 + `">
                <p id="validate2_error" class="error_vld"></p> `;
            if (id == 8) { text = 'text_td5'; }
            htmlAdd = `<div class="k_td d-flex">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh2">
                    <div class="k_td_r">
                        <input type="text" class="text_td1 " value="`+ title + `" readonly> 
                        <input type="text" class="text_td2 subtitleCont" placeholder="Tiêu đề phụ (chỉ hiển thị ở dạng xem danh sách)" value="`+ text_td2 + `"> 
                        <p id="validate1_error" class="error_vld"></p>
                    </div>
                </div>
                <input type="text" class="text_td3 contentCont `+ text + `" placeholder="` + title2 + `" value="` + text_td3 + `">
                <p id="validate2_error" class="error_vld"></p> `;
            if (id == 14) { text = 'text_td5'; }
            htmlAdd = `<div class="k_td d-flex">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh2">
                    <div class="k_td_r">
                        <input type="text" class="text_td1 " value="`+ title + `" readonly> 
                        <input type="text" class="text_td2 subtitleCont" placeholder="Tiêu đề phụ (chỉ hiển thị ở dạng xem danh sách)" value="`+ text_td2 + `"> 
                        <p id="validate1_error" class="error_vld"></p>
                    </div>
                </div>
                <input type="text" class="text_td3 contentCont `+ text + `" placeholder="` + title2 + `" value="` + text_td3 + `">
                <p id="validate2_error" class="error_vld"></p> `;
        }
        $('#modal_edit_link .modal-body').html(htmlAdd);
        $('.select_bank').select2({
            width: "100%",
            placeholder: "Chọn ngân hàng",
        });
    });
    $(document).on("click", ".edit_ttcn", function () {
        $('#modal_edit_link').modal('show');
        var formIndexCont = new FormData();
        var elm = $(this);
        var idIndexCont = [];
        idCont = elm.parent().parent().attr('data-id');
        subtitle = elm.parent().parent();
        // link_id = idCont;
        idIndexCont.push(idCont);
        formIndexCont.append('id', idIndexCont);
        // đổ dữ liệu thông tin liên hệ
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: "/Handles/PersonalPageController/index_contact",
            data: formIndexCont,
            processData: false,
            contentType: false,
            success: function (res) {
                res.forEach(data => {
                    var htmlUp = '';
                    var option = '';
                    var text = '';
                    $.each(bank, function (index, value) {
                        checkbank = '';
                        if (subtitle.find('.t_nd').attr('data-bank') == index) {
                            option += '<option class="checkbank" value=" ' + index + '" selected> ' + value + '</option > ';
                        } else {
                            option += '<option class="checkbank" value=" ' + index + '"> ' + value + '</option > ';
                        }

                    });
                    if (data.type == 16) {
                        htmlUp += '<div class="k_td d-flex upCont" data-upCont="' + data.id + '" data-type="' + data.type + '">';
                        htmlUp += '<img src="' + contact[data.type].image + '" alt="" class="icon_ttlh2">';
                        htmlUp += '<div class="add_tknh">';
                        htmlUp += '<div class="mb_20">';
                        htmlUp += '<select class="select_bank subtitleCont subUpBank">';
                        htmlUp += '<option value="">Chọn ngân hàng</option>';
                        htmlUp += option;
                        htmlUp += '</select>';
                        htmlUp += '<p id="validate1_error" class="error_vld"></p>';
                        htmlUp += '</div>';
                        htmlUp += '<input type="text" class="text_td4 text_td5" placeholder="Số tài khoản" value="' + subtitle.find('.t_ct').text() + '"> ';
                        htmlUp += '<p id="validate2_error" class="error_vld"></p>';
                        htmlUp += '</div>';
                        htmlUp += '</div>';
                    } else {
                        htmlUp += '<div class="k_td d-flex upCont" data-upCont="' + data.id + '" data-type="' + data.type + '">';
                        htmlUp += '<img src="' + contact[data.type].image + '" alt="" class="icon_ttlh2">';
                        htmlUp += '<div class="k_td_r">';
                        htmlUp += '<input type="text" class="text_td1" value="' + contact[data.type].title + '" readonly> ';
                        htmlUp += '<input type="text" class="text_td2 subUpCont"  placeholder="' + contact[data.type].title + '" value="' + subtitle.find('.t_nd').text() + '">';
                        htmlUp += '<p id="validate1_error" class="error_vld"></p>';
                        htmlUp += '</div>';
                        htmlUp += '</div>';
                        if (data.type == 8) {
                            text = 'text_td5';
                            // data.content
                            htmlUp += '<input type="text" class="text_td3 ctUpCont ' + text + '" placeholder="' + contact[data.type].title2 + '" value="' + subtitle.find('.t_ct').text() + '"> ';
                        } else if (data.type == 0) {
                            text = 'text_td5';
                            htmlUp += '<input type="text" class="text_td3 ctUpCont ' + text + '" placeholder="' + contact[data.type].title + '" value="' + subtitle.find('.t_ct').text() + '"> ';
                        } else if (data.type == 14) {
                            text = 'text_td5';
                            htmlUp += '<input type="text" class="text_td3 ctUpCont ' + text + '" placeholder="' + contact[data.type].title + '" value="' + subtitle.find('.t_ct').text() + '"> ';
                        } else {
                            htmlUp += '<input type="text" class="text_td3 ctUpCont" placeholder="' + contact[data.type].title + '" value="' + subtitle.find('.t_ct').text() + '"> ';

                        }
                        htmlUp += '<p id="validate2_error" class="error_vld"></p>';
                        htmlUp += '</div>';
                    }

                    $('#modal_edit_link .modal-body').html(htmlUp);
                });
                $('.select_bank').select2({
                    width: "100%",
                    placeholder: "Chọn ngân hàng",
                });
            },

        });
        id = elm.parent().parent().attr('data-link-id');
        link_id = id;
        link_id = data_link[id].link_id;
        var image = data_link[id].image;
        var title = data_link[id].title;
        var title2 = data_link[id].title2;
        var text_td2 = data_link[id].text_td2;
        var text_td3 = data_link[id].text_td3;
        var htmlAdd = '';
        var option = '';
        if (link_id == 16) {
            $.each(bank, function (index, value) {
                var selectedBank = '';
                if (text_td2 == index) {
                    selectedBank = 'selected';
                }
                option += '<option value=' + index + ' ' + selectedBank + '>' + value + '</option>';
            });
            htmlAdd = `<div class="k_td d-flex">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh2">
                    <div class="add_tknh">
                    <div class="mb_20">
                    <select class="select_bank">
                    <option value=''>Chọn ngân hàng</option>
                        `+ option + `
                    </select>
                    <p id="validate1_error" class="error_vld"></p>
                    </div>
                    <input type="text" class="text_td4" placeholder="Số tài khoản" value="`+ text_td3 + `"> 
                    <p id="validate2_error" class="error_vld"></p>
                    </div>
                </div>`;
        } else {
            var text = '';
            if (id == 0) { text = 'text_td5'; }
            htmlAdd = `<div class="k_td d-flex">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh2">
                    <div class="k_td_r">
                        <input type="text" class="text_td1 " value="`+ title + `" readonly> 
                        <input type="text" class="text_td2 subtitleCont" placeholder="Tiêu đề phụ (chỉ hiển thị ở dạng xem danh sách)" value="`+ text_td2 + `"> 
                        <p id="validate1_error" class="error_vld"></p>
                    </div>
                </div>
                <input type="text" class="text_td3 contentCont `+ text + `" placeholder="` + title2 + `" value="` + text_td3 + `">
                <p id="validate2_error" class="error_vld"></p> `;
            if (id == 8) { text = 'text_td5'; }
            htmlAdd = `<div class="k_td d-flex">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh2">
                    <div class="k_td_r">
                        <input type="text" class="text_td1 " value="`+ title + `" readonly> 
                        <input type="text" class="text_td2 subtitleCont" placeholder="Tiêu đề phụ (chỉ hiển thị ở dạng xem danh sách)" value="`+ text_td2 + `"> 
                        <p id="validate1_error" class="error_vld"></p>
                    </div>
                </div>
                <input type="text" class="text_td3 contentCont `+ text + `" placeholder="` + title2 + `" value="` + text_td3 + `">
                <p id="validate2_error" class="error_vld"></p> `;
            if (id == 14) { text = 'text_td5'; }
            htmlAdd = `<div class="k_td d-flex">
                    <img src="`+ image + `" alt="` + title + `" class="icon_ttlh2">
                    <div class="k_td_r">
                        <input type="text" class="text_td1 " value="`+ title + `" readonly> 
                        <input type="text" class="text_td2 subtitleCont" placeholder="Tiêu đề phụ (chỉ hiển thị ở dạng xem danh sách)" value="`+ text_td2 + `"> 
                        <p id="validate1_error" class="error_vld"></p>
                    </div>
                </div>
                <input type="text" class="text_td3 contentCont `+ text + `" placeholder="` + title2 + `" value="` + text_td3 + `">
                <p id="validate2_error" class="error_vld"></p> `;
        }
        $('#modal_edit_link .modal-body').html(htmlAdd);
        $('.select_bank').select2({
            width: "100%",
            placeholder: "Chọn ngân hàng",
        });
    });

    $('#modal_edit_link .btn_luu').click(function () {
        var flag = true;
        var validate1 = $('#validate1_error');
        var validate2 = $('#validate2_error');
        link_id = $('.upCont').attr('data-type');
        // update thông tin liên hệ
        if ($('.upCont').attr('data-type') != 16) {
            UpCont.push([$('.upCont').attr('data-upCont'), $('.upCont').attr('data-type'), $('.subUpCont').val(), $('.ctUpCont').val()]);
        } else {
            UpBank.push([$('.upCont').attr('data-upCont'), $('.upCont').attr('data-type'), $.trim($('.select_bank').val()), $.trim($('#modal_edit_link .text_td4').val())]);
        }
        // console.log(UpCont);
        if (link_id == 16) {
            var text_td2 = $('#modal_edit_link .select_bank').val();
            var text_td3 = $.trim($('#modal_edit_link .text_td4').val());

            tdp1 = text_td2;
            tdp2 = text_td3;
            if (text_td2 == '') {
                validate1.text('Chọn ngân hàng');
                flag = false;
            } else {
                validate1.text('');
            }
            if (text_td3 == '') {
                validate2.text('Không được để trống');
                flag = false;
            } else {
                validate2.text('');
            }
            change_input($('.select_bank'), validate1);
            change_input($('.text_td4'), validate2);
        } else if (link_id != 16) {
            var text_td2 = $.trim($('#modal_edit_link .text_td2').val());
            var text_td3 = $.trim($('#modal_edit_link .text_td3').val());
            var stk_bank = $.trim($('#modal_edit_link .text_td4').val());
            var bank_val = $.trim($('#modal_edit_link .select_bank').val());
            tdp3 = text_td2;
            tdp4 = text_td3;
            if (link_id == 1) {
                if (text_td3 == '') {
                    validate2.text('Email không được để trống');
                    flag = false;
                } else if (!isEmail(text_td3)) {
                    validate2.text('Nhập đúng định dạng email');
                    flag = false;
                } else {
                    validate2.text('');
                }
            }
            if (link_id == 0) {
                if (text_td3 == '') {
                    validate2.text('Số điện thoại không được để trống');
                    flag = false;
                } else if (!isPhone(text_td3)) {
                    validate2.text('Nhập đúng định dạng số điện thoại');
                    flag = false;
                } else {
                    validate2.text('');
                }
            }
            if (link_id == 8) {
                if (text_td3 == '') {
                    validate2.text('Số điện thoại không được để trống');
                    flag = false;
                } else if (!isPhone(text_td3)) {
                    validate2.text('Nhập đúng định dạng số điện thoại');
                    flag = false;
                } else {
                    validate2.text('');
                }
            }
            if (link_id == 14) {
                if (text_td3 == '') {
                    validate2.text('Số điện thoại không được để trống');
                    flag = false;
                } else if (!isPhone(text_td3)) {
                    validate2.text('Nhập đúng định dạng số điện thoại');
                    flag = false;
                } else {
                    validate2.text('');
                }
            }

            if (text_td3 == '') {
                validate2.text('Không được để trống');
                flag = false;
            } else {
                validate1.text('');
            }
            change_input($('.text_td2'), validate1);
            change_input($('.text_td3'), validate2);
        }
        if (flag) {
            var link = '';
            $('#modal_edit_link').modal('hide');
            var stk_bank = $.trim($('#modal_edit_link .text_td4').val());
            var bank_val = $.trim($('#modal_edit_link .select_bank').val());
            var text_td2 = $.trim($('#modal_edit_link .text_td2').val());
            var text_td3 = $.trim($('#modal_edit_link .ctUpCont').val());

            if ($('[data-link-id="' + id + '"]') == 0) {
                link = 'tel:';
            } else if ($('[data-link-id="' + id + '"]') == 1) {
                link = 'mailto:'
            } else if ($('[data-link-id="' + id + '"]') == 8) {
                link = 'zalo.me/:'
            } else if ($('[data-link-id="' + id + '"]') == 14) {
                link = 'nhantien.momo.vn/'
            } else if ($('[data-link-id="' + id + '"]') == 16) {
                link = 'javascript:void(0)'
            }
            link = $('.upCont').attr("data-upcont");

            // $('.contact[data-link-id="' + link + '"]') != 16
            $('.contact[data-id="' + link + '"]').find('.t_nd').html(text_td2);
            $('.contact[data-id="' + link + '"]').find('.t_ct').html(text_td3);
            // $('.contact[data-link-id="' + link + '"]') == 16
            $.trim($('.contact[data-id="' + link + '"]').find('.t_nd').attr('data-bank', bank_val));
            $.trim($('.contact[data-id="' + link + '"]').find('.t_nd').html(bank[bank_val]));
            $.trim($('.contact[data-id="' + link + '"]').find('.t_ct').html(stk_bank));


        }
    })

}

function change_input(value, text) {
    value.change(function () {
        if ($(this).val() != '') {
            text.text("");
        }
    });
}
function validateNumber(elm) {
    //chỉ cho phép nhập số (0-9)
    (function ($) {
        $.fn.inputFilter = function (inputFilter) {
            return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                } else {
                    this.value = "";
                }
            });
        };
    }(jQuery));
    elm.inputFilter(function (value) {
        return /^\d*$/.test(value);
    });
}
$(document).on("click", ".text_td4", function () {
    validateNumber($('.text_td4'));
});
$(document).on("click", ".text_td5", function () {
    validateNumber($('.text_td5'));
});
function uploadImg(uploadimg, select, img) {
    select.click(function () {
        uploadimg.click();
    });
    uploadimg.on('change', function (event) {
        var x = URL.createObjectURL(event.target.files[0]);
        img.attr('src', x);
    });
}
$(document).on("click", ".bankPopup", function () {
    $('#modal_info_bank').modal('show');
    idCont = $(this).find('.contact').attr('data-id');
    // đổ dữ liệu thông tin liên hệ
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: "/Handles/PersonalPageController/index_contact",
        data: {
            id: idCont,
        },
        success: function (res) {
            res.forEach(data => {
                var htmlPop = '';
                htmlPop += '<div class="ctn_info_b">';
                htmlPop += '<img src="/assets/images/tknh.png" alt="Tài khoản ngân hàng" class="icon_ttlh2">';
                // bank[data.subtitle]
                htmlPop += '<p class="text_tknh1">' + $('[data-id="' + data.id + '"]').find('.t_nd').text() + '</p>';
                htmlPop += '<p class="text_tknh2">' + $('[data-id="' + data.id + '"]').find('.t_ct').text() + '</p>';
                htmlPop += '</div>';
                $('#modal_info_bank .modal-body').html(htmlPop);
            });
        }
    });
    
});
$(document).on("click", ".bankPopup2", function () {
    $('#modal_info_bank').modal('show');
    idCont2 = $(this).parent().parent().attr('data-id');
    // đổ dữ liệu thông tin liên hệ
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: "/Handles/PersonalPageController/index_contact2",
        data: {
            id: idCont2,
        },
        success: function (res) {
            res.forEach(data => {
                var htmlPop = '';
                htmlPop += '<div class="ctn_info_b">';
                htmlPop += '<img src="/assets/images/tknh.png" alt="Tài khoản ngân hàng" class="icon_ttlh2">';
                // bank[data.subtitle]
                htmlPop += '<p class="text_tknh1">' + $('[data-id="' + data.id + '"]').find('.t_nd2').text() + '</p>';
                htmlPop += '<p class="text_tknh2">' + $('[data-id="' + data.id + '"]').find('.t_ct2').text() + '</p>';
                htmlPop += '</div>';
                $('#modal_info_bank .modal-body').html(htmlPop);
            });
        }
    });
});
// xoá user details
function delUserDetails() {
    let text = "Bạn có đồng ý xoá thông tin này không ?";
    if (confirm(text) == true) {
        $(document).on("click", ".dlt_k_ttcn", function () {
            $(this).parent().remove();
            var id = $(this).parent().data('id');
            delIdTTCN.push(id);
        });
    } else {
        return false;
    }
}
function delContact() {
    let text = "Bạn có đồng ý xoá thông tin này không ?";
    if (confirm(text) == true) {
        $(document).on("click", ".tcn_r .btn_dlt2", function () {
            var id = $(this).parent().parent().attr('data-id');
            $(this).parent().parent().remove();
            delIdCont.push(id);

        });
    } else {
        return false;
    }
}

function isPhone(r) {
    return /^(84|0[3|5|7|8|9])+([0-9]{8})+$/.test(r);
}
function isEmail(emailStr) {
    var emailPat = /^(.+)@(.+)$/
    var specialChars = "\\(\\)<>@,;:\\\\\\\"\\.\\[\\]"
    var validChars = "\[^\\s" + specialChars + "\]"
    var quotedUser = "(\"[^\"]*\")"
    var ipDomainPat = /^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
    var atom = validChars + '+'
    var word = "(" + atom + "|" + quotedUser + ")"
    var userPat = new RegExp("^" + word + "(\\." + word + ")*$")
    var domainPat = new RegExp("^" + atom + "(\\." + atom + ")*$")
    var matchArray = emailStr.match(emailPat)
    if (matchArray == null) {
        return false
    }
    var user = matchArray[1]
    var domain = matchArray[2]

    // See if "user" is valid
    if (user.match(userPat) == null) {
        return false
    }
    var IPArray = domain.match(ipDomainPat)
    if (IPArray != null) {
        // this is an IP address
        for (var i = 1; i <= 4; i++) {
            if (IPArray[i] > 255) {
                return false
            }
        }
        return true
    }
    var domainArray = domain.match(domainPat)
    if (domainArray == null) {
        return false
    }

    var atomPat = new RegExp(atom, "g")
    var domArr = domain.match(atomPat)
    var len = domArr.length

    if (domArr[domArr.length - 1].length < 2 ||
        domArr[domArr.length - 1].length > 3) {
        return false
    }

    if (len < 2) {
        return false
    }

    return true;
}
