<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Admin extends CI_Controller
{

	protected $data;
	public function __construct()
	{
		parent::__construct();
		$this->load->helper('array_helper');
		$this->load->library("session");
		$this->load->model("Products");
		$this->load->model("Vouchers");
		$this->load->model("Bills");
		$this->load->model("Users");
		$this->load->model("Evaluates");
		$this->load->model("Statistical");
		$this->load->helper('fun_helper');
	}
	public function index()
	{
		$this->checkLogin();
		$this->data['title'] = 'Trang chủ';
		$this->data['js'] = [
			'/assets/admin/vendor/chart.js/Chart.min.js',
			'/assets/admin/js/demo/chart-area-demo.js',
			'/assets/admin/js/demo/chart-pie-demo.js',
			'/assets/admin/js/admin/home.js'
		];
		$this->data['content'] = '/admin/home.php';
		$this->data['count'] = $this->Statistical->get_total();
		$this->load->view('admin/index', $this->data);
	}
	public function statistical()
	{
		$this->checkLogin();
		$this->data['title'] = 'Thống kê';
		$this->data['js'] = [
			'/assets/admin/vendor/chart.js/Chart.min.js',
			'/assets/admin/js/demo/chart-area-demo.js',
			'/assets/admin/js/demo/chart-pie-demo.js',
			'/assets/admin/js/admin/home.js',
			'/assets/admin/js/admin/statistical.js',
		];
		$this->data['content'] = '/admin/statistical.php';
		$this->data['count'] = $this->Statistical->get_total();
		$this->data['approved_invoice'] = $this->Bills->approved();
		$this->load->view('admin/index', $this->data);
	}
	public function login()
	{
		$this->data['title'] = 'Đăng nhập';
		if ($this->session->has_userdata('admin')) {
			header('location: /admin');
		}
		$this->load->view('admin/login', $this->data);
	}
	public function checkLogin()
	{
		if (!$this->session->has_userdata('admin')) {
			header('location: /admin/login');
		}
	}
	public function logout()
	{
		$this->session->unset_userdata('admin');
		$this->login();
	}
	public function product()
	{
		$this->checkLogin();
		$this->data['title'] = 'Quản lý sản phẩm';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
			'/assets/admin/js/admin/product.js'
		];
		$this->data['content'] = '/admin/product.php';
		$this->data['products'] = $this->Products->info();
		$this->load->view('admin/index', $this->data);
	}
	public function add_product()
	{
		$this->checkLogin();
		$this->data['title'] = 'Thêm sản phẩm';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
			'/assets/admin/js/admin/add_product.js'
		];
		$this->data['content'] = '/admin/add_product.php';
		$this->load->view('admin/index', $this->data);
	}
	public function edit_product()
	{
		$this->checkLogin();
		$this->data['title'] = 'Chỉnh sửa sản phẩm';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
			'/assets/admin/js/admin/edit_product.js'
		];
		$this->data['content'] = '/admin/edit_product.php';
		$id = $this->input->get('id');
		$this->data['info_pro'] = $this->Products->select($id);
		$this->load->view('admin/index', $this->data);
	}
	public function voucher()
	{
		$this->checkLogin();
		$this->data['title'] = 'Quản lý voucher';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
		];
		$this->data['content'] = '/admin/voucher.php';
		$this->data['voucher'] = $this->Vouchers->info();
		$this->load->view('admin/index', $this->data);
	}
	public function add_voucher()
	{
		$this->checkLogin();
		$this->data['title'] = 'Thêm voucher';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
			'/assets/admin/js/admin/add_voucher.js'
		];
		$this->data['content'] = '/admin/add_voucher.php';
		$this->load->view('admin/index', $this->data);
	}
	public function edit_voucher()
	{
		$this->checkLogin();
		$this->data['title'] = 'Chỉnh sửa voucher';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
			'/assets/admin/js/admin/edit_voucher.js'
		];
		$this->data['content'] = '/admin/edit_voucher.php';
		$id = $this->input->get('id');
		$this->data['info_pro'] = $this->Vouchers->select($id);
		$this->load->view('admin/index', $this->data);
	}
	public function unapproved_invoice()
	{
		$this->checkLogin();
		$this->data['title'] = 'Hoá đơn chưa duyệt';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
			'/assets/admin/js/admin/jquery.tableToExcel.js',
			'/assets/admin/js/admin/unapproved_invoice.js',
		];
		$this->data['content'] = '/admin/unapproved_invoice.php';
		$this->data['unapproved_invoice'] = $this->Bills->unapproved();
		$this->load->view('admin/index', $this->data);
	}
	public function unapproved_details()
	{
		$this->checkLogin();
		$this->data['title'] = 'Chi tiết hoá đơn chưa duyệt';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
			'/assets/admin/js/admin/jquery.tableToExcel.js'
		];
		$this->data['content'] = '/admin/unapproved_details.php';
		$id = $this->input->get('id');
		$this->data['details'] = $this->Bills->details($id);
		$this->data['detailUser'] = $this->Bills->detailUser($id);
		$this->load->view('admin/index', $this->data);
	}
	public function approved_invoice()
	{
		$this->checkLogin();
		$this->data['title'] = 'Hoá đơn đã duyệt';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
			'/assets/admin/js/admin/jquery.tableToExcel.js'
		];
		$this->data['content'] = '/admin/approved_invoice.php';
		$this->data['approved_invoice'] = $this->Bills->approved();
		$this->load->view('admin/index', $this->data);
	}
	public function approved_details()
	{
		$this->checkLogin();
		$this->data['title'] = 'Chi tiết hoá đơn đã duyệt';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
			'/assets/admin/js/admin/jquery.tableToExcel.js'
		];
		$this->data['content'] = '/admin/approved_details.php';
		$id = $this->input->get('id');
		$this->data['details'] = $this->Bills->details($id);
		$this->data['detailUser'] = $this->Bills->detailUser($id);
		$this->load->view('admin/index', $this->data);
	}
	public function canceled_invoice()
	{
		$this->checkLogin();
		$this->data['title'] = 'Hoá đơn đã huỷ';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
			'/assets/admin/js/admin/jquery.tableToExcel.js',
		];
		$this->data['content'] = '/admin/canceled_invoice.php';
		$this->data['canceled_invoice'] = $this->Bills->canceled();
		$this->load->view('admin/index', $this->data);
	}
	public function canceled_details()
	{
		$this->checkLogin();
		$this->data['title'] = 'Chi tiết hoá đơn đã huỷ';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
			'/assets/admin/js/admin/jquery.tableToExcel.js'
		];
		$this->data['content'] = '/admin/canceled_details.php';
		$id = $this->input->get('id');
		$this->data['details'] = $this->Bills->details($id);
		$this->data['detailUser'] = $this->Bills->detailUser($id);
		$this->load->view('admin/index', $this->data);
	}
	public function inventory()
	{
		$this->checkLogin();
		$this->data['title'] = 'Hàng tồn';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
			'/assets/admin/js/admin/jquery.tableToExcel.js',
		];
		$this->data['content'] = '/admin/inventory.php';
		$this->data['products'] = $this->Products->info();

		$this->load->view('admin/index', $this->data);
	}
	public function best_seller()
	{
		$this->checkLogin();
		$this->data['title'] = 'Hàng bán chạy ';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
			'/assets/admin/js/admin/jquery.tableToExcel.js',
		];
		$this->data['content'] = '/admin/best_seller.php';
		$this->data['best_seller'] = $this->Bills->best_seller();var_dump($this->Bills->best_seller());	

		$this->load->view('admin/index', $this->data);
	}
	public function users()
	{
		$this->checkLogin();
		$this->data['title'] = 'Quản lý khách hàng';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
		];
		$this->data['content'] = '/admin/users.php';
		$this->data['users'] = $this->Users->info();
		$this->load->view('admin/index', $this->data);
	}
	public function user_details()
	{
		$this->checkLogin();
		$this->data['title'] = 'Chi tiết khách hàng';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js'
		];
		$this->data['content'] = '/admin/user_details.php';
		$id = $this->input->get('id');
		$this->data['details'] = $this->Users->details($id);
		$this->load->view('admin/index', $this->data);
	}
	public function unapproved_review()
	{
		$this->checkLogin();
		$this->data['title'] = 'Đánh giá sản phẩm chưa duyệt';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
			'/assets/admin/js/admin/add_voucher.js',
			'/assets/admin/js/admin/una_review.js',
		];
		$this->data['content'] = '/admin/unapproved_review.php';
		$this->data['eva'] = $this->Evaluates->info();
		$this->load->view('admin/index', $this->data);
	}
	public function approved_review()
	{
		$this->checkLogin();
		$this->data['title'] = 'Đánh giá sản phẩm đã duyệt';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
			'/assets/admin/js/admin/add_voucher.js',
			'/assets/admin/js/admin/app_review.js',
			
		];
		$this->data['content'] = '/admin/approved_review.php';
		$this->data['eva'] = $this->Evaluates->info1();
		$this->load->view('admin/index', $this->data);
	}
	public function evaluate_details()
	{
		$this->checkLogin();
		$this->data['title'] = 'Chi tiết đánh giá';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js'
		];
		$this->data['content'] = '/admin/evaluate_details.php';
		$id = $this->input->get('id');
		$this->data['details'] = $this->Evaluates->details($id);
		$this->load->view('admin/index', $this->data);
	}
	public function add_bill()
	{
		$this->checkLogin();
		$this->data['title'] = 'Thêm hoá đơn';
		$this->data['css'] = ['/assets/admin/vendor/datatables/dataTables.bootstrap4.min.css', '/assets/admin/css/product.css'];
		$this->data['js'] = [
			'/assets/admin/vendor/datatables/jquery.dataTables.min.js',
			'/assets/admin/vendor/datatables/dataTables.bootstrap4.min.js',
			'/assets/admin/js/demo/datatables-demo.js',
			'/assets/admin/js/admin/add_bill.js',
		];
		$this->data['content'] = '/admin/add_bill.php';
		$id = $this->input->get('id');
		$this->data['details'] = $this->Evaluates->details($id);
		$this->data['product'] = $this->Products->select_for();
		$this->load->view('admin/index', $this->data);
	}
}
