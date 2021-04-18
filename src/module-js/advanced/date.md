# Дата и время

```js
const nowDate = new Date();                 // текущее дата и время на компьютере пользователя
const yearFull = nowDate.getFullYear();     // год
const month    = nowDate.getMonth();        // месяц (нумерация с 0)
const day      = nowDate.getDate();         // число
const dayWeek  = nowDate.getDay();          // день недели, выводит численные значения, нумерация с "0"
const hour     = nowDate.getHours();        // час
const minutes  = nowDate.getMinutes();      // минуты
const seconds  = nowDate.getSeconds();      // секунды
const mseconds = nowDate.getMilliseconds(); // миллисекунды
```

```js
const weekday  = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const month    = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const nowDate  = new Date();
const nowDay   = weekday[nowDate.getDay()];
const nowDate  = nowDate.getDate();
const nowMonth = month[nowDate.getMonth()];
```
