# Загрузка репозитория на GitHub

#### `config`
```bash
git config --global user.email EMAIL_NAME   # Задание user.name
git config --global user.name ACCOUNT_NAME  # Задание user.email
git config --list                           # Вывод настроек
```

#### `remote`
```bash
# Добавление к локальному репозиторию ссылки на удаленный репозиторий
git remote add origin https://github.com/ACCOUNT_NAME/app.git
```

#### `push`
```bash
# Отправка изменений на удаленный git-репозиторий
git push origin HEAD
```
