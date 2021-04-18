# PHP сессия

<!------------------------------------------------------------->
#### php/phpSessionLogin.php
<!------------------------------------------------------------->
```php
<?php
	// autho_id == 0  // получить значение сессии при первом запуске страницы 
	// autho_id == -1 // удалить сессию
	// autho_id == 1  // добавить в сессию новое значение

	$autho_id       = $_GET[autho_id];
	$autho_login    = $_GET[autho_login];
	$autho_password = $_GET[autho_password];

	// стартуем сессию
	session_start(); 

	// если переменная сессии не установлена, то присваием ей пустое значение
	if ( !isset($_SESSION['a_login']) ) {
		$_SESSION['a_login'] = '';
	}
	if ( !isset($_SESSION['a_pass']) ) {
		$_SESSION['a_pass'] = '';
	}

	// добавляем в сессию новое значение
	if ($autho_id==1) {
		$_SESSION['a_login'][0] = $autho_login;
		$_SESSION['a_pass'][0] = $autho_password;
	}

	// удаляем сессию
	if ($autho_id==-1) {
		unset($_SESSION['a_login']);
		unset($_SESSION['a_pass']);
	}

	// возвращаем значения сессии
	$arr = array($_SESSION['a_login'][0], $_SESSION['a_pass'][0]);
	echo json_encode($arr);
?>
```

<!------------------------------------------------------------->
#### index.html
<!------------------------------------------------------------->
```html
<input type="text" id="users-login">
<input type="text" id="users-password">
<button onclick="getCookie();">getCookie</button>
<button onclick="setCookie();">setCookie</button>
<button onclick="deleteCookie();">deleteCookie</button>
```

<!------------------------------------------------------------->
#### js/main.js
<!------------------------------------------------------------->
```js
function getCookie() {
	$.get('php/phpSessionLogin.php', {autho_id:0, autho_login:0, autho_password:0}, function(data) {
		const arrSession = eval(data);
		const login = arrSession[0];
		const password = arrSession[1];
		$('body').append(login+' '+password);
	});
}

function setCookie() {
    const login = $('#users-login').val();
    const password = $('#users-password').val();
	$.get('php/phpSessionLogin.php', {autho_id:1, autho_login:login, autho_password:password}, function(data) {
		//
	});
}

function deleteCookie() {
	$.get('php/phpSessionLogin.php', {autho_id:-1, autho_login:0, autho_password:0}, function(data) {
		//
	});
}
```

