<div class="container-fluid">
    <h1 class="h3 mb-2 text-gray-800">Quản lý hàng tồn</h1>
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Danh sách hàng tồn kho </h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="" width="100%" cellspacing="0">
                    <!-- <button class="xuatEx btn btn-primary" style="float:right;" >Xuất excel</button> -->
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <!-- <th>Ảnh</th> -->
                            <th>Số lượng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <? foreach ($products as $value) { ?>
                            <tr>
                                <?php if ($value['amount'] <= 200) { ?>
                                    <td style="color: red"><?= $value['id'] ?></td>
                                    <td style="color: red"><?= $value['name'] ?></td>
                                    <!-- <td><?= $value['image'] ?></td> -->
                                    <td style="color: red"><?= $value['amount'] ?></td>
                                <?php } ?>
                                <?php if ($value['amount'] > 200) { ?>
                                    <td ><?= $value['id'] ?></td>
                                    <td><?= $value['name'] ?></td>
                                    <!-- <td><?= $value['image'] ?></td> -->
                                    <td><?= $value['amount'] ?></td>
                                <?php } ?>
                            </tr>
                        <? } ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>