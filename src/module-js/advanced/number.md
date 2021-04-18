# Числа. Метода работы с числами

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Методы
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
isNaN(num);      // если в переменной не число, вернет истину
Number(num);     // преобразование любого объекта в число
parseInt(num);   // преобразование в целое число
parseFloat(num); // преобразование в целое/дробное число
```

<!------------------------------------------------------------->
#### Остаток от деления
<!------------------------------------------------------------->
```js
alert(5 % 2); // 1, остаток от деления 5 на 2
alert(8 % 3); // 2, остаток от деления 8 на 3
alert(6 % 3); // 0, остаток от деления 6 на 3
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Math
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
Math.round(num); // округляет число к ближайшему целому
Math.ceil(num);  // округляет число в большую сторону
Math.floor(num); // округляет число в меньшую сторону

const rand = Math.random(); // метод генерации случайного числа в диапазоне от 0 до 1
const rand = Math.round(Math.random() * 100); // от 0 до 100

const a = Math.pow(4,2);        // степень 4 в 2
const a = Math.sqrt(400);       // квадратный корень числа
```