# CSS селекторы (>, +, ~)

```css
ul li > span   /* не все span, а только дочерние span */
ul li + li     /* все последующие элементы li */
.class1 ~ div  /* все div элементы после class1 */
.class1 ~ *    /* все элементы после class1 */
```

```html
<div class="container">
	<div>item</div>
	<div>item</div>
	<div>
		item
		<div>inside item</div>
		<div>inside item</div>
	</div>
</div>

<div>outside</div>
<div>outside</div>
<p>outside</p>
```

```css
body {
	font-size: 35px;
}
.container {
	background: silver;
}
.container > div {
	border: 4px solid blue;
	margin: 10px;
	padding: 10px;
}
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Примеры
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### Custom Checkbox
<!------------------------------------------------------------->
<v-iframe
	height="350"
	src="https://codepen.io/Sergeenkov/embed/LMLjYG?height=265&theme-id=default&default-tab=css,result"
/>
