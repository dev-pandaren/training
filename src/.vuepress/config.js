const SIDEBAR_HTML = require('./constants/sidebar-html');
const SIDEBAR_JS = require('./constants/sidebar-js');
const SIDEBAR_PHP = require('./constants/sidebar-php');

const { PATH_HTML, PATH_JS, PATH_PHP } = require('./constants/paths');

const NAV = [
	{ text: '1. HTML & CSS', link: PATH_HTML },
	{ text: '2. JavaScript', link: PATH_JS },
	// { text: '3. PHP & MySQL', link: PATH_PHP },
];

const getSidebarObj = arr => {
	return arr.map(element => {
		return {
			...element,
			collapsable: false
		}
	})
}

module.exports = {
	themeConfig: {
		nav: NAV,
		sidebar: {
			[PATH_HTML]: getSidebarObj(SIDEBAR_HTML),
			[PATH_JS]: SIDEBAR_JS,
			[PATH_PHP]: SIDEBAR_PHP,
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
