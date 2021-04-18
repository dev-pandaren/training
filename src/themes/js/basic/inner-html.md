# Методы innerText и innerHTML

```html
<div id="element">Element</div>
```

```js
const element = document.querySelector('#element');

element.innerText  = 'New Text';                // изменить текст
element.innerHTML  = '<h2>New HTML Code</h2>';  // изменить html

const text = element.innerText; // получить текст
const html = element.innerHTML; // получить html
```
