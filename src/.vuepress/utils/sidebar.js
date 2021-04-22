
const getSidebarChildren = (children, index, num) =>
	children.map(([path, title], indexChildren) => [
		path,
		num ? `${index+1}.${indexChildren+1} ${title}` : `• ${title}`
	])

const getSidebar = (arr, num) =>
	arr.map(({ title, children }, index) => ({
		title: `${index+1}. ${title}`,
		children: getSidebarChildren(children, index, num),
		collapsable: false
	}))

module.exports = getSidebar;
