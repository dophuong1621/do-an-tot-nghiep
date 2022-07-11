<?php
defined('BASEPATH') or exit('No direct script access allowed');

class PersonalPageController extends CI_Controller
{

    protected $data;
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('array_helper');
        $this->load->helper('fun_helper');
        $this->load->library("session");
        $this->load->model('Users');
        $this->load->model('User_details');
        $this->load->model('CartLink');
        $this->load->model('Contact');
    }
    public function edit_personal_page()
    {
        //lấy dữ liệu
        $session = $this->session->userdata('user');
        $id = $session['id'];
        $fullname = $this->input->post('full_name');
        $dateBirth = $this->input->post('date_birth');
        $dateBirth = ($dateBirth != "") ? strtotime($dateBirth) : 0;
        $today = time();
        $company = $this->input->post('company');
        $position = $this->input->post('position');
        $descrip = $this->input->post('descrip');
        $result = false;
        $message = "Chỉnh sửa thông tin thất bại";
        $data = [
            'full_name' => $fullname,
            'date_birth' => $dateBirth,
            'company' => $company,
            'position' => $position,
            'descrip' => $descrip,
            'updated_at' => time(),
        ];
        if ($dateBirth < $today) {
            // if ($fullname != '' && $dateBirth != '' && $company != '' && $position != '') {
            $this->Users->update($data, $id);
            $result = true;
            $message = "Chỉnh sửa thông tin thành công";
            // }
        }

        echo json_encode([
            'result' => $result,
            'message' => $message
        ]);
    }
    public function edit_user_name()
    {
        $username = $this->input->post('user_name');
        $session = $this->session->userdata('user');
        $id = $session['id'];
        $result = false;
        $message = "Chỉnh sửa thông tin thất bại";
        $data = [
            'user_name' => $username,
        ];
        if (empty($username)) {
            $this->Users->update($data, $id);
            $result = true;
            $message = "Chỉnh sửa thông tin thành công";
        }

        echo json_encode([
            'result' => $result,
            'message' => $message
        ]);
    }
    public function upload_avata()
    {
        $avata = $this->input->post('avata');
        $avata = $_FILES['avata'];
        $session = $this->session->userdata('user');
        $id = $session['id'];
        $result = false;
        $message = "Cập nhật avatar thất bại";

        if ($avata != '') {
            if (isset($_FILES['avata']) && $_FILES['avata']['name'][0] != '') {
                $config['upload_path'] = './assets/avata_user/';
                $config['allowed_types'] = 'png|jpg|jpeg';
                $config['file_name'] = $_FILES['avata']['name'];
                $config['encrypt_name'] = TRUE;

                $this->load->library('upload', $config);
                if ($this->upload->do_upload('avata')) {
                    $uploadData = $this->upload->data();
                    $avata = $uploadData['file_name'];
                    $data = [
                        'avatar' => $avata,
                        'updated_at' => time(),
                    ];
                    $this->Users->updateAvata($data, $id);
                    $result = true;
                    $message = "Cập nhật avatar thành công";
                } else {
                    $data['avata'] = '';
                }
            } else {
                $data['avata'] = '';
            }
            echo json_encode([
                'result' => $result,
                'message' => $message
            ]);
        }
    }
    public function upload_cover()
    {
        $cover = $this->input->post('cover');
        $cover = $_FILES['cover'];
        $session = $this->session->userdata('user');
        $id = $session['id'];
        $result = false;
        $message = "Cập nhật ảnh bìa thất bại";

        if ($cover != '') {
            if (isset($_FILES['cover']) && $_FILES['cover']['name'][0] != '') {
                $config['upload_path'] = './assets/cover_user/';
                $config['allowed_types'] = 'png|jpg|jpeg';
                $config['file_name'] = $_FILES['cover']['name'];
                $config['encrypt_name'] = TRUE;

                $this->load->library('upload', $config);
                if ($this->upload->do_upload('cover')) {
                    $uploadData = $this->upload->data();
                    $cover = $uploadData['file_name'];
                    $data = [
                        'cover' => $cover,
                        'updated_at' => time(),
                    ];
                    $this->Users->updateCover($data, $id);
                    $result = true;
                    $message = "Cập nhật ảnh bìa thành công";
                } else {
                    $data['cover'] = '';
                }
            } else {
                $data['cover'] = '';
            }
            echo json_encode([
                'result' => $result,
                'message' => $message
            ]);
        }
    }
    public function create_user_details()
    {
        $title = $this->input->post('title');
        $content = $this->input->post('content');
        $title = explode(',', $title);
        $content = explode(',', $content);
        $session = $this->session->userdata('user');
        $id = $session['id'];
        $result = false;
        $message = "Thêm thông tin thất bại";
        if ($title != '' && $content != '') {
            foreach (array_combine($title, $content) as $tit => $ct) {
                $data = [
                    'user_id' => $id,
                    'title' => $tit,
                    'content' => $ct,
                    'created_at' => time(),
                    'updated_at' => time()
                ];
                $this->User_details->insert($data);
            }
            $result = true;
            $message = "Thêm thông tin thành công";
        }
        echo json_encode([
            'result' => $result,
            'message' => $message
        ]);
    }
    public function update_user_details()
    {
        $arr_id = $this->input->post('id');
        $title = $this->input->post('title');
        $content = $this->input->post('content');
        $arr_id = explode(',', $arr_id);
        $title = explode(',', $title);
        $content = explode(',', $content);
        $result = false;
        $message = "Chỉnh sửa thông tin thất bại";

        if ($title != '' && $content != '' && $arr_id != '') {
            foreach ($arr_id as $key => $id) {
                $data = [
                    'title' => $title[$key],
                    'content' => $content[$key],
                    'updated_at' => time(),
                ];
                $this->User_details->update($data, $id);
            }
            $result = true;
            $message = "Chỉnh sửa thông tin thành công";
        }
        echo json_encode([
            'result' => $result,
            'message' => $message
        ]);
    }
    public function delete_user_details()
    {
        $id = $this->input->post('id');
        $result = false;
        $message = "Xoá thông tin thất bại";
        if ($id != '') {
            foreach($id as $key){
                $this->User_details->delete($key);
                $result = true;
                $message = "Xoá thông tin thành công";
            }
        }
        echo json_encode([
            'result' => $result,
            'message' => $message
        ]);
    }
    public function the()
    {
        $the = $this->input->post('the');
        $id = $this->session->userdata('user')['id'];
        $result = false;
        $message = 'Thêm thẻ thất bại';
        if ($the != '') {
            $data = [
                'user_id' => $id,
                'code' => $the,
                'created_at' => time(),
            ];
            $this->CartLink->insert($data);
            $result = true;
            $message = 'Thêm thẻ thành công';
        }
        echo json_encode([
            'result' => $result,
            'message' => $message,
        ]);
    }
    public function create_contact()
    {
        $phone = $this->input->post('phone');
        $email = $this->input->post('email');
        $address = $this->input->post('address');
        $skype = $this->input->post('skype');
        $facebook = $this->input->post('facebook');
        $instagram = $this->input->post('instagram');
        $twitter = $this->input->post('twitter');
        $tiktok = $this->input->post('tiktok');
        $zalo = $this->input->post('zalo');
        $youtube = $this->input->post('youtube');
        $snapchat = $this->input->post('snapchat');
        $linkedIn = $this->input->post('linkedIn');
        $pinterest = $this->input->post('pinterest');
        $behance = $this->input->post('behance');
        $momo = $this->input->post('momo');
        $paypal = $this->input->post('paypal');
        $bank = $this->input->post('bank');
        $link = $this->input->post('link');
        // encode
        $obj_phone = json_decode($phone);
        $obj_email = json_decode($email);
        $obj_address = json_decode($address);
        $obj_skype = json_decode($skype);
        $obj_facebook = json_decode($facebook);
        $obj_instagram = json_decode($instagram);
        $obj_twitter = json_decode($twitter);
        $obj_tiktok = json_decode($tiktok);
        $obj_zalo = json_decode($zalo);
        $obj_youtube = json_decode($youtube);
        $obj_snapchat = json_decode($snapchat);
        $obj_linkedIn = json_decode($linkedIn);
        $obj_pinterest = json_decode($pinterest);
        $obj_behance = json_decode($behance);
        $obj_momo = json_decode($momo);
        $obj_paypal = json_decode($paypal);
        $obj_bank = json_decode($bank);
        $obj_link = json_decode($link);
        $session = $this->session->userdata('user');
        $id = $session['id'];

        if ($obj_phone != '') {
            foreach ($obj_phone as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_phone[$key][0],
                    'subtitle' => $obj_phone[$key][1],
                    'content' => $obj_phone[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_email != '') {
            foreach ($obj_email as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_email[$key][0],
                    'subtitle' => $obj_email[$key][1],
                    'content' => $obj_email[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_address != '') {
            foreach ($obj_address as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_address[$key][0],
                    'subtitle' => $obj_address[$key][1],
                    'content' => $obj_address[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_skype != '') {
            foreach ($obj_skype as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_skype[$key][0],
                    'subtitle' => $obj_skype[$key][1],
                    'content' => $obj_skype[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_facebook != '') {
            foreach ($obj_facebook as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_facebook[$key][0],
                    'subtitle' => $obj_facebook[$key][1],
                    'content' => $obj_facebook[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_instagram != '') {
            foreach ($obj_instagram as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_instagram[$key][0],
                    'subtitle' => $obj_instagram[$key][1],
                    'content' => $obj_instagram[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_twitter != '') {
            foreach ($obj_twitter as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_twitter[$key][0],
                    'subtitle' => $obj_twitter[$key][1],
                    'content' => $obj_twitter[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_tiktok != '') {
            foreach ($obj_tiktok as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_tiktok[$key][0],
                    'subtitle' => $obj_tiktok[$key][1],
                    'content' => $obj_tiktok[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_zalo != '') {
            foreach ($obj_zalo as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_zalo[$key][0],
                    'subtitle' => $obj_zalo[$key][1],
                    'content' => $obj_zalo[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_youtube != '') {
            foreach ($obj_youtube as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_youtube[$key][0],
                    'subtitle' => $obj_youtube[$key][1],
                    'content' => $obj_youtube[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_snapchat != '') {
            foreach ($obj_snapchat as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_snapchat[$key][0],
                    'subtitle' => $obj_snapchat[$key][1],
                    'content' => $obj_snapchat[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_linkedIn != '') {
            foreach ($obj_linkedIn as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_linkedIn[$key][0],
                    'subtitle' => $obj_linkedIn[$key][1],
                    'content' => $obj_linkedIn[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_pinterest != '') {
            foreach ($obj_pinterest as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_pinterest[$key][0],
                    'subtitle' => $obj_pinterest[$key][1],
                    'content' => $obj_pinterest[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_behance != '') {
            foreach ($obj_behance as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_behance[$key][0],
                    'subtitle' => $obj_behance[$key][1],
                    'content' => $obj_behance[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_momo != '') {
            foreach ($obj_momo as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_momo[$key][0],
                    'subtitle' => $obj_momo[$key][1],
                    'content' => $obj_momo[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_paypal != '') {
            foreach ($obj_paypal as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_paypal[$key][0],
                    'subtitle' => $obj_paypal[$key][1],
                    'content' => $obj_paypal[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_bank != '') {
            foreach ($obj_bank as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_bank[$key][0],
                    'subtitle' => $obj_bank[$key][1],
                    'content' => $obj_bank[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        if ($obj_link != '') {
            foreach ($obj_link as $key => $value) {
                $data = [
                    'user_id' => $id,
                    'type' => $obj_link[$key][0],
                    'subtitle' => $obj_link[$key][1],
                    'content' => $obj_link[$key][2],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->insert($data);
            }
        }
        $result = true;
        $message = "Thêm thông tin thành công";
        echo json_encode([
            'result' => $result,
            'message' => $message
        ]);
    }

    public function update_contact()
    {
        $upCont = $this->input->post('upCont');
        $upBank = $this->input->post('upBank');
        $obj_cont = json_decode($upCont);
        // $obj_cont = explode(',',$obj_cont);
        $obj_bank = json_decode($upBank);
        // $obj_bank = explode(',',$obj_bank);

        $result = false;
        $message = "Chỉnh sửa thông tin thất bại";
        if ($obj_cont != '') {
            foreach ($obj_cont as $key => $value) {
                $data = [
                    'subtitle' => $obj_cont[$key][2],
                    'content' => $obj_cont[$key][3],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->update($data, $obj_cont[$key][0]);
                $result = true;
                $message = "Chỉnh sửa thông tin thành công";
            }
        }
        if ($obj_bank != '') {

            foreach ($obj_bank as $key => $value) {
                $data = [
                    'subtitle' => $obj_bank[$key][2],
                    'content' => $obj_bank[$key][3],
                    'created_at' => time(),
                    'updated_at' => time(),
                ];
                $this->Contact->update($data, $obj_bank[$key][0]);
                $result = true;
                $message = "Chỉnh sửa thông tin thành công";
            }
        }


        echo json_encode([
            'result' => $result,
            'message' => $message
        ]);
    }
    public function delete_contact()
    {
        $id = $this->input->post('id');
        $result = false;
        $message = "Xoá thông tin thất bại";
        if ($id != '') {
            foreach($id as $key){
                $this->Contact->delete($key);
                $result = true;
                $message = "Xoá thông tin thành công";
            }
        }
        echo json_encode([
            'result' => $result,
            'message' => $message
        ]);
    }
    public function index_contact()
    {
        $id = $this->input->post('id');
        $cont = $this->Contact->selectCont($id);
        echo json_encode($cont);
    }
    public function index_contact2()
    {
        $id2 = $this->input->post('id');
        $cont2 = $this->Contact->selectCont($id2);
        echo json_encode($cont2);
    }
    public function view_edit()
    {
        $id = $this->input->post('id');
        $cont = $this->Contact->selectCont($id);
        echo json_encode($cont);
    }
}
