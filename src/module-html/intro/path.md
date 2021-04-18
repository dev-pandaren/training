# Задание пути к файлам

::: details Темы
- Относительные и абсолютные пути
- Подключение файла style.css
:::


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Относительные и абсолютные пути
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
- `https://yandex.ru/mail.html` - абсолютный путь
- `mail.html ` - относительный путь (относительно index.html)
- `C:\Users\User\Desktop\www\mail.html` - абсолютный путь
- `mail.html` - относительный путь (относительно index.html)


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Подключение файла `style.css`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```bash
href="style.css"     # файлы index.html и style.css находится в одной папке
href="css/style.css" # файл style.css находится в папке "css" (директория вниз)
href="../style.css"  # файл style.css находится на директорию выше (директория вверх)
```
