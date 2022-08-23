<?php
defined('BASEPATH') or exit('No direct script access allowed');
class Bill_details extends CI_Model
{
	protected $_table = 'bill_details';
	function __construct()
	{
		parent::__construct();
		$this->load->database();
		$this->load->library('session');
	}
	public function history($id)
	{
		$this->db->select('bills.id,bills.bill_name,product.name,product.image, bill_details.amount,bill_details.bill_price, bills.card_name, bills.note,bills.total_trans,bills.voucher,bills.status,bills.created_at');
		$this->db->where('bills.user_id', $id);
		$this->db->join('bills', 'bill_details.bill_id=bills.id');
		$this->db->join('product', 'bill_details.product_id=product.id', 'right');
		return $this->db->get($this->_table)->result_array();
	}
	public function historyDetails($id)
	{
		$this->db->select('bills.id,bills.bill_name,product.name, bill_details.amount,bill_details.bill_price, bills.card_name, bills.note,bills.total_trans,bills.voucher,bills.status,bills.created_at');
		$this->db->join('bills', 'bill_details.bill_id=bills.id');
		$this->db->join('product', 'bill_details.product_id=product.id', 'right');
		$this->db->where([
			'bill_id' => $id,
		]);
		return $this->db->get($this->_table)->result_array();
	}
}
