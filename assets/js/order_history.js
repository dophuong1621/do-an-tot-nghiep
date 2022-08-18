$(document).ready(function () {
    $('.dgsp').click(function(){
        $('.ctn_ttcn').append(`<form method="POST" role="form" enctype="multipart/form-data" id="form_evaluate">
        <div class="evaluate_k1">
            <div class="eva_k1_l">
                <div class="mb_20">
                    <? if (empty($_SESSION['user'])) { ?>
                        <p class="dg_t">Địa chỉ email</p>
                        <input type="email" name="email" id="email" class="dg_input" placeholder="Địa chỉ email">
                    <? } else { ?>
                        <input type="email" name="email" id="email" class="dg_input" placeholder="Địa chỉ email" value="<?= $user->email ?>">
                    <? } ?>

                </div>
                <div class="mb_20">
                    <? if (empty($_SESSION['user'])) { ?>
                        <p class="dg_t">Tên hiển thị</p>
                        <input type="text" name="display_name" id="display_name" class="dg_input" placeholder="Tên hiển thị">
                    <? } else { ?>
                        <input type="text" name="display_name" id="display_name" class="dg_input" placeholder="Tên hiển thị" value="<?= $user->user_name ?>">
                    <? } ?>

                </div>
                <div class="mb_20">
                    <div class="dg_stars d-flex">
                        <p class="dg_t">Đánh giá của bạn</p>
                        <div class='rating-stars'>
                            <ul id='stars'>
                                <li class='star' title='Poor' data-value='1'>
                                    <i class='fa fa-star fa-fw'></i>
                                </li>
                                <li class='star' title='Fair' data-value='2'>
                                    <i class='fa fa-star fa-fw'></i>
                                </li>
                                <li class='star' title='Good' data-value='3'>
                                    <i class='fa fa-star fa-fw'></i>
                                </li>
                                <li class='star' title='Excellent' data-value='4'>
                                    <i class='fa fa-star fa-fw'></i>
                                </li>
                                <li class='star' title='WOW!!!' data-value='5'>
                                    <i class='fa fa-star fa-fw'></i>
                                </li>
                            </ul>
                            <input type="text" name="star" id="star" class="hidden hide_star">
                        </div>
                    </div>
                </div>
                <div class="dg_upload d-flex">
                    <p class="dg_t">Thêm ảnh</p>
                    <div class="upload_img">
                        <div class="ul_k1 d-flex align-items-center">
                            <button type="button" class="btn_x btn_gdg select_img">Chọn ảnh</button>
                            <p class="ul_t">(Tối đa 3 ảnh)</p>
                        </div>
                        <input type="file" name="uploadimg[]" id="uploadimg" class="hidden upload-img" accept=".png, .jpg, .jpeg" multiple>
                        <div class="validate_img"></div>
                    </div>
                </div>
                <div class="d-show-file">
                    <p class="files-area">
                        <span id="filesList">
                            <span id="files-names"></span>
                        </span>
                    </p>
                </div>
            </div>
            <div class="eva_k1_r">
                <div class="mb_20">
                    <p class="dg_t">Đánh giá</p>
                    <textarea class="dg_textarea" name="evaluate" id="evaluate" rows="11" placeholder="Viết đánh giá"></textarea>
                </div>
                <div class="dg_btn">
                    <button type="submit" class="btn_x btn_gdg danh_gia">Gửi đánh giá</button>
                </div>
            </div>
        </div>
    </form>`);
        
    })
})