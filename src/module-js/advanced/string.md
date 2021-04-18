# Строки. Методы работы со строками

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Перебор строки
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
const str = 'Hello';

for (let i=0; i <= str.length-1; i++) {
	console.log(str[i]);
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Методы
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
const a = str.length;                // длина строки 
77.toString();                       // преобразование в строку

const name = name.toUpperCase();     // верхний регистр
const name = name.toLowerCase();     // нижний регистр

// поиск в строке совпадений с образцом 
const pos = str.indexOf('name');     // с начала (-1 не найдено)
const pos = str.lastIndexOf('name'); // с конца (-1 не найдено)

const root = str.slice(0, 7);        // вырезать с 0 до 7 не включая
```
