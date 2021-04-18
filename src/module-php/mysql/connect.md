# Работа с MySQL


::: details Темы
- Подключение (dbConnect.php)
- Выборка данных (dbSelect.php)
- Вставка, обновление, удаление данных (dbModify.php)
:::


<!------------------------------------------------------------->
#### dbConnect.php
<!------------------------------------------------------------->
```php
<?php
	$host = 'localhost';
	$user = 'root';
	$pass = '';
	$db = 'sample';

    $link = mysqli_connect($host, $user, $pass, $db); 
    mysqli_set_charset($link, 'utf8');           
    if(!$link) {
        exit(mysqli_error($link));
    } 
?>
```

<!------------------------------------------------------------->
#### dbModify.php
<!------------------------------------------------------------->
```php
<?php
	include('dbConnect.php');

	$sql = $_GET[sql];
	$query = mysqli_query($link, $sql);
	$insert_id = mysqli_insert_id($link);

	$arr = array($query, $insert_id);
	echo json_encode($arr);
?>
```

<!------------------------------------------------------------->
#### dbSelect.php
<!------------------------------------------------------------->
```php
<?php
	include('dbConnect.php');
	
	$sql = $_GET[sql];
	$query = mysqli_query($link, $sql);
	$num_rows = mysqli_num_rows($query);
	$arr = array();

	if ($num_rows != 0) {
		while($row = mysqli_fetch_array($query)) {
			array_push($arr, $row);
		}
	}

	echo json_encode($arr);
?>
```

<!------------------------------------------------------------->
#### main.js
<!------------------------------------------------------------->
```js
dbInsert();
function dbInsert() {
	const name = 'Добавлено имя из JS';
	const price = 12;
	const description = 'Добавлено описание из JS';
	const sql = `INSERT INTO products(NAME, PRICE, DESCRIPTION) VALUES ('${name}', ${price}, '${description}')`;
	$.get('php/dbModify.php', {sql:sql}, function(data){
		const arr = eval(data);
		alert(arr[]);
	});
}
```

```js
dbUpdate();
function dbUpdate() {
	const id = 5;
	const name = 'Обновлено имя из JS';
	const price = 44;
	const description = 'Обновлено описание из JS';
	const sql = `UPDATE products SET NAME='${name}', PRICE=${price}, DESCRIPTION='${description}' WHERE ID=${id}`;
	$.get('php/dbModify.php', {sql:sql}, function(data){
		const arr = eval(data);
		alert(arr[]);
	});
}
```

```js
dbDelete();
function dbDelete() {
	const id = 5;
	const sql = `DELETE FROM products WHERE ID=${id}`;
	$.get('php/dbModify.php', {sql:sql}, function(data){
        const arr = eval(data);
        alert(arr[0]);
	});
}
```

```js
dbSelect();
function dbSelect() {
	const sql = `SELECT * FROM products`;
	$.get('php/dbSelect.php', {sql:sql}, function(data){
		const arr = eval(data); 
		if (arr.length != 0) {
			for (const i=0; i<=arr.length-1; i++) {
				const id          = arr[i]['ID'];
				const name        = arr[i]['NAME'];
				const price       = arr[i]['PRICE'];
				const description = arr[i]['DESCRIPTION'];
				$('body').append(`&lt;p&gt;${id} ${name} ${price} ${description}&lt;/p&gt;`);
			}
		}	
	});
}
```
