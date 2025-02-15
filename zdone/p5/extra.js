
//#region NOT in p5 project
async function _test4_toggleBlogs() {
	let blog = await init();
	let elems = mLayoutTLMS('raspberry', 'dPage'); mStyle('dMain', { overy: 'auto' }); mFlex('dMain');
	let d = mDom(dMain, { wmax: 500, paleft: 10 });
	let di = DA.blogs = await showBlogs(d, blog);
	mStyle(dTop, { padding: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });

	function collapseOne(blog) {
		let d = iDiv(blog);
		let dTitle = d.firstChild;
		mStyle(dTitle, { fz: 12, weight: 'normal', deco: 'underline' });
		for (const c of arrChildren(d)) {
			if (c == dTitle) continue;
			c.style.display = 'none';
		};
	}
	function expandOne(blog) {
		let d = iDiv(blog);
		let dTitle = d.firstChild;
		mStyle(dTitle, { fz: 22, weight: 'bold', deco: 'none' });
		for (const c of arrChildren(d)) {
			c.style.display = 'block';
		};
	}
	function isCollapsedOne(blog) {
		let d = iDiv(blog);
		let second = arrChildren(d)[1];
		return second.style.display == 'none';
	}
	function toggleOne(blog) {
		if (isCollapsedOne(blog)) expandOne(blog); else collapseOne(blog);
	}
	function prepOne(blog) {
		let d = iDiv(blog);
		let dTitle = d.firstChild;
		dTitle.style.cursor = 'pointer';
		dTitle.onclick = () => toggleOne(blog);
	}
	let dilist = dict2list(di);
	dilist.map(prepOne);
	dilist.map(expandOne);

	let d3 = await mKey('collapse', dTop, {}, { tag: 'button' });
	d3.onclick = ev => {
		let isCollapsed = d3.innerHTML == 'expand';
		if (isCollapsed) {
			d3.innerHTML = 'collapse';
			dilist.map(expandOne);
		} else {
			d3.innerHTML = 'expand';
			dilist.map(collapseOne);
		}
	}
	//d3.onclick = async () => { let x = await mGather(mYesNo, d3, boxStyles); console.log('you entered', x); }
	//d3.click();
}
async function _test4_collapse() {
	let blog = await init();
	let elems = mLayoutTLMS('raspberry', 'dPage'); mStyle('dMain', { overy: 'auto' }); mFlex('dMain');
	let d = mDom(dMain, { wmax: 500, });
	let di = DA.blogs = await showBlogs(d, blog);

	//let dTop = mDom('dTop',{padding:10}); mFlexV(dTop); //top menu
	//let dCollapse = mLinkMenu(dTop, 'collapse', {}, onclickCollapse, 'top');
	// mMenuH(dTop, 'collapse', {}, onclickCollapse, 'top');
	// let elem = mKey('collapse', dTop, { sz: 22 }, { onclick: true });
	// let elem = mDom(dTop, {}, { tag:'button', html: 'collapse', onclick: onclickCollapse });
	mStyle(dTop, { padding: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });
	//let d3 = await mKey('collapse', dTop, {}, { tag: 'button', onclick: toggleBlogs, menu: 'top' });
	//d3.onclick = async () => { let x = await mGather(mYesNo, d3, boxStyles); console.log('you entered', x); }
	//d3.click();
}
async function _test4_mLayout() {
	let blog = await init();
	let elems = mLayoutTLMS('raspberry', 'dPage'); mStyle('dMain', { overy: 'auto' }); mFlex('dMain');
	let d = mDom(dMain, { wmax: 500, });
	let di = DA.blogs = await showBlogs(d, blog); return;

	DA.selectedPart = [];
	for (const k in di) {
		for (const item of di[k].items) {
			let div = iDiv(item);
			div.onclick = () => { toggleSelection(item, DA.selectedPart, 1); aktivateUpDownIffSelected(); }
		}
	}

	let dButtons = mDom(dMain, { padding: 10, gap: 10, w: 100, h: 300, bg: 'blue', position: 'sticky', top: 0 }); mCenterFlex(dButtons)
	let moveUpBtn = mDom(dButtons, { classes: 'disabled' }, { tag: 'button', html: 'up', onclick: onclickMoveUp, id: 'dMoveUp' });
	mLinebreak(dButtons);
	let moveDownBtn = mDom(dButtons, { classes: 'disabled' }, { tag: 'button', html: 'down', onclick: onclickMoveDown, id: 'dMoveDown' });


}
async function _test4_blogIn78() {
	await loadAssetsStatic();
	globalKeyHandling();
	let blog = Z.blog = await loadStaticYaml('zdata/blog1.yaml');
	let elems = mLayoutTLMRS('raspberry', 'dPage'); mStyle(dPage, { overy: 'hidden' })
	let d = mDom('dMain', {}); mStyle('dMain', { wmax: 300, overy: 'scroll' })
	let dates = Object.keys(blog);
	dates.sort((a, b) => new Date(b) - new Date(a));
	for (const date of dates) {
		let o = blog[date];
		let d1 = mDom(d, { gap: 10, padding: 10 }, { id: 'd1', key: date })
		//console.log(d1.getAttribute('datakey'))
		//mDom(d1, { fz: 20 }, { html: date });
		mDom(d1, {}, { tag: 'h1', html: `${date}: ${o.title}` });
		let cnt = 0;
		for (let item of o.text) {
			//console.log(item);
			let d2 = mDom(d1, { w100: true, fz: 20, caret: 'white' }, { idx: cnt++, id: 'd2' });
			//console.log(d2.parentNode)
			if (item.includes('blogimages/')) mDom(d2, { w100: true }, { tag: 'img', src: item });
			else {
				mStyle(d2, { w100: true, mabottom: 10 }, { contenteditable: true, html: item });
				d2.onblur = saveBlogList;
			}

		}
		let d3 = mDom(d, {}, { tag: 'hr' });
	}
	mDom(d, {}, { tag: 'button', html: 'New' })

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
async function test4_blog() {
	await loadAssetsStatic();
	globalKeyHandling();
	let blog = Z.blog = await loadStaticYaml('zdata/blog1.yaml');
	let elems = mLayoutTLMS('raspberry', 'dPage'); mStyle(dPage, { overy: 'hidden' })
	let d = mDom('dMain'); mStyle('dMain', { overy: 'scroll' })
	let dates = Object.keys(blog);
	dates.sort((a, b) => new Date(b) - new Date(a));
	for (const date of dates) {
		let o = blog[date];
		let d1 = mDom(d, { gap: 10, padding: 10 })
		//mDom(d1, { fz: 20 }, { html: date });
		mDom(d1, {}, { tag: 'h1', html: `${date}: ${o.title}` });
		let html = parseListToHtml(o.text);
		let d2 = mDom(d1, { wmax: 800, w100: true, fz: 20, caret: 'white' }, { contenteditable: true, html });
		d2.setAttribute('contenteditable', true);//, onblur:"handleBlur(this)" 
		d2.onblur = ev => saveBlog(date, ev.target);
		d2.addEventListener("dragover", (event) => event.preventDefault()); // Allow dropping
		d2.addEventListener("drop", handleImageDrop);
		//draw horizontal line after d2
		let d3 = mDom(d, {}, { tag: 'hr' });

		// Example usage
		//const dropZone = document.getElementById("drop-zone");
		// Add drag-and-drop event listeners
		// dropZone.addEventListener("dragover", (ev) => ev.preventDefault()); // Allow dropping
		// dropZone.addEventListener("drop", handleImageDrop);
	}
	mDom(d, {}, { tag: 'button', html: 'New' })

}
async function test4_qsort() {
	let arr = arrGen(20, 0, 1);
	console.log(arr, arrMaxContiguous(arr));
	return;
	let arr1 = qsort(arr);
	console.log(arr1);
	let arr2 = arrToCount(arr1);
	//sort array arr2 by cnt, descending
	arr2.sort((a, b) => b.cnt - a.cnt);
	console.log(arr2.map(x => x.cnt));

}
async function _test4_shape() {
	await loadAssetsStatic();
	globalKeyHandling();
	let color = colorBucket('child'); console.log(color);
	let elems = mLayoutTM(color, 'dPage');
	let d = mDom('dMain', { gap: 10, padding: 10 }); //mCenterCenterFlex(d);

	//mStyle(d,{w:200,h:200,background:'linear-gradient(45deg, red, blue)'},{html:'hallo'}); return;

	let p = { x: 100, y: 100 };
	let sz = 100;
	let [w, h] = mSizeSuccession({ sz });
	let shapes = Object.keys(PolyClips); console.log(shapes);
	let shape = rChoose(shapes);
	let clip = PolyClips[shape];
	let d1 = mShape(shape, d, { sz, background: colorGradient('yellow,pink,white') }); console.log(shape); console.log(d1);
	centerAt(d1, p.x, p.y);
	drawCircleOnDiv(d, p.x, p.y, 10);
	let pts = calcClipPoints(p.x, p.y, sz, sz, clip);
	console.log(pts);
	for (const pt of pts) drawCircleOnDiv(d, pt.x, pt.y, 6);
}
async function _test4_hexPoints() {
	let dhex = hexFromCenter(d, p, { w, h, bg: rColor() });
	drawCircleOnDiv(d, p.x, p.y, 10);
	let clip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
	let pts = calcClipPoints(p.x, p.y, sz, sz, clip);
	console.log(pts);
	for (const pt of pts) drawCircleOnDiv(d, pt.x, pt.y, 2);


}
async function _test3_mGather() {
	await loadAssetsStatic();
	// window.onkeydown = keyDownHandler;
	// window.onkeyup = keyUpHandler;
	window.onkeydown = hotkeyHandler;
	let elems = mLayoutTM('pink', 'dPage');
	mStyle(dTop, { padding: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });
	let styles = { h: 30 };
	let d = mDom(elems[1], dictMerge({ margin: 10 }, styles), { tag: 'button', html: 'New' });//return;
	//d.onclick = async () => { let x = await mGather(d); console.log('you entered', x); }
	let d1 = mKey('watch', dTop, {}, { tag: 'button', onclick: onclickStopwatch, menu: 'top' });
	let d2 = mDom(dTop, styles, { tag: 'button', menu: 'top', html: 'game' });
	d2.onclick = async () => { let x = await mGather(d2); console.log('you entered', x); }
	let d3 = await mKey('table', dTop, styles, { tag: 'button', menu: 'top' });
	d3.onclick = async () => { let x = await mGather(d3); console.log('you entered', x); }
	let d4 = await mKey('bee', dTop, styles, { tag: 'button', menu: 'top' });
	d4.onclick = async () => { let x = await mGather(d4); console.log('you entered', x); }
	let d5 = await mKey('crow', dTop, styles, { tag: 'button', menu: 'top' });
	let list = ['violin', 'piano', 'prog', 'math', 'walk', 'violin', 'piano', 'prog', 'math', 'walk', 'violin', 'piano', 'prog', 'math', 'walk']
	d.onclick = async () => { let x = await mGatherSelect(d, { bg: 'pink', padding: 12 }, { list }); console.log('you entered', x); }
	d.click();
}
async function _test2_mGather() {

	// mStyle('dPage',{bg:'darkgreen'})
	await loadAssetsStatic(); await actionLoadAll();
	let elems = mLayoutTM(rColor(), 'dPage');
	mStyle(dTop, { display: 'flex', aitems: 'center', wbox: true, gap: 4, padding: 4 });
	let d1 = mKey('watch', dTop, {}, { tag: 'button', onclick: onclickStopwatch, menu: 'top' });
	let d2 = mKey('game', dTop, {}, { menu: 'top' });
	let d3 = mKey('crow', dTop, {}, { tag: 'a', onclick: onclickResetActions, menu: 'top' });
	// mKey('crow', elems[1], {}, { }); //onclick: async (ev) => { let x = await mGather(ev.target); console.log('you entered', x); } }); 
	// //mDom(elems[0], {  }, { tag: 'button', html: 'New' });
	// let d = mDom(elems[1], {  }, { tag: 'button', html: 'New' });
	//d1.onclick = async () => { let x = await mGather(d1); console.log('you entered', x); }
	d2.onclick = async () => { let x = await mGather(d2); console.log('you entered', x); }
}
async function _test1_mGather() {
	//mStyle('dPage', { w: '100%', h: '100%', bg, 'caret-color': '#ffffff00' });
	let elems = mLayoutTM(rColor(), 'dPage');
	let d = mDom(elems[1], { className: 'button' }, { tag: 'button', html: 'New' });//return;
	// mStyle('dPage',{w:'100%',h:'100%',bg:'green'});
	d.onclick = async () => {
		let sh = mShield('dPage');
		let x = await mGather(sh, d); console.log('you entered', x);

	}
}
async function _test1_mAlignable() {
	let d = mDom('dPage', {}, { html: 'hallo' });//return;

	let [box, inp] = mInputInBox('dPage', { padding: 4, bg: 'silver', rounding: 4 }, { fz: 24 });
	mAlign(box, d, { align: 'bl', offx: 20 });
	mOnEnterInput(inp, val => console.log(inp.value, val))
}
async function _test1_emo1() {
	let res = await mPhpPostLine("Type something 😊", 'zdata/test.txt'); return;
	let elems = mLayoutTM('hotpink', dPage); //console.log(dTop,dStatus,dLeft,dRight,dMain);
	let html =
		`	<form method="POST" action="save_emoji_text.php">
			<label for="emojiText">Enter Text with Emojis:</label>
			<input type="text" id="emojiText" name="emojiText" placeholder="Type something 😊" required>
			<button type="submit">Save</button>
			</form>	
		`;
	mDom('dMain', {}, { html });
}
async function _test1_postYaml() {
	await loadAssetsStatic(); //console.log(M.superdi.airplane);
	let o = M.superdi['bee']; console.log(o);
	let text = jsyaml.dump(o); console.log(text);
	//let res = await mPhpPostFile(text,'../../zdata/f2.yaml');console.log(res);
	let res = await mPhpGetFile('../../zdata/f2.yaml'); console.log(res);
	let o2 = jsyaml.load(res); console.log(o2);
}
async function _test0_mDom_statt_key() {
	await loadAssetsStatic(); //console.log(M.superdi.airplane);

	mStyle(dPage, { w: '100%', h: '100%', bg: 'navy', 'caret-color': '#ffffff00' });
	let names = M.divNames = mAreas(dPage, ` 'dTop dTop' 'dLeft dMain' `, '140px 1fr', 'minmax(40px, auto) 1fr');
	mStyle(dTop, { display: 'flex', padding: 4, wbox: true, gap: 4 });
	mShade(names);
	DA.tooltip = mDom('dPage', { className: 'tooltip' }, { tag: 'span', html: 'this is a tooltip' }); //return;

	let keys = { text: 'alien_monster', ga: '3d_meeple', fa: 'address_book', fa6: 'address_book', plain: 'Hallo WIE GEHT ES DIR', img: '1st_place_medal', photo: 'bear' }
	let counter = 0;
	for (const type in keys) {

		let key = keys[type];
		let o = M.superdi[key];
		let d1, sz = 40;
		let d = mDom(dTop, { wbox: true, className: ['a', 'tooltip-container'], cursor: 'pointer', rounding: 4, wmin: sz, hmin: sz, w: sz, h: sz, display: 'flex', aitems: 'center', justify: 'center' }); //continue; //return;
		onHoverTooltip(d, `${key} (${type})`)
		if (type == 'img') { d1 = mImg(o[type], d, { sz }); }
		else if (type == 'photo') { d1 = mImg(o[type], d, { rounding: 4, sz: sz - 8 }); }
		else if (type == 'plain') {
			mStyle(d, { w: 'auto', hpadding: 10 })
			d1 = mDom(d, {}, { html: key });
		}
		else {
			let family = type == 'text' ? 'emoNoto' : type == 'fa6' ? 'fa6' : type == 'fa' ? 'pictoFa' : 'pictoGame';
			let html = type == 'text' ? o.text : String.fromCharCode('0x' + o[type]);

			//let st=jsCopy(styles);st.fz=40;st.family=family;

			// let x=measureActualTextWidth(html, { family, fz: 40 });console.log(x);
			//let x=measureActualTextWidth(html, {'max-width':'40px',width:'40px',height:'40px',fz:36,family});console.log(x);
			//x=measureText(html, {'max-width':'40px',width:'40px',height:'40px','font-size':'36px','font-family':family});console.log(x);
			//x=measureEmojiWidth(html, 36);console.log(x);
			sz -= 4;
			d1 = mDom(d, { family, fz: sz, hline: sz }, { html });//console.log(getRect(d1));
			let r = getRect(d1);
			let [w, h] = [r.w, r.h];
			console.log(w, h);
			//scale it so that it fits the container
			let scale = Math.min(sz / w, sz / h); //console.log('scale', scale);

			d1.style.transformOrigin = 'center center';
			d1.style.transform = `scale(${scale})`;
			d1.style.transform = `scale(${scale})`;
			//console.log('final size',getRect(d1));
		}

		//mKey(keys[k], d, { fz:32,margin: 4, className: 'a', cursor: 'pointer', rounding: 4 }, { prefer: k });
		//console.log(type, getRect(d), getRect(d1))
		//mKey(keys[k], dTop, { margin: 4, className: 'a', cursor: 'pointer', rounding: 4, border: 'red' }, { prefer: k });
		if (++counter > 8) return;
	}
	return;
	let list = oneOfEachType(); console.log('list', list);
	list = arrShuffle(list)
	for (const [type, keys] of list) {
		console.log(type)
		mKey(rChoose(keys), dTop, { margin: 4, className: 'a', cursor: 'pointer', rounding: 4, border: 'red' }, { prefer: type });
		return;
	}
}
async function _test0_mKey() {
	await loadAssetsStatic(); //console.log(M.superdi.airplane);

	mStyle(dPage, { w: '100%', h: '100%', bg: 'navy' });
	let names = M.divNames = mAreas(dPage, ` 'dTop dTop' 'dLeft dMain' `, '140px 1fr', 'minmax(40px, auto) 1fr'); //,'auto 1fr');
	mStyle(dTop, { display: 'flex', aitems: 'center', hpadding: 10, gap: 10 });
	mShade(names);

	let list = rChoose(M.names, 5); //['bee','bear','dog','cat', 'hat','house']
	list = dict2list(M.superdi);
	let listfa6 = list.filter(x => isdef(x.fa6)).map(x => x.id); //1353 keys!!!
	list = rChoose(list, 5);
	for (const k of list) {
		mKey(k, dTop, { margin: 4, className: 'a', cursor: 'pointer', rounding: 4, border: 'red' });
	}
	//mKey('bee', dTop, { sz: 30, className:'a' });


	//mS('arrow_down', dTop, { sz: 30 });
	//mKey('arrow_down',dTop,{sz:30});
	return;

	//let dHome = mHomeLogo(dLogo, 'airplane', onclickCalc, 'top'); //logo

	// mMenuV(dLeft, 'CALC', {}, onclickCalc, 'left');
	// mMenuV(dLeft, 'DAY', {}, onclickCalc, 'left');
	// mMenuV(dLeft, 'EXAMPLE', {}, onclickCalc, 'left');

	mStyle(dTop, { display: 'flex', 'justify': 'center', aitems: 'center' });
	mMenuH(dTop, 'NEW', {}, onclickCalc, 'right');
	mMenuH(dTop, 'HALLO', {}, onclickCalc, 'right');
	let d = mMenuH(dTop, 'EXAMPLE', {}, onclickCalc, 'right');

	console.log(mBy('a', 'class').map(x => [x.innerHTML, x.getAttribute('menu'), x.getAttribute('kennzahl')].join(',')));
	//d.click();
}

//#endregion

//#region drag drop
async function ondropImage(src, sisi) {
	let sz = 400;
	let dPopup = mDom(document.body, { position: 'fixed', top: 40, left: 0, wmin: sz, hmin: sz, bg: 'pink' });
	let dParent = mDom(dPopup);
	let d = mDom(dParent, { w: sz, h: sz, border: 'dimgray', margin: 10 });
	let canvas = createPanZoomCanvas(d, src, sz, sz);
	let instr = mDom(dPopup, { align: 'center', mabot: 10 }, { html: `- panzoom image to your liking -` })
	let dinp = mDom(dPopup, { padding: 10, align: 'right', display: 'inline-block' })
	mDom(dinp, { display: 'inline-block' }, { html: 'Name: ' });
	let inpFriendly = mDom(dinp, { outline: 'none', w: 200 }, { className: 'input', name: 'friendly', tag: 'input', type: 'text', placeholder: `<enter name>` });
	let defaultName = '';
	let iDefault = 1;
	let k = sisi.masterKeys.find(x => x == `${sisi.name}${iDefault}`);
	while (isdef(k)) { iDefault++; k = sisi.masterKeys.find(x => x == `${sisi.name}${iDefault}`); }
	defaultName = `${sisi.name}${iDefault}`;
	inpFriendly.value = defaultName;
	mDom(dinp, { h: 1 });
	mDom(dinp, { display: 'inline-block' }, { html: 'Categories: ' })
	let inpCats = mDom(dinp, { outline: 'none', w: 200 }, { className: 'input', name: 'cats', tag: 'input', type: 'text', placeholder: `<enter categories>` });
	let db2 = mDom(dPopup, { padding: 10, display: 'flex', gap: 10, 'justify-content': 'end' });
	mButton('Cancel', () => dPopup.remove(), db2, { w: 70 }, 'input');
	mButton('Save', () => simpleFinishEditing(canvas, dPopup, inpFriendly, inpCats, sisi), db2, { w: 70 }, 'input');
}
function logDroppedDataTypes(event) {
	event.preventDefault(); // Prevent the default behavior (e.g., opening a link/file)

	const dataTransfer = event.dataTransfer;

	console.log("Dropped data types and values:");

	// Iterate through all available data types
	for (const type of dataTransfer.types) {
			const value = dataTransfer.getData(type);
			console.log(`Type: ${type}, Value: ${value}`);
	}
}
function ondropSomething(ev) {
	return new Promise((resolve, reject) => {
		let dt = ev.dataTransfer;
		if (dt.types.includes('itemkey')) {
			let data = ev.dataTransfer.getData('itemkey');
			console.log('dropped', data);
			resolve(data);
		} else {
			const files = ev.dataTransfer.files;
			if (files.length > 0) {
				const reader = new FileReader();
				reader.onload = async (evReader) => {
					let data = evReader.target.result;
					console.log('dropped', data);
					resolve(data);
				};
				reader.readAsDataURL(files[0]);
			}else resolve(ev.dataTransfer);
		}

	});
}
function _handleImageDrop(ev) {
	ev.preventDefault(); // Prevent default behavior (e.g., opening the dropped file)

	const dataTransfer = ev.dataTransfer;
	console.log('types', dataTransfer.types); //return;

	const files = dataTransfer.files;
	if (files.length > 0) {
		const reader = new FileReader();
		reader.onload = async (evReader) => {
			let data = evReader.target.result;
			let size = await getImageSize(data);
			console.log('size', size);
			if (size.width > 500) {
				let ratio = 500 / size.width;
				size.width = 500;
				size.height = Math.round(size.height * ratio);
				console.log('size', size);
			}
			mDom(ev.target, { wmax: 500 }, { tag: 'img', src: data, draggable: false });
		};
		reader.readAsDataURL(files[0]);
	}
	// Check if the type `text/uri-list` is included in the dropped data
	if (dataTransfer.types.includes("text/html")) {
		let text = dataTransfer.getData("text/html");

		let x = stringAfter(text, 'src="');
		let y = stringBefore(x, '"');
		console.log('text', y);
	}
}
//https://media.istockphoto.com/id/2157926151/photo/cute-cat-outdoors-in-summer.jpg?s=1024x1024&w=is&k=20&c=SG0hCGPnE1MnZI3Vwes2eIbX15Rp3a9RzSEWfX3040s=

//#endregion

//#region old toggle zeug
function _mToggle(label, dParent, styles = {}, handler, is_on, styleyes, styleno, classes = null) {
	let cursor = styles.cursor; delete styles.cursor;
	let name = replaceWhite(label);
	let checked = isdef(is_on) ? is_on : false;
	let b = mButton(label, null, dParent, styles, classes);
	mClass(b, 'noactive');
	b.setAttribute('checked', checked);
	b.onclick = ev => {
		ev.cancelBubble = true;
		let b = ev.target;
		assertion(b == ev.target, 'NOOOOOOOOOOOOOOOOOOOOOOO')
		// console.log('clicked button!!!', b);
		let oldval = b.getAttribute('checked') == 'false' ? false : true;

		let newval = oldval ? false : true;
		// console.log('old', oldval, typeof (oldval), 'new', newval);
		if (newval === true) {
			// console.log('sollte', styleyes)
			mStyle(b, styleyes);
		} else {
			mStyle(b, styleno);
		}
		b.setAttribute('checked', newval);
		handler(name, newval);
	};
	return b;
}
function mTogglebar(di, handler, styleyes, styleno, dParent, styles, bstyles, id, classes, bclasses) {
	//styles = { margin: 0, padding: 0 };
	let d = mDiv(dParent, styles, id, classes);
	//mStyle(d, { bg: 'blue' })
	for (const k in di) {
		mToggle(k, d, bstyles, handler, di[k], styleyes, styleno, bclasses);
	}
}
//*********************************************** */
function toggleAdd(key, sym, dParent, styles) {
	//let t2 = toggleAdd('right', 'arrow_down_long', dr, { hpadding: 9, vpadding: 5 }, { w: 0 }, { w: 300 });
	addKeys({ fz: 20, rounding: '50%', padding: 5, fg: rColor() }, styles);
	let info = valfHtml(sym);
	let b;
	if (info) {
		let stButton = copyKeys({ overflow: 'hidden', box: true, family: info.family, cursor: 'pointer' }, styles);
		b = mDom(dParent, stButton, { id: getButtonId(key), html: info.html, className: 'hop1' });
	} else {
		b = mButton(sym, 'dToolbar')
	}
	b.onclick = toggleClick;
	let d = mBy(getDivId(key));
	if (nundef(DA.toggle)) DA.toggle = {};
	let t = DA.toggle[key] = { key: key, button: b, div: d, state: 0, states: [...arguments].slice(4) };
	toggleShow(t);
	return t;
}
function toggleClick(ev) {
	let t = toggleGet(ev);
	let i = t.state = (t.state + 1) % t.states.length;
	toggleShow(t);
}
function toggleShow(t, state) {
	if (nundef(state)) state = t.states[t.state];
	let d = iDiv(t); mStyle(d, state);
	let percent = 100 * t.state / (t.states.length - 1);
	//console.log('percent open',percent)
	mStyle(t.button, { bg: colorMix('lime', 'red', percent) });
}
function toggleGet(ev) { let key = getIdKey(evToId(ev)); let toggle = DA.toggle[key]; return toggle; }
function getIdKey(elem) { let id = mBy(elem).id; return id.substring(1).toLowerCase(); }
//#endregion toggle


function createEmojiInput(dParent) {

	// Create the input element
	dParent = toElem(dParent);
	const input = mDom(dParent, {}, { tag: 'input' });

	// Set attributes to ensure emoji support
	input.type = "text"; // Default text input supports emoji
	input.placeholder = "Type emojis here 😊"; // Placeholder text
	input.style.fontSize = "1.2em"; // Increase font size for better visibility
	input.style.padding = "10px"; // Add some padding for comfort
	input.style.borderRadius = "5px"; // Rounded edges for aesthetics
	input.style.border = "1px solid #ccc"; // Subtle border styling

	// Append the input to the body or a specific container
	//document.body.appendChild(input);

	// Optionally, focus on the input when created
	input.focus();
	return input;
}
function findKeys(type) {
	if (type == 'plain') return commandWords;
	let list = dict2list(M.superdi);
	return list.filter(x => isdef(x[type])).map(x => x.id);

}
function findUniqueSuperdiKey(friendly) {
	console.log('friendly', friendly)
	let name = friendly;
	let i = 1;
	let imgname = null;
	while (true) {
		let o = M.superdi[name];
		if (nundef(o)) { break; }
		console.log(o.colls.includes('emo'))
		if (isdef(o.img) && isdef(o.photo) || ['emo', 'fa6', 'icon'].every(x => !o.colls.includes(x))) { name = friendly + (i++); continue; }
		else if (isdef(o.photo)) { imgname = 'photo'; break; }
		else { imgname = 'img'; break; }
	}
	return [name, imgname];
}
function getTopLeftPixelColor(imageSrc, callback) {
	const img = new Image();
	img.crossOrigin = "Anonymous"; // Avoid CORS issues
	img.src = imageSrc;

	img.onload = function () {
		// Create a canvas and get its context
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');

		// Set canvas dimensions to match the image
		canvas.width = img.width;
		canvas.height = img.height;

		// Draw the image onto the canvas
		ctx.drawImage(img, 0, 0);

		// Get pixel data from the top-left corner
		const imageData = ctx.getImageData(0, 0, 1, 1).data;

		// Extract RGBA values
		const r = imageData[0];
		const g = imageData[1];
		const b = imageData[2];
		const a = imageData[3] / 255; // Convert alpha to a range of 0-1

		// Return the color as an object or in a format you prefer
		const color = { r, g, b, a };
		callback(img, color);
	};

	img.onerror = function () {
		console.error('Failed to load image.');
		callback(null);
	};
}
function isKeyPressedDown(controlKey) {
	let isPressed = false;
	window.addEventListener('keydown', (event) => {
		if (event.key.toLowerCase() === controlKey.toLowerCase()) {
			isPressed = true;
		}
	});
	window.addEventListener('keyup', (event) => {
		if (event.key.toLowerCase() === controlKey.toLowerCase()) {
			isPressed = false;
		}
	});
	return () => isPressed;
}
function isSpacePressed() {
	const spacePressed = isKeyPressedDown('Space');
	setInterval(() => {
		if (isSpacePressed()) {
			console.log('Space key is being pressed down');
		}
	}, 100);
}
function isToggleState(key, nword) {
	let toggle = DA.toggle[key];
	return toggle.state == n || toggle.seq[toggle.state] == nword;
}
function mCard52(key, d, styles = {}, opts = {}) { }
function measureEmojiWidth(text, fontSize = 16) {
	// Create a temporary element to hold the text
	const container = document.createElement('div');
	container.style.position = 'absolute';
	container.style.whiteSpace = 'nowrap';
	container.style.fontSize = `${fontSize}px`;
	container.style.fontFamily = 'Noto Color Emoji';
	container.style.visibility = 'hidden';
	container.textContent = text;

	// Append it to the document to measure
	document.body.appendChild(container);

	// Measure the width using a Range object
	const range = document.createRange();
	range.selectNodeContents(container);
	const width = range.getBoundingClientRect().width;

	// Clean up
	document.body.removeChild(container);

	return width;
}
function mGatherSelect(d, styles = {}, opts = {}) {
	return new Promise((resolve, _) => {
		let dShield = mShield();
		let fCancel = _ => { dShield.remove(); hotkeyDeactivate('Escape'); resolve(null) };
		let fSuccess = val => { dShield.remove(); hotkeyDeactivate('Escape'); resolve(val) };
		dShield.onclick = fCancel;
		hotkeyActivate('Escape', fCancel);

		let [box, inp] = mInBox(mSelect, dShield, styles, {}, dictMerge(opts, { fSuccess })); 

		mAlign(box, d, { align: 'bl', offx: 20 });
		inp.focus();


	});
}
function mGatherYesNo(d, styles = {}, opts = {}) {
	return new Promise((resolve, _) => {
		let dShield = mShield();
		let fCancel = _ => { dShield.remove(); hotkeyDeactivate('Escape'); resolve(null) };
		let fSuccess = val => { dShield.remove(); hotkeyDeactivate('Escape'); resolve(val) };
		dShield.onclick = fCancel;
		hotkeyActivate('Escape', fCancel);

		let [box, inp] = mInBox(mSelect, dShield, styles, {}, dictMerge(opts, { onChange:fSuccess, list: ['yes', 'no'] })); 

		mAlign(box, d, { align: 'bl', offx: 20 });
		inp.focus();


	});
}
function mImgAsync(src, d, styles = {}, opts = {}, callback = null) {
	return new Promise((resolve, reject) => {
		let img = document.createElement('img');
		mAppend(d, img);
		let [w, h] = mSizeSuccession(styles, 40);
		addKeys({ w, h, 'object-fit': 'cover', 'object-position': 'center center' }, styles);
		addKeys({ tag: 'img', src }, opts);
		mStyle(img, styles, opts);
		img.onload = async () => {
			if (callback) callback(img);
			resolve(img);
		};
		img.onerror = (error) => {
			reject(error);
		};
		img.src = src;
	});
}
async function _mKey(key, dParent, styles = {}, opts = {}) {
	let type = valf(opts.prefer, 'img');
	let o = M.superdi[key];
	if (nundef(o)) type = 'plain'; else if (type != 'plain' && nundef(o[type])) type = isdef(o.img) ? 'img' : isdef(o.photo) ? 'photo' : isdef(o.text) ? 'text' : isdef(o.fa6) ? 'fa6' : isdef(o.fa) ? 'fa' : isdef(o.ga) ? 'ga' : 'plain';
	let d1, sz = valf(styles.sz, 40);
	if (opts.onclick) addKeys({ bg: '#00000080', rounding: 4, w: sz, h: sz, wbox: true, display: 'flex', aitems: 'center', justify: 'center' }, styles);
	else addKeys({ wbox: true, display: 'flex', aitems: 'center', justify: 'center', cursor: 'default' }, styles);
	addKeys({ key }, opts)
	let d = mDom(dParent, styles, opts);//mStyle(d,{bg:'red'})
	//console.log(`${key}: ${type}`);

	if (type == 'img') { d1 = await mImgAsync(o[type], d, { sz }, {}, roundIfTransparentCorner); }
	else if (type == 'photo') { d1 = await mImgAsync(o[type], d, { margin: 3, rounding: 4, sz }, {}, roundIfTransparentCorner); }
	else if (type == 'plain') {
		mStyle(d, { w: 'auto', hpadding: 10 })
		d1 = mDom(d, { 'user-select': 'none' }, { html: key });
	} else {
		let family = type == 'text' ? 'emoNoto' : type == 'fa6' ? 'fa6' : type == 'fa' ? 'pictoFa' : 'pictoGame';
		let html = type == 'text' ? o.text : String.fromCharCode('0x' + o[type]);
		sz -= 4;
		d1 = mDom(d, { family, fz: sz, hline: sz }, { html });
		let r = getRect(d1);
		let [w, h] = [r.w, r.h];
		let scale = Math.min(sz / w, sz / h);
		d1.style.transformOrigin = 'center center';
		d1.style.transform = `scale(${scale})`;
		d1.style.transform = `scale(${scale})`;
	}
	return d;
}
async function _mImg(src, d, styles = {}, opts = {}) {
	return null;
	return new Promise(resolve => {
		let [w, h] = mSizeSuccession(styles, 40);
		addKeys({ w, h, 'object-fit': 'cover', 'object-position': 'center center' }, styles);
		addKeys({ tag: 'img', src }, opts);
		getTopLeftPixelColor(src, (img, color) => {
			if (color) {
				console.log(`Top-left pixel color: rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`);
				if (color.a != 0) {
					styles.round = true;
					console.log('HHHHHHHHHHHHHHHHHHHHHHHH');
					//let x=mDom(d,{rounding:20,h:40,bg:'red'},opts); return x;
				}
				mAppend(d, img);
				mStyle(img, styles, opts);
				resolve(img)
				// let img = mDom(d, styles, opts);

			} else {
				console.error('Could not retrieve pixel color.');
				resolve(null)
			}
		});
	});

	// console.log(src, styles);
	// let [w, h] = mSizeSuccession(styles, 40);
	// addKeys({ w, h, 'object-fit': 'cover', 'object-position': 'center center' }, styles);
	// addKeys({ tag: 'img', src }, opts);
	// let img = mDom(d, styles, opts);
	// // let img = mDom(d, {rounding:20,h:40,bg:'red'}, opts);
	// //let img = mDom(d, {round:true,h:40,bg:'red'}, opts);
	// return img;
}
function _mKey(key, d, styles = {}, opts = {}) {

	console.log('key', key, opts);

	//	let [w, h] = mSizeSuccession(styles, 40); //console.log(w, h)
	//addKeys({ w, h, display:'flex', 'align-items': 'center', 'justify-content': 'center', padding:4 }, styles);
	//let d=mDom(dParent,styles);

	if (key.includes('.')) return mImg(src, d, {}, opts);
	if ('HSCD'.includes(key[0]) && key.length == 2) return mCard52(key, d, {}, opts);
	if (isLetter(key[0]) && key[0] == key[0].toUpperCase()) { opts.html = key; return mDom(d, {}, opts); }
	let o = findSym(key);
	console.log(o)
	// return;
	if (!o) { opts.html = key; return mDom(d, {}, opts); }

	let type = opts.prefer;
	if (nundef(type)) type = isdef(o.img) ? 'img' : isdef(o.fa6) ? 'fa6' : isdef(o.text) ? 'text' : isdef(o.fa) ? 'fa' : isdef(o.ga) ? 'ga' : isdef('photo') ? 'photo' : 'text';
	console.log('type', type);

	if (type == 'img' || type == 'photo') return mImg(o[type], d, {}, opts);
	//return;
	let family = type == 'text' ? 'emoNoto' : type == 'fa6' ? 'fa6' : type == 'fa' ? 'pictoFa' : 'pictoGame';
	let text = type == 'text' ? o.text : String.fromCharCode('0x' + o[type]);




	//addKeys({ family, fz: h, w, h, display: 'inline-block' }, styles); //console.log(styles)
	// addKeys({ family, fz: h }, styles); //console.log(styles)
	addKeys({ family }, styles); //console.log(styles)
	let [w1, h1] = measureText(text, styles); console.log(w1, h1);//console.log(w,w1,h,h1);
	return mDom(d, styles, { html: text });
}
function _mKey(key, dParent, styles = {}, opts = {}) {

	console.log('key', key, opts);

	let [w, h] = mSizeSuccession(styles, 40); //console.log(w, h)
	addKeys({ w, h, display: 'flex', 'align-items': 'center', 'justify-content': 'center', padding: 4 }, styles);
	let d = mDom(dParent, styles);

	if (key.includes('.')) return mImg(src, d, {}, opts);
	if ('HSCD'.includes(key[0]) && key.length == 2) return mCard52(key, d, {}, opts);
	if (isLetter(key[0]) && key[0] == key[0].toUpperCase()) { opts.html = key; return mDom(d, {}, opts); }
	let o = findSym(key);
	console.log(o)
	return;
	if (!o) { opts.html = key; return mDom(d, {}, opts); }

	let type = opts.prefer;
	if (nundef(type)) type = isdef(o.img) ? 'img' : isdef(o.fa6) ? 'fa6' : isdef(o.text) ? 'text' : isdef(o.fa) ? 'fa' : isdef(o.ga) ? 'ga' : isdef('photo') ? 'photo' : 'text';
	console.log('type', type);

	if (type == 'img' || type == 'photo') return mImg(o[type], d, {}, opts);
	//return;
	let family = type == 'text' ? 'emoNoto' : type == 'fa6' ? 'fa6' : type == 'fa' ? 'pictoFa' : 'pictoGame';
	let text = type == 'text' ? o.text : String.fromCharCode('0x' + o[type]);




	//addKeys({ family, fz: h, w, h, display: 'inline-block' }, styles); //console.log(styles)
	addKeys({ family, fz: h }, styles); //console.log(styles)
	let [w1, h1] = measureText(text, styles); console.log(w, w1, h, h1);
	return mDom(d, {}, { html: text });
}
function mKey2(item, d, styles = {}, opts = {}) {
	let type = item.itemtype = isdef(item.itemtype) ? item.itemtype : is_card(item) ? 'card' : isdef(M.superdi[item.key]) ? 'sym' : isdef(item.o) ? 'container' : isdef(item.src) ? 'img' : 'string';
	let [el, o, d1, fz, fg] = [null, item.o, dInstruction, 30, 'grey'];
	if (type == 'sym') {
		if (isdef(o.img)) { el = mDom(d1, { h: fz, hmargin: 8, 'object-fit': 'cover', 'object-position': 'center center' }, { tag: 'img', src: `${o.img}` }); }
		else if (isdef(o.text)) el = mDom(d1, { hmargin: 8, fz: fz, hline: fz, family: 'emoNoto', fg: fg, display: 'inline' }, { html: o.text });
		else if (isdef(o.fa6)) el = mDom(d1, { hmargin: 8, fz: fz - 2, hline: fz, family: 'fa6', bg: 'transparent', fg: fg, display: 'inline' }, { html: String.fromCharCode('0x' + o.fa6) });
		else if (isdef(o.fa)) el = mDom(d1, { hmargin: 8, fz: fz, hline: fz, family: 'pictoFa', bg: 'transparent', fg: fg, display: 'inline' }, { html: String.fromCharCode('0x' + o.fa) });
		else if (isdef(o.ga)) el = mDom(d1, { hmargin: 8, fz: fz, hline: fz, family: 'pictoGame', bg: 'beige', fg: fg, display: 'inline' }, { html: String.fromCharCode('0x' + o.ga) });
	} else if (isdef(item.present)) {
		el = item.present(item, d1, { sz: fz, fg: fg });
	} else assertion(false, `WRONG ITEM TYPE ${type}`)
	mStyle(el, { cursor: 'pointer' })
	el.id = getUID(); A.di[el.id] = item;
	el.onclick = callback;
}
function _mLayoutTLM(bg, dParent) {
	mStyle(dParent, { w: '100%', h: '100%', bg, 'caret-color': '#ffffff00' });
	let names = M.divNames = mAreas(dParent, ` 'dTop dTop' 'dLeft dMain' `, 'minmax(140px, auto) 1fr', 'minmax(40px, auto) 1fr');
	mStyle(dTop, { display: 'flex', padding: 4, wbox: true, gap: 4 });
	mShade(names);
	return names.map(x => mBy(x));

}
function _mS(s, d, styles = {}, opts = {}) {
	let type = opts.type ?? isdef(M.superdi[s]) ? 'sym' : s.includes('.') ? 'img' : 'string';
	console.log('type', type);
	if (type == 'sym') {
		let o = M.superdi[s];
		if (isdef(o.img)) { el = mDom(d1, { h: fz, hmargin: 8, 'object-fit': 'cover', 'object-position': 'center center' }, { tag: 'img', src: `${o.img}` }); }
		else if (isdef(o.text)) el = mDom(d1, { hmargin: 8, fz: fz, hline: fz, family: 'emoNoto', fg: fg, display: 'inline' }, { html: o.text });
		else if (isdef(o.fa6)) el = mDom(d1, { hmargin: 8, fz: fz - 2, hline: fz, family: 'fa6', bg: 'transparent', fg: fg, display: 'inline' }, { html: String.fromCharCode('0x' + o.fa6) });
		else if (isdef(o.fa)) el = mDom(d1, { hmargin: 8, fz: fz, hline: fz, family: 'pictoFa', bg: 'transparent', fg: fg, display: 'inline' }, { html: String.fromCharCode('0x' + o.fa) });
		else if (isdef(o.ga)) el = mDom(d1, { hmargin: 8, fz: fz, hline: fz, family: 'pictoGame', bg: 'beige', fg: fg, display: 'inline' }, { html: String.fromCharCode('0x' + o.ga) });
	} else if (isdef(item.present)) {
		el = item.present(item, d1, { sz: fz, fg: fg });
	} else assertion(false, `WRONG ITEM TYPE ${type}`)
	mStyle(el, { cursor: 'pointer' })
	el.id = getUID(); A.di[el.id] = item;
	el.onclick = callback;
}
function mSym(key, dParent, styles = {}, pos, classes) {
	let info = M.superdi[key];
	styles.display = 'inline-block';
	let family = info.family;
	styles.family = family;
	let sizes;
	if (isdef(styles.sz)) { sizes = mSymSizeToBox(info, styles.sz, styles.sz); }
	else if (isdef(styles.w) && isdef(styles.h)) { sizes = mSymSizeToBox(info, styles.w, styles.h); }
	else if (isdef(styles.fz)) { sizes = mSymSizeToFz(info, styles.fz); }
	else if (isdef(styles.h)) { sizes = mSymSizeToH(info, styles.h); }
	else if (isdef(styles.w)) { sizes = mSymSizeToW(info, styles.w); }
	else { sizes = mSymSizeToFz(info, 25); }
	styles.fz = sizes.fz;
	styles.w = sizes.w;
	styles.h = sizes.h;
	styles.align = 'center';
	if (isdef(styles.bg) && info.family != 'emoNoto') { styles.fg = styles.bg; delete styles.bg; }
	let x = mDiv(dParent, styles, null, info.text);
	if (isdef(classes)) mClass(x, classes);
	if (isdef(pos)) { mPlace(x, pos); }
	return x;
}
function mSymSizeToBox(info, w, h) {
	let fw = w / info.w;
	let fh = h / info.h;
	let f = Math.min(fw, fh);
	return { fz: 100 * f, w: info.w * f, h: info.h * f };
}
function mSymSizeToFz(info, fz) { let f = fz / 100; return { fz: fz, w: info.w * f, h: info.h * f }; }

function mSymSizeToH(info, h) { let f = h / info.h; return { fz: 100 * f, w: info.w * f, h: h }; }

function mSymSizeToW(info, w) { let f = w / info.w; return { fz: 100 * f, w: w, h: info.h * f }; }
function mShield(dParent, resolve,styles = {}, opts = {}) {
	function close(){
		console.log('close!');
		mBy('shield').remove();
		hotkeyDeactivate('Escape'); resolve(null);
	}
	addKeys({ bg: '#00000080' }, styles);
	addKeys({ id:'shield', hideOnClick: true, hideOnEscape: true }, opts);
	dParent = toElem(dParent); //console.log(dParent);
	let d = mDom(dParent, styles, opts);
	mIfNotRelative(dParent);

	mStyle(d, { position: 'absolute', left: 0, top: 0, w: '100%', h: '100%' });
	if (opts.onclick) d.onclick = opts.onclick;
	else if (opts.hideOnClick) d.onclick = ev => { evNoBubble(ev); close(); };
	else d.onclick = ev => { evNoBubble(ev); };
	if (opts.hideOnEscape) hotkeyActivate('Escape', ev => { evNoBubble(ev); close(); });
	mClass(d, 'topmost');
	return d;
}
function _mTooltip(oid) {
	$('#' + oid).unbind('mouseover mouseout');
	$('#' + oid).mouseover(function (e) {
		e.stopPropagation();
		let id = evToId(e);
		if (TT_JUST_UPDATED != id) {
			TT_JUST_UPDATED = id;
			updateTooltipContent(id);
			$('div#tooltip').css({
				display: 'inline-block',
				top: e.pageY,
				left: e.pageX,
			});
		}
	});
	$('#' + oid).mouseout(function (e) {
		if (TT_JUST_UPDATED == oid) TT_JUST_UPDATED = -1;
		e.stopPropagation();
		$('div#tooltip').css({
			top: 0,
			left: 0,
			display: 'none'
		});
	});
}
function _mTooltip(d, text) {
	d.addEventListener('mouseenter', (event) => {
		console.log('hallo!!!!')
		DA.tooltip.style.visibility = 'visible';
		DA.tooltip.style.opacity = '1';

		// Position the tooltip
		const rect = d.getBoundingClientRect();
		DA.tooltip.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
		DA.tooltip.style.top = `${rect.top + window.scrollY + 4}px`; // Add 5px spacing
	});

	// Hide tooltip on mouseleave
	d.addEventListener('mouseleave', () => {
		console.log('goodbye!!!!')
		DA.tooltip.style.visibility = 'hidden';
		DA.tooltip.style.opacity = '0';
	});
}
function oneOfEachType(n = 1) {
	let types = ['fa', 'ga', 'fa6', 'img', 'text', 'photo'];
	let lists = types.map(x => [x, findKeys(x)]);
	console.log('lists', lists);

	//let res = recFlatten(lists.map(x=>rChoose(x,n))); console.log(res)
	return lists;
}
function showDetailsAndMagnify(elem) {
	let key = elem.firstChild.getAttribute('key'); //console.log('key',key)
	if (nundef(key)) return;
	let o = getDetailedSuperdi(key);
	MAGNIFIER_IMAGE = elem;
	if (nundef(o)) { mMagnify(elem); return; }
	let d = mPopup(null, {}, { id: 'hallo' });
	let title = fromNormalized(valf(o.name, o.friendly));
	mDom(d, {}, { tag: 'h1', html: title });
	mDom(d, {}, { tag: 'img', src: valf(o.photo, o.img) });
	showDetailsPresentation(o, d);
}
function _updateTooltipContent(oid) {
	let pool = findPool(oid);
	let o = pool[oid];
	ttTitle(oid, o);
	ttBody(oid, o);
}
function valfKey(o, arr) {
	for (const w of arr) { if (isdef(o[w])) return w; }
	return null;
}
function valfKeyVal(key) {
	let o = M.superdi[key];
	let di = { text: 'emoNoto', fa6: 'fa6', fa: 'pictoFa', ga: 'pictoGame' };
	let k1 = valfKey(o, Object.keys(di));
	if (k1) return { html: String.fromCharCode('0x' + o[k1]), family: di[k1] }
	return null;
}
function wsOffspringSymbol(dParent, styles = {}) {
	console.log(styles)
	let [w, h] = [styles.h, styles.h];
	console.log(w, h)
	let d = mDom(dParent, { w, h, box: true });//,bg:'orange'}); //w100:true,h100:true,bg:'lime'});
	let fz = styles.h; let hline = fz;
	mIfNotRelative(d);
	let o = M.superdi.big_egg;
	let [fam, sym] = isdef(o.fa6) ? ['fa6', 'fa6'] : isdef(o.fa) ? ['pictoFa', 'fa'] : ['pictoGame', 'ga'];
	let dEgg = mDom(d, { fg: 'grey', family: fam, fz, padding: 0, hline }, { html: String.fromCharCode('0x' + o[sym]) });
	o = M.superdi.paw;
	[fam, sym] = isdef(o.fa6) ? ['fa6', 'fa6'] : isdef(o.fa) ? ['pictoFa', 'fa'] : ['pictoGame', 'ga'];
	let dPaw = mDom(d, { w100: true, fg: 'black', family: fam, fz: 8, hline }, { html: String.fromCharCode('0x' + o[sym]) });
	mCenterFlex(dPaw)
	mPlace(dPaw, 'tc')
}












