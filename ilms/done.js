
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
function enableAutoScrollOnDrag(draggableElement) {
	let scrollInterval;
	const scrollSpeed = 20; // Adjust scroll speed as needed
	const edgeThreshold = 50; // Distance from edge to start scrolling

	draggableElement.addEventListener('drag', (e) => {
		clearInterval(scrollInterval);

		const { clientY } = e;
		const { innerHeight } = window;

		if (clientY < edgeThreshold) {
			// Near top of viewport
			scrollInterval = setInterval(() => {
				window.scrollBy(0, -scrollSpeed);
			}, 50);
		} else if (clientY > innerHeight - edgeThreshold) {
			// Near bottom of viewport
			scrollInterval = setInterval(() => {
				window.scrollBy(0, scrollSpeed);
			}, 50);
		}
	});

	draggableElement.addEventListener('dragend', () => {
		clearInterval(scrollInterval);
	});
}


