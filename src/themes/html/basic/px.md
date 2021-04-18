# Единицы измерения

::: details Темы
- Относительные и абсолютные единицы измерения
- px, %, vh, vw, em, rem
:::

- `px` - абсолютная единица измерения
- `%` - относительная, рассчитывается относительно родителя
- `vw` - viewport width, относительная, рассчитывается относительно viewport
- `vh` - viewport height, относительная, рассчитывается относительно viewport
- `em` - относительная, рассчитывается относительно родителя (берет значение font-size)
- `rem` - root em, относительная, рассчитывается относительно html (берет значение font-size)

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Примеры
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### Пример #1. Задание у блока 100% ширины и высоты (в процентах)
<!------------------------------------------------------------->
```css
html, body {
	height: 100%;
}
div {
	width: 100%;
	height: 100%;
}
```

<!------------------------------------------------------------->
#### Пример #2. Задание у блока 100% ширины и высоты (в vw и vh)
<!------------------------------------------------------------->
```css
div {
	width: 100vw;
	height: 100vh;
}
```

<!------------------------------------------------------------->
### Единица измерения `em`
<!------------------------------------------------------------->
```html
<p>Текст абзаца</p>

<div class="container">
	<div class="item1">Текст для item1</div>
	<div class="item2">Текст для item2</div>
</div>
```

```css
body {
	font-size: 20px;
}
.container {
	font-size: 2em;
}
.item1 {
	font-size: 2em;
}
.item2 {
	font-size: 1em;
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Единица измерения `rem`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `rem` берется от `html`

```html
<p>Текст абзаца</p>

<div class="container">
    <div class="item1">Текст для item1</div>
    <div class="item2">Текст для item2</div>
</div>
```

```css
html, body {
	font-size: 20px;
}
.container {
	font-size: 2rem;
}
.item1 {
	font-size: 2rem;
}
.item2 {
	font-size: 1rem;
}
```
