$(document).ready(function(){
    const bank = [{
        "tk" : "BIDV",
        "stk": "123548715648731",
        "ctk": "ĐỖ PHƯƠNG",
        "cn": "Hoàng Mai, Hà Nội",
        "img": "/assets/images/bidv.png"
    }, {
        "tk" : "VIETCOMBANK",
        "stk": "12054456712",
        "ctk": "ĐỖ PHƯƠNG",
        "cn": "PGD Định Công - Chi nhánh Hoàn Kiếm",
        "img": "/assets/images/vcb.png"
    }, {
        "tk" : "MB-BANK",
        "stk": "1234531575132",
        "ctk": "ĐỖ PHƯƠNG",
        "cn": "Hà Nội",
        "img": "/assets/images/mb.png"
    }, {
        "tk" : "ACB",
        "stk": "21804257",
        "ctk": "ĐỖ PHƯƠNG",
        "cn": "Hà Nội",
        "img": "/assets/images/acb.png"
    }, {
        "tk" : "SACOMBANK",
        "stk": "020085965000",
        "ctk": "ĐỖ PHƯƠNG",
        "cn": "Chi nhánh Hoàng Mai",
        "img": "/assets/images/sacom.png"
    }, {
        "tk" : "VIB",
        "stk": "007704060070735",
        "ctk": "ĐỖ PHƯƠNG",
        "cn": "PGD THANH XUÂN - Hà Nội",
        "img": "/assets/images/vib.png"
    }, {
        "tk" : "VIETINBANK",
        "stk": "100874190609",
        "ctk": "ĐỖ PHƯƠNG",
        "cn": "Thanh Xuân, Hà Nội",
        "img": "/assets/images/vtb.png"
    }, {
        "tk" : "TECHCOMBANK",
        "stk": "19030989969886",
        "ctk": "ĐỖ PHƯƠNG",
        "cn": "Nam Hà Nội",
        "img": "/assets/images/tcb.png"
    }, {
        "tk" : "MSB",
        "stk": "03501013949867",
        "ctk": "ĐỖ PHƯƠNG",
        "cn": "Nam Hà Nội",
        "img": "/assets/images/msb.png"
    }, {
        "tk" : "AGRIBANK",
        "stk": "1300206462551",
        "ctk": "ĐỖ PHƯƠNG",
        "cn": "Thăng Long, Hà Nội",
        "img": "/assets/images/agri.png"
    } ];
    info_bank($('.bidv'),0,bank);
    info_bank($('.vcb'),1,bank);
    info_bank($('.mb'),2,bank);
    info_bank($('.acb'),3,bank);
    info_bank($('.sacom'),4,bank);
    info_bank($('.vib'),5,bank);
    info_bank($('.vtb'),6,bank);
    info_bank($('.tcb'),7,bank);
    info_bank($('.msb'),8,bank);
    info_bank($('.agri'),9,bank);
});
function info_bank(bank,i,info) {
    bank.click(function() {
        $('.name_bank').text(info[i].tk);
        $('.img_bank').attr('src', info[i].img);
        $('.img_bank').attr('alt', info[i].tk);
        $('.stk').text(info[i].stk);
        $('.ctk').text(info[i].ctk);
        $('.cn').text(info[i].cn);
    });
}
