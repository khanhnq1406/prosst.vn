<?php
require_once( dirname(__FILE__) . '/wp-load.php' );
header('Access-Control-Allow-Origin: http://127.0.0.1:5173');
$arr = $_POST;
// print_r($arr["phone"]);
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
$from = $arr["customer-name"];
$to = "quockhanh200299@gmail.com";
$subject = "Thông báo PROSST: Khách hàng liên hệ";
$message = "Tên khách hàng: " . $arr["customer-name"] . "\n" . "Tên công ty: " . $arr["company-name"] . "\n" . "Số điện thoại: " . $arr["phone"] . "\n" . "Email: " . $arr["email"] . "\n" . "Tiêu đề: " . $arr["title"] . "\n" . "Nội dung: " . $arr["content"];
$headers = "From:" . $from;
if (wp_mail( $to, $subject, $message, $headers ))
{
    echo "success";
}
else {
    echo "failed";
}
?>