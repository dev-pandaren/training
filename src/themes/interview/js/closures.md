# Замыкания

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Теория
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Замыкания (`LexicalEnvironment`) [Ссылка 1](http://dmitrysoshnikov.com/ecmascript/ru-chapter-6-closures/)
- Лексическая и динамическая область видимости

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Задачи
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

#### `1` Замыкание
> Условие

- Как будет работать для лексической области видимости
- Как будет работать для динамической области видимости

```js
function foo() {
    const a = 20
    return function() {
        console.log(a);
    }
}

const a = 10
const bar = foo()
bar();
```

<details><summary>⚡️ Реализация</summary>

- const a = 20 в замыкании
```js
bar(); // 20
```
</details>


