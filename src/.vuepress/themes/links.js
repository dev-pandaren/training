
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
            ['common/common', 'Общее'],
            ['common/learn',  'Учебники и справочники'],
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
            ['libs/ui-libs',      'Ui-библиотеки'],
        ]
    },
    {
        title: 'Сервисы',
        children: [
            ['services/online-editors', 'Онлайн редакторы кода'],
            ['services/api',            'API'],
            ['services/deploy',         'Деплой'],
            ['services/3d',             '3D Graphics'],
        ]
    },
    {
        title: 'Технологии',
        children: [
            ['tech/builders',       'Сборщики'],
            ['tech/cms',            'CMS'],
        ]
    },
];

module.exports = THEME_LINKS;
