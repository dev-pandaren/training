# Всплытие

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Теория
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Двухпроходной анализатор
- Всплытие (всплытие для `var`, `let`, `const`, `function`)
- Temporal Dead Zone

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Задачи
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

#### `1` Всплытие
> Условие
```js
let a = 1;

function b() {
    a = 10;
    return 20;
    function a() {}
}

b();

console.log(a);
```

<details><summary>⚡️ Реализация</summary>

```js
let a = 1;

function b() {
    // перезаписывается не глобальная переменная, а локальная функция
    a = 10;
    return 20;
    // функция всплывает
    function a() {}
}

b();

console.log(a); // 1
```
</details>

---

#### `2` Всплытие
> Условие
```js
function a() { return true }
var a;
console.log(a);
```

```js
function a() { return true }
var a = 'Hello';
console.log(a);
```

<details><summary>⚡️ Реализация</summary>

- При обращении до объявления: вызывается функция
- Функция имеет безусловный приоритет

```js
// Переменная "var a" непроинициализирована
function a() { return true }
var a;
console.log(a); //=> ƒ a() { return true }
```

```js
// Переменная "var a" проинициализирована
function a() { return true }
var a = 'Hello';
console.log(a); // => "Hello"
```
</details>

---

#### `3` Значение массива
> Условие
```js
var a = [];

function clear(arr) {
    arr.push(2);
    arr = null;
}

clear(a);

console.log(a);
```

<details><summary>⚡️ Реализация</summary>

```js
const a = [];

function clear(arr) {
    // присвоение в локальную переменную
    arr.push(2);
    arr = null;
}
clear(a);

console.log(a); // [2]
```
</details>

---

#### `4` Всплытие
> Условие
```js
function foo(a) {  
    if (a > 0) {
        let a = a + 10;
        return a;
    }
    return a;
}

console.log(foo(20));
```

<details><summary>⚡️ Реализация</summary>

```js
function foo(a) {  
    if (a > 0) {
        // a во временной dead zone
        let a = a + 10;
        return a;
    }
    return a;
}

console.log(foo(20));

// => ReferenceError: Cannot access 'a' before initialization
```
</details>

---

#### `5` Переменная
> Условие
```js
var a = 5;
function someFunction() {
    a = 3;

    if (false) {
        var a = 10;
    }
}

someFunction();

console.log(a);
```

<details><summary>⚡️ Реализация</summary>

```js
var a = 5;
function someFunction() {
    // "3" запишется не в глобальную, а в локальную, потому что она всплыла
    a = 3;

    // условие не выполнится но "a" всплывет
    if (false) {
        var a = 10;
    }
}

someFunction();
console.log(a); // => 5
```
</details>
