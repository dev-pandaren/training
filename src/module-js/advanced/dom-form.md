# Выборка элементов формы

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `<input type="text">`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
const a = element.value;
element.value = 'new value';
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `<input type="checkbox">`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
const a = element.checked; 
element.checked = true;
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `<input type="radio">`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html
<input type="radio" name="radio" value="r1">
<input type="radio" name="radio" value="r2">
<input type="radio" name="radio" value="r3">
```

```js
const radio = document.querySelectorAll('input[type="radio"]');

for(let i=0; i<=radio.length-1; i++) {
	if(radio[i].checked) {
		let value = radio[i].getAttribute('value');
		console.log(value);
	}
}
```

```js
radio.disabled = true;   
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### `<select>`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
const select = document.querySelector('select');
const a = select.value;
const a = select.options[select.selectedIndex].value;
const a = select.options[select.selectedIndex].text;
```