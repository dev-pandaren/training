const THEME_HTML = require('./themes/html');
const THEME_JS = require('./themes/js');
const THEME_PHP = require('./themes/php');
const THEME_LINKS = require('./themes/links');

const { PATH_HTML, PATH_JS, PATH_PHP, PATH_LINKS } = require('./constants/paths');
const getSidebarObj = require('./utils/sidebar');

const NAV = [
	{ text: 'HTML & CSS', link: PATH_HTML },
	{ text: 'JavaScript', link: PATH_JS },
	{ text: 'Ссылки',     link: PATH_LINKS },
	// { text: 'PHP & MySQL', link: PATH_PHP },
];

module.exports = {
	themeConfig: {
		nav: NAV,
		sidebar: {
			[PATH_HTML]: getSidebarObj(THEME_HTML),
			[PATH_JS]: getSidebarObj(THEME_JS),
			[PATH_PHP]: getSidebarObj(THEME_PHP),
			[PATH_LINKS]: getSidebarObj(THEME_LINKS),
		},
		search: false,
	},
	base: '/training/',
	title: 'Dev Pandaren Training',
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

