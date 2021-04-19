
const getSidebarChildren = (children, index) =>
	children.map(([path, title], indexChildren) => [
		path,
		`${index+1}.${indexChildren+1} ${title}`
	])

const getSidebarObj = arr =>
	arr.map(({ title, children }, index) => ({
		title: `${index+1}. ${title}`,
		children: getSidebarChildren(children, index),
		collapsable: false
	}))

module.exports = getSidebarObj;
