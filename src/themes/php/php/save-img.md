# Сохранение изображения на сервере (jpg, png)

<!------------------------------------------------------------->
#### index.html
<!------------------------------------------------------------->
```html
<label class="input-image" id="img1">
    <input type="file" accept="image/*" onchange="imageLoad('img1', this);" class="input-file">
</label>

<button onclick="imageSave('img1');">Сохранить изображение</button>
```

<!------------------------------------------------------------->
#### css/main.css
<!------------------------------------------------------------->
```css
.input-image {
    width: 200px;
    height: 200px;
    display: block;
}
.input-file {
    display: none;
}
```

<!------------------------------------------------------------->
#### js/main.js
<!------------------------------------------------------------->
```js
// Загрузка изображения из input file в блок
// 1 - input - изображение из input
// 2 - id    - блок для устанавки изображения на background-image
function imageLoad(id, input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function() {
            $('#'+id).css('background-image', 'url('+reader.result+')');
        }
        reader.readAsDataURL(input.files[0]);
    }
}
```

```js
// Сохранение изображения на сервер
// 1 - id - id изображения
function imageSave(id) {
    const picture = $('#'+id).css('background-image');
    const file = '../uploads/'+id;
    const extension = imageExtension(picture);
    picture = imageParse(picture); 
    $.post("php/saveImage.php", {picture:picture, file:file, extension:extension});
}
```

```js
// Определение расширения
// 1 - picture - изображение в base64
function imageExtension(picture) {
    if (picture.indexOf('data:image/png') == -1) {
        return '.jpg';
    } else {
        return '.png';
    }
}
```

```js
// Разбор изображения в base64 и вырезка только части, описывающей само изображение
// изображение в формате base64:
// - "url("data:image/png;base64,"
// - само изображение "..."
// - ")
// формат может быть png, jpeg и т.д., поэтому мы ищем совпадение по фразе "base64", 
// чтобы оставить только данные самого изображения
// ищем позицию элемента
// прибавляем 7 - это символы base64,
// вычитаем 2 - это символы ")
function imageParse(picture) {
    const position = picture.search(/base64/) + 7; 
    const result = picture.slice(position, picture.length-2); 
    return result;
}
```

<!------------------------------------------------------------->
#### php/saveImage.php
<!------------------------------------------------------------->
```php
<?php
	$picture   = $_POST[picture];   // изображение в base64
	$file      = $_POST[file];      // путь без расширения
	$extension = $_POST[extension]; // расширение
	$path      = $file.$extension;

	// конвертирование base64 в изображение
	$picture = base64_decode($picture);
	$picture = imagecreatefromstring($picture);

	// проверка расширения
	if ($extension == '.png') {
		imagealphablending($picture, false); // выключение альфа сопряжения
		imagesavealpha($picture, true);      // установка альфа флага
		header('Content-Type: image/png');   // header
		imagepng($picture, $path);           // сохранение изображения
	} else {
		imagejpeg($picture, $path, 100);
	}

	// освобождение памяти
	imagedestroy($picture);
?>
```
