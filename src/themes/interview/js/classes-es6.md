# Классы ES6

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Теория
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Классы ES6: `constructor`
- Наследование: `extends`, `super`
- Геттеры и Сеттеры
- Статические свойства и методы: `static`

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Задачи
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

#### `1` Наследование на ES6
> Условие
- Реализовать

<details><summary>⚡️ Реализация</summary>

```js
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}

class Admin extends User {
    constructor(name) {
        super(name);
    }
}

const admin = new Admin('Ivan');
admin.getName();    // => "Ivan"
console.log(admin); // => Object { name: "Ivan" }
```
</details>
