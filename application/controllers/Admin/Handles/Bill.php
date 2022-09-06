<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Bill extends CI_Controller
{

    protected $data;
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('array_helper');
        $this->load->library("session");
        $this->load->model("Bills");
        $this->load->model("Vouchers");
        $this->load->model("Products");
        $this->load->model("Pay_models");
        $this->load->helper('fun_helper');
    }
    public function unapproved()
    {
        $duyet = $this->input->post('duyet');
        $result = false;
        $message = "Duyệt hoá đơn không thành công";
        if ($duyet != '') {
            $data = [
                'status' => 1,
                'updated_at' => time(),
            ];
            $this->Bills->update($data,$duyet);
            $result = true;
            $message = "Duyệt hoá đơn thành công";
        }

        echo json_encode([
            'result' => $result,
            'message' => $message,
        ]);
    }
    public function canceled()
    {
        $huy = $this->input->post('huy');
        $result = false;
        $message = "Huỷ hoá đơn không thành công";
        if ($huy != '') {
            $data = [
                'status' => 2,
                'updated_at' => time(),
            ];
            $this->Bills->update($data,$huy);
            $result = true;
            $message = "Huỷ hoá đơn thành công";
        }

        echo json_encode([
            'result' => $result,
            'message' => $message,
        ]);
    }
    public function add_bill()
    {
        $name = $this->input->post('name');
        $phone = $this->input->post('phone');
        $product_id = $this->input->post('product_id');
        // $product_name = $this->input->post('product_name');
        $price_pro = $this->input->post('price_pro');
        $amount = $this->input->post('amount');
        $card_name = $this->input->post('card_name');
        $voucher = $this->input->post('voucher');
        $total_voucher = $this->input->post('total_voucher');
        $total_price = $this->input->post('total_price');
        $note = $this->input->post('note');
        $result = false;
        $message = "Thêm hoá đơn không thành công";
        if ($name != "" && $product_id != "" && $phone != "" && $amount != "" && $card_name != "") {
            $data = [
                'bill_name' => $name,
                'phone' => $phone,
                'voucher' => $voucher,
                'total_voucher' => $total_voucher,
                'total_trans' => 0,
                'card_name' => $card_name,
                'note' => $note,
                'total_price' => $total_price,
                'created_at' => time(),
            ];
            if ($voucher != '') {
                $vou = $this->Vouchers->selectVou($voucher);
                $id_vou = $vou['id'];
                $remain = $vou['remaining_tickets'] - 1;
                $data = [
                    'remaining_tickets' => $remain,
                ];
                $this->Vouchers->update($data, $id_vou);
            }
            $insert_bill = $this->Bills->insert($data);
            $data_detail = [
                'bill_id' => $insert_bill,
                'product_id' => $product_id,
                'bill_price' => $price_pro,
                'amount' => $amount,
            ];
            $pro = $this->Products->select($product_id);
            $remain = $pro['amount'] - $amount;
            $so_luong = [
                'amount' => $remain,
            ];
            $this->Products->update($so_luong, $product_id);

            $this->Pay_models->addBillDetails($data_detail); 
            $result = true;
            $message = "Thêm hoá đơn thành công";
        }
        echo json_encode([
            'result' => $result,
            'message' => $message
        ]);
    }
    public function price_product()
    {
        $name = $this->input->post('name');
        $result = false;
        if ($name != '') {
            $pro_name = $this->Products->selectPrice($name);
            $data = $pro_name;
            $result = true;
        }
        echo json_encode([
            'result' => $result,
            'data' => $data,
        ]);
    }
    public function vou()
    {
        $vou = $this->input->post('vou');
        $result = false;
        if ($vou != '') {
            $voucher = $this->Vouchers->selectVou($vou);
            $data = $voucher;
            $result = true;
        }
        echo json_encode([
            'result' => $result,
            'data' => $data,
        ]);
    }
}
