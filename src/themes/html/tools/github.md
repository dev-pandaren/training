# Хостинг проектов GitHub

## Работа с GitHub
1. Зарегистрироваться на [https://github.com/](https://github.com/)
2. Создать новый проект на GitHub
3. Установить [GitHub Desktop](https://desktop.github.com/)
4. Склонировать репозиторий GitHub через GitHub Desktop
5. Подключить [GitHub Pages](https://pages.github.com/) к проекту на GitHub
6. Скорректировать `README.md` с помощью [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Команды Git

### Инициализация
```bash
# Инициализация репозитория
git init
```

### Получение данных
```bash
# Клонирование репозитория
git clone https://github.com/AccountName/repo-name.git

# Проверить изменения на удаленном репозитории
git fetch

# Получить изменения с удаленного репозитория
git pull
```

### Отправка данных
```bash
# Индексирование всех измененных файлов
git add .

# Сохранение изменений в локальном репозитории
git commit -m 'text'

# Отправка изменений на удаленный репозитория
git push
```

### Работа с ветками
```bash
# Список веток с указанием текущей
git branch

# Переход на ветку
git checkout НазваниеВетки

# Создание ветки
git checkout -b НазваниеВетки

# Слияние текущей и указанной ветки
git merge НазваниеВетки
```

## Ссылки
- [[playlist] GitHub для новичков](https://www.youtube.com/playlist?list=PL3LQJkGQtzc5rDeb7FjACNb6sOW300yA0)
