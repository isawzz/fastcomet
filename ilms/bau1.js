
async function blogSaveAll() {
	// let dpart = ev.target;
	// let dparent = findAncestorWith(dpart, { attribute: 'key' });

	//check if content has changed
	//only save if content has changed!

	function replaceDivs(str) {
		return str.replaceAll('<div>', '<br>').replaceAll('</div>', '');
	}

	let blog = DA.blogs;
	//console.log(blog);

	let list = dict2list(blog);
	for (const bl of list) {
		console.log(bl);
		let d = bl.dParts;
		let chi = arrChildren(d);
		let parts = [];
		let prevType = null;
		let prevText = null;
		for (const ch of chi) {
			let type = ch.getAttribute('type');
			if (type == 'text') {
				let txt = ch.innerHTML;
				txt = replaceDivs(txt);
				if (isdef(prevText)) txt = prevText + '<br>' + txt;
				prevType = 'text';
				prevText = txt;
			} else {
				if (isdef(prevText)) { parts.push(prevText); prevText = null; }
				prevType = type;
				if (type == 'image') {
					//console.log('src',ch.src);
					parts.push(ch.src);
					//=>later! if this image does not exist yet need to also upload the image!
				}
			}
		}

		//return;
	}

	return;

	// let list=[];
	// for (const ch of arrChildren(dparent)) {
	// 	let type = ch.getAttribute('type');
	// 	console.log('type',type);
	// 	let html = ch.innerHTML;
	// 	console.log('html',html)


	// }
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
	let dBlog = mDom(d, { fz: 20, className: 'collapsible' }, { key });
	mDom(dBlog, { className: 'title' }, { html: `${key}: ${o.title}` });
	let dParts = mDom(dBlog, { className: 'sortable' });
	let blogItem = { o, key, div: dBlog, dParts, items: [] }
	//console.log(o.text)
	for (let textPart of o.text) {
		let d2, type; // = mDom(dParts, { caret: 'white' });
		if (textPart.includes('blogimages/')) {
			type = 'image'
			d2 = mDom(dParts, { w100: true }, { tag: 'img', src: textPart, type });
		} else {
			type = 'text'
			d2 = mDom(dParts, { caret: 'white', padding: 2, outline: '' }, { html: textPart, contenteditable: true, type });
			// mStyle(d2, { mabottom: 10 }, { contenteditable: true, html: textPart });
			// d2.onblur = blogSave;
		}
		let item = { key, text: textPart, div: d2, type };
		blogItem.items.push(item);
		//d2.onclick = onclickPart;
	}
	mDom(dParts, { patop: 5, pabottom: 2 }, { html: '<hr>', type: 'line' });
	return blogItem;
}

