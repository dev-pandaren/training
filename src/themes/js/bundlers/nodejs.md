# Node.js и NPM


- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

---

- `Node.js` - программная платформа для JavaScript
- `NPM (Node.js Package Manager)` - менеджер пакетов, входящий в состав Node.js


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### Команды
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```bash
npm init                   # инициализация проекта (создание package.json)
npm init -y                # инициализация проекта с параметрами по умолчанию
npm i                      # установить все пакеты из package.json
npm up                     # обновить все пакеты из package.json
```

```bash
npm i --save package       # установить package и добавить запись в секцию dependencies package.json 
npm i --save-dev package   # установить package и добавить запись в секцию devDependencies package.json
npm i --g package          # установить package глобально
```

```bash
npm r package              # удалить package
npm up package             # обновить package
npm run package            # запустить package
```

```bash
npm run start              # запуск скрипта "start"
```


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### package.json
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
// package.json для Parcel
{
	// название приложения
	"name": "app",

	// версия приложения                             
	"version": "1.0.0",

	// скрипт для приложения                       
	"scripts": {
		"start": "..."
	},

	// зависимости
	"dependencies": {
		...
	},

	// зависимости для разработки
	"devDependencies": {
		...
	}
}
```
