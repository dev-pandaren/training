# API ЯндексДеньги. Система оплаты на сайт


- [Технологии Яндекса](https://tech.yandex.ru/)
- [API форм и кнопок](https://tech.yandex.ru/money/)
- [Настройка отправки уведомления на e-mail](https://money.yandex.ru/settings?w=inform)
- [Настройка отправки уведомления в PHP](https://money.yandex.ru/myservices/online.xml)


<!------------------------------------------------------------->
#### index.html
<!------------------------------------------------------------->
```html
<form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml">
	<input type="hidden" name="receiver"      value="410011498839870">
	<input type="hidden" name="quickpay-form" value="shop">
	<input type="hidden" name="targets"       value="Оплата в магазине webpanda (targets)">
	<input type="hidden" name="sum"           value="2">
	<label><input type="radio" name="paymentType" value="PC">Яндекс.Деньгами</label>
	<label><input type="radio" name="paymentType" value="AC">Банковской картой</label>
	<label><input type="radio" name="paymentType" value="PC">С баланса мобильного</label>
	<input type="hidden" name="formcomment"   value="Товар #1 (formcomment)">
	<input type="hidden" name="short-dest"    value="Товар #1 (short-dest)">
	<input type="hidden" name="label"         value="Товар #1 (id)">
	<input type="hidden" name="comment"       value="Товар #1 (comment)">
	<input type="hidden" name="successURL"    value="http://ct66716.tmweb.ru/success.html">
	<input type="hidden" name="need-fio"      value="false">
	<input type="submit" value="Оплатить">
</form>
```

<!------------------------------------------------------------->
#### notification.php
<!------------------------------------------------------------->
```php
<?php
	$label = $_POST['label']; 
	$file = fopen('notification.txt', 'w');
	fwrite($file, $label);
	fclose($file);
?>
```

<!------------------------------------------------------------->
#### success.html
<!------------------------------------------------------------->
```html
<h1>Успешно!</h1>
```
