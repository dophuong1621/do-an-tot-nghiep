<div class="container-fluid">
    <h1 class="h3 mb-2 text-gray-800">Quản lý hàng bán chạy nhất</h1>
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Danh sách hàng bán chạy nhất </h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="" width="100%" cellspacing="0">
                    <!-- <button class="xuatEx btn btn-primary" style="float:right;" >Xuất excel</button> -->
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Ảnh</th>
                            <th>Số lượng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <? foreach ($best_seller as $value) { ?>
                            <tr>
                                <td><?= $value['id'] ?></td>
                                <td><?= $value['name'] ?></td>
                                <td><img src="/assets/product_image/<?= $value['image'] ?>" alt="Thẻ SmartID365" class="img_card" style="width:45px;height:45px;margin-right:10px;"></td>
                                <td><?php if($value['sum_amount'] != ''){
                                    echo $value['sum_amount'];
                                } else{
                                    echo '0';
                                } ?></td>
                            </tr>
                        <? } ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>