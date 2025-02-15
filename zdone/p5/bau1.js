
async function onclickNewBlog(ev) {
	let d = mBy('dBlogs');
	let title = await mGather(mInput, ev.target, { bg: 'pink', padding: 4 }); console.log('you entered', title);
	let date = new Date();
	const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
	const formattedDate = date.toLocaleDateString('en-GB', options); // Adjust 'en-GB' for locale if needed
	console.log(formattedDate); // Outputs date in dd/mm/yyyy format

	let d1=mDom(d,{bg:'red',h:100},{html:`${formattedDate} ${title}`});
	mInsert(d,d1,0);
	//let d1 = mDom(d, { gap: 10, padding: 10 }, { id: 'd1', key: date });
}
function mInsert(dParent, el, index = 0) { dParent.insertBefore(el, dParent.childNodes[index]); return el; }

function mToggleButton() {
	let list = Array.from(arguments); //list of functional buttons
	if (isEmpty(list)) return;
	let dParent = list[0].parentNode;
	let tb = mDom(dParent);
	let n = list.length;
	let i = 0;
	for (const b of list) {
		mAppend(tb, b);
		b.setAttribute('idx', i++);
		if (i < n) mStyle(b, { display: 'none' });
	}

	tb.onclick = ev => {
		let idx = Number(evToAttr(ev, 'idx'));
		let inew = (idx + 1) % n;
		let b = list[inew];
		//console.log(list,idx,n,inew,b);
		list.map(x => mStyle(x, { display: 'none' }));
		mStyle(b, { display: 'inline' });
	}

	return tb;
}
function mCollapse(items, styleCollapsed, styleExpanded) {
	let isCollapsed = false;
	function collapseOne(item) {
		let d = iDiv(item);
		let dTitle = d.firstChild;
		mStyle(dTitle, styleCollapsed);
		for (const c of arrChildren(d)) {
			if (c == dTitle) continue;
			c.style.display = 'none';
		};
	}
	function expandOne(item) {
		let d = iDiv(item);
		let dTitle = d.firstChild;
		mStyle(dTitle, styleExpanded);
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
		mStyle(dTitle, styleExpanded);
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

