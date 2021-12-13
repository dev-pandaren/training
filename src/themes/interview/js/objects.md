# Объекты

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Теория
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `Object.create`
- `Object.assign`
- Перебор объекта: `for in`, `Object.keys` + `forEach`
- Проверка наличия свойства

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Задачи
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

#### `1` Массив
> Условие
```js
let a = [1,2,3];
let b = a;

a[0] = 99;
console.log(b);

a = 4;
console.log(b);
```

<details><summary>⚡️ Реализация</summary>

```js
let a = [1,2,3];
let b = a;

a[0] = 99;
console.log(b); // [99, 2, 3]

a = 4;
console.log(b); // [99, 2, 3]
```
</details>

---

#### `2` Объекты: копирование и null
> Условие
```js
var a = {};

function clear (a) {
    a.a=10;
    a = null;
}

clear(a);

console.log(a);
```

<details><summary>⚡️ Реализация</summary>

```js
console.log(a); // => Object { a: 10 }
```
</details>
