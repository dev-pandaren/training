# Условные операторы

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Операторы сравнения
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `=` - присвоить
- `==` - равно
- `===` - тождественно равно
- `!` - отрицание
- `!==` - неравно
- `>` - больше
- `<` - меньше
- `>=` - больше или равно
- `<=` - меньше или равно
- `&&` - логическое «И» 
- `||` - логическое «ИЛИ»


```js
console.log(5 == 5);    // true
console.log(5 == '5');  // true

console.log(5 === 5);   // true
console.log(5 === '5'); // false

console.log(5 > 5);     // false
console.log(5 < 5);     // false
console.log(5 >= 5);    // true
console.log(5 <= 5);    // true
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Условный оператор if
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### Одно условие
<!------------------------------------------------------------->
```js
const weather = 'хорошая';

if(weather === 'хорошая') {
	console.log('Идём гулять');
} else {
	console.log('Идём в кино');
}
```

<!------------------------------------------------------------->
#### Несколько условий
<!------------------------------------------------------------->
```js
const weather = 'хорошая'; // хорошая погода
const mood = true;         // хорошее настроение

if( (weather === 'хорошая') && (mood) ) {
    console.log('Идём гулять');
} else {
    console.log('Идём в кино');
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Условный оператор switch
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
const id = 3;

switch(Number(id)) {
	case 1: console.log(id); break;
	case 2: console.log(id); break;
	case 3: console.log(id); break;
	default: console.log('default');
}
```


- [Тернарный оператор](https://learn.javascript.ru/ifelse#operator-voprositelnyy-znak)
- [Операторы сравнения и логические значения](https://learn.javascript.ru/comparison)
