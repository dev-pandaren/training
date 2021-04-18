# Списки

::: details Темы
- Маркированные (ul)
- Нумерованные (ol)
:::


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Маркированный список
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html
<ul>
	<li>item1</li>
	<li>item2</li>
	<li>item3</li>
</ul>
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Нумерованный список
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html
<ol>
	<li>item1</li>
	<li>item2</li>
	<li>item3</li>
</ol>
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Настройка маркеров
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
ul {
	list-style:          list-style-type | list-style-image | list-style-position; 
	list-style-type:     none | circle ...          /* изменяет вид маркера */
	list-style-image:    none | url('путь к файлу') /* устанавливает изображение */
	list-style-position: inside | outside           /* размешение относительно текста */
}
```
