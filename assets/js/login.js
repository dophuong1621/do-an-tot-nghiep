$(document).ready(function() {
    var see_log = $('.see_log');
    see_log.click(function() {
        var elm = $(this);
        if (elm.hasClass("no_see_log")) {
            elm.removeClass("no_see_log");
            elm.next().attr('type', 'password');
        } else {
            elm.addClass("no_see_log");
            elm.next().attr('type', 'text');
        }
    });
    $.validator.addMethod("validatePassword", function(value, element) {
        return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
    }, "Mật khẩu từ 8 đến 16 ký tự và ít nhất một chữ số");

    $("#form_login").validate({
        errorPlacement: function(error, element) {
            error.insertAfter(element);
            error.wrap("<div class='err-red'>");
        },
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                validatePassword: true,
                minlength: 5
            }
        },
        messages: {
            email: {
                required: "Email không được để trống",
                email: "Nhập đúng định dạng email"
            },
            password: {
                required: "Mật khẩu không được để trống",
                minlength: "Mật khẩu phải dài ít nhất 5 ký tự"
            }
        },

        submitHandler: function(form) {
            var email = $('#email').val();
            var password = $('#password').val();
            $.ajax({
                type: "POST",
                url: "/LoginController/login",
                data: {
                    email: email,
                    password: password,
                },
                dataType: "json",
                success: function(response) {
                    check = response.result;
                    alert(response.message);
                    if (check == true) {
                        window.location.href = '/';
                    }
                },
            });
        }
    });
});