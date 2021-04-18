# Создание элементов


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Создание
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
const element = document.createElement('div');
element.innerHTML = 'Go to google';
element.className = 'class-google';
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Добавление на страницу
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
const wrapper = document.querySelector('#wrapper');

wrapper.appendChild(element);                      // внутри элемента после контента
wrapper.insertBefore(element, wrapper.lastChild);  // внутри элемента перед контентом
wrapper.parentNode.insertBefore(element, wrapper); // после элемента
wrapper.parentNode.appendChild(element);           // до элемента
wrapper.parentNode.replaceChild(element, wrapper); // заменить элемент другим элементом

// insertBefore (1 - элемент который вставляем, 2 - элемент перед которым вставляем)
// insertBefore (1 - чем заменяем, 2 - что заменяем)
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Удаление
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
wrapper.parentNode.removeChild(element); // удаление нового элемента
wrapper.parentNode.removeChild(wrapper); // удаление элемента обертки
document.body.removeChild(element);      // удаление нового элемента (если родитель body)
```
