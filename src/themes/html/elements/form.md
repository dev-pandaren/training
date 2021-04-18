# Формы

- Наследование свойств `inherit` (размер шрифта, стиль шрифта)

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Элементы формы
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### Текстовое поле: `<input type="text">`
<!------------------------------------------------------------->
```html
<input type="text" name="text">
```

<!------------------------------------------------------------->
#### Многострочной текстовое поле: `<textarea>`
<!------------------------------------------------------------->
```html
<textarea>Текст</textarea>
```
```css
textarea {
	resize: none;
}
```

<!------------------------------------------------------------->
#### Выпадающий список: `<select>`
<!------------------------------------------------------------->
```html
<select>
	<option selected="">Пункт 1</option>
	<option>Пункт 2</option>
	<option>Пункт 3</option>
</select>
```

<!------------------------------------------------------------->
#### Связанные переключатели: `<input type="radio">`
<!------------------------------------------------------------->
```html
<input type="radio" name="radio">
<input type="radio" name="radio">
<input type="radio" name="radio">
```

<!------------------------------------------------------------->
#### Галочка: `<input type="checkbox">`
<!------------------------------------------------------------->
```html
<input type="checkbox" name="checkbox">
```

<!------------------------------------------------------------->
#### Метка: `<label>`
<!------------------------------------------------------------->
```html
<input type="checkbox" id="checkbox">
<label for="checkbox">Нажми и выберется checkbox</label>
```
```html
<label class="checkbox">
	<input type="checkbox">
</label>
```

<!------------------------------------------------------------->
#### Прикрепление файла: `<input type="file">`
<!------------------------------------------------------------->
```html
<input type="file">
```

<!------------------------------------------------------------->
#### Кнопка: `<button>`
<!------------------------------------------------------------->
```html
<button>Кнопка</button>
```

<!------------------------------------------------------------->
### Атрибуты
<!------------------------------------------------------------->
```bash
placeholder # подсказка для input
checked     # нажатый radio или checkbox
selected    # выбранный option в select
autofocus   # фокус по умолчанию
disabled    # неактивное
readonly    # только чтение
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Форма (`get`, `post`)
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```html
<form action="script.php" method="get">
    <input type="text" name="name" required="">
    <textarea name="message"></textarea>
    <input type="submit">
</form>
```
```bash
http://test1.ru/script.php?name=myname&message=my+message
```
