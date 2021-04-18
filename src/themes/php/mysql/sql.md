# MySQL

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Создание базы данных и таблиц MySQL
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

[http://localhost/Tools/phpmyadmin/](http://localhost/Tools/phpmyadmin/)


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Основные выборки MySQL: `SELECT`, `INSERT`, `UPDATE`, `DELETE`
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<!------------------------------------------------------------->
#### Записи в таблице
<!------------------------------------------------------------->
```bash
SELECT * FROM products WHERE ID=2                                  # выбор 1 записи
SELECT * FROM products                                             # выбор всех записей
INSERT INTO products(NAME, DESCRIPTION) VALUES ('Имя', 'Описание') # добавление новой записи
UPDATE products SET NAME='Имя', DESCRIPTION='Описание' WHERE ID=2  # редактирование записи
DELETE FROM products WHERE ID=2                                    # удаление записи
```
