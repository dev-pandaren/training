# CSS Inline-block

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Применение
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<img src="../@img/inline-block/inline-block.png" width="500px">

```html
<div class="item">item-1</div>
<div class="item">item-2</div>
```

```css
.item {
	display: inline-block;
	width: 200px;
	height: 200px;
	background-color: orange;
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Выравнивание элементов по вертикали (vertical-align)
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<img src="../@img/inline-block/inline-block-y.png" width="500px">

```css
div {
	vertical-align: middle;  /* по центру */
	vertical-align: top;     /* по верхнему краю */
	vertical-align: bottom;  /* по нижнему краю */	
}
```

```html
<div class="item">item-1</div>
<div class="item">item-2</div>
```

```css
.item {
	display: inline-block;
	width: 200px;
	background-color: orange;
}
.item:first-child {
	height: 200px;
	vertical-align: middle;
}
.item:last-child {
	height: 100px;
	vertical-align: middle;
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Выравнивание элементов по горизонтали
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<img src="../@img/inline-block/inline-block-x.png" width="500px">

```html
<div class="container">
	<div class="item">item-1</div>
	<div class="item">item-2</div>
</div>
```

```css
.container {
	text-align: center;
}
.item {
	display: inline-block;
	width: 200px;
	height: 200px;
	background-color: orange;
}
```
