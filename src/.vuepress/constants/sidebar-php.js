
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

module.exports = SIDEBAR_PHP;
