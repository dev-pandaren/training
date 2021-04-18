# Обработка исключений


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Правила
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `catch` или `finally` может отсутствовать
- если ошибка необработана, скрипт не будет выполняться
- если ошибка обработана в `catch`, скрипт продолжит выполнение


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Конструкция
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
try {
	// инструкции, которые могут бросить исключение
} catch (идентификатор) {
	// инструкции будут выполняться если в try произошло исключение
	// передается выражение (идентификатор), которое было в throw
} finally {
	// инструкции будут выполняться независимо от исключения
}

```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Пример
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
try {
	throw new Error('Panic!');
} catch (e) {
	console.log(e.message);
} finally {
	console.log('Код, который нужно выполнить');
}
```

