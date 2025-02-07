
function onclickMoveUp() {
	console.log('up', 'current blog is', DA.selectedPart);
}
function onclickMoveDown() {
	console.log('down', 'current blog is', DA.selectedPart);
}
function toggleSelection(item, selectList, atmost, className = 'framedPicture') {
	//	console.log(pic)
	let ui = iDiv(item);
	item.isSelected = !item.isSelected;
	if (item.isSelected) mClass(ui, className); else mClassRemove(ui, className);

	if (nundef(selectList)) return;
	//if piclist is given, add or remove pic according to selection state
	if (item.isSelected) {
		console.assert(!selectList.includes(item), 'UNSELECTED PIC IN PICLIST!!!!!!!!!!!!')
		selectList.push(item);
	} else {
		console.assert(selectList.includes(item), 'PIC NOT IN PICLIST BUT HAS BEEN SELECTED!!!!!!!!!!!!')
		removeInPlace(selectList, item);
	}
	if (isNumber(atmost)){
		while (selectList.length > atmost) {
			let pic = selectList.shift();
			pic.isSelected = false;
			let ui = iDiv(pic);
			mClassRemove(ui, className);
		}
	
	}
}

function addMoveUpDown(elems, dButtons) {
	let moveUpBtn = mDom(dButtons, {}, { html: 'up', onclick: moveUp });
	mLinebreak(dButtons);
	let moveDownBtn = mDom(dButtons, {}, { html: 'down', onclick: moveDown });
	let selectedDiv = null;


	// Add click event listener to each div
	container.addEventListener("click", function (event) {
		if (event.target.tagName === "DIV") {
			if (selectedDiv) {
				selectedDiv.classList.remove("highlight");
			}
			selectedDiv = event.target;
			selectedDiv.classList.add("highlight");
		}
	});

	// Move up function
	moveUpBtn.addEventListener("click", function () {
		if (selectedDiv && selectedDiv.previousElementSibling) {
			container.insertBefore(selectedDiv, selectedDiv.previousElementSibling);
		}
	});

	// Move down function
	moveDownBtn.addEventListener("click", function () {
		if (selectedDiv && selectedDiv.nextElementSibling) {
			container.insertBefore(selectedDiv.nextElementSibling, selectedDiv);
		}
	});
}

function parseListToHtml(text) {
	let html = '';
	for (let item of text) {
		//console.log(item);
		if (item.includes('blogimages/')) html += `<img src="${item}" width="100%">`;
		else html += item;
	}
	//console.log(html)
	return html;

}
async function saveBlogList(ev) {
	let dpart = ev.target;
	//console.log(dpart);
	let dparent = findAncestorWith(dpart, { attribute: 'key' });
	//console.log(dpart,dparent);
	for (const ch of arrChildren(dparent)) {

	}

}
async function saveBlog(key, elem) {
	console.log('saving', key);
	let html = elem.innerHTML;
	let list = [];
	while (!isEmpty(html)) {
		let text = stringBefore(html, '<img');

		list.push(text);
		html = stringAfter(html, 'src="');
		console.log(html);
		if (!isEmpty(html)) {
			let src = stringBefore(html, '"');
			list.push(src);
			html = stringAfter(html, '>');
		}

	}
	console.log(list)
	lookupSetOverride(Z, ['blog', key, 'text'], list);
	let text = jsyaml.dump(Z.blog);
	let res = await mPhpPostFile(text, 'zdata/blog1.yaml');
	//console.log(res);
}

function arrMaxContiguous(arr) {
	let cnt = 0, el = arr[0], max = 0;
	for (let i = 0; i < arr.length; i++) {
		let a = arr[i];
		if (a == el) cnt++;
		else {
			el = a;
			if (cnt > max) max = cnt;
			cnt = 1;
		}
	}
	return max;
}
function arrGen(n, min, max) {
	let arr = [];
	for (const i of range(1, n)) arr.push(rNumber(min, max));
	return arr;
}
function arrToCount(arr) {
	let res = []
	let x = arr[0], cnt = 0;
	for (i of range(0, arr.length)) {
		let a = arr[i];
		if (a == x) cnt++
		else {
			res.push({ n: x, cnt });
			x = a;
			cnt = 1;
		}
	}
	return res;
}
function qsort(arr) {
	if (arr.length <= 1) return arr
	let x = arr[0]
	let lower = [], upper = []
	for (i = 1; i < arr.length; i++)
		if (arr[i] < x) lower.push(arr[i])
		else upper.push(arr[i])
	return qsort(lower).concat([x]).concat(qsort(upper));
}





