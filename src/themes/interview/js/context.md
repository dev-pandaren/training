# Контекст

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Теория
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Контекст `this`
- Пример потери контекста
- Привязка контекста через `bind`, `call`, `apply`

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Задачи
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

#### `1` Контекст
> Условие

- Что будет при вызове newUser()?

```js
const user = {
    userName: 'Ivan',
    userGreet() {
        console.log('Hi ' + this.userName);
    }
};

const newUser = user.userGreet; 
newUser();
```

<details><summary>⚡️ Реализация</summary>

```js
newUser(); // => "Hi undefined"
```

```js
// Привязка контекста через "call"
newUser.call(user); // => "Hi Ivan"

// Привязка контекста через "bind"
const func = newUser.bind(user);
func(); // => "Hi Ivan" 
```
</details>

---

#### `2` Стрелочная и обычная функция
> Условие
```js
// Function
const person = {
    name: 'Ivan',
    greet: function() {
        console.log('Hello' + this.name);
    }
}
person.greet();
```

```js
// Arrow Function
const person = {
    name: 'Ivan',
    greet: () => {
        console.log('Hello' + this.name);
    }
}
person.greet();
```

<details><summary>⚡️ Реализация</summary>

- Function `=>` this - это person
- Arrow Function `=>` this - объект из контекста window

</details>
