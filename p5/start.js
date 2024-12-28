onload = start;

async function start() { await test8(); }

async function test8() {
	await loadAssetsStatic(); //console.log(M.superdi.airplane);
	window.onkeydown = keyDownHandler;
	window.onkeyup = keyUpHandler;
	let di = getKeyLists();
	let elems = mLayoutTLMRS(rColor(), dPage); //console.log(dTop,dStatus,dLeft,dRight,dMain);
	mStyle(dTop, { display: 'flex', padding: 4, wbox: true, gap: 4 });
	let d = dTop;
	for (const i of range(3)) {
		let type = rKeyType(); //console.log(type);
		let list = di[type];
		let key = rChoose(list); //console.log(key);
		let elem = mKey(key, type, d);
		//onHoverMagnify(elem);
		onHoverTooltip(elem, `${key} (${type})`)
	}
}
async function test8_mLayout() {
	await loadAssetsStatic(); //console.log(M.superdi.airplane);
	let elems = mLayoutTLM(rColor(), dPage);
	for (const i of range(12)) elems = mLayoutTMS(rColor(), `dMain${i == 0 ? '' : i - 1}`, i);
	console.log(elems);
	elems.map(x => mStyle(x, { bg: rColor() }))
}
async function test7() {
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
async function test6() {
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
async function test5() {
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
async function test4() {
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
async function test3() {
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
	// mDom(dTop, { fz: 30, display:'inline' }, { html: `play!` })
	// mKey('baby', dTop, { h: 30 });
	// mKey('baby', dTop, { h: 30 });
	// let dHome = mHomeLogo(dTop, 'airplane', onclickHome, 'top'); //logo
	let dCalc = mLinkMenu(dTop, 'CALC', {}, onclickCalc, 'top');
	mLinkMenu(dTop, 'DAY', {}, onclickDay, 'top');
	let dExample = mLinkMenu(dTop, 'EXAMPLE', {}, onclickExample, 'top');
	mLinkMenu(dTop, 'GAME', {}, onclickGame, 'top');
	mLinkMenu(dTop, 'ZONE', {}, onclickZone, 'top');
}
async function test2() {
	await loadAssetsStatic();
	//can I do multiple sketches on 1 page? YES!
	//challenge: 2 panes
	//let d=mColFlex('dPage',[1,2],['blue','red']);
}
async function test1() {
	await loadColors();
	await mSleep(2000);
	mClear('dPage');
	mDom('dPage', { position: 'absolute', left: 200, top: 10 }, { tag: 'canvas', id: 'canvas1' });
	console.log("Window loaded, initializing p5.js...");
	var sketch = new p5(sketch1); console.log(sketch)
}
async function test0() {
	new p5(sketch0);
}













