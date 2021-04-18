const NAV = [
	{ text: '1. HTML & CSS', link: '/themes/html/' },
	{ text: '2. JavaScript', link: '/themes/js/' },
	// { text: '3. PHP & MySQL', link: '/themes/php/' },
];

const SIDEBAR_HTML = [
	{ title: '1. Введение', collapsable: false, children: [
		['intro/intro',     'Введение и основные понятия'],
		['intro/structure', 'Структура HTML файла'],
		['intro/path',      'Задание пути к файлам'],
	]},
	{ title: '2. Основы', collapsable: false, children: [
		['basic/colors',          'Цвета CSS (стандартные, hex, rgb)'],
		['basic/inline',          'Строчные элементы (span)'],
		['basic/block',           'Блочные элементы (div)'],
		['basic/opacity',         'Прозрачность элементов'],
		['basic/px',              'Единицы измерения'],
		['basic/adaptive-design', 'Адаптивная верстка'],
		['basic/vars',            'Переменные в CSS'],
	]},
	{ title: '3. Основные элементы', collapsable: false, children: [
		['elements/text',  'Текст и шрифты'],
		['elements/img',   'Изображения'],
		['elements/list',  'Списки'],
		['elements/link',  'Ссылки'],
		['elements/form',  'Формы'],
		['elements/table', 'Таблицы'],
		['elements/video', 'Видео и аудио'],
	]},
	{ title: '4. Разметка', collapsable: false, children: [
		['layout/float',             'Float'],
		['layout/inline-block',      'Inline Block'],
		['layout/flexbox',           'Flexbox'],
		['layout/css-grid',          'CSS Grid'],
		['layout/css-multi-columns', 'CSS Multi Columns'],
	]},
	{ title: '5. Преобразования', collapsable: false, children: [
		['transform/transition',  'transition'],
		['transform/transform',   'transform'],
		['transform/filters',     'filter, backdrop-filter'],
		['transform/animation',   'animation'],
		['transform/clip-path',   'clip-path'],
		['transform/css-shapes',  'CSS Shapes'],
		['transform/svg',         'SVG'],
	]},
	{ title: '6. CSS-свойства', collapsable: false, children: [
		['properties/box-sizing', 'box-sizing'],
		['properties/display',    'display'],
		['properties/position',   'position'],
		['properties/calc',       'calc()'],
		['properties/import',     '@import'],
	]},
	{ title: '7. Селекторы', collapsable: false, children: [
		['selectors/selector-basic', 'class, id, tag'],
		['selectors/selector-attr',  'attr'],
		['selectors/selector-tilda', '>, +, ~'],
	]},
	{ title: '8. Псевдоклассы и псевдоэлементы', collapsable: false, children: [
		['pseudo/pseudo-hover',         'hover, focus, active, ...'],
		['pseudo/pseudo-child-element', 'first-child, nth-child, ...'],
		['pseudo/pseudo-before',        'before, after'],
	]},
	{ title: '9. HTML-теги', collapsable: false, children: [
		['tags/semantic-tags', 'Семантические теги'],
		['tags/fieldset',      'fieldset'],
	]},
	{ title: '10. Инструменты', collapsable: false, children: [
		['tools/yandex-map',        'Яндекс Карты и Google Maps'],
		['tools/yandex-metrika',    'Яндекс Метрика'],
		['tools/online-editors',    'Онлайн редакторы кода'],
		['tools/preproc',           'Препроцессоры CSS (Sass'],
		['tools/emmet',             'Плагин Emmet'],
		['tools/bootstrap',         'Bootstrap'],
		['tools/bem',               'БЭМ и другие методологии верстки'],
		['tools/pixel-perfect',     'Pixel Perfect'],
		['tools/chrome-dev-tools',  'Chrome DevTools'],
		['tools/photoshop',         'Adobe Photoshop для верстальщика'],
		['tools/vk',                'Виджеты ВКонтакте'],
		['tools/github',            'Хостинг проектов GitHub'],
		['tools/vendor',            'Вендорные префиксы. Автопрефиксер'],
		['tools/structure-project', 'Организация структуры проекта'],
		['tools/web-servises',      'Ссылки на полезные ресурсы'],
	]},

	//----------------------------------------------
	//----------------------------------------------

	// { title: '11. Прочее', collapsable: false, children: [
	// 	['other/timeweb',         'Timeweb'],
	// 	['other/adaptive-menu',   'Адаптивное меню'],
	// 	['other/font-awesome',    'Font Awesome'],
	// 	['other/linear-gradient', 'Linear Gradient'],
	// ]},
];

// Препроцессоры HTML (Pug)
// Трансформация в CSS (transform). 3D преобразования
// Adobe Illustrator для верстальщика (рисование SVG)
// iframe (seamless) стилизация плеера YouTube
// Parallax эффект на CSS
// Определение геолокации


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

const SIDEBAR_PHP = [
	{ title: '1. PHP', collapsable: false, children: [
		['php/mail',         'Отправка сообщения на почту'],
		['php/mail-html',    'Отправка HTML сообщения на почту'],
		['php/files',        'Работа с файлами и директориями'],
		['php/save-img',     'Сохранение изображения на сервере 1'],
		['php/save-img-add', 'Сохранение изображения на сервере 2'],
		['php/session',      'PHP сессия'],
	]},
	{ title: '2. MySQL', collapsable: false, children: [
		['mysql/sql',        'MySQL'],
		['mysql/connect',    'Работа с MySQL'],
	]},
	{ title: '3. Инструменты', collapsable: false, children: [
		['tools/yandex-money',    'ЯндексДеньги. Система оплаты на сайт'],
	]},
];


module.exports = {
	themeConfig: {
		nav: NAV,
		sidebar: {
			'/themes/html/': SIDEBAR_HTML,
			'/themes/js/': SIDEBAR_JS,
			'/themes/php/': SIDEBAR_PHP,
		},
		search: false,
	},
	base: '/training/',
	title: 'Dev Pandaren',
	head: [
		['link', { rel: 'icon', href: '/favicon.svg' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
	],
	plugins: [
		'@vuepress/plugin-back-to-top',
		'@vuepress/plugin-medium-zoom',
	]
}
