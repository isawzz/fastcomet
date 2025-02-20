
//blog v5
function mSortable(divs) {
	let draggedElement = null;
	let lastHighlighted = null;

	divs.forEach(container => {
		container.querySelectorAll('img,div').forEach(el => {
			el.draggable = true;

			el.addEventListener('dragstart', e => {
				draggedElement = el;
				e.dataTransfer.effectAllowed = 'move';
			});

			el.addEventListener('dragover', e => {
				e.preventDefault();
				if (el !== draggedElement) {
					if (lastHighlighted) lastHighlighted.style.outline = '';
					el.style.outline = '2px solid yellow';
					lastHighlighted = el;
				}
			});

			el.addEventListener('dragleave', () => {
				if (el === lastHighlighted) {
					el.style.outline = '';
					lastHighlighted = null;
				}
			});

			el.addEventListener('drop', e => {
				e.preventDefault();
				if (draggedElement !== lastHighlighted) {
					console.log('dropped',draggedElement,'on', lastHighlighted, draggedElement.parentNode);
					lastHighlighted.style.outline = '';
					draggedElement.style.outline = '';
					lastHighlighted.parentNode.insertBefore(draggedElement, lastHighlighted); 
				}
				draggedElement = null;
				lastHighlighted = null;
			});
		});
	})
}


//blog v4
function enableDragDrop(container) {
	let draggedElement = null;
	let lastHighlighted = null;
	container.querySelectorAll('div, img').forEach(el => {
		el.draggable = true;
		el.addEventListener('dragstart', e => {
			draggedElement = el;
			e.dataTransfer.effectAllowed = 'move';
		});
		el.addEventListener('dragover', e => {
			e.preventDefault();
			if (el !== draggedElement) {
				if (lastHighlighted) lastHighlighted.style.border = '';
				el.style.border = '2px solid yellow';
				lastHighlighted = el;
			}
		});
		el.addEventListener('dragleave', () => {
			if (el === lastHighlighted) {
				el.style.border = '';
				lastHighlighted = null;
			}
		});
		el.addEventListener('drop', e => {
			e.preventDefault();
			if (draggedElement && lastHighlighted && draggedElement !== lastHighlighted) {
				lastHighlighted.style.border = '';
				lastHighlighted.after(draggedElement);
			}
			draggedElement = null;
			lastHighlighted = null;
		});
	});
}
function mCollapse(divs) {
	//assumes that divs have first element a title, next to which a + or - is added
	function collapseOne(div) {
		let b = div.firstChild.firstChild;
		b.textContent = '+ ';
		let chi = arrChildren(div).slice(1);
		chi.map(x => mStyle(x, { display: 'none' }));
	}
	function expandOne(div) {
		let b = div.firstChild.firstChild;
		b.textContent = '- ';
		let chi = arrChildren(div).slice(1);
		chi.map(x => mStyle(x, { display: 'block' }));
	}
	function isCollapsedOne(div) {
		let chi = arrChildren(div).slice(1);
		return chi[0].style.display === 'none';
	}
	function toggleOne(div) {
		if (isCollapsedOne(div)) expandOne(div); else collapseOne(div);
	}

	divs.forEach(div => {
		let d1 = div.firstChild;
		let b = mDom(d1, { margin: 5, cursor: 'pointer' }, { tag: 'span', html: '- ' }); mInsert(d1, b, 0);
		b.onclick = () => { toggleOne(div); }
	});
	return {
		divs, toggleOne, collapseOne, expandOne, isCollapsedOne,
		collapseAll: () => { divs.map(collapseOne); }, expandAll: () => { divs.map(expandOne); },
	};
}

//blog v3
function addCollapseExpand(divs) {
	divs.forEach(div => {
			const btn = document.createElement('span');
			btn.textContent = '+ ';
			btn.style.cursor = 'pointer';
			btn.style.marginRight = '5px';
			btn.onclick = () => {
					if (div.style.display === 'none') {
							div.style.display = '';
							btn.textContent = '- ';
					} else {
							div.style.display = 'none';
							btn.textContent = '+ ';
					}
			};
			div.before(btn);
			div.style.display = 'none'; // Start collapsed
	});
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

// blog v2
function blogShow(d, date, o) {
	let dBlog = mDom(d, {fz:20, }, { key: date });
	let dRep = mDom(dBlog, {className:'title_collapsed',display:'none'}, { html: `${date}: ${o.title}` });
	let dContent = mDom(dBlog);
	mDom(dContent, {className:'title'}, { html: `${date}: ${o.title}` });
	let dParts = mDom(dContent);
	let blogItem = { o, key: date, div: dBlog, dRep, dContent, dParts, items: [] }
	for (let textPart of o.text) {
		let d2 = mDom(dParts, { caret: 'white' });
		let item = { key: date, text: textPart, div: d2, type: textPart.includes('blogimages/') ? 'img' : 'text' };
		blogItem.items.push(item);
		if (textPart.includes('blogimages/')) {
			mDom(d2, { w100: true }, { tag: 'img', src: textPart });
		} else {
			mStyle(d2, { mabottom: 10 }, { contenteditable: true, html: textPart });
			d2.onblur = saveBlogList;
		}
	}
	let d3 = mDom(dContent, {}, { tag: 'hr' });
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

//blog v1
function blogShow(d, date, o) {
	let dBlog = mDom(d, {fz:20, }, { key: date });
	// let dRep = mDom(dBlog, {className:'title_collapsed',display:'none'}, { html: `${date}: ${o.title}` });
	// let dContent = mDom(dBlog);
	mDom(dBlog, {className:'title'}, { html: `${date}: ${o.title}` });
	let d1 = mDom(dBlog);
	let blogItem = { o, key: date, div: dBlog, dParts: d1, items: [] }
	for (let textPart of o.text) {
		let d2 = mDom(d1, { caret: 'white' });
		let item = { key: date, text: textPart, div: d2, type: textPart.includes('blogimages/') ? 'img' : 'text' };
		blogItem.items.push(item);
		if (textPart.includes('blogimages/')) {
			mDom(d2, { w100: true }, { tag: 'img', src: textPart });
		} else {
			mStyle(d2, { mabottom: 10 }, { contenteditable: true, html: textPart });
			d2.onblur = saveBlogList;
		}
	}
	let d3 = mDom(dBlog, {}, { tag: 'hr' });
	return blogItem;
}
function blogCollapse(items, classCollapsed='title_collapsed') { 
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
