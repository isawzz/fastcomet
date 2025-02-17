
function mCollapse(items, classCollapsed='collapsed_title') { 
	let isCollapsed = false;
	function collapseOne(item) {
		let d = iDiv(item);
		let dTitle = d.firstChild;
		mClass(dTitle, classCollapsed);
		for (const c of arrChildren(d)) {
			if (c == dTitle) continue;
			c.style.display = 'none';
		};
	}
	function expandOne(item) {
		let d = iDiv(item);
		let dTitle = d.firstChild;
		mClassRemove(dTitle, classCollapsed);
		for (const c of arrChildren(d)) {
			c.style.display = 'block';
		};
	}
	function isCollapsedOne(item) {
		let d = iDiv(item);
		let second = arrChildren(d)[1];
		return second.style.display == 'none';
	}
	function toggleOne(item) {
		if (isCollapsedOne(item)) expandOne(item); else collapseOne(item);
	}
	function prepOne(item) {
		let d = iDiv(item);
		let dTitle = d.firstChild;
		dTitle.style.cursor = 'pointer';
		dTitle.onclick = () => toggleOne(item);
	}
	items.map(prepOne);
	return {
		items,
		collapseAll: () => { items.map(collapseOne); isCollapsed = true; },
		expandAll: () => { items.map(expandOne); isCollapsed = false; },
		toggleAll: () => items.map(toggleOne),
		collapseOne,
		expandOne,
		toggleOne,
		isCollapsedOne,
		isCollapsedAll: () => isCollapsed, //items.every(isCollapsedOne),
	}
}
