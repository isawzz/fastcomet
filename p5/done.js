
async function app0_stopwatch() {
	await loadAssetsStatic(); //console.log(M.superdi.airplane);
	let di = await actionLoadAll(); //console.log(Serverdata);
	di.list.map(x => console.log(x.key, x.date, x.time, x.secs));
	//return;
	let elems = mLayoutTM(rColor(), dPage); //console.log(dTop,dStatus,dLeft,dRight,dMain);
	mStyle(dTop, { padding: 4, display: 'flex', aitems: 'center', wbox: true, gap: 4 });
	let d1 = mKey('watch', dTop, {}, { onclick: onclickStopwatch, menu: 'top' });
	let d2 = mKey('reset', dTop, {}, { onclick: onclickResetActions, menu: 'top' });
	let d3 = mKey('archive', dTop, {}, { onclick: onclickArchiveActions, menu: 'top' });
	let d4 = mKey('thinking_face', dTop, {}, { onclick: onclickAction, menu: 'main' });
	let d5 = mKey('sleeping_face', dTop, {}, { onclick: onclickAction, menu: 'main' });

	d1.click();
	//console.log(d1,d2)

	// let d=mDom(dMain,{fz:50,hpadding:10,rounding:10,margin:4,align:'center',hline:50,'user-select':'none',bg:'white',fg:'black'});
	// let x=createStopwatch(d);

}

function allNumbers(s) {
	//returns array of all numbers within string s
	let m = s.match(/\-.\d+|\-\d+|\.\d+|\d+\.\d+|\d+\b|\d+(?=\w)/g);
	if (m) return m.map(v => Number(v)); else return [];
}
function arrChildren(elem) { return [...toElem(elem).children]; }
function arrClear(arr) { arr.length = 0; return arr; }
function arrCycle(arr, count) { return arrRotate(arr, count); }
function arrDisjoint(ad1, ad2, prop) {
	console.log(isDict(ad1), isDict(ad2))
	if (isDict(ad1) && isDict(ad2)) return Object.keys(ad1).find(x => x in ad2);
	else return ad1.map(x => x[prop]).find(el => ad2.map(x => x[prop]) == el);
}
function arrMax(arr, f) { return arrMinMax(arr, f).max; }
function arrMinMax(arr, func) {
	if (nundef(func)) func = x => x;
	else if (isString(func)) { let val = func; func = x => x[val]; }
	let min = func(arr[0]), max = func(arr[0]), imin = 0, imax = 0;
	for (let i = 1, len = arr.length; i < len; i++) {
		let v = func(arr[i]);
		if (v < min) {
			min = v; imin = i;
		} else if (v > max) {
			max = v; imax = i;
		}
	}
	return { min: min, imin: imin, max: max, imax: imax, elmin: arr[imin], elmax: arr[imax] };
}
function arrMinus(arr, b) { if (isList(b)) return arr.filter(x => !b.includes(x)); else return arr.filter(x => x != b); }
function arrNext(list, el) {
	let iturn = list.indexOf(el);
	let elnext = list[(iturn + 1) % list.length];
	return elnext;
}
function capitalize(s) {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
}
function copyKeys(ofrom, oto, except = {}, only = null) {
	let keys = isdef(only) ? only : Object.keys(ofrom);
	for (const k of keys) {
		if (isdef(except[k])) continue;
		oto[k] = ofrom[k];
	}
	return oto;
}
function createCountdown(elem, duration) {
	let isRunning = false;
	let remaining = duration;
	let interval = null;

	function updateDisplay() {
		const h = Math.floor(remaining / 3600).toString().padStart(2, '0');
		const m = Math.floor((remaining % 3600) / 60).toString().padStart(2, '0');
		const s = (remaining % 60).toString().padStart(2, '0');
		elem.textContent = `${h}:${m}:${s}`;
	}

	function start() {
		if (isRunning || remaining <= 0) return;
		isRunning = true;
		const startTime = Date.now();

		interval = setInterval(() => {
			const elapsed = Math.floor((Date.now() - startTime) / 1000);
			remaining = duration - elapsed;
			updateDisplay();
			if (remaining <= 0) {
				stop();
				remaining = 0;
				updateDisplay();
			}
		}, 1000);
	}

	function stop() {
		isRunning = false;
		clearInterval(interval);
	}

	function toggle() {
		isRunning ? stop() : start();
	}

	elem.addEventListener('click', toggle);
	updateDisplay();
	return elem;
}
function createStopwatch(elem) {
	elem = toElem(elem);
	let isRunning = false; mStyle(elem, { fg: 'white' });
	let elapsed = 0;
	let interval = null;

	function getElapsed() {
		let nums = allNumbers(elem.textContent);
		return nums[0] * 3600 + nums[1] * 60 + nums[2];
		const h = Math.floor(elapsed / 3600).toString().padStart(2, '0');
		const m = Math.floor((elapsed % 3600) / 60).toString().padStart(2, '0');
		const s = (elapsed % 60).toString().padStart(2, '0');
		return `${h}:${m}:${s}`;
	}
	function updateDisplay() {
		const h = Math.floor(elapsed / 3600).toString().padStart(2, '0');
		const m = Math.floor((elapsed % 3600) / 60).toString().padStart(2, '0');
		const s = (elapsed % 60).toString().padStart(2, '0');
		elem.textContent = `${h}:${m}:${s}`;
	}

	function start() {
		if (isRunning) return;
		isRunning = true;
		const startTime = Date.now() - elapsed * 1000;
		//mStyle(elem, { bg: 'white', fg: 'black' });
		interval = setInterval(() => {
			elapsed = Math.floor((Date.now() - startTime) / 1000);
			updateDisplay();
		}, 1000);
	}

	function stop() {
		isRunning = false;
		//mStyle(elem, { bg: 'silver', fg: 'dimgray' });
		clearInterval(interval);
	}

	function toggle() {
		isRunning ? stop() : start();
	}
	function getStatus() { return isRunning ? 1 : 0; }

	function reset() {
		elapsed = 0;
		updateDisplay();
	}

	elem.addEventListener('click', toggle);
	updateDisplay();
	return { elem, start, stop, toggle, getElapsed, getStatus, reset };
}
function detectSessionType() {
	let loc = window.location.href; //console.log('loc', loc);
	DA.sessionType =
		loc.includes('moxito.online') ? 'fastcomet' :
			loc.includes('vidulus') ? 'vps' :
				loc.includes('telecave') ? 'telecave' : loc.includes('8080') ? 'php'
					: loc.includes(':40') ? 'nodejs'
						: loc.includes(':60') ? 'flask' : 'live';
	return DA.sessionType;
}
function dictMerge(target, source) {
	for (const key in source) {
		if (source[key] instanceof Object && key in target) {
			Object.assign(source[key], dictMerge(target[key], source[key]));
		}
	}
	return { ...target, ...source };
}
function evToElem(ev, attr) {
	let elem = ev.target;
	let val = null;
	while (nundef(val) && isdef(elem)) {
		val = elem.getAttribute(attr);
		if (isdef(val)) return { val, elem };
		elem = elem.parentNode;
	}
	return null;
}
function evToClass(ev, className) {
	let elem = findAncestorWith(ev.target, { className });
	return elem;
}
function evToId(ev) {
	let elem = findAncestorWith(ev.target, { id: true });
	return elem.id;
}
function findAncestorWith(elem, { attribute = null, className = null, id = null }) {
	elem = toElem(elem);
	while (elem) {
		if ((attribute && elem.hasAttribute(attribute)) || (className && elem.classList.contains(className)) || (id && isdef(elem.id))) { return elem; }
		elem = elem.parentNode;
	}
	return null;
}
function findSym(s) {
	s = normalizeString(s);
	let o = M.superdi[s]; if (isdef(o)) return o;
	let list = M.byFriendly[s]; if (isdef(list)) return rChoose(list);

	for (const k in M.superdi) {
		if (k.includes(s)) return M.superdi[k];
	}
	for (const k in M.names) {
		if (k.includes(s)) { list = M.byFriendly[k]; return rChoose(list); }
	}
	for (const k in M.categories) {
		if (k.includes(s)) { list = M.byCat[k]; return rChoose(list); }
	}

	return null;
}
function getKeyLists() {
	if (isdef(M.byKeyType)) return M.byKeyType;
	let types = getKeyTypes();
	let di = {};
	let keys = M.symKeys = Object.keys(M.superdi);
	for (const k of keys) {
		let o = M.superdi[k];
		for (const t of types) if (isdef(o[t])) lookupAddToList(di, [t], k);

	}
	di.plain = jsCopy(commandWords);
	M.byKeyType = di;
	return di;
}
function getKeyTypes() { return ['plain', 'fa', 'ga', 'fa6', 'img', 'text', 'photo']; }
function getPixTL(img) {
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
	return color;

}
function getRect(elem, relto) {
	if (isString(elem)) elem = document.getElementById(elem);
	let res = elem.getBoundingClientRect();
	if (isdef(relto)) {
		let b2 = relto.getBoundingClientRect();
		let b1 = res;
		res = {
			x: b1.x - b2.x,
			y: b1.y - b2.y,
			left: b1.left - b2.left,
			top: b1.top - b2.top,
			right: b1.right - b2.right,
			bottom: b1.bottom - b2.bottom,
			width: b1.width,
			height: b1.height
		};
	}
	let r = { x: res.left, y: res.top, w: res.width, h: res.height };
	addKeys({ l: r.x, t: r.y, r: r.x + r.w, b: r.y + r.h }, r);
	return r;
}
function hPrepUi(ev, areas, cols, rows, bg, dParent) {
	hToggleClassMenu(ev); mClear(dParent);
	let d = mDom(dParent, { w: '100%', h: '100%' });
	let names = mAreas(d, areas, cols, rows);
	M.divNames = Array.from(new Set(M.divNames.concat(names))); console.log(M.divNames);
	mStyle('dPage', { bg });
}
function hToggleClassMenu(ev) {
	let elem = findAncestorWith(ev.target, { attribute: 'menu' });
	if (mHasClass(elem, 'active')) return [elem, elem];
	let menu = elem.getAttribute('menu');
	let others = mBy(`[menu='${menu}']`, 'query').filter(x => x != elem);
	let prev = null;
	for (const o of others) {
		assertion(o != elem);
		if (mHasClass(o, 'active')) { prev = o; mClassRemove(o, 'active'); }
	}
	mClass(elem, 'active');
	return [prev, elem];
}
function isAlphaNum(s) { query = /^[a-zA-Z0-9]+$/; return query.test(s); }

function isLetter(s) { return /^[a-zA-Z]$/i.test(s); }

function isLiteral(x) { return isString(x) || isNumber(x); }

function mAreas(dParent, areas, gridCols, gridRows) {
	mClear(dParent); mStyle(dParent, { padding: 0 })
	let names = arrNoDuplicates(toWords(areas));
	let dg = mDom(dParent);
	for (const name of names) {
		let d = mDom(dg, { family: 'opensans' }, { id: name });
		d.style.gridArea = name;
	}
	mStyle(dg, { display: 'grid', gridCols, gridRows, h: '100%' });
	dg.style.gridTemplateAreas = areas;
	return names;
}
function mBy(id, what, elem) {
	if (nundef(elem)) elem = document;
	if (nundef(what)) return elem.getElementById(id);
	switch (what) {
		case 'class': return Array.from(elem.getElementsByClassName(id)); break;
		case 'tag': return Array.from(elem.getElementsByTagName(id)); break;
		case 'name': return Array.from(elem.getElementsByName(id)); break;
		case 'query': return Array.from(elem.querySelectorAll(id)); break;
		default: return elem.getElementById(id);
	}
}
function mCenterCenter(d, gap) { mCenterCenterFlex(d, gap); }

function mCenterCenterFlex(d, gap) { mCenterFlex(d, true, true, true, gap); }

function mCenterFlex(d, hCenter = true, vCenter = false, wrap = true, gap = null) {
	let styles = { display: 'flex' };
	if (hCenter) styles['justify-content'] = 'center';
	styles['align-content'] = vCenter ? 'center' : 'flex-start';
	if (wrap) styles['flex-wrap'] = 'wrap';
	if (gap) styles.gap = gap;
	mStyle(d, styles);
}
function measureText(text, styles = {}, cx = null) { //mit canvas
	function getTextWidth(text, font) { //mit canvas
		// re-use canvas object for better performance
		var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement('canvas'));
		var context = canvas.getContext('2d');
		context.font = font;
		var metrics = context.measureText(text);
		return metrics.width;
	}
	// re-use canvas object for better performance
	if (!cx) {
		var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement('canvas'));
		cx = canvas.getContext('2d');
	}
	cx.font = isdef(styles.font) ? styles.font : `${styles.fz}px ${styles.family}`;
	//cx.font = `${}`; //font;
	var metrics = cx.measureText(text);
	//console.log('metrics:',metrics)
	return [metrics.width, metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent];
}
function measureText(text, styles = {}, cx = null) {
	// Helper function to ensure font style is correctly formed
	function getFontString(styles) {
		const fontSize = styles.fz || 16; // Default font size to 16px
		const fontFamily = styles.family || 'sans-serif'; // Default font family
		return styles.font || `${fontSize}px ${fontFamily}`; // Prefer full font string if available
	}

	// Create or reuse canvas for better performance
	if (!cx) {
		const canvas = measureText.canvas || (measureText.canvas = document.createElement('canvas'));
		cx = canvas.getContext('2d');
	}

	// Set font style
	cx.font = getFontString(styles);

	// Measure text
	const metrics = cx.measureText(text);

	// Calculate height using bounding box properties (with fallback)
	const ascent = metrics.actualBoundingBoxAscent || 0;
	const descent = metrics.actualBoundingBoxDescent || 0;

	return {
		width: metrics.width,
		height: ascent + descent,
		ascent: ascent,
		descent: descent,
	};
}
function measureActualTextWidth(text, styles = {}) {
	// Create a canvas element for measuring
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');

	// Helper to build font string
	function getFontString(styles) {
		const fontSize = styles.fz || 16; // Default to 16px font size
		const fontFamily = styles.family || 'sans-serif'; // Default font family
		return styles.font || `${fontSize}px ${fontFamily}`; // Use full font if available
	}

	// Set font on the canvas context
	context.font = getFontString(styles);

	// Calculate text dimensions
	const metrics = context.measureText(text);
	const textWidth = metrics.width;

	// Create a temporary canvas to render the text
	canvas.width = Math.ceil(textWidth);
	canvas.height = Math.ceil(metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent);

	// Redraw text for pixel-perfect measurement
	context.font = getFontString(styles);
	context.textBaseline = 'top'; // Align text to the top for simplicity
	context.fillText(text, 0, 0);

	// Analyze the pixels to determine the actual bounds
	const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

	// Find the first and last non-transparent pixels horizontally
	let startX = canvas.width;
	let endX = 0;
	for (let y = 0; y < canvas.height; y++) {
		for (let x = 0; x < canvas.width; x++) {
			const alpha = imageData[(y * canvas.width + x) * 4 + 3];
			if (alpha > 0) {
				startX = Math.min(startX, x);
				endX = Math.max(endX, x);
			}
		}
	}

	// Calculate the actual width
	const actualWidth = endX - startX + 1;

	return actualWidth;
}
function mHomeLogo(d, key, styles = {}, handler = null, menu = null) {
	addKeys({ display: 'flex', align: 'center', justify: 'center' }, styles);
	let ui = mKey(key, d, { maright: 12, fz: 30, cursor: 'pointer' }, { onclick: handler, menu });
	return ui;
}
function mImgAsync(d, styles = {}, opts = {}, callback = null) {
	return new Promise((resolve, reject) => {
		let img = document.createElement('img');
		mAppend(d, img);
		let [w, h] = mSizeSuccession(styles, 40);
		addKeys({ w, h, 'object-fit': 'cover', 'object-position': 'center center' }, styles);
		addKeys({ tag: 'img' }, opts);
		mStyle(img, styles, opts);
		img.onload = async () => {
			//console.log(mGetStyle(img,'h'))
			if (callback) callback(img);
			//console.log(mGetStyle(img,'h'))
			resolve(img);
		};
		img.onerror = (error) => {
			reject(error);
		};
		img.src = opts.src;
	});
}
async function mKey(imgKey, d, styles = {}, opts = {}) {
	styles = jsCopy(styles);
	let type = opts.prefer;
	let o = type != 'plain'?lookup(M.superdi, [imgKey]):null;
	let src;
	if (nundef(o) && imgKey.includes('.')) src = imgKey;
	else if (isdef(o) && (type == 'img' || type == 'photo') && isdef(o[type])) src = o[type];
	else if (isdef(o) && isdef(o.img)) src = o.img;
	//console.log('src', src)
	if (isdef(src)) {
		let [w, h] = mSizeSuccession(styles, 40); //console.log(w, h)
		addKeys({ w, h }, styles);
		addKeys({ tag: 'img', src }, opts);
		//let img = mDom(d, styles, opts);
		let d0 = mDom(d, styles, opts);
		mCenterCenterFlex(d0);
		let img = await mImgAsync(d0, styles, opts, roundIfTransparentCorner);
		//console.log(img)
		return d0;
	} else if (isdef(o)) {
		let [w, h] = mSizeSuccession(styles, 40);
		let sz = h;
		addKeys({ h }, styles);
		if (nundef(type)) type = isdef(o.text) ? 'text' : isdef(o.fa6) ? 'fa6' : isdef(o.fa) ? 'fa' : isdef(o.ga) ? 'ga' : null;
		let family = type == 'text' ? 'emoNoto' : type == 'fa6' ? 'fa6' : type == 'fa' ? 'pictoFa' : 'pictoGame';
		let html = type == 'text' ? o.text : String.fromCharCode('0x' + o[type]);
		addKeys({ family }, styles); //console.log(h)
		//addKeys({ html }, opts);
		let d0 = mDom(d, styles, opts);
		mCenterCenterFlex(d0);
		let d1 = mDom(d0, {}, { html });
		//d1 = mDom(d, { family, fz: sz, hline: sz }, { html });
		let r = getRect(d1);
		[w, h] = [r.w, r.h];
		let scale = Math.min(sz / w, sz / h);
		d1.style.transformOrigin = 'center center';
		d1.style.transform = `scale(${scale})`;
		d1.style.transform = `scale(${scale})`;
		return d0;
		// if (isdef(o.fa6)) addKeys({ html: String.fromCharCode('0x' + o.fa6) }, opts);
		// else if (isdef(o.fa)) addKeys({ html: String.fromCharCode('0x' + o.fa) }, opts);
		// else if (isdef(o.ga)) addKeys({ html: String.fromCharCode('0x' + o.ga) }, opts);
		// else if (isdef(o.text)) addKeys({ html: o.text }, opts);
		// addKeys({ html: o.text }, opts);
	} else {
		addKeys({ html: imgKey }, opts)
		let img = mDom(d, styles, opts);
		return img;
	}
	console.log('type', type)
}
function mLayout(bg, dParent, rowlist, colt, rowt) {
	dParent = toElem(dParent);
	mStyle(dParent, { bg });
	let areas = `'${rowlist.join("' '")}'`;
	if (dParent.id == 'dPage') M.divNames = [];
	let newNames = mAreas(dParent, areas, colt, rowt);
	let names = M.divNames = Array.from(new Set(M.divNames.concat(newNames)));
	mShade(newNames);
	return names.map(x => mBy(x));
}
function mLayoutTLM(bg, dParent, suffix = '', wcol = 30, hrow = 30) {
	let rowlist = [`dTop${suffix} dTop${suffix}`, `dLeft${suffix} dMain${suffix}`];
	let colt = `minmax(${wcol}px, auto) 1fr`;
	let rowt = `minmax(${hrow}px, auto) 1fr`;
	return mLayout(bg, dParent, rowlist, colt, rowt);
}
function mLayoutTLMR(bg, dParent, suffix = '', wcol = 30, hrow = 30) {
	let rowlist = [`dTop${suffix} dTop${suffix} dTop${suffix}`, `dLeft${suffix} dMain${suffix} dRight${suffix}`];
	let colt = `minmax(${wcol}px, auto) 1fr minmax(${wcol}px, auto)`;
	let rowt = `minmax(${hrow}px, auto) 1fr`;
	return mLayout(bg, dParent, rowlist, colt, rowt);
}
function mLayoutTLMRS(bg, dParent, suffix = '', wcol = 30, hrow = 30) {
	let rowlist = [`dTop${suffix} dTop${suffix} dTop${suffix}`, `dLeft${suffix} dMain${suffix} dRight${suffix}`, `dStatus${suffix} dStatus${suffix} dStatus${suffix}`];
	let colt = `minmax(${wcol}px, auto) 1fr minmax(${wcol}px, auto)`;
	let rowt = `minmax(${hrow}px, auto) 1fr minmax(${hrow}px, auto)`;
	return mLayout(bg, dParent, rowlist, colt, rowt);
}
function mLayoutTM(bg, dParent, suffix = '', hrow = 30) {
	let rowlist = [`dTop${suffix}`, `dMain${suffix}`];
	let colt = `1fr`;
	let rowt = `minmax(${hrow}px, auto) 1fr`;
	return mLayout(bg, dParent, rowlist, colt, rowt);
}
function mLayoutTMS(bg, dParent, suffix = '', hrow = 30) {
	let rowlist = [`dTop${suffix}`, `dMain${suffix}`, `dStatus${suffix}`];
	let colt = `1fr`;
	let rowt = `minmax(${hrow}px, auto) 1fr minmax(${hrow}px, auto)`;
	return mLayout(bg, dParent, rowlist, colt, rowt);
}
function mMenuV(d, text, styles = {}, handler = null, menu = null, kennzahl = null) {
	if (nundef(kennzahl)) kennzahl = getUID();
	addKeys({ display: 'block', deco: 'none', className: 'a', rounding: 10, margin: 4, align: 'center' }, styles)
	let ui = mDom(d, styles, { tag: 'a', html: text, href: '#', onclick: handler, kennzahl, menu });
	return ui;
}
function mMenuH(d, text, styles = {}, handler = null, menu = null, kennzahl = null) {
	if (nundef(kennzahl)) kennzahl = getUID();
	addKeys({ deco: 'none', className: 'a', rounding: 10, wmin: 100, margin: 4, align: 'center' }, styles)
	let ui = mDom(d, styles, { tag: 'a', html: text, href: '#', onclick: handler, kennzahl, menu });
	return ui;
}
function normalizeString(s, sep = '_', keep = []) {
	s = s.toLowerCase().trim();
	let res = '';
	for (let i = 0; i < s.length; i++) { if (isAlphaNum(s[i]) || keep.includes(s[i])) res += s[i]; else if (last(res) != sep) res += sep; }
	return res;
}
async function onclickCalc(ev) {
	hPrepUi(ev, ` 'dSide dMain' `, 'auto 1fr', '1fr', rColor(), 'dMain');
	let dSide = mBy('dSide'); mStyle(dSide, { padding: 10, wbox: true });
	return;
	let dMenu = mDom('dSide', { display: 'flex', dir: 'column' }); //side menu
	let gencase = mLinkMenu(dMenu, 'Manual', {}, onclickStatistik, 'side');
	let x = mLinkMenu(dMenu, 'Binomial', {}, onclickBinomial, 'side');
	let normal = mLinkMenu(dMenu, 'Normal', {}, onclickNormal, 'side');
	let all = mLinkMenu(dMenu, 'Alles', {}, onclickAll, 'side');
}
function p5ClearAll() { clearTimeouts(); mClear('dMain'); DA.stopwatch = null; }
function range(f, t, st = 1) {
	if (nundef(t)) {
		t = f - 1;
		f = 0;
	}
	let arr = [];
	for (let i = f; i <= t; i += st) {
		arr.push(i);
	}
	return arr;
}
function recFlatten(o) {
	if (isLiteral(o)) return o;
	else if (isList(o)) return o.map(x => recFlatten(x)).join(', ');
	else if (isDict(o)) {
		let valist = [];
		for (const k in o) { let val1 = recFlatten(o[k]); valist.push(`${k}: ${val1}`); }
		return valist.join(', ');
	}
}
function roundIfTransparentCorner(img) {
	let c = getPixTL(img);
	if (c.a != 0) {
		//only resize if parent is a frame for this image!!!!!
		let parent = img.parentNode;
		if (arrChildren(parent).length <= 1) {
			let r = getRect(img.parentNode);
			mStyle(img, { round: true, h: r.h - 8, w: r.w - 8 });
		} else mStyle(img, { round: true });
	}
}



