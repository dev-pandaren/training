# Float


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Обтекание
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
div {
	float: left;   /* выравнивает элемент по левому краю, все остальные элементы обтекают его по правой стороне */
	float: right;  /* выравнивает элемент по правому краю, все остальные элементы обтекают его по левой стороне */
	float: none;   /* обтекание элемента не задается */	
}
```

```css
div {
	clear: left;   /* отключить обтекание слева */
	clear: right;  /* отключить обтекание справа */
	clear: both;   /* отключить обтекание справа и слева */	
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Пример использования `float` и отключения обтекания (`clearfix`)
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<img src="../@img/float.png" width="400px">

```html
<div class="container">
	<div class="item">item1</div>
	<div class="item">item2</div>
</div>
```

```css
.container {
	border: 2px solid blue;
}
.container:after{
	content: "";    /* содержимое не нужно */
	display: block; /* для отключения обтекания необходим блочный элемент */
	clear: both;    /* отключение обтекание справа и слева */
}
.item {
	width: 100px;
	height: 100px;
	background: orange;
	padding: 20px;
	margin: 5px;
}
.item:first-child {
	float: left;   /* применение обтекания слева */
}
.item:last-child {
	float: right; /* применение обтекания справа */
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Примеры
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

#### Float Image
<v-iframe
	height="350"
	src="https://codepen.io/Sergeenkov/embed/ReorRW?height=265&theme-id=default&default-tab=html,result"
/>
