<?php
// Файлы phpmailer
require 'class.phpmailer.php';

$name = $_POST['name'];
$company = $_POST['company'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$text = $_POST['text'];

// Настройки
$mail = new PHPMailer;
$mail->CharSet = "utf-8";



$mail->setFrom('info@deltasolutions.ru');
$mail->addAddress('products@deltasolutions.ru');
                         
// Письмо
$mail->isHTML(true); 
$mail->Subject = "Сообщение с сайта ";
$mail->Body    = "Имя: $name <br>Компания: $company <br>Телефон: $phone <br>Email: $email <br>Комментарий: $text"; // Текст письма


if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
?>