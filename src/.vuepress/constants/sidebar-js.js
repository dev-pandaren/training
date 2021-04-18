
const SIDEBAR_JS = [
	{ title: '1. Основы', collapsable: false, children: [
		['basic/ecmascript',           'Стандарт ECMAScript'],
		['basic/script',               'Подключение файлов JavaScript'],
		['basic/type',                 'Типы данных. Переменные и константы'],
		['basic/console',              'Вывод сообщения в консоль'],
		['basic/quotes',               'Виды кавычек. Шаблонные строки. Комментарии'],
		['basic/alert',                'Вывод сообщения пользователю'],
		['basic/case',                 'Условные операторы'],
		['basic/dom-select',           'Выборка элементов страницы'],
		['basic/inner-html',           'Методы innerText и innerHTML'],
		['basic/function',             'Функции'],
		['basic/dom-actions',          'События и обработчики событий'],
		['basic/style',                'Обращение к CSS свойствам и классам'],
		['basic/array-for',            'Массивы и циклы'],
		['basic/increment',            'Инкремент и декремент'],
		['basic/attr',                 'Атрибуты'],
	]},
	{ title: '2. ООП и ФП', collapsable: false, children: [
		['paradigms/objects',           'Объекты'],
		['paradigms/class',             'Классы'],                    
		['paradigms/oop-concepts',      'Концепции ООП'],
		['paradigms/fp-concepts',       'Концепции ФП'],
	]},
	{ title: '3. Асинхронность', collapsable: false, children: [
		['async/timeout',       'Таймеры'],
		['async/event-loop',    'Event Loop'],
		['async/promise',       'Promise'],
		['async/ajax',          'AJAX запросы на сервер'],
		['async/async',         'Async Function'],
		['async/axios',         'Библиотека Axios'],
	]},
	{ title: '4. Сборщики и модули', collapsable: false, children: [
		['bundlers/nodejs',       'Node.js и NPM'],
		['bundlers/gulp',         'Сборщик Gulp'],
		['bundlers/webpack',      'Сборщик Webpack'],
		['bundlers/parcel',       'Сборщик Parcel'],
		['bundlers/modules',      'Модульная система'],
		['bundlers/modules-es6',  'ES-6 модули в JavaScript'],
	]},
	{ title: '5. Продвинутые темы', collapsable: false, children: [
		['advanced/arrow-function',       'Стрелочные функции'],
		['advanced/foreach',              'Циклы для перебора массива'],
		['advanced/local-storage',        'Local Storage'],
		['advanced/array',                'Методы работы с массивами'],
		['advanced/string',               'Методы работы со строками'],
		['advanced/number',               'Метода работы с числами'],
		['advanced/spread',               'Операторы разворота'],
		['advanced/destructive',          'Деструктивное присваивание'],
		['advanced/dom-form',             'Выборка элементов формы'],
		['advanced/date',                 'Дата и время'],
		['advanced/throw',                'Обработка исключений'],
		['advanced/create-element',       'Создание элементов'],
	]},
	{ title: '6. Инструменты', collapsable: false, children: [
		['instruments/canvas',               'Рисование на Canvas'],
		['instruments/chrome-sources',       'Отладка в браузере Chrome'],
		['instruments/jquery',               'jQuery и jQuery UI'],
		['instruments/libs',                 'Подключение сторонних скриптов'],
	]},
];

/*
[Функции]
- Варианты объявления функций
- arguments, ...rest
- Параметры функции (ES6)
- Замыкания

- Тернарные операторы
- Gulp
*/

module.exports = SIDEBAR_JS;
