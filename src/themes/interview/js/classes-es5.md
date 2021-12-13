# Классы ES5 и прототипы

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Теория
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `__proto__` и `prototype`, прототипное наследование
- Реализация классов и наследования на ES5
- Как работает конструктор `new` (написать полифил)

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Задачи
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

#### `1` Полифил на new
> Условие
```js
function Person(name) {
    this.name = name;
}

const foo = Foo(Person, 'Ivan');
console.log(foo); // => Object { name: "Ivan" }
```

<details><summary>⚡️ Реализация</summary>

```js
function Foo(Constructor, ...props) {
    // 1. Создаётся новый пустой объект через Object.create
    // Устанавливает __proto__ этому объекту в которое записывается ссылка из prototype
    const instance = Object.create(Constructor.prototype);

    // 2. Модифицируется this (т.е. этот новый объект) и инициализируются методы и свойства
    // Применяет функцию-класс к нашему новосозданному объекту
    // instance.name = 'Ivan';
    Constructor.apply(instance, props);

    // 3. Неявно возвращается this без вызова return
    // Если в return объект, то вернется он
    // return (typeof instance === 'object' && instance !== null) ? instance : {};
    return instance instanceof Object ? instance : {};
}
```
</details>

---

#### `2` Наследование на ES5
> Условие
- Реализовать

<details><summary>⚡️ Реализация</summary>

```js
function User(name) {
    this.name = name;
}
User.prototype.getName = function() {
    console.log(this.name);
}
```
```js
function Admin() {
    // Для наследования собственных свойств User()
    User.apply(this, arguments);
}

// В прототип Admin добавили всё из прототипа User
Admin.prototype = Object.create(User.prototype);
```
```js
const admin = new Admin('Ivan');

admin.getName();    // => "Ivan"
console.log(admin); // => Object { getName() {}, name: "Ivan" }
```
</details>
