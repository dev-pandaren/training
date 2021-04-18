# Трансформация в CSS (transform)

::: details Темы
- Трансформация в CSS (transform)
- 2D преобразования
:::

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 1. Сдвиг
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
div {
	transform: translate(50px, 50px); /* сдвигает элемент на заданное значение по горизонтали и вертикали (положительное значение сдвигает вправо, отрицательное влево) */
	transform: translateX(50px);      /* сдвигает элемент по горизонтали на указанное значение */
	transform: translateY(50px);      /* сдвигает элемент по вертикали на указанное значение */
	transform: translateZ(50px);      /* сдвигает элемент по оси Z на указанное значение */
}
```

- Один параметр `translate()`: перемещает элемент вдоль оси `х`
- Два параметра `translate()`: первое значение для оси `х`, второе для оси `у`

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 2. Поворот
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
div {
	transform: rotate(15deg);   /* поворот */
	transform: rotateX(15deg);  /* поворот по оси X */
	transform: rotateY(15deg);  /* поворот по оси Y */
	transform: rotateZ(15deg);  /* поворот по оси Z */	
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 3. Масштабирование
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
div {
	transform: scale(1.2);   /* масштабирует элемент по горизонтали и вертикали */
	transform: scaleX(1.2);  /* масштабирует элемент по горизонтали */
	transform: scaleY(1.2);  /* масштабирует элемент по вертикали */
	transform: scaleZ(1.2);  /* масштабирует элемент по оси Z */	
}
```
- Один параметр `scale()`: изменение размеров элемента одинаково по высоте и ширине
- Два параметра `scale()`: первое значение изменяет размер элемента по горизонтали, второе по вертикали


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### 4. Наклон (Искажение)
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
div {
	transform: skew(15deg);
	transform: skewX(15deg);     /* наклоняет элемент на заданный угол по вертикали */
	transform: skewY(15deg);     /* наклоняет элемент на заданный угол по горизонтали */
}
```

- Один параметр `skew()`: элемент искажается по горизонтали
- Два параметра `skew()`: первое значение искажает элемент по горизонтали, второе по вертикали


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Применение нескольких трансформаций
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
div {
	transform: translate(50px, 50px) rotate(15deg); 
}
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Особенности
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Не прерывает поток (не влияют на другие элементы)
- Трансформации можно записывать несколько через пробел


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Примеры
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### CSS Emergent Block (Transform)
<!------------------------------------------------------------->
<v-iframe
	height="350"
	src="https://codepen.io/Sergeenkov/embed/KBqwQX?height=265&theme-id=default&default-tab=css,result"
/>

<!------------------------------------------------------------->
#### Hamburger Animation Menu (Transform)
<!------------------------------------------------------------->
<v-iframe
	height="350"
	src="https://codepen.io/Sergeenkov/embed/JZpEBL?height=265&theme-id=default&default-tab=css,result"
/>

<!------------------------------------------------------------->
#### CSS Scale Overflow
<!------------------------------------------------------------->
<v-iframe
	height="350"
	src="https://codepen.io/Sergeenkov/embed/eKMmaL?height=265&theme-id=default&default-tab=css,result"
/>
