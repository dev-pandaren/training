# Псевдоклассы (first-child, last-child, nth-child)

```html
<div class="container">
	<div class="item">item-1</div>
	<div class="item">item-2</div>
	<div class="item">item-3</div>
	<div class="item">item-4</div>
</div>
```

```css
.item:first-child       /* первый элемент (элементы должны быть в wrapper) */
.item:last-child        /* последний элемент (элементы должны быть в wrapper) */
.item:nth-child(2)      /* второй элемент */
.item:nth-child(2n)     /* каждый второй элемент */
.item:nth-child(even)   /* каждый четный элемент */
.item:nth-child(odd)    /* каждый нечетный элемент */
```
