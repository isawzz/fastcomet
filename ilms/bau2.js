
// blog v3
function blogShow(d, key, o) {
	let dBlog = mDom(d, {fz:20, className:'collapsible'}, { key });
	mDom(dBlog, {className:'title'}, { html: `${key}: ${o.title}` });
	let dParts = mDom(dBlog, { className: 'sortable' });
	let blogItem = { o, key, div: dBlog, dParts, items: [] }
	for (let textPart of o.text) {
		let d2 = mDom(dParts, { caret: 'white' });
		let item = { key, text: textPart, div: d2, type: textPart.includes('blogimages/') ? 'img' : 'text' };
		blogItem.items.push(item);
		if (textPart.includes('blogimages/')) {
			mDom(d2, { w100: true }, { tag: 'img', src: textPart });
		} else {
			mStyle(d2, { mabottom: 10 }, { contenteditable: true, html: textPart });
			d2.onblur = blogSave;
		}
	}
	let d3 = mDom(dBlog, {}, { tag: 'hr' });
	return blogItem;
}
function blogCollapse(items) { 
	let isCollapsed = false;
	function collapseOne(item) {
		mStyle(item.dRep,{display:'block'});
		mStyle(item.dContent,{display:'none'});
	}
	function expandOne(item) {
		mStyle(item.dRep,{display:'none'});
		mStyle(item.dContent,{display:'block'});
	}
	function isCollapsedOne(item) {
		return mGetStyle(item.dContent,'display') == 'none';
	}
	function toggleOne(item) {
		if (isCollapsedOne(item)) expandOne(item); else collapseOne(item);
	}
	function prepOne(item) {

		// let d = iDiv(item);
		// let dTitle = d.firstChild;
		// dTitle.style.cursor = 'pointer';
		// dTitle.onclick = () => toggleOne(item);
	}
	// items.map(prepOne);
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
