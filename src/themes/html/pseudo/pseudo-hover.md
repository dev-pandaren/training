# Псевдоклассы (hover, not, focus, active, visited, link)

```css
a:hover        /* наведение на элемент */
a:not(:hover)  /* увод с элемента */
a:active       /* активный элемент */
a:focus        /* элемент в фокусе */
a:visited      /* посещеннае ссылки */
a:link         /* не посещенные ссылки */
```

```css
a:hover {
	background-color: orange;
	transition: 0.4s;
}
a:not(:hover) {
	transition: 0.4s;
}
```
