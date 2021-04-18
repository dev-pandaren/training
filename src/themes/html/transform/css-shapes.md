# CSS Shapes

[Введение в CSS Shapes](https://webformyself.com/vvedenie-v-css-shapes/)

- `CSS Shapes` - позволяют определять геометрические фигуры, вокруг которых может обтекать текст
- Shape работают только для <u>float</u> элементов у которых определена ширина и высота


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Спецификации
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- __CSS Shapes Level 1__ - поддерживается
- `shape-outside` - определяет фигуру, вокруг которой может обтекать текст
- __CSS Shapes Level 2__ - не поддерживается
- `shape-inside` - связано с текстом, содержащимся внутри фигуры


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### CSS Shapes Level 1: Свойства
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `shape-outside` - задание фигуры
- `shape-margin` - margin от shape до контента
- `shape-image-threshold` - определяется пороговое значение альфа - канала фигуры, или какой процент изображения может быть прозрачным. Альфа канал для обрезки по изображению

```css
div {
	shape-outside: circle();
	shape-outside: ellipse();
	shape-outside: inset();
	shape-outside: polygon();
	shape-outside: url();
	shape-outside: linear-gradient();

	shape-margin: 10px;
	shape-image-threshold: 0.7;
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Фигуры
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### 1. Окружность
<!------------------------------------------------------------->
::: tip
- __`shape-outside: circle (r at x y)`__ - Окружность
- `r` - радиус (по умолчанию 50%)
- `at` - задание позиции
- `x` - позиция по горизонтали (по умолчанию 50%)
- `y` - позиция по вертикали (по умолчанию 50%)
:::

```css
shape-outside: circle() == circle(50%)
shape-outside: circle(50% at 50% 50%)
```

<!------------------------------------------------------------->
#### 2. Эллипс
<!------------------------------------------------------------->
::: tip
- __`shape-outside: ellipse (rx ry at x y)`__ - Эллипс
- `rx` - радиус по оси "x" (по умолчанию 50%)
- `ry` - радиус по оси "y" (по умолчанию 50%)
- `at` - задание позиции
- `x` - позиция по горизонтали (по умолчанию 50%)
- `y` - позиция по вертикали (по умолчанию 50%)
:::

```css
shape-outside: ellipse()
shape-outside: ellipse(50% 50% at 50% 50%)
```

<!------------------------------------------------------------->
#### 3. Прямоугольник
<!------------------------------------------------------------->
::: tip
- __`shape-outside: inset (top right bottom left round 10px)`__ - Прямоугольник внутри Shape
- `top` - отступ сверху
- `right` - отступ справа
- `bottom` - отступ снизу
- `left` - отступ слева
- `round` - border-radius
- `10px` - закругление
:::

- `inset(10px)` - задает одинаковые отступы по 10px со всех сторон

```css
shape-outside: inset(10px 10px 10px 10px) == inset(10px)
```

<!------------------------------------------------------------->
#### 4. Полигон
<!------------------------------------------------------------->
- Может принимать массив точек x и y для создания любой сложной фигуры. Каждый элемент в массиве представляет `xi` `yi` и будет записан как `polygon(x1 y1, x2 y2, x3 y3)` и т.д.
- Наименьшее количество наборов точек, которые мы можем применить к многоугольнику, составляет три, что дает треугольник

::: tip
- __`shape-outside: polygon (p1, p2, p3 ...)`__ -Полигон
- `p1` - xi yi-координаты
:::

```css
shape-outside: polygon(0 0, 100px 200px, 0 200px);
```

##### Расширения браузеров для корректировки фигур
- Firefox имеет встроенный редактор для фигур
- [CSS Shapes Editor для Chrome](https://chrome.google.com/webstore/detail/css-shapes-editor/nenndldnbcncjmeacmnondmkkfedmgmp?hl=en-US)

<!------------------------------------------------------------->
#### 5. Изображение
<!------------------------------------------------------------->
- Текст формируется по границе `SVG/PNG` изображения. Текст учитывает, какие области являются прозрачными, а какие непрозрачными, и соответствующим образом выравнивается
- Используемое изображение должно быть CORS совместимым

```css
shape-outside: url(image.png)
```

<!------------------------------------------------------------->
#### 6. Градиент
<!------------------------------------------------------------->
- Градиенты - это также изображения, и точно так же, как с изображением, текст будет обтекать прозрачную часть</li>

```css
shape-outside: linear-gradient(45deg, rgba(255, 255, 255, 0) 150px, red 150px)
```

- В примере задан градиент, в котором цвет и прозрачность соотносятся, как `50% / 50%`, и установить для `shape-image-threshold - .5`
- Т.е. все пиксели, которые более чем на 50% непрозрачны следует рассматривать как часть изображения


```css
div {
	shape-image-threshold: 0.5;
	shape-outside: linear-gradient(to bottom right, #2bf0a5, transparent);
	background-image: linear-gradient(to bottom right, #2bf0a5, transparent);
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Примеры
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
<v-iframe
	height="450"
	src="https://codepen.io/Sergeenkov/embed/bGEbXxM?height=245&theme-id=dark&default-tab=html,result"
/>
