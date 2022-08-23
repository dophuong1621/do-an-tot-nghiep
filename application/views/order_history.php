<div class="cont-order">
    <p class="bn_t1">Lịch sử đơn hàng</p>
</div>
<div class="container-fluid">
    <!-- <div class="text-right mb-3">
        <a href="/admin/add_voucher" class="btn btn-primary">Thêm Voucher</a>
    </div> -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Lịch sử đơn hàng</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered " id="dataTable" width="100%" cellspacing="0">
                    <!-- <button class="xuatEx btn btn-primary" style="float:right;" >Xuất excel</button> -->
                    <thead>
                        <tr>
                            <!-- <th>Mã đơn hàng</th> -->
                            <th>Tên sản phẩm</th>
                            <th>Ảnh</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th>Ghi chú</th>
                            <th>Ngày đặt</th>
                            <th>Trạng thái</th>
                            <th>Chi tiết</th>
                            <!-- <th>Đánh giá</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <? foreach ($history as $value) { ?>
                            <tr>
                                <!-- <td><?= $value['id'] ?></td> -->
                                <td><?= $value['name'] ?></td>
                                <td><img src="/assets/product_image/<?= $value['image'] ?>" alt="Thẻ SmartID365" class="img_card" style="width:45px;height:45px;margin-right:10px;"></td>
                                <td><?= $value['amount'] ?></td>
                                <td><?= number_format($value['bill_price'], 0, ',', ',') . ' VNĐ' ?></td>
                                <td><?= $value['note'] ?></td>
                                <td><?= ($value['created_at'] == 0) ? "x" : date('H:i:s d/m/Y', $value["created_at"]) ?></td>
                                <td><?php if ($value['status'] == 0) {
                                        echo 'Chưa duyệt';
                                    } else if ($value['status'] == 1) {
                                        echo "Đã Duyệt";
                                    } else if ($value['status'] == 2) {
                                        echo "Đã Huỷ";
                                    } ?></td>
                                <td><a href="chi-tiet-hoa-don?id=<?= $value['id'] ?>" class="btn btn-primary">Chi tiết</a></td>
                                <!-- <td><button class="btn btn-primary dgsp">Đánh giá</button></td> -->
                            </tr>
                        <? } ?>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
    <div class="ctn_ttcn">
        <div class="k_ttcn_b">
        </div>
    </div>

</div>