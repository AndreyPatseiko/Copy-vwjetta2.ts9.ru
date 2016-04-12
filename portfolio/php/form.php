<?php
$name = isset($_POST['name'])?$_POST['name']:'';
$email = isset($_POST['email'])?$_POST['email']:'';
$message = isset($_POST['message'])?$_POST['message']:'';

$address = 'ztecyber@gmail.com';
$sub = "Сообщение из Портфолто";
$mes = "Автор назвался: $name \nУказал свой адрес: $email \nСодержание письма: $message";
$verify = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
if ($verify == 'true')
{
echo "<link rel='stylesheet' href='../style.css'>
<div class='message'><h1>Сообщение отправлено</h1><p><a href='http://localhost/portfolio/'>Вернутся на главную</a></p></div>";
}
else
{
echo "<p>Сообщение не отправлено";
}
?>
