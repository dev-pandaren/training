# Parcel


[Parcel: Documentation](https://parceljs.org/getting_started.html)


<!------------------------------------------------------------->
#### Структура проекта
<!------------------------------------------------------------->
```bash
+ public
	- favicon.png
	- index.html
+ src
	- index.js
- .gitignore
- package.json
```

<!------------------------------------------------------------->
#### index.html
<!------------------------------------------------------------->
```html
<!DOCTYPE html>
<html>
<head>
	...
</head>
<body>
	<script src="../src/index.js"></script>
</body>
</html>
```

<!------------------------------------------------------------->
#### package.json
<!------------------------------------------------------------->
```js
// package.json для Parcel
{
	"name": "app",
	"version": "1.0.0",
	"scripts": {
		"start": "parcel public/index.html --open",
		"build": "parcel build public/index.html"
	},
	"dependencies": {
		"axios": "^0.19.2"
	},
	"devDependencies": {
		"parcel-bundler": "^1.12.4"
	}
}
```

<!------------------------------------------------------------->
#### .gitignore
<!------------------------------------------------------------->
```js
// .gitignore для Parcel

/.cache
/dist
/node_modules
```
