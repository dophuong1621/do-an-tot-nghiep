<div class="container-fluid">
    <h1 class="h3 mb-4 text-gray-800">Thêm hoá đơn</h1>
    <div class="card shadow mb-4 px-5 py-4">
        <form method="post" id="form_add_product" enctype="multipart/form-data">
            <div class="d-flex mb-3">
                <label for="exampleInputEmail1" class="d-flex col-xl-3">Tên người đặt<span class="text-danger ml-1">*</span></label>
                <div class="w-100 text-right">
                    <input type="text" class="form-control col-xl-12 mb-1" placeholder="Tên người đặt" name="name" id="name">
                    <i class="text-danger name_error"></i>
                </div>
            </div>
            <div class="d-flex mb-3">
                <label for="exampleInputEmail1" class="d-flex col-xl-3">Số điện thoại<span class="text-danger ml-1">*</span></label>
                <div class="w-100 text-right">
                    <input type="text" class="form-control col-xl-12 mb-1" placeholder="Số điện thoại" name="phone" id="phone">
                    <i class="text-danger phone_error"></i>
                </div>
            </div>
            <!-- <div class="d-flex mb-3">
            <label for="exampleInputEmail1" class="d-flex col-xl-3">Tên sản phẩm<span class="text-danger ml-1">*</span></label> 
            <div class="w-100 text-right">
                <input type="text" class="form-control col-xl-12 mb-1" placeholder="Tên sản phẩm" name="product_name" id="product_name">
                <i class="text-danger product_name_error"></i>
            </div>
        </div> -->
            <div class="d-flex mb-3">
                <label for="exampleInputEmail1" class="d-flex col-xl-3">Tên sản phẩm<span class="text-danger ml-1">*</span></label>
                <div class="w-100 text-right">
                    <div class="d-flex flex-column-reverse">
                        <select class="select_product_name" name="product_name" id="product_name">
                            <option value="">Chọn sản phẩm</option>
                            <?php foreach ($product as $key => $value) : ?>
                                <option value="<?= $value['id'] ?>" class="main_cart1"><?= $value['name'] ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <i class="text-danger product_name_error"></i>
                </div>
            </div>
            <!-- <div class="d-flex mb-3">
                <label for="exampleInputEmail1" class="d-flex col-xl-3">Giá sản phẩm<span class="text-danger ml-1">*</span></label>
                <div class="w-100 text-right pro_price">
                    <input type="number" class="form-control col-xl-12 mb-1 price_pro" name="product_price" id="product_price" disabled>
                    <i class="text-danger product_price_error"></i>
                </div>
            </div> -->
            <div class="pro_price"></div>
            <div class="d-flex mb-3">
                <label for="exampleInputEmail1" class="d-flex col-xl-3">Số lượng<span class="text-danger ml-1">*</span></label>
                <div class="w-100 text-right">
                    <input type="number" class="form-control col-xl-12 mb-1 value_amount" placeholder="Số lượng" name="amount" id="value_amount">
                    <i class="text-danger value_amount_error"></i>
                </div>
            </div>
            <div class="d-flex mb-3">
                <label for="exampleInputEmail1" class="d-flex col-xl-3">Tên in trên thẻ<span class="text-danger ml-1">*</span></label>
                <div class="w-100 text-right">
                    <input type="text" class="form-control col-xl-12 mb-1" placeholder="Tên in trên thẻ" name="card_name" id="card_name">
                    <i class="text-danger card_name_error"></i>
                </div>
            </div>
            <div class="d-flex mb-3">
                <label for="exampleInputEmail1" class="d-flex col-xl-3">Mã giảm giá</label>
                <div class="w-100 text-right">
                    <input type="text" class="form-control col-xl-12 mb-1 h_voucher_fee" placeholder="Mã giảm giá" name="voucher" id="voucher">
                    <i class="text-danger voucher_error"></i>
                </div>
            </div >
            <div class="giam_vou"></div>
            <div class="d-flex mb-3">
                <label for="exampleInputEmail1" class="d-flex col-xl-3">Ghi chú</label>
                <div class="w-100 text-right">
                    <input type="text" class="form-control col-xl-12 mb-1" placeholder="Ghi chú" name="note" id="note">
                    <i class="text-danger note_error"></i>
                </div>
            </div>
            <!-- <div class="d-flex mb-3">
                <label for="exampleInputEmail1" class="d-flex col-xl-3">Thành tiền</label>
                <div class="w-100 text-right">
                    <input type="number" class="form-control col-xl-12 mb-1" placeholder="Thành tiền" name="thanh_tien" id="thanh_tien">
                    <i class="text-danger thanh_tien_error"></i>
                </div>
            </div> -->
            <div class="ctn_order d-flex">
                <label for="exampleInputEmail1" class="d-flex col-xl-3">Thành tiền</label>
                <p class="ml-auto order_r tongTien total total_money color_x"><span class="order_r total_money color_x value_sum h_total_fee">0</span> VNĐ</p>
            </div>
            <div class="text-center mx-auto mt-4">
                <!-- <a href="/admin/product" class="btn btn-outline-secondary w-25 mr-4">Hủy</a>  -->
                <button type="submit" class="btn btn-primary w-25 add_bill">Thêm</button>
            </div>
        </form>
    </div>
</div>