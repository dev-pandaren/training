
## Классы

> **⚡️ Домашнее задание**

1. Переписать реализацию с функций на классы.
2. Посмотреть / почитать про основные принципы объектно-ориентированного программирования: инкапсуляция, наследование, полиморфизм, абстракция

#### Алгоритм работы: 
- Должен быть класс, который принимает DOM-узел и HTML в виде строки. 
- Класс отображается HTML в переданном DOM-узле. 
- Другой класс добавляет к этому элементу обработчик события click

```js
function listener(element) {
	element.addEventListener('click', () => {
		alert('Нажали на элемент');
	})
}

function render(html, element) {
	element.innerHTML = html;
	listener(element);
}

const root = document.getElementById('test');

render('<h1>Hello</h1>', root);
```
