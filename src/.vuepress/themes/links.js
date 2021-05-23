
const THEME_LINKS = [
    {
        title: 'Вёрстка',
        children: [
            ['html/main',         'Общее'],
            ['html/infographics', 'Инфографика'],
            ['html/layouts',      'Макеты'],
        ]
    },
    {
        title: 'Общее',
        children: [
            ['common/common',   'Общее'],
            ['common/learn',    'Учебники и справочники'],
			['common/games',    'Игры'],
			['common/training', 'Тренировки и план развития'],
        ]
    },
    {
        title: 'Инструменты',
        children: [
            ['instruments/validators',   'Валидаторы'],
            ['instruments/generators',   'Генераторы'],
            ['instruments/formatters',   'Форматтеры'],
        ]
    },
    {
        title: 'Библиотеки',
        children: [
            ['libs/ui-libs', 'Ui-библиотеки'],
        ]
    },
    {
        title: 'Сервисы',
        children: [
            ['services/online-editors', 'Онлайн редакторы кода'],
            ['services/api',            'API'],
            ['services/cdn',            'CDN'],
            ['services/deploy',         'Деплой'],
            ['services/3d',             '3D Graphics'],
            ['services/repo',           'Репозитории проектов'],
        ]
    },
    {
        title: 'Технологии',
        children: [
            ['tech/frameworks',   'Frameworks'],
            ['tech/builders',     'Сборщики'],
            ['tech/cms',          'CMS'],
        ]
    },
    {
        title: 'Прочее',
        children: [
            ['other/services',    'Общие сервисы'],
            ['other/freelance',   'Фриланс-биржи'],
        ]
    },
];

module.exports = THEME_LINKS;
