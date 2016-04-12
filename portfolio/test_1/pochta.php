<?
header("Content-Type: text/plain; charset=utf-8");
$kuda='ztecyber@gmail.com';//куда отправлять почту?
$zagolovok='сообщение с сайта';
$headers='Content-type: text; charset="utf-8"';


// 	//если существует переменная, значит начнем получать информацию из формы
	$marka=$_POST['marka'];
	$god=$_POST['god'];
	$dvs=$_POST['dvs'];
	$kpp=$_POST['kpp'];
	echo "MARKA :".$marka."\n";
	echo "GOD :".$god."\n";
	echo "DVS :".$dvs."\n";
	echo "KPP :".$kpp."\n";
	echo "Данные данные должны быть отправлены на почту вашему менеджеру!!"."\n"."Но так как отправка почты с бесплатного хостинга заблокированна то ИЗВИНЕТЕ!! =(";
	
?>