
onload = start;

async function start() { await test4_mLayout(); }

async function test4_mLayout() {
	let blog = await init();
	let elems = mLayoutTLMS('raspberry', 'dPage'); mStyle('dMain', { overy: 'auto' }); mFlex('dMain');
	let d = mDom(dMain, { wmax: 500, }); 
	let di = DA.blogs = await showBlogs(d, blog); return;

	DA.selectedPart=[];
	for(const k in di){
		for(const item of di[k].items){
			let div=iDiv(item);
			div.onclick=()=>{toggleSelection(item, DA.selectedPart, 1);aktivateUpDownIffSelected();}
		}
	}

	let dButtons = mDom(dMain, { padding:10, gap:10, w: 100, h: 300, bg: 'blue', position: 'sticky', top: 0 }); mCenterFlex(dButtons)
	let moveUpBtn = mDom(dButtons, {classes:'disabled'}, { tag:'button',html: 'up', onclick: onclickMoveUp, id:'dMoveUp'});	
	mLinebreak(dButtons);
	let moveDownBtn = mDom(dButtons, {classes:'disabled'}, { tag:'button',html: 'down', onclick: onclickMoveDown ,id:'dMoveDown'});	


}

async function test4_blogIn78() {
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
async function test4_dropImage() {
	await loadAssetsStatic();
	globalKeyHandling();
	let blog = Z.blog = await loadStaticYaml('zdata/blog.yaml');
	let elems = mLayoutTLMRS('raspberry', 'dPage');
	let d = mDom('dMain');
	let dates = Object.keys(blog);
	dates.sort((a, b) => new Date(b) - new Date(a));
	for (const date of dates) {
		let o = blog[date];
		let d1 = mDom(d, { gap: 10, padding: 10 })
		mDom(d1, { fz: 20 }, { html: date });
		mDom(d1, { fz: 20 }, { html: o.title });
		let d2 = mDom(d1, { fz: 20, caret: 'white' }, { html: o.text, contenteditable: true });
		d2.setAttribute('contenteditable', true);//, onblur:"handleBlur(this)" 
		d2.onblur = ev => saveBlog(date, ev.target);
		d2.addEventListener("dragover", (event) => event.preventDefault()); // Allow dropping
		d2.addEventListener("drop", handleImageDrop);

		// Example usage
		//const dropZone = document.getElementById("drop-zone");
		// Add drag-and-drop event listeners
		// dropZone.addEventListener("dragover", (ev) => ev.preventDefault()); // Allow dropping
		// dropZone.addEventListener("drop", handleImageDrop);
	}
}
async function test4_getYaml() {
	await loadAssetsStatic();
	globalKeyHandling();
	let blog = Z.blog = await loadStaticYaml('zdata/blog.yaml');
	console.log(blog);

	//list blogs by data (key)
	let elems = mLayoutTLMRS('raspberry', 'dPage');
	let d = mDom('dMain');
	let dates = Object.keys(blog);
	dates.sort((a, b) => new Date(b) - new Date(a));
	for (const date of dates) {
		//parse date
		let o = blog[date];
		let d1 = mDom(d, { gap: 10, padding: 10 })
		mDom(d1, { fz: 20 }, { html: date });
		mDom(d1, { fz: 20 }, { html: o.title });
		let d2 = mDom(d1, { fz: 20, caret: 'white' }, { html: o.text, contenteditable: true });
		d2.setAttribute('contenteditable', true);//, onblur:"handleBlur(this)" 
		d2.onblur = ev => saveBlog(date, ev.target);
		//d2.addEventListener('blur', () => { console.log('Editing completed! Current content:', this.innerHTML); });

		//usage drag drop
		// d2.setAttribute('draggable', true)
		// d2.ondragstart = ev => { ev.dataTransfer.setData('itemkey', key); }
		//enableDataDrop(d2, ondropSomething)

		// Example usage
		//const dropZone = document.getElementById("drop-zone");
		// Add drag-and-drop event listeners
		d2.addEventListener("dragover", (event) => event.preventDefault()); // Allow dropping
		//d2.addEventListener("drop", logDroppedDataTypes);
		d2.addEventListener("drop", handleImageDrop);



		// // Example usage
		// const dropZone = document.getElementById("drop-zone");
		// // Add drag-and-drop event listeners
		// dropZone.addEventListener("dragover", (event) => event.preventDefault()); // Allow dropping
		// dropZone.addEventListener("drop", handleImageDrop);

	}




	return;
	//let clist = paletteContrastVariety(['pink']); console.log(clist)
	d = mDom('dMain', { gap: 10, padding: 10 }); mFlexWrap(d)
	let src = '../assets/img/emo/abacus.png';
	for (const i of range(100)) {
		let d1 = mDom(d, {})
		let pal = await mPalette(d1, src, true, true); console.log(pal)
		//showPaletteMini(d,pal)
		src = rChoose(M.allImages).path;
	}
	//mPalette('dMain',src);
	//mPalette('dMain','beetle')
	//let ui = await uiTypePalette(d,'white', 'white','../assets/img/emo/abacus.png');


}
async function test4_mPalette() {
	await loadAssetsStatic();
	globalKeyHandling();
	//let clist = paletteContrastVariety(['pink']); console.log(clist)
	let elems = mLayoutTLMRS('white', 'dPage');
	let d = mDom('dMain', { gap: 10, padding: 10 }); mFlexWrap(d)
	let src = '../assets/img/emo/abacus.png';
	for (const i of range(100)) {
		let d1 = mDom(d, {})
		let pal = await mPalette(d1, src, true, true); console.log(pal)
		//showPaletteMini(d,pal)
		src = rChoose(M.allImages).path;
	}
	//mPalette('dMain',src);
	//mPalette('dMain','beetle')
	//let ui = await uiTypePalette(d,'white', 'white','../assets/img/emo/abacus.png');


}
async function test4_colorThief() {
	await loadAssetsStatic();
	globalKeyHandling();
	//let clist = paletteContrastVariety(['pink']); console.log(clist)
	let elems = mLayoutTLMRS('white', 'dPage');
	let d = mDom('dMain', { gap: 10, padding: 10 }); mFlexWrap(d)
	let src = '../assets/img/emo/abacus.png';
	for (const i of range(100)) {
		let d1 = mDom(d, { display: 'none', gap: 10, padding: 10 })
		let pal = await mPalette(d1, src, false); console.log(pal)
		showPaletteMini(d, pal)
		src = rChoose(M.allImages).path;
	}
	//mPalette('dMain',src);
	//mPalette('dMain','beetle')
	//let ui = await uiTypePalette(d,'white', 'white','../assets/img/emo/abacus.png');


}
async function test4_mShape() {
	await loadAssetsStatic();
	globalKeyHandling();
	let color = colorBucket('child'); //console.log(color);
	let elems = mLayoutM(color, 'dPage');
	let d = mDom('dMain', { gap: 10, padding: 10 }); //mCenterCenterFlex(d);
	let center = { x: 100, y: 100 };
	let sz = 100, shape = 'hexflat';
	//let o=rChoose(PolyClips); let [shape,clip] = [o.key,o.value];
	let clip = PolyClips[shape];// console.log(shape, clip);

	let c1 = colorFrom(rChoose(M.colorNames)); //rColor();
	let x = M.colorByHex[c1]; console.log(c1, x);
	let c2 = colorComplement(c1);
	let cmix = x.lighter(.5); //colorMix(c1,c2,50);

	//[c1, c2, cmix] = rColorNames(3); console.log(c1, c2, cmix)

	mStyle('dPage', { bg: cmix });
	let bg = colorGradient(`${c1},${c2}`); //'linear-gradient(90deg,#ff5733,#33ff57,#3357ff)';// colorGradient(); console.log(bg)
	//elem.style.backgroundColor = 'linear-gradient(90deg,#ff5733,#33ff57,#3357ff)';
	let d1 = mShape(shape, d, { sz, bg }, { center });
	mShape('circle', d, { bg: 'blue', sz: 20 }, { center });
	let pts = calcClipPoints(center.x, center.y, sz, sz, clip);
	center.x += 100;
	let d2 = mShape(shape, d, { sz, bg }, { center });
	mShape('circle', d, { bg: 'blue', sz: 20 }, { center }); //drawCircleOnDiv(d, center.x, center.y, 10);
	pts = pts.concat(calcClipPoints(center.x, center.y, sz, sz, clip));	//console.log(pts);
	for (const pt of pts) mShape('circle', d, { bg: 'blue', sz: 20 }, { center: pt }); //drawCircleOnDiv(d, pt.x, pt.y, 6);
}
async function test4_shape() {
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
async function test4_hexPoints() {
	let dhex = hexFromCenter(d, p, { w, h, bg: rColor() });
	drawCircleOnDiv(d, p.x, p.y, 10);
	let clip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
	let pts = calcClipPoints(p.x, p.y, sz, sz, clip);
	console.log(pts);
	for (const pt of pts) drawCircleOnDiv(d, pt.x, pt.y, 2);


}
async function test4_hex() {
	await loadAssetsStatic();
	globalKeyHandling();
	let elems = mLayoutTM('pink', 'dPage');
	let d = mDom('dMain', { gap: 10, padding: 10 });
	//mCenterCenterFlex(d);
	let p = { x: 100, y: 100 };
	let sz = 100;
	let [w, h] = mSizeSuccession({ sz });
	let dhex = hexFromCenter(d, p, { w, h, bg: rColor() });
	drawCircleOnDiv(d, p.x, p.y, 10);
	let clip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
	let pts = calcClipPoints(p.x, p.y, sz, sz, clip);
	console.log(pts);
	for (const pt of pts) drawCircleOnDiv(d, pt.x, pt.y, 2)

}
async function test4_mGather() {
	await loadAssetsStatic();
	globalKeyHandling();
	let elems = mLayoutTM('pink', 'dPage');
	mStyle(dTop, { padding: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });
	let styles = { h: 30 }, boxStyles = { bg: 'pink', padding: 4 }, stylesMain = dictMerge({ margin: 10 }, styles);
	let bGame = mDom(dTop, styles, { tag: 'button', menu: 'top', html: 'game' });
	bGame.onclick = async () => { let x = await mGather(mInput, bGame, boxStyles); console.log('you entered', x); }
	let bWatch = mDom(dTop, styles, { tag: 'button', menu: 'top', html: 'hallo' }); //mKey('watch', dTop, styles, { tag: 'button', menu: 'top' });
	bWatch.onclick = async () => { let x = await mGather(mYesNo, bWatch, boxStyles); console.log('you entered', x); }
	let bNew = mDom(elems[1], stylesMain, { tag: 'button', html: 'New' });//return;
	let list = ['violin', 'piano', 'prog', 'math', 'walk', 'violin', 'piano', 'prog', 'math', 'walk', 'violin', 'piano', 'prog', 'math', 'walk']
	bNew.onclick = async () => { let x = await mGather(mSelect, bNew, boxStyles, { list }); console.log('you entered', x); }
	let d3 = await mKey('watch', dMain, stylesMain, { tag: 'button', menu: 'top' });
	d3.onclick = async () => { let x = await mGather(mYesNo, d3, boxStyles); console.log('you entered', x); }
	d3.click();
}
async function test3_mGather() {
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
async function test2_mGather() {

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
async function test1_mGather() {
	//mStyle('dPage', { w: '100%', h: '100%', bg, 'caret-color': '#ffffff00' });
	let elems = mLayoutTM(rColor(), 'dPage');
	let d = mDom(elems[1], { className: 'button' }, { tag: 'button', html: 'New' });//return;
	// mStyle('dPage',{w:'100%',h:'100%',bg:'green'});
	d.onclick = async () => {
		let sh = mShield('dPage');
		let x = await mGather(sh, d); console.log('you entered', x);

	}
}
async function test1_mAlignable() {
	let d = mDom('dPage', {}, { html: 'hallo' });//return;

	let [box, inp] = mInputInBox('dPage', { padding: 4, bg: 'silver', rounding: 4 }, { fz: 24 });
	mAlign(box, d, { align: 'bl', offx: 20 });
	mOnEnterInput(inp, val => console.log(inp.value, val))
}
async function test1_mAlign() {
	let d = mDom('dPage', { position: 'absolute', top: 10, left: 200, w: 500, h: 500, bg: 'green' }, { html: 'hallo' });//return;
	let d1 = mDom('dPage', { display: 'inline-block' });
	let d2 = mDom(d1, { display: 'flex', gap: 10, padding: 10 });
	let d3;
	for (const i of range(3)) { d3 = mDom(d2, { bg: rColor(), w: 50, h: 50 }); }
	mAlign(d1, d, { align: 'cl', ov: 1 });

	let d4 = mDom('dPage', { display: 'inline-block' });
	let d5 = mDom(d4, { padding: 4, bg: 'silver' }); //
	let d6 = mDom(d5, { className: 'button' }, { tag: 'input' }); d6.focus();
	mAlign(d4, d3, { align: 'bl' })
	//let x = await mGather({}, { align:'bl',anchor: d }); console.log('gather', x)
}
async function test1_emo1() {
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
async function test1_saveEmo() {
	let elems = mLayoutTM('hotpink', dPage); //console.log(dTop,dStatus,dLeft,dRight,dMain);
	let inp = createEmojiInput('dMain');
	let button = mDom('dMain', {}, {
		html: 'CLICK!!!', onclick: async () => {
			let text = inp.value;
			let res = await mPhpPostLine(text + "\nType something 😊", 'zdata/test.txt');
			console.log('result', res);
		}
	})
	//let d=mDom('dMain',{},{tag:'input'});

}
async function test1_testFileio() {
	await loadAssetsStatic();
	let elems = mLayoutTM(rColor(), dPage);
	mStyle(dTop, { padding: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });
	let o = M.superdi['bee'];
	let path = 'hallo.txt'; //'../../zdata/f2.yaml';
	let d1 = mKey('write', dTop, {}, { onclick: async () => console.log(await mPhpPostFile(jsyaml.dump(o), path)), menu: 'top' });
	let d2 = mKey('read', dTop, {}, { onclick: async () => console.log(await mPhpGetFile(path)), menu: 'top' });
	let d3 = mKey('yaml', dTop, {}, { onclick: async () => console.log(await jsyaml.load(await mPhpGetFile(path))), menu: 'top' });
	let d4 = mKey('delete', dTop, {}, { onclick: async () => console.log(await mPhpDeleteFile(path)), menu: 'top' });
	let d5 = mKey('append', dTop, {}, { onclick: async () => console.log(await jsyaml.load(await mPhpPostLine('hallo du!', path))), menu: 'top' });
	let d6 = mKey('write2', dTop, {}, { onclick: async () => console.log(await mPhpPostFile("was???", path)), menu: 'top' });
}
async function test1_postYaml() {
	await loadAssetsStatic(); //console.log(M.superdi.airplane);
	let o = M.superdi['bee']; console.log(o);
	let text = jsyaml.dump(o); console.log(text);
	//let res = await mPhpPostFile(text,'../../zdata/f2.yaml');console.log(res);
	let res = await mPhpGetFile('../../zdata/f2.yaml'); console.log(res);
	let o2 = jsyaml.load(res); console.log(o2);
}
async function test1_createStopwatch() {
	await loadAssetsStatic(); //console.log(M.superdi.airplane);
	let elems = mLayoutTM(rColor(), dPage); //console.log(dTop,dStatus,dLeft,dRight,dMain);
	mStyle(dTop, { padding: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });
	let d1 = mKey('watch', dTop, {}, { onclick: onclickStopwatch, menu: 'top' });
	let d2 = mKey('game', dTop, {}, { onclick: onclickResetActions, menu: 'top' });

	d1.click();
	//console.log(d1,d2)

	// let d=mDom(dMain,{fz:50,hpadding:10,rounding:10,margin:4,align:'center',hline:50,'user-select':'none',bg:'white',fg:'black'});
	// let x=createStopwatch(d);

}
async function test1_mToggleElem() {
	await loadAssetsStatic(); //console.log(M.superdi.airplane);
	let elems = mLayoutTLMRS(rColor(), dPage); //console.log(dTop,dStatus,dLeft,dRight,dMain);
	mStyle(dTop, { paleft: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });
	mStyle(dLeft, { patop: 4, display: 'flex', dir: 'column', aitems: 'center', wbox: true, gap: 4 });
	let d = mDom(dTop, { h: 30, hpadding: 10, rounding: 10, margin: 4, align: 'center', hline: 30, 'user-select': 'none', bg: 'red', fg: 'white' });
	//mToggle1Elem(d,'bee',1,{html:'0'},{html:'1'},{html:'2'});
	let tAction = mToggleElem(d, 'state', { relax: 'green', work: 'red', sleep: 'blue' }, ['work', 'relax', 'work', 'sleep'], 0, registerAction);
}
async function test1_mKey() {
	await loadAssetsStatic(); //console.log(M.superdi.airplane);
	window.onkeydown = keyDownHandler;
	window.onkeyup = keyUpHandler;
	let di = getKeyLists();
	let elems = mLayoutTLMRS(rColor(), dPage); //console.log(dTop,dStatus,dLeft,dRight,dMain);
	mStyle(dTop, { paleft: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });
	mStyle(dLeft, { patop: 4, display: 'flex', dir: 'column', aitems: 'center', wbox: true, gap: 4 });
	for (const i of range(3)) {
		let type = rChoose(arrMinus(getKeyTypes(), ['plain'])); //console.log(type);
		let list = di[type];
		//let key = rChoose(list); //console.log('key',key);
		let elem = mKey(rChoose(list), dTop, { sz: 22 }, { prefer: type, onclick: true });
		onHoverMagnify(elem);
		elem = mKey(rChoose(list), dLeft, { sz: 22 }, { prefer: type, onclick: true });
		//let elem = mKey(key, d);
		//onHoverTooltip(elem, `${key} (${type})`)
	}
}
async function test0_mLayout() {
	await loadAssetsStatic(); //console.log(M.superdi.airplane);
	let elems = mLayoutTLM(rColor(), dPage);
	for (const i of range(12)) elems = mLayoutTMS(rColor(), `dMain${i == 0 ? '' : i - 1}`, i);
	console.log(elems);
	elems.map(x => mStyle(x, { bg: rColor() }))
}
async function test0_mDom_statt_key() {
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
async function test0_mKey() {
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
async function test0_mMenuV() {
	await loadAssetsStatic();
	mStyle(dPage, { w: '100%', h: '100%', bg: 'sienna' }); //page coloring
	let names = M.divNames = mAreas(dPage, ` 'dLogo dTop' 'dLeft dMain' `, '140px 1fr', 'auto 1fr');
	mShade(names); //area coloring

	let dHome = mHomeLogo(dLogo, 'airplane', onclickCalc, 'top'); //logo

	mMenuV(dLeft, 'CALC', {}, onclickCalc, 'left');
	mMenuV(dLeft, 'DAY', {}, onclickCalc, 'left');
	mMenuV(dLeft, 'EXAMPLE', {}, onclickCalc, 'left');

	mStyle(dTop, { display: 'flex', 'justify': 'center', aitems: 'center' });
	mMenuH(dTop, 'NEW', {}, onclickCalc, 'right');
	mMenuH(dTop, 'HALLO', {}, onclickCalc, 'right');
	let d = mMenuH(dTop, 'EXAMPLE', {}, onclickCalc, 'right');

	console.log(mBy('a', 'class').map(x => [x.innerHTML, x.getAttribute('menu'), x.getAttribute('kennzahl')].join(',')));
	d.click();
}
async function test0_mShade() {
	await loadAssetsStatic();
	mStyle(dPage, { w: '100%', h: '100%', bg: 'sienna' }); //page coloring
	let names = M.divNames = mAreas(dPage, ` 'dLeft dRight' `, '140px 1fr', '100%');
	mShade(names); //area coloring

	//let d=mBy('dRight'); console.log(d); mStyle(d, { w: '100%', h: '100%', bg: 'green' });return;

	function mMenuV(d, text, styles = {}, handler = null, menu = null, kennzahl = null) {
		if (nundef(kennzahl)) kennzahl = getUID();
		//addKeys({ className: 'a', hmargin: 8, vmargin: 2, deco: 'none', rounding: 10, hpadding: 9, vpadding: 3 }, styles)
		addKeys({ display: 'block', deco: 'none', className: 'a', rounding: 10, margin: 4, align: 'center' }, styles)
		let ui = mDom(d, styles, { tag: 'a', html: text, href: '#', onclick: handler, kennzahl, menu });
		return ui;
	}
	function mMenuH(d, text, styles = {}, handler = null, menu = null, kennzahl = null) {
		if (nundef(kennzahl)) kennzahl = getUID();
		//addKeys({ className: 'a', hmargin: 8, vmargin: 2, deco: 'none', rounding: 10, hpadding: 9, vpadding: 3 }, styles)
		addKeys({ deco: 'none', className: 'a', rounding: 10, wmin: 100, margin: 4, align: 'center' }, styles)
		let ui = mDom(d, styles, { tag: 'a', html: text, href: '#', onclick: handler, kennzahl, menu });
		return ui;
	}
	mMenuV(dLeft, 'CALC', {}, onclickCalc, 'left');
	mMenuV(dLeft, 'DAY', {}, onclickDay, 'left');
	mMenuV(dLeft, 'EXAMPLE', {}, onclickExample, 'left');

	//mStyle('dRight',{bg:'green'},{html:'hallo'})
	mDom('dRight', { display: 'flex' }, { id: 'dTop' });
	//mDom(dTop,{},{html:'hallo',id:'dTop1'});
	mMenuH(dTop, 'NEW', { w: 120 }, onclickExample, 'right');
	mMenuH(dTop, 'HALLO', {}, onclickExample, 'right');
	mMenuH(dTop, 'EXAMPLE', {}, onclickExample, 'right');
}
async function test0_mAreas() {
	await loadAssetsStatic();
	let dPage = document.getElementById('dPage');
	mStyle(dPage, { w: '100%', h: '100%', bg: 'sienna' }); //page coloring
	let names = M.divNames = mAreas(dPage, ` 'dTop' 'dMain' 'dStatus' `, '1fr', 'auto 1fr auto');
	mShade(names); //area coloring
	mStyle('dMain', { padding: 4, overy: 'auto' })
	// mFlexV('dTop');
	//mStyle('dTop', { padding: 4, pabottom: 10 })
	mStyle('dTop', { padding: 4 })
	mStyle('dStatus', { padding: 4 }, { html: '&nbsp;' })
	let dTop = mDom('dTop'); //top menu
	let dCalc = mLinkMenu(dTop, 'CALC', {}, onclickCalc, 'top');
	mLinkMenu(dTop, 'DAY', {}, onclickDay, 'top');
	let dExample = mLinkMenu(dTop, 'EXAMPLE', {}, onclickExample, 'top');
	mLinkMenu(dTop, 'GAME', {}, onclickGame, 'top');
	mLinkMenu(dTop, 'ZONE', {}, onclickZone, 'top');
}
async function test0_assets() {
	await loadAssetsStatic();
}
async function test0_mSleep_p5() {
	await loadColors();
	await mSleep(2000);
	mClear('dPage');
	mDom('dPage', { position: 'absolute', left: 200, top: 10 }, { tag: 'canvas', id: 'canvas1' });
	console.log("Window loaded, initializing p5.js...");
	var sketch = new p5(sketch1); console.log(sketch)
}
async function test0_p5() {
	new p5(sketch0);
}













