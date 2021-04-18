# Таймеры


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `setTimeout()`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `setTimeout()` - однократное выполнение кода

```js
const timer = setTimeout(function() { 
	console.log('go'); 
}, 1000);

clearTimeout(timer);
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `setInterval()`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `setInterval()` - многократное выполнение кода

```js
const timer = setInterval(function() { 
	console.log('go'); 
}, 1000);

clearInterval(timer);
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Примеры
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
console.log(1);

setTimeout(function() { 
	console.log(2); 
}, 0);

console.log(3);

// => 1, 3, 2
```

