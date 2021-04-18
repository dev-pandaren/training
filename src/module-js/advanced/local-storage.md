# Local Storage

- `Google Chrome` -> `F12` -> `Application` -> `Local Storage`
- `localStorage` - это свойство глобального объекта браузера (window)


```js
localStorage.setItem('id', '77');     // добавляет в localStorage новый ключ со значением (а если такой ключ уже существует, то перезаписывает новым значением)
const a = localStorage.getItem('id'); // получить значение
localStorage.removeItem('id');        // удаление ключа
localStorage.clear();                 // очистка всего хранилища
```

<!------------------------------------------------------------->
#### Объекты и массивы
<!------------------------------------------------------------->
```js
const obj = {
	item1: 1,
	item2: [123, "two", 3.0],
	item3: "hello"
};

localStorage.setItem("key", JSON.stringify(obj));          // сериализация объекта и запись в хранилище по ключу "key"
const returnObj = JSON.parse(localStorage.getItem("key")); // из json в объект
```
