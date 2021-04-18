# Методы работы с массивами

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Методы
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
const a = arr.length;                  // длина массива (индекс последнего элемента)
const arr2 = arr1.slice(1, 7);         // вырезать с 1 до 7 не включая, если не указан второй аргумент, то до конца

const a = colors.indexOf('white');     // возвращает первый индекс, по которому элемент может быть найден в массиве или -1, если индекса нет
const a = colors.lastIndexOf('white'); // возвращает последний индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет

const a = arr.join('.');               // преобразование массива в строку с заданным разделителем
const arr = str.split(';');            // преобразование строки с заданным разделителем в массив 

arr.push('Jack');                      // добавление нового элемента в конец массива
arr.unshift('Jack');                   // добавление нового элемента в начало массива
arr.pop();                             // удаление элемента из конца массива
arr.shift();                           // удаление элемента из начала массива

arr.reverse();                         // реверс (переворот массива)
arr.sort();                            // сортировка по алфавиту
const arr = arr1.concat(arr2, arr3);   // объединение массивов
```

<!------------------------------------------------------------->
#### Метод splice
<!------------------------------------------------------------->
```js
arr.splice(3, 2);                     // удалить с 3 индекса 2 элемента
arr.splice(2, 0, 'Алина', 'Марина');  // добавление элементов
arr.splice(1, 2, 'Алексей", "Билл');  // замена элементов (заменить 2 удаленных элемента на Алексей, Билл)
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Массивы обьектов
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
const a = new Array(
	{"name":"Андрей", "email":"andry@mail.ru"},
	{"name":"Анна",   "email":"anna@mail.ru"}
);

console.log(a[0].name);  // "Андрей"
console.log(a[1].email); // "anna@mail.ru"
```

[Массив: перебирающие методы](https://learn.javascript.ru/array-iteration)
