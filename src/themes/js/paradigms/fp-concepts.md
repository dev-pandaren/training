# Концепции функционального программирования

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Чистые функции
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `Чистые функции` (pure functions) - возвращает один и тот же результат для одинаковых входных данных


<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```js
// Чистая функция
function sum(a, b) {
	rerturn a + b;
}
```
</template>
<template v-slot:last>

```js
// Обычная функция
let current = 77;

function sum(a, b) {
	rerturn a + b + current;
}
```
</template>
</v-two>
<!-- ............... END .......................... -->


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Функции первого класса
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `Функции первого класса` - функция трактуются как объект, то есть может быть передана другим функциям и ее можно вернуть из функций. Так же ее можно присваивать переменным


```js
// Передача функции в качестве аргумента
function getInfo() {
	console.log('Hello');
}

function foo(functionInfo) {
	functionInfo();
}

foo(getInfo);
```

```js
// Возврат функции из функции
function foo(functionInfo) {
	return function() {
		console.log('Hello');
	}
}

const result = foo();
result();
```

```js
// Присвоение функции в переменную
const foo = function() {
	console.log('Hello');
}

foo();
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Иммутабельность
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `Иммутабельность` - свойство объектов не изменяться (н-р строка. строку нельзя поменять на месте, для изменения нужно создать новую строку). Применяется для списков, словарей и т.д. Иммутабельный список - список в который нельзя добавить / удалить элемент, можно только итерироваться по ним. Можно создать новый список который содежит все элементы +1, при этом старый остается валадным



<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```js
// Иммутабельно
// map - создаёт новый массив с результатом вызова указанной функции для каждого элемента массива

const numbers = [1, 2, 3];
const doubles = numbers.map((num) => {
	return num * 2;
});

console.log(numbers); // => [1, 2, 3]
console.log(doubles); // => [2, 4, 6]
```
</template>
<template v-slot:last>

```js
// Не иммутабельно
const arr = ['Tony', 'Kate'];

arr.push('Jack');                      // добавление нового элемента в конец массива
arr.unshift('Jack');                   // добавление нового элемента в начало массива
arr.pop();                             // удаление элемента из конца массива
arr.shift();                           // удаление элемента из начала массива
```
</template>
</v-two>
<!-- ............... END .......................... -->


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Каррирование функций
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `Каррирование функций` - все функции могут быть от одного аргумента. Преобразование функции от пары аргументов в функцию, берущую свои аргументы по одному


```js
function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
log(multiply(1)(2)(3)) // 6

//const mul1 = multiply(1);
//const mul2 = mul1(2);
//const result = mul2(3);
//log(result); // 6
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Рекурсия
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

- `Рекурсия` - рекурсивные функции вызывают сами себя, позволяя операции выполняться снова и снова


```js
// Степень pow(x, n) через рекурсию

function pow(x, n) {
	if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
		return x * pow(x, n - 1);
	} else {
		return x;
	}
}

console.log( pow(2, 3) ); // 8
```
