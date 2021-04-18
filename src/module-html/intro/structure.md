# Структура HTML документа

::: details Темы
- Структура HTML файла
- Раздел HEAD
- Парные и непарные теги
:::


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Структура HTML документа
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html
<!DOCTYPE html>
<html>
	<head>
		<!-- служебная информация -->
	</head>
	<body>
		<!-- содержимое сайта -->
	</body>
</html>
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Раздел `head`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Служебная информация

```html
<head>
	<meta charset="utf-8">
	<title>Название сайта</title>
	<meta name="description" content="Описание сайта">
	<meta name="keywords" content="Ключевые фразы через запятую">
	<link rel="icon" type="image/png" href="favicon.png">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Раздел `body`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Содержимое сайта

```html
<body>
	Привет Мир!
</body>
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Парные и непарные теги
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html
<!-- Непарный тег, выполняющий действие (задание кодировки) -->
<meta charset="utf-8" />

<!-- Парный тег, ограничивающий начало контента и окончание контента (заголовок сайта) -->
<title>Название сайта</title>
```
