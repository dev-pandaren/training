# Блочные элементы: `div`


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Особенности блочных элементов
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Элементы на обтекают друг друга
- Ширина равна 100% от ширины родителя
- Высота равна высоте контента
- Можно применять свойства `width` и `height`


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Внешний отступ: `margin`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
div {
	margin: 10px;                 /* сверху=справа=снизу=слева=10px */
	margin: 10px 15px 20px 25px;  /* сверху=10px, справа=15px, снизу=20px, слева=25px */
	margin: 10px 20px;            /* сверху=снизу=10px, справа=слева=20px */
	margin-top: 10px;             /* отступ сверху */
	margin-bottom: 10px;          /* отступ снизу */
	margin-left: 10px;            /* отступ слева */
	margin-right: 10px;           /* отступ справа */
	margin: auto;                 /* центрирование блока по горизонтали */
	margin: 0 auto;               /* центрирование блока по горизонтали и задание отступа сверху и снизу=0 */
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Внутренний отступ: `padding`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
div {
	padding: 10px;                 /* сверху=справа=снизу=слева=10px */
	padding: 10px 15px 20px 25px;  /* сверху=10px, справа=15px, снизу=20px, слева=25px */
	padding: 10px 20px;            /* сверху=снизу=10px, справа=слева=20px */
	padding-top: 10px;             /* отступ сверху */
	padding-bottom: 10px;          /* отступ снизу */
	padding-left: 10px;            /* отступ слева */
	padding-right: 10px;           /* отступ справа */
}
```

<!------------------------------------------------------------->
#### Обнуление `margin` и `padding` у `body`
<!------------------------------------------------------------->
- По умолчанию у `body` есть отступы

```css
body { 
	margin: 0; 
	padding: 0; 
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Ширина: `width`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
div {
	width: 500px;      /* ширина */
	max-width: 700px;  /* максимальная ширина */
	min-width: 200px;  /* минимальная ширина  */
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Высота: `height`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
div {
	height: 500px;      /* высота */
	max-height: 700px;  /* максимальная высота */
	min-height: 200px;  /* минимальная высота */
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Рамка: `border`, `border-radius`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
div {
	border: 2px solid orange;           /* рамка 2px сплошная оранжевая */
	border: 2px solid transparent;      /* рамка 2px сплошная прозрачная */
	border-top: 2px solid orange;       /* рамка сверху */
	border-bottom: 2px solid orange;    /* рамка снизу */
	border-left: 2px solid orange;      /* рамка слева */
	border-right: 2px solid orange;     /* рамка справа */
	border-radius: 10px;                /* радиус для всех четырёх углов */
	border-radius: 10px 15px;           /* радиус верхнего левого и нижнего правого уголков = 10px, верхнего правого и нижнего левого углов = 15px; */
	border-radius: 10px 15px 20px 25px; /* по очереди устанавливает радиус для верхнего левого, верхнего правого, нижнего правого и нижнего левого углов */
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Обводка: `outline`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
div {
	outline: 2px solid orange;          /* обводка 2px сплошная оранжевая */
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Тень у блоков: `box-shadow`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `1px` - смещение по горизонтали
- `2px` - смещени по вертикали
- `3px` - размытие
- `4px` - толщина

```css
div {
	box-shadow: 1px 2px 3px 4px blue;       /* внешняя тень */
	box-shadow: inset 1px 2px 3px 4px blue; /* внутренняя тень */
}
```

<!------------------------------------------------------------->
#### Задание нескольких теней
<!------------------------------------------------------------->
```css
div {
	box-shadow:
	    0 0 0 5px red,
	    0 0 0 10px green,
	    0 0 0 15px blue;
}
```

<!------------------------------------------------------------->
#### Примеры теней у блоков
<!------------------------------------------------------------->
<v-iframe
    height="350"
    src="https://codepen.io/Sergeenkov/embed/pYypGp?height=265&theme-id=default&default-tab=html,result"
/>


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### CSS Overflow
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Свойство `overflow` управляет отображением содержания блочного элемента, если оно целиком не помещается и выходит за область заданных размеров

```css
div {
	overflow: auto;   /* добавление полос прокрутки, если контент не помешается в блок */
	overflow: hidden; /* обрезка контента, если контент не помешается в блок */
}
```
