<div class="container-fluid">
    <h1 class="h3 mb-4 text-gray-800">Chi tiết khách hàng</h1>
    <div class="card shadow mb-4 px-5 py-4">
        <div class="d-flex mb-3">
            <label for="exampleInputEmail1" class="d-flex col-xl-3">ID</label>
            <div class="w-100 text-right">
                <input type="text" class="form-control col-xl-12 mb-1" disabled value="<?= $id ?>">
            </div>
        </div>
        <div class="d-flex mb-3">
            <label for="exampleInputEmail1" class="d-flex col-xl-3">Tên sản phẩm</label>
            <div class="w-100 text-right">
                <input type="text" class="form-control col-xl-12 mb-1" disabled value="<?= $details[0]['name'] ?>">
            </div>
        </div>
        <div class="d-flex mb-3">
            <label for="exampleInputEmail1" class="d-flex col-xl-3">Giá sản phẩm</label>
            <div class="w-100 text-right">
                <input type="text" class="form-control col-xl-12 mb-1" disabled value="<?= number_format($details[0]['price'],'0',',','.') ?>">
            </div>
        </div>
        <div class="d-flex mb-3">
            <label for="exampleInputEmail1" class="d-flex col-xl-3">Số lượng</label>
            <div class="w-100 text-right">
                <input type="text" class="form-control col-xl-12 mb-1" disabled value="<?= $details[0]['amount'] ?>">
            </div>
        </div>
        <div class="d-flex mb-3">
            <label for="exampleInputEmail1" class="d-flex col-xl-3">Tên Voucher</label>
            <div class="w-100 text-right">
                <input type="text" class="form-control col-xl-12 mb-1" disabled value="<?= $details[0]['vou_coupon'] ?>">
            </div>
        </div>
        <?php
            if($details[0]['voucher'] != NUll){
                echo '<div class="d-flex mb-3">
                <label for="exampleInputEmail1" class="d-flex col-xl-3">Giá giảm</label>
                <div class="w-100 text-right">
                    <input type="text" class="form-control col-xl-12 mb-1" disabled value="'. $details[0]['total_voucher'].'">
                </div>
            </div>';
            }
        ?>
        <div class="d-flex mb-3">
            <label for="exampleInputEmail1" class="d-flex col-xl-3">Tổng tiền</label>
            <div class="w-100 text-right">
                <input type="text" class="form-control col-xl-12 mb-1" disabled value="<?= number_format($details[0]['total_price'],'0',',','.')?>">
            </div>
        </div>
        
        <div class="d-flex mb-3">
            <label for="exampleInputEmail1" class="d-flex col-xl-3">Ngày đặt hàng</label>
            <div class="w-100 text-right">
                <input type="text" class="form-control col-xl-12 mb-1" disabled value="<?= date('H:i:s d-m-Y',$details[0]['created_at']) ?>">
            </div>
        </div>
    </div>
</div>