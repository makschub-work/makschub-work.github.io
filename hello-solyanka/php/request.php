<?php
//$body = print_r($_POST, true);
$body ="\rИмя: {$_POST['name']};\r\nemail: {$_POST['email']}\r\phone: {$_POST['phone']}";
mail('chubmaksim@gmail.com', "Заявка на звонок от сайта МТФ", $body, $headers);
//echo 'ok';
?>