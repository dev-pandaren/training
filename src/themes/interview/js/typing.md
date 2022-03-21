# Типизация

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Теория
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Типизация (статическая, динамическая и т.д.)
- Инструменты для статической типизации: `TypeScript`, `Flow`. Какие задачи решают
- Типы данных (примитивы и объекты, `typeof`)
- Тип данных `Symbol`. Назначение

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Задачи
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

#### `1` Сравнение типов
> Условие
```js
false && ''
false || ''
'' || 'Yes'
{} && 'Some'
{} || 'Some'
{a: 10} && 'Some'
{a: 10} || 'Some'
{} && []
0 || true
null || 0
undefined && 0
'' || 0 && true
{} || 0 && true
false || {} && true
```

<details><summary>⚡️ Реализация</summary>

```js
false && ''         // false
false || ''         // ''
'' || 'Yes'         // 'Yes'
{} && 'Some'        // 'Some'
{} || 'Some'        // Object {}
{a: 10} && 'Some'   // 'Some'
{a: 10} || 'Some'   // Object { a: 10}
{} && []            // []
0 || true           // true
null || 0           // 0
undefined && 0      // undefined
'' || 0 && true     // 0
{} || 0 && true     // Object {}
false || {} && true // true
```
</details>

---

#### `2` typeof
> Условие
```js
typeof 0
typeof 'foo'
typeof true 
typeof undefined
typeof null
typeof {}
typeof []
typeof new Date
typeof function(){}
typeof NaN
```

<details><summary>⚡️ Реализация</summary>

```js
typeof 0            // "number"
typeof 'foo'        // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (*)
typeof {}           // "object"
typeof []           // "object"
typeof new Date     // "object"
typeof function(){} // "function" (*)
typeof NaN          // "number"
```
</details>

---

#### `3` Поверхностное сравнение объектов (Shallow Equal)

> Условие
```js
const obj1 = {
    name: 'MyName'
}
const obj2 = {
    name: 'MyName',
    'test': 'data'
}

shallowEqual(obj1, obj2);
```

<details><summary>⚡️ Реализация</summary>

```js
function shallowEqual (obj1, obj2) {
    if (obj1 === obj2){
        return true;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}
```
</details>

---

#### `4` Пересечение массивов
> Условие
```js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
const arr3 = [];

console.log(arr3); // => [4, 5]
```

<details><summary>⚡️ Реализация</summary>

> forEach
```js
const obj = {}

arr2.forEach(el => {
    obj[el] = true;
})

arr1.forEach(element => {
    if (obj[element]) {
        arr3.push(element);
    }
})
```

> reduce
```js
const interseption = (a, b) => {
	return a.reduce((acc, item) => {
		// уникальный элемент пушим в массив
		b.find((i) => i === item) && acc.push(item);
		return acc;
	}, []);
}

const data = interseption(arr1, arr2);
console.log(data); // [4, 5]
```
</details>
