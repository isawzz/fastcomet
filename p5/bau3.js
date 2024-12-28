
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
function getKeyLists(){
	if (isdef(M.byKeyType)) return M.byKeyType;
	let types = getKeyTypes();
	let di={};
	let keys = M.symKeys=Object.keys(M.superdi);
	for(const k of keys){
		let o=M.superdi[k];
		for(const t of types) if (isdef(o[t])) lookupAddToList(di,[t], k); 

	}
	di.plain=jsCopy(commandWords);
	M.byKeyType = di;
	return di;
}
function getKeyTypes(){return ['plain','fa', 'ga', 'fa6', 'img', 'text', 'photo'];}
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
function hToggleClassMenu(a) {
	a = a.target;
	let menu = a.getAttribute('menu');
	let others = mBy(`[menu='${menu}']`, 'query');
	for (const o of others) {
		mClassRemove(o, 'active')
	}
	mClassToggle(a, 'active');
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
function mImg(src, d, styles = {}, opts = {}) {
	let [w, h] = mSizeSuccession(styles, 40);
	addKeys({ w, h, 'object-fit': 'cover', 'object-position': 'center center' }, styles);
	addKeys({ tag: 'img', src }, opts)
	let img = mDom(d, styles, opts);
	return img;
}
function mLayout(bg,dParent,rowlist,colt,rowt){
	dParent = toElem(dParent);
	mStyle(dParent, { w: '100%', h: '100%', bg, 'caret-color': '#ffffff00' });
	let areas = `'${rowlist.join("' '")}'`;
	if (dParent.id == 'dPage') M.divNames = [];
	let newNames = mAreas(dParent, areas, colt, rowt); 
	let names = M.divNames = Array.from(new Set(M.divNames.concat(newNames)));
	mShade(newNames);
	return names.map(x=>mBy(x));
}
function mLayoutTLM(bg,dParent,suffix='',wcol=30,hrow=30){
	let rowlist = [`dTop${suffix} dTop${suffix}`,`dLeft${suffix} dMain${suffix}`];
	let colt = `minmax(${wcol}px, auto) 1fr`;
	let rowt = `minmax(${hrow}px, auto) 1fr`;
	return mLayout(bg,dParent,rowlist,colt,rowt);
}
function mLayoutTLMR(bg,dParent,suffix='',wcol=30,hrow=30){
	let rowlist = [`dTop${suffix} dTop${suffix} dTop${suffix}`,`dLeft${suffix} dMain${suffix} dRight${suffix}`];
	let colt = `minmax(${wcol}px, auto) 1fr minmax(${wcol}px, auto)`;
	let rowt = `minmax(${hrow}px, auto) 1fr`;
	return mLayout(bg,dParent,rowlist,colt,rowt);
}
function mLayoutTLMRS(bg,dParent,suffix='',wcol=30,hrow=30){
	let rowlist = [`dTop${suffix} dTop${suffix} dTop${suffix}`,`dLeft${suffix} dMain${suffix} dRight${suffix}`,`dStatus${suffix} dStatus${suffix} dStatus${suffix}`];
	let colt = `minmax(${wcol}px, auto) 1fr minmax(${wcol}px, auto)`;
	let rowt = `minmax(${hrow}px, auto) 1fr minmax(${hrow}px, auto)`;
	return mLayout(bg,dParent,rowlist,colt,rowt);
}
function mLayoutTM(bg,dParent,suffix='',hrow=30){
	let rowlist = [`dTop${suffix}`,`dMain${suffix}`];
	let colt = `1fr`;
	let rowt = `minmax(${hrow}px, auto) 1fr`;
	return mLayout(bg,dParent,rowlist,colt,rowt);
}
function mLayoutTMS(bg,dParent,suffix='',hrow=30){
	let rowlist = [`dTop${suffix}`,`dMain${suffix}`,`dStatus${suffix}`];
	let colt = `1fr`;
	let rowt = `minmax(${hrow}px, auto) 1fr minmax(${hrow}px, auto)`;
	return mLayout(bg,dParent,rowlist,colt,rowt);
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
function rKeyType(){
	return rChoose(getKeyTypes());
}

