# Текст и шрифты


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Заголовки: `<h1> - <h6>`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html
<h1>Заголовок 1 уровня</h1>
<h2>Заголовок 2 уровня</h2>
<h3>Заголовок 3 уровня</h3>
<h4>Заголовок 4 уровня</h4>
<h5>Заголовок 5 уровня</h5>
<h6>Заголовок 6 уровня</h6>
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Перенос строки: `<br>`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html
Здесь нужно сделать <br> перенос строки
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Абзац: `<p>`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html
<p>Первая строка</p>
<p>Вторая строка</p>
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### CSS-свойство: `font-...`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
p {
	font-size: 20px;     # размер шрифта
	font-style: italic;  # начертание шрифта
	font-weight: bold;   # асыщенность шрифта
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### CSS-свойство: `text-...`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
p {
	text-align: center | left | right;     /* горизонтальное выравнивание текста в пределах элемента */
	text-decoration: none | underline;     /* оформление текста */
	text-decoration-color: orange;         /* оформление текста (цвет линии) */
	text-decoration-style: solid | double | dotted | dashed | wavy; /* оформление текста (стиль линии) */
	text-indent: 20px;                     /* красная строка */
	text-transform: uppercase | lowercase; /* преобразованием текста элемента в заглавные или прописные символы */
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### CSS-свойство: `text-shadow`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `3px` - смещение по горизонтали
- `4px` - смещени по вертикали
- `5px` - размытие

```css
p {
	text-shadow: 3px 4px 5px #000;
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Работа с текстом
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
p {
	word-spacing: 10px   /* расстояние между словами */
	letter-spacing: 4px; /* расстояние между буквами */
	line-height: 1.5;    /* расстояние между строками */
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Работа со шрифтами
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
p {
	font-family: Verdana; /* семейство шрифта */
}
```

<!------------------------------------------------------------->
#### Подключение шрифта
<!------------------------------------------------------------->
```css
@font-face {
	font-family: OpenSans;           /* имя шрифта */
	src: url(../font/OpenSans.ttf);  /* путь к файлу со шрифтом */
}
```

<!------------------------------------------------------------->
#### Применение шрифта
<!------------------------------------------------------------->
```css
p {
	font-family: OpenSans;
}
```

- Google Fonts
- Шрифты Serif и Sans-Serif
- Font-Face Ninja


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Направление текста
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
p {
	writing-mode: horizontal-tb; /* стандартное */
	writing-mode: vertical-rl;   /* сверху-вниз, справа-налево */
	writing-mode: vertical-lr;   /* сверху-вниз, слева-напрво */
}
```
