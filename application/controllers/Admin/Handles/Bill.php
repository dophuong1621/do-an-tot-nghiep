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
        $this->load->model("Voucher");
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
        $product_name = $this->input->post('product_name');
        $amount = $this->input->post('amount');
        $card_name = $this->input->post('card_name');
        $voucher = $this->input->post('voucher');
        $note = $this->input->post('note');

        $result = false;
        $message = "Thêm hoá đơn không thành công";
        if ($name != "" && $product_name != "" && $phone != "" && $amount != "" && $card_name != "") {
            $data = [
                'bill_name' => $name,
                'phone' => $phone,
                'product_name ' => $product_name,
                'amount' => $amount,
                'ticket_number' => $card_name,
                'remaining_tickets' => $card_name,
                'voucher' => $voucher,
                'note' => $note,
                'created_at' => time(),
            ];

            $this->Bills->insert($data);
            $result = true;
            $message = "Thêm hoá đơn thành công";
        }
        echo json_encode([
            'result' => $result,
            'message' => $message
        ]);
    }
}
