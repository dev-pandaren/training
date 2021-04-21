
const THEME_LINKS = [
    {
        title: 'Вёрстка',
        children: [
            ['html/main',         'Общее'],
            ['html/infographics', 'Инфографика'],
            ['html/layouts',      'Макеты дизайна'],
            ['html/validators',   'Валидаторы'],
        ]
    },
    {
        title: 'Общее',
        children: [
            ['common/formatters',   'Форматирование кода'],
            ['common/ui-kit',       'Ui-Kit'],
        ]
    },
    {
        title: 'Сервисы',
        children: [
            ['services/online-editors', 'Онлайн редакторы кода'],
            ['services/api',            'API'],
            ['services/deploy',         'Деплой'],
            ['services/builders',       'Сборщики'],
            ['services/cms',            'CMS'],
            ['services/3d',             '3D'],
        ]
    },
];

module.exports = THEME_LINKS;
