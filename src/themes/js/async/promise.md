# Promise

- [Promise](https://learn.javascript.ru/promise-basics)
- [YouTube](https://www.youtube.com/watch?v=1idOY3C1gYU)


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Описание
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `Promise` - специальный объект, который используются для обработки результатов асинхронных операций. Промис хранит своё состояние, текущий результат (если есть) и коллбэки

<!------------------------------------------------------------->
#### Состояния Promise
<!------------------------------------------------------------->
- `pending` - ожидание (выполняется)
- `fulfilled` - выполнено успешно
- `rejected` - отклонено (выполнено с ошибкой)

<!------------------------------------------------------------->
#### Навешиваемые коллбэки
<!------------------------------------------------------------->
- `onFulfilled` – срабатывают, когда promise в состоянии `fulfilled`
- `onRejected` – срабатывают, когда promise в состоянии `rejected`

```js
let promise = new Promise(function(resolve, reject) {
	resolve(arg) // => onFulfilled(arg) => .then(arg)  => Promise
	reject(arg)  // => onRejected(arg)  => .catch(arg) => Promise
});
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Объявление
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### Promise
<!------------------------------------------------------------->
```js
// Объявление
let promise = new Promise((resolve, reject) => {
    if (...) {
    	// onResolved()
        resolve('ok');
    } else {
    	// onRejected()
        reject(new Error('Api error')); // аналогично с throw
        throw new Error('Api error');   // аналогично с reject
    }
});
```

```js
// Использование
promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
        console.error(error.message); 
    })
```

<!------------------------------------------------------------->
#### Функция
<!------------------------------------------------------------->
```js
// Объявление
function asyncFunc() {
	const promise = new Promise((resolve, reject) => {
		//
	});

	return promise;
}
```

```js
// Использование
asyncFunc()
    .then(result => { ... })
    .catch(result => { ... })
```
