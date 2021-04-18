# AXIOS


[Axios](https://github.com/axios/axios)


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Axios
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>
```

<!------------------------------------------------------------->
#### GET-запрос с возвратом одного значения
<!------------------------------------------------------------->
```js
axios.get('script.php')
    .then(function(response) {
        console.log(response.data); // 'Hi'
    })
    .catch(function(error) {
        console.log(error)
    });
```

```php
<?php
    echo 'Hi';
?>
```

<!------------------------------------------------------------->
#### GET-запрос с возвратом нескольких значений (`array`)
<!------------------------------------------------------------->
```js
axios.get('script.php')
    .then(function(response) {
		console.log(response.data); // ['Jack', 25]
    })
```

```php
<?php
    $arr = array("Jack", 25);
    $json = json_encode($arr);
    echo $json
?>
```

<!------------------------------------------------------------->
#### GET-запрос с возвратом нескольких значений (`object`)
<!------------------------------------------------------------->
```js
axios.get('script.php')
    .then(function(response) {
		console.log(response.data); // {name: "Jack", age: 25}
    })
```

```php
<?php
    $arr = array("name" => "Jack", "age" => 25);
    $json = json_encode($arr);
    echo $json
?>
```

<!------------------------------------------------------------->
#### POST-запрос
<!------------------------------------------------------------->
```js
axios.post('script.php', {
    name: 'Jack',
    age: '25'
})
	.then(function (response) {
	    console.log(response.data);
	})
```

```php
<?php
    $content = file_get_contents("php://input");
    $decoded = json_decode($content, true);
    echo $decoded[name];
?>
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Отправка сообщения на почту
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```php
<?php
    $to      = 'user1@example.com, user2@example.com'; // получатель или получатели
    $subject = 'Письмо с сайта';                       // тема письма
    $message = 'Сообщение';                            // сообщение

    $email = mail($to, $subject, $message);
    if ($email) {
        echo 'Письмо успешно отправлено!';
    } else {
        echo 'Письмо не отправлено!';
    }
?>
```
