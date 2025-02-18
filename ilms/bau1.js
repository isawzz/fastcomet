
async function blogSave(ev) {
	let dpart = ev.target;
	let dparent = findAncestorWith(dpart, { attribute: 'key' });

	//check if content has changed
	//only save if content has changed!
	
	for (const ch of arrChildren(dparent)) {
	}
}
function blogShowAll(d, blog) {
	let dates = Object.keys(blog);
	dates.sort((a, b) => new Date(b) - new Date(a));
	let di = {};
	for (const date of dates) {
		di[date] = blogShow(d, date, blog[date]);
	}
	return di;
}
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
			mStyle(d2, { mabottom: 10 }, { html: textPart });
			// mStyle(d2, { mabottom: 10 }, { contenteditable: true, html: textPart });
			// d2.onblur = blogSave;
		}
	}
	let d3 = mDom(dBlog, {}, { tag: 'hr' });
	return blogItem;
}

