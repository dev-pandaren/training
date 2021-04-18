# Отправка HTML сообщения на почту

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Отправка HTML сообщения на почту
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
function sendEmailHtml() {
	const name = 'Test Name';
	const email = 'test@email.ru';
	const style = 'style="border: 1px solid rgba(0,0,0,0.4); padding: 5px;"';

	const message = `
		<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
		<html>
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		</head>
		<body>
		<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; margin:0; padding:0;">
			<tr>
				<td ${style}><b>Имя</b></td>
				<td ${style}>${name}</td>
			</tr>
			<tr>
				<td ${style}><b>E-mail</b></td>
				<td ${style}>${email}</td>
			</tr>
		</table>
		</body>
		</html>`;

	$.get("php/mail.php", {message:message}, function(data) {
	    alert(data);
	});	
}
```

```php
<?php
	$to = 'user@example.com, anotheruser@example.com'; // получатель / получатели
	$subject = 'Письмо с сайта';                       // тема письма
	$message = $_GET[message];                         // сообщение

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$my  = mail($to, $subject, $message, $headers);

	if ($my) {
		echo 'Письмо успешно отправлено!';
    } else {
    	echo 'Письмо не отправлено!';
    }
?>
```
