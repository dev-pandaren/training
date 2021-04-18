
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

module.exports = SIDEBAR_HTML;
