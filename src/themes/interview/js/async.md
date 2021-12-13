# Асинхронность

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Теория
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Event Loop (Макро-таски, Микро-таски, Рендер-таски)
[Ссылка 1](https://habr.com/ru/post/461401/)
[Ссылка 2](https://medium.com/@stasonmars/полное-понимание-синхронного-и-асинхронного-javascript-%D1%81-async-await-ba5f47f4436)
[Ссылка 3](https://www.youtube.com/watch?v=8cV4ZvHXQL4)
- `Promise` (методы) [Ссылка 1](https://www.youtube.com/watch?v=1idOY3C1gYU)
- `async` / `await`

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Дополнительная теория
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Генераторы

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Задачи
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

#### `1` Promise и setTimeout
> Условие

- В какой последовательности будут выводиться console.log?

```js
console.log(1);

Promise.resolve().then(() => {
    console.log(3);

    setTimeout(() => {
        console.log(4);
    })
})

setTimeout(() => {
    console.log(2);
})

console.log(5);
```

<details><summary>⚡️ Реализация</summary>

```js
// 1 - синхронный код
console.log(1);

Promise.resolve().then(() => {
    // 3 - микротаска
    console.log(3);

    // 5 - макротаска, поставится в очеред после setTimeout(() => { console.log(2); })
    setTimeout(() => {
        console.log(4);
    })
})

// 4 - макротаска
setTimeout(() => {
    console.log(2);
})

// 2 - синхронный код
console.log(5);

// => 1, 5, 3, 2, 4
```
</details>

---

#### `2` Promise Finally
> Условие

- Что выведет каждый console.log?

```js
var p = Promise.resolve(4);

p
    .then(data => {
        console.log(data);
        throw new Error('');
    })
    .catch(err => {
        console.log('err');
        return 'ok';
    })
    .finally((data) => {
        console.log(data);
        return 1;
    })
    .then((data) => {
        console.log(data);
    })
```

<details><summary>⚡️ Реализация</summary>

```js
var p = Promise.resolve(4);

p
    .then(data => {
        console.log(data); // 4
        throw new Error('');
    })
    .catch(err => {
        console.log('err'); // err
        return 'ok';
    })
    .finally((data) => {
        console.log(data); // undefined
        return 1;
    })
    .then((data) => {
        console.log(data); // 'ok'
    })
```
</details>

---

#### `3` Общий пример на Promise

> Условие
```js
Promise.resolve(1)
    .then(data => console.log(data))

    .then(data => {
        console.log(data);
        return 2;
    })

    .then(data => {
        console.log(data);
        throw new Error('Api Error');
        return 1;
    })

    .then(data => console.log('Hello'))

    .catch(error => {
        console.log(error.message);
        return 3;
    })

    .then(data => {
        console.log(data);
        return 4;
    })

    .finally(data => { 
        console.log(data);
        return 5;
    })

    .then(data => console.log(data))
```

<details><summary>⚡️ Реализация</summary>

```js
Promise.resolve(1)
    // Promise.resolve вернул "1"
    // => "1"
    .then(data => console.log(data))

    // then ничего не вернул
    .then(data => {
        // => "undefined"
        console.log(data);
        return 2;
    })

    // then вернул "2"
    .then(data => {
        // => "2"
        console.log(data);
        // возникновение ошибки
        throw new Error('Api Error');
        // не имеет значения что вернули
        return 1;
    })

    // skip, потому что предыдущий then бросил ошибку
    .then(data => console.log('Hello'))

    // минуя then попадаем в catch
    .catch(error => {
        // => "Api Error"
        console.log(error.message);
        return 3;
    })

    // catch вернул "3"
    .then(data => {
        console.log(data); // "3"
        return 4;
    })

    // then вернул 4, но finally пропустит его мимо себя
    .finally(data => { 
        // => "undefined"
        console.log(data);
        return 5;
    })

    // из finally вернули "5", но результат берется из предудщего then или catch
    // => "4"
    .then(data => console.log(data))
```
</details>

---

#### `4` Promise makeConcurrentRequest 
- Написать функцию makeRequest, получающую на вход массив ссылок
- В функцию приходит массив url, по каждому из которых нужно сделать запрос и получить данные

> Условие
```js
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
]

makeConcurrentRequest(urls)
    .then((result) => console.log(result));
```

<details><summary>⚡️ Реализация</summary>

```js
const makeConcurrentRequest = urls => {
    return new Promise(resolve => {
        let result = [];
        let counter = 0;

        const makeRequest = index => {
            fetch(urls[index])
                .then(res => res.json())
                .then(body => {
                    result[index] = body;

                    if (urls.length-1 === counter) {
                        resolve(result);
                    } else {
                        counter++;
                         makeRequest(counter);
                    }
                })
        }

        makeRequest(0);
    });
};
```

> Реализация через Promise.all
```js
const makeConcurrentRequest = async (urls) => {
    const res = await Promise.all(urls.map(res => {
        return fetch(res).then(res => res.json())
    }))

    return res;
};
```
</details>
