# Переходы в CSS (transition)

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### transition (анимированный переход)
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
transition: all 0s ease 0s;
```

- `transition-property` - какие свойства анимируются
- `transition-duration` - длина анимации
- `transition-timing-function`- как вычисляются промежуточные состояния
- `transition-delay`- время ожидания перед запуском эффекта


```css
div {
	transition: all 0.7s ease-in 0s;
}
```

```css
div {
	background-color: orange;
	transition: all 0.7s ease-in 0s;
}
div:hover {
	background-color: blue;
}
```

