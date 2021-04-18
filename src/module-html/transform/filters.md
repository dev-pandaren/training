# CSS фильтры


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### filter
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```css
div {
	filter: blur(5px);         /* размытие (напрямую к body применить нельзя) */
	filter: brightness(150%);  /* яркость, 100% по умолчанию */
	filter: contrast(150%);    /* контрастность, 100% по умолчанию */
	filter: grayscale(70%);    /* черно-белое, 0% по умолчанию */
	filter: hue-rotate(90deg); /* поворот оттенка, определяет угол, 0deg по умолчанию */
	filter: invert(100%);      /* инвертирование */
	filter: opacity(50%);      /* прозрачность */
	filter: saturate(150%);    /* изменение насыщенности */
	filter: sepia(100%);       /* сепия */
	filter: drop-shadow(10px 10px 3px rgba(100,0,0,0.5)); /* добавляет тень к изображениям, учитывая прозрачные участки */
}
```

::: tip
- Можно применять несколько фильтров. Первый фильтр применяется к исходному изображению, а остальные к предыдущему
```css
filter: contrast(150%) sepia(100%);
```
:::


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### backdrop-filter
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- Аналогичен `filter`, но работает только с фоном, не трогая сам элемент
- Значения такие же как у `filter`

<!-- .............. START ......................... -->
<v-two>
<template v-slot:first>

```css
div {
	backdrop-filter: blur(10px);
}
```
</template>
<template v-slot:last>

```css
div {
	filter: blur(10px);
}
```
</template>
</v-two>
<!-- ............... END .......................... -->


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Примеры
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### Пример сравнения filter и backdrop-filter
<!------------------------------------------------------------->
<v-iframe
	height="350"
	src="https://codepen.io/Sergeenkov/embed/WNQXYyw?height=265&theme-id=dark&default-tab=css,result"
/>
