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
        <div class="d-flex mb-3">
            <label for="exampleInputEmail1" class="d-flex col-xl-3">Tên sản phẩm<span class="text-danger ml-1">*</span></label> 
            <div class="w-100 text-right">
                <input type="text" class="form-control col-xl-12 mb-1" placeholder="Tên sản phẩm" name="product_name" id="product_name">
                <i class="text-danger product_name_error"></i>
            </div>
        </div>
        <div class="d-flex mb-3">
            <label for="exampleInputEmail1" class="d-flex col-xl-3">Số lượng<span class="text-danger ml-1">*</span></label> 
            <div class="w-100 text-right">
                <input type="number" class="form-control col-xl-12 mb-1" placeholder="Số lượng" name="amount" id="amount">
                <i class="text-danger amount_error"></i>
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
            <label for="exampleInputEmail1" class="d-flex col-xl-3">Ghi chú<span class="text-danger ml-1">*</span></label> 
            <div class="w-100 text-right">
                <input type="number" class="form-control col-xl-12 mb-1" placeholder="Ghi chú" name="note" id="note">
                <i class="text-danger note_error"></i>
            </div>
        </div>
        <div class="text-center mx-auto mt-4">   
            <!-- <a href="/admin/product" class="btn btn-outline-secondary w-25 mr-4">Hủy</a>  -->
            <button type="submit" class="btn btn-primary w-25 add_bill">Thêm</button>
        </div>
        </form>
    </div>
</div>