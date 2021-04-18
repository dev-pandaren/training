# CSS Grid


- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Игра Grid Garden](https://cssgridgarden.com/#ru)


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Определения
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `Grid Track` - расстояние между ближайшими двумя линиями, колонка или строка
- `Grid Line` - линия, создаваемая Grid Track. <u>gap</u> толщина линии
- `Grid Cell` - ячейка сетки
- `Grid Area` - область всегда прямоугольная. объединение нескольких ячеек в одну
- `Line-based placement` - позиционирование на основе линий

<img src="../@img/css-grid/grid-scheme.jpg" width="550">


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Grid Container
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
div {
	display: grid; /* объявление */
}
```

```css
div {
	grid-template-columns: 300px 300px;               /* столбцы (3 штуки) */
	grid-template-rows:    150px 150px;               /* строки (3 штуки), можно не задавать. адаптируются под высоту контента */
	grid-template:         150px 150px / 300px 300px; /* короткая запись строки / столбцы */
	grid-auto-columns:     200px;                     /* размер по умолчанию для неявно заданных столбцов */
	grid-auto-rows:        200px;                     /* размер по умолчанию для неявно заданных строк */
}
```

```css
div {
	gap: 20px;         /* расстояние между строками и стобцами (толщина линии) */
	column-gap: 20px;  /* расстояние между столбцами */
	row-gap: 20px;     /* расстояние между строками */
}
```


<!------------------------------------------------------------->
#### Для `grid-template-columns` и `grid-template-rows`
<!------------------------------------------------------------->
- `300px 300px 300px` - 3 элемента (фиксированные величины)
- `1fr 1fr 1fr` - 3 элемента (относительные величины) fr - фракция
- `500px 1fr 2fr` - 3 элемента (смешанные величины)
- `500px auto 500px` - 3 элемента (auto - занимает ширину контента)
- `repeat(3, 1fr)` - задать повторяющийся паттерн
- `minmax(150px, 250px) 1fr 1fr` - 3 элемента, первый с minmax
- `minmax(100px, auto)` - определяется автоматически по ширине элементов


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Grid Element
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### Grid Area</h4>
<!------------------------------------------------------------->
```css
.cards {
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 200px 200px;
	grid-template-areas: "header  header  menu"
						 "content content .";
}

.header  { grid-area: header; }
.menu    { grid-area: menu; }
.content { grid-area: content; }
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Примеры
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<v-iframe
	height="350"
	src="https://codepen.io/Sergeenkov/embed/mKNEQW?height=265&theme-id=default&default-tab=css,result"
/>
