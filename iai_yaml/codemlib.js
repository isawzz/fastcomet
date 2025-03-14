
function mAlign(d, da, opts) {
	if (mGetStyle(d, 'display') != 'inline-block') {
		let parent = d.parentNode;
		let wrapper = mDom(parent, { display: 'inline-block' });
		mAppend(wrapper, d);
		d = wrapper;
	}
	let rda = getRect(da);
	let rd = getRect(d);
	let align = valf(opts.align, 'bl'), ov = valf(opts.ov, 0);
	if (align == 'tl') { dx = rda.l; dy = rda.t - rd.h * (1 - ov); }
	else if (align == 'bl') { dx = rda.l; dy = rda.b - rd.h * ov; }
	else if (align == 'cl') { dx = rda.l - rd.w * (1 - ov); dy = rda.t + rda.h / 2 - rd.h / 2; }
	else if (align == 'tr') { dx = rda.l + rda.w - rd.w; dy = rda.t - rd.h * (1 - ov); }
	else if (align == 'br') { dx = rda.l + rda.w - rd.w; dy = rda.t + rda.h - rd.h * ov; }
	else if (align == 'cr') { dx = rda.l + rda.w - rd.w + rd.w * (1 - ov); dy = rda.t + rda.h / 2 - rd.h / 2; }
	else if (align == 'tc') { dx = rda.l + rda.w / 2 - rd.w / 2; dy = rda.t - rd.h * (1 - ov); }
	else if (align == 'bc') { dx = rda.l + rda.w / 2 - rd.w / 2; dy = rda.t + rda.h - rd.h * ov; }
	else if (align == 'cc') { dx = rda.l + rda.w / 2 - rd.w / 2; dy = rda.t + rda.h / 2 - rd.h / 2; }
	dx = clamp(dx, 0, window.innerWidth - rd.w); dy = clamp(dy, 0, window.innerHeight - rd.h);
	mPos(d, dx, dy, opts.offx, opts.offy);
}
function mAnchorTo(elem, dAnchor, align = 'bl') {
	let rect = dAnchor.getBoundingClientRect();
	let drect = elem.getBoundingClientRect();
	let [v, h] = [align[0], align[1]];
	let vPos = v == 'b' ? { top: rect.bottom } : v == 'c' ? { top: rect.top } : { top: rect.top - drect.height };
	let hPos = h == 'l' ? { left: rect.left } : h == 'c' ? { left: rect.left } : { right: window.innerWidth - rect.right };
	let posStyles = { position: 'absolute' };
	addKeys(vPos, posStyles);
	addKeys(hPos, posStyles);
	mStyle(elem, posStyles);
}
function mAppend(d, child) { toElem(d).appendChild(child); return child; }
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
function mClass(d) {
	d = toElem(d);
	if (arguments.length == 2) {
		let arg = arguments[1];
		if (isString(arg) && arg.indexOf(' ') > 0) { arg = [toWords(arg)]; }
		else if (isString(arg)) arg = [arg];
		if (isList(arg)) {
			for (let i = 0; i < arg.length; i++) {
				d.classList.add(arg[i]);
			}
		}
	} else for (let i = 1; i < arguments.length; i++) d.classList.add(arguments[i]);
}
function mClassRemove(d) { d = toElem(d); for (let i = 1; i < arguments.length; i++) d.classList.remove(arguments[i]); }
function mClassToggle(d, classes) {
	let wlist = toWords(classes);
	d = toElem(d);
	for (const c of wlist) if (d.classList.contains(c)) mClassRemove(d, c); else mClass(d, c);
}
function mClear(d) {
	toElem(d).innerHTML = '';
}
async function mCollapse(divs, dParent, styles = {}) {
	//assumes that divs have first element a title, next to which a + or - is added
	function collapseOne(div) {
		let b = div.firstChild.firstChild;
		b.textContent = '+';
		let chi = arrChildren(div).slice(1);
		chi.map(x => mStyle(x, { display: 'none' }));
	}
	function expandOne(div) {
		let b = div.firstChild.firstChild;
		b.textContent = '- ';
		let chi = arrChildren(div).slice(1);
		chi.map(x => mStyle(x, { display: 'block' }));
	}
	function isCollapsedOne(div) { let chi = arrChildren(div).slice(1); return chi[0].style.display === 'none'; }
	function toggleOne(div) { if (isCollapsedOne(div)) expandOne(div); else collapseOne(div); }
	function collapseAll() { divs.map(collapseOne); }
	function expandAll() { divs.map(expandOne); }

	divs.forEach(div => {
		let d1 = div.firstChild;
		let b = mDom(d1, { margin: 5, cursor: 'pointer' }, { tag: 'span', html: '- ' }); mInsert(d1, b, 0);
		b.onclick = () => { toggleOne(div); }
	});

	let dController = null;
	if (isdef(dParent)) {
		let bExpand = await mKey('circle_chevron_down', dParent, styles, { tag: 'button', onclick: expandAll });
		let bCollapse = await mKey('circle_chevron_up', dParent, styles, { tag: 'button', onclick: collapseAll });

		dController = mToggleButton(bExpand, bCollapse);
	}
	return { divs, dController, toggleOne, collapseOne, expandOne, isCollapsedOne, collapseAll, expandAll };
}
function mCollapseRemove(coll) {
	coll.divs.forEach(div => {
		coll.expandOne(div);
		div.firstChild.firstChild.remove();
	});
	if (isdef(coll.dController)) coll.dController.remove();
}
function mCreateFrom(htmlString) {
	var div = document.createElement('div');
	div.innerHTML = htmlString.trim();
	return div.firstChild;
}
function mDom(dParent, styles = {}, opts = {}) {
	let tag = valf(opts.tag, 'div');
	let d = document.createElement(tag);
	if (isdef(dParent)) mAppend(dParent, d);
	if (tag == 'textarea') styles.wrap = 'hard';
	mStyle(d, styles);
	applyOpts(d, opts);
	return d;
}
function mDraggable(item) {
	let d = iDiv(item);
	d.draggable = true;
	d.ondragstart = drag;
}
function mDropZone(dropZone, onDrop) {
	dropZone.setAttribute('allowDrop', true)
	dropZone.addEventListener('dragover', function (event) {
		event.preventDefault();
		dropZone.style.border = '2px dashed #007bff';
	});
	dropZone.addEventListener('dragleave', function (event) {
		event.preventDefault();
		dropZone.style.border = '2px dashed #ccc';
	});
	dropZone.addEventListener('drop', function (event) {
		event.preventDefault();
		dropZone.style.border = '2px dashed #ccc';
		const files = event.dataTransfer.files;
		if (files.length > 0) {
			const reader = new FileReader();
			reader.onload = ev => {
				onDrop(ev.target.result);
			};
			reader.readAsDataURL(files[0]);
		}
	});
	return dropZone;
}
function mDropZone1(dropZone, onDrop) {
	dropZone.addEventListener('dragover', function (event) {
		event.preventDefault();
		dropZone.style.border = '2px dashed #007bff';
	});
	dropZone.addEventListener('dragleave', function (event) {
		event.preventDefault();
		dropZone.style.border = '2px dashed #ccc';
	});
	dropZone.addEventListener('drop', function (evDrop) {
		evDrop.preventDefault();
		dropZone.style.border = '2px dashed #ccc';
		const files = evDrop.dataTransfer.files;
		if (files.length > 0) {
			const reader = new FileReader();
			reader.onload = evReader => {
				onDrop(evReader.target.result, dropZone);
			};
			reader.readAsDataURL(files[0]);
		}
	});
	return dropZone;
}
function mDroppable(item, handler, dragoverhandler) {
	function allowDrop(ev) { ev.preventDefault(); }
	let d = iDiv(item);
	d.ondragover = isdef(dragoverhandler) ? dragoverhandler : allowDrop;
	d.ondrop = handler;
}
function mDummyFocus() {
	if (nundef(mBy('dummy'))) mDom(document.body, { position: 'absolute', top: 0, left: 0, opacity: 0, h: 0, w: 0, padding: 0, margin: 0, outline: 'none', border: 'none', bg: 'transparent' }, { tag: 'button', id: 'dummy', html: 'dummy' }); //addDummy(document.body); //, 'cc');
	mBy('dummy').focus();
}
function mFlex(d, or = 'h') {
	d = toElem(d);
	d.style.display = 'flex';
	d.style.flexFlow = (or == 'v' ? 'column' : 'row') + ' ' + (or == 'w' ? 'wrap' : 'nowrap');
}
function mFlexBaseline(d) { mStyle(d, { display: 'flex', 'align-items': 'baseline' }); }
function mFlexLR(d) { mStyle(d, { display: 'flex', 'justify-content': 'space-between', 'align-items': 'center' }); }
function mFlexLine(d, startEndCenter = 'center') { mStyle(d, { display: 'flex', 'justify-content': startEndCenter, 'align-items': 'center' }); }
function mFlexSpacebetween(d) { mFlexLR(d); }
function mFlexV(d) { mStyle(d, { display: 'flex', 'align-items': 'center' }); }
function mFlexVWrap(d) { mStyle(d, { display: 'flex', 'align-items': 'center', 'flex-flow': 'row wrap' }); }
function mFlexWrap(d) { mFlex(d, 'w'); }
function mGather(f, d, styles = {}, opts = {}) {
	//f can be: mInput, 
	return new Promise((resolve, _) => {
		let dShield = mShield();
		let fCancel = _ => { dShield.remove(); hotkeyDeactivate('Escape'); resolve(null) };
		let fSuccess = val => { dShield.remove(); hotkeyDeactivate('Escape'); resolve(val) };
		dShield.onclick = fCancel;
		hotkeyActivate('Escape', fCancel);
		let [box, inp] = mInBox(f, dShield, styles, {}, dictMerge(opts, { fSuccess }));
		mAlign(box, d, { align: 'bl', offx: 20 });
		inp.focus();
	});
}
function mGetStyle(elem, prop) {
	let val;
	elem = toElem(elem);
	if (prop == 'bg') { val = getStyleProp(elem, 'background-color'); if (isEmpty(val)) return getStyleProp(elem, 'background'); }
	else if (isdef(STYLE_PARAMS_2[prop])) { val = getStyleProp(elem, STYLE_PARAMS_2[prop]); }
	else {
		switch (prop) {
			case 'vmargin': val = stringBefore(elem.style.margin, ' '); break;
			case 'hmargin': val = stringAfter(elem.style.margin, ' '); break;
			case 'vpadding': val = stringBefore(elem.style.padding, ' '); break;
			case 'hpadding': val = stringAfter(elem.style.padding, ' '); break;
			case 'box': val = elem.style.boxSizing; break;
			case 'dir': val = elem.style.flexDirection; break;
		}
	}
	if (nundef(val)) val = getStyleProp(elem, prop);
	if (val.endsWith('px')) return firstNumber(val); else return val;
}
function mHasClass(el, className) {
	if (el.classList) return el.classList.contains(className);
	else {
		let x = !!el.className;
		return isString(x) && !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	}
}
function mHomeLogo(d, key, styles = {}, handler = null, menu = null) {
	addKeys({ display: 'flex', align: 'center', justify: 'center' }, styles);
	let ui = mKey(key, d, { maright: 12, fz: 30, cursor: 'pointer' }, { onclick: handler, menu });
	return ui;
}
function mIfNotRelative(d) { d = toElem(d); if (isEmpty(d.style.position)) d.style.position = 'relative'; }
function mImg(src, d, styles = {}, opts = {}) {
	let [w, h] = mSizeSuccession(styles, 40);
	addKeys({ w, h, 'object-fit': 'cover', 'object-position': 'center center' }, styles);
	addKeys({ tag: 'img', src }, opts)
	let img = mDom(d, styles, opts);
	return img;
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
			if (callback) callback(img);
			resolve(img);
		};
		img.onerror = (error) => {
			reject(error);
		};
		img.src = opts.src;
	});
}
function mInBox(f, dParent, boxStyles = {}, inpStyles = {}, opts = {}) {
	let dbox = mDom(dParent, boxStyles);
	let dinp = f(dbox, inpStyles, opts);
	return [dbox, dinp];
}
function mInput(dParent, styles = {}, opts = {}) {
	addKeys({ tag: 'input', id: getUID(), placeholder: '', autocomplete: "off", value: '', selectOnClick: true, type: "text" }, opts);
	let d = mDom(dParent, styles, opts);
	d.onclick = opts.selectOnClick ? ev => { evNoBubble(ev); d.select(); } : ev => { evNoBubble(ev); };
	d.onkeydown = ev => {
		if (ev.key == 'Enter' && isdef(opts.fSuccess)) { evNoBubble(ev); opts.fSuccess(d.value); }
		else if (ev.key == 'Escape' && isdef(opts.fCancel)) { evNoBubble(ev); opts.fCancel(); }
	}
	return d;
}
function mInsert(dParent, el, index = 0) { dParent.insertBefore(el, dParent.childNodes[index]); return el; }
function mLoadImgAsync(d, styles = {}, opts = {}, callback = null) {
	return new Promise((resolve, reject) => {
		let img = document.createElement('img');
		mAppend(d, img);
		mStyle(img, styles, opts);
		img.onload = async () => {
			if (callback) callback(img);
			resolve(img);
		};
		img.onerror = (error) => {
			reject(error);
		};
		img.src = opts.src;
	});
}
function mLinebreak(dParent, gap = 0) {
	dParent = toElem(dParent);
	let display = getComputedStyle(dParent).display;
	if (display == 'flex') {
		d = mDom(dParent, { 'flex-basis': '100%', h: gap, hline: gap, w: '100%' }, { html: '' });
	} else {
		d = mDom(dParent, { hline: gap, h: gap }, { html: '&nbsp;' });
	}
	return d;
}
function mMagnify(elem, scale = 5) {
	elem.classList.add(`topmost`);
	MAGNIFIER_IMAGE = elem;
	const rect = elem.getBoundingClientRect();
	let [w, h] = [rect.width * scale, rect.height * scale];
	let [cx, cy] = [rect.width / 2 + rect.left, rect.height / 2 + rect.top];
	let [l, t, r, b] = [cx - w / 2, cy - h / 2, cx + w / 2, cy + h / 2];
	let originX = 'center';
	let originY = 'center';
	let [tx, ty] = [0, 0];
	if (l < 0) { tx = -l / scale; }
	if (t < 0) { ty = -t / scale; }
	if (r > window.innerWidth) { tx = -(r - window.innerWidth) / scale; }
	if (b > window.innerHeight) { ty = -(b - window.innerHeight) / scale; }
	elem.style.transform = `scale(${scale}) translate(${tx}px,${ty}px)`;
	elem.style.transformOrigin = `${originX} ${originY}`;
}
function mMagnifyOff() {
	if (!MAGNIFIER_IMAGE) return;
	let elem = MAGNIFIER_IMAGE;
	MAGNIFIER_IMAGE = null;
	elem.classList.remove(`topmost`);
	elem.style.transform = null;
}
function mMenuH(d, text, styles = {}, handler = null, menu = null, kennzahl = null) {
	if (nundef(kennzahl)) kennzahl = getUID();
	addKeys({ deco: 'none', className: 'a', rounding: 10, wmin: 100, margin: 4, align: 'center' }, styles)
	let ui = mDom(d, styles, { tag: 'a', html: text, href: '#', onclick: handler, kennzahl, menu });
	return ui;
}
function mMenuV(d, text, styles = {}, handler = null, menu = null, kennzahl = null) {
	if (nundef(kennzahl)) kennzahl = getUID();
	addKeys({ display: 'block', deco: 'none', className: 'a', rounding: 10, margin: 4, align: 'center' }, styles)
	let ui = mDom(d, styles, { tag: 'a', html: text, href: '#', onclick: handler, kennzahl, menu });
	return ui;
}
function mOnEnter(elem, handler) {
	elem.addEventListener('keydown', ev => {
		if (ev.key == 'Enter') {
			ev.preventDefault();
			mDummyFocus();
			if (handler) handler(ev);
		}
	});
}
function mOnEnterInput(elem, handler) {
	elem.addEventListener('keydown', ev => {
		if (ev.key == 'Enter') {
			ev.preventDefault();
			mDummyFocus();
			if (handler) handler(ev.target.value);
		}
	});
}
async function mPhpDeleteFile(path) { return await mPostPhp('delete_file', { path }); }
async function mPhpGetFile(path) { return await mPostPhp('read_file', { path }, false); }
async function mPhpPostAudio(url, path) { return await mPostPhp('dl', { url, path }); }
async function mPhpPostFile(text, path) { return await mPostPhp('write_file', { text, path }, false); }
async function mPhpPostLine(line, path) { return await mPostPhp('append_action', { line, path }, false); }
async function mPhpPostText(text, path) { return await mPostPhp('append_text', { text, path }, false); }
function mPickOneOfGrid(dParent, styles = {}, opts = {}) {
	let d0 = mDom(dParent, dictMerge(styles, { gap: 6 }), opts);
	mGrid(d0);
	function onclick(ev) {
		evNoBubble(ev);
		if (isdef(opts.fSuccess)) opts.fSuccess(ev.target.innerHTML);
	}
	for (const html of opts.list) {
		mDom(d0, {}, { tag: 'button', html, onclick });
	}
	return d0;
}
function mPlace(elem, pos, offx, offy) {
	elem = toElem(elem);
	pos = pos.toLowerCase();
	let dParent = elem.parentNode; mIfNotRelative(dParent);
	let hor = valf(offx, 0);
	let vert = isdef(offy) ? offy : hor;
	if (pos[0] == 'c' || pos[1] == 'c') {
		let dpp = dParent.parentNode;
		let opac = mGetStyle(dParent, 'opacity'); //console.log('opac', opac);
		if (nundef(dpp)) { mAppend(document.body, dParent); mStyle(dParent, { opacity: 0 }) }
		let rParent = getRect(dParent);
		let [wParent, hParent] = [rParent.w, rParent.h];
		let rElem = getRect(elem);
		let [wElem, hElem] = [rElem.w, rElem.h];
		if (nundef(dpp)) { dParent.remove(); mStyle(dParent, { opacity: valf(opac, 1) }) }
		switch (pos) {
			case 'cc': mStyle(elem, { position: 'absolute', left: hor + (wParent - wElem) / 2, top: vert + (hParent - hElem) / 2 }); break;
			case 'tc': mStyle(elem, { position: 'absolute', left: hor + (wParent - wElem) / 2, top: vert }); break;
			case 'bc': mStyle(elem, { position: 'absolute', left: hor + (wParent - wElem) / 2, bottom: vert }); break;
			case 'cl': mStyle(elem, { position: 'absolute', left: hor, top: vert + (hParent - hElem) / 2 }); break;
			case 'cr': mStyle(elem, { position: 'absolute', right: hor, top: vert + (hParent - hElem) / 2 }); break;
		}
		return;
	}
	let di = { t: 'top', b: 'bottom', r: 'right', l: 'left' };
	elem.style.position = 'absolute';
	let kvert = di[pos[0]], khor = di[pos[1]];
	elem.style[kvert] = vert + 'px'; elem.style[khor] = hor + 'px';
}
function mPos(d, x, y, offx = 0, offy = 0, unit = 'px') {
	let dParent = d.parentNode; mIfNotRelative(dParent);
	mStyle(d, { left: `${x + offx}${unit}`, top: `${y + offy}${unit}`, position: 'absolute' });
}
async function mPostPhp(cmd, o, jsonResult = true, projectName = 'iai_yaml') {
	let sessionType = detectSessionType();
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : 'http://localhost:8080/fastcomet/';
	if (isdef(o.path) && (o.path.startsWith('zdata') || o.path.startsWith('y'))) o.path = '../../' + o.path;
	let res = await fetch(server + `${projectName}/php/${cmd}.php`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(o), // Send the line in POST request
		}
	);
	let text;
	try {
		text = await res.text();
		if (!jsonResult) {
			return text;
		}
		let obj = JSON.parse(text);
		return obj;
	} catch (e) {
		return isString(text) ? text : e;
	}
}
function mSelect(dParent, styles = {}, opts = {}) {
	let d0 = mDom(dParent, dictMerge(styles, { gap: 6 }), opts);
	mCenterCenterFlex(d0);
	function onclick(ev) {
		evNoBubble(ev);
		if (isdef(opts.fSuccess)) opts.fSuccess(ev.target.innerHTML);
	}
	for (const html of opts.list) {
		mDom(d0, {}, { tag: 'button', html, onclick });
	}
	return d0;
}
function mShade(names, offset = 1, contrast = 1) {
	let palette = paletteTransWhiteBlack(names.length * contrast + 2 * offset).slice(offset);
	for (const name of names) {
		let d = toElem(name);
		mStyle(d, { bg: palette.shift(), fg: 'contrast', wbox: true });
	}
}
function mShape(shape, dParent, styles = {}, opts = {}) {
	styles = jsCopy(styles);
	styles.display = 'inline-block';
	let [w, h] = mSizeSuccession(styles, 100);
	addKeys({ w, h }, styles);
	let clip = PolyClips[shape];
	if (nundef(clip)) styles.round = true; else styles.clip = clip;
	let d = mDom(dParent, styles, opts);
	if (isdef(opts.pos)) { mPlace(d, opts.pos); }
	else if (isdef(opts.center)) centerAt(d, opts.center.x, opts.center.y);
	return d;
}
function mShield(dParent, styles = {}, opts = {}) {
	addKeys({ bg: '#00000080' }, styles);
	addKeys({ id: 'shield' }, opts);
	dParent = valf(toElem(dParent), document.body);
	let d = mDom(dParent, styles, opts);
	mIfNotRelative(dParent);
	mStyle(d, { position: 'absolute', left: 0, top: 0, w: '100%', h: '100%' });
	mClass(d, 'topmost');
	return d;
}
function mSizeSuccession(styles = {}, szDefault = 100, fromWidth = true) {
	let [w, h] = [styles.w, styles.h];
	if (fromWidth) {
		w = valf(w, styles.sz, h, szDefault);
		h = valf(h, styles.sz, w, szDefault);
	} else {
		h = valf(h, styles.sz, w, szDefault);
		w = valf(w, styles.sz, h, szDefault);
	}
	return [w, h];
}
function mSleep(ms = 1000) {
	return new Promise(
		(res, rej) => {
			if (ms > 10000) { ms = 10000; }
			if (isdef(TO.SLEEPTIMEOUT)) clearTimeout(TO.SLEEPTIMEOUT);
			TO.SLEEPTIMEOUT = setTimeout(res, ms);
			setTimeout(() => {
				try {
					rej(`PROMISE REJECT ${isdef(TO.SLEEPTIMEOUT)}`);
				} catch (err) {
					console.log(`WTF!!!!!!!!!!!!!!!!!!`, err);
				}
			}, ms + 1);
		});
}
function mStyle(elem, styles = {}, opts = {}) {
	elem = toElem(elem);
	styles = jsCopy(styles);
	let noUnit = ['opacity', 'flex', 'grow', 'shrink', 'grid', 'z', 'iteration', 'count', 'orphans', 'widows', 'weight', 'order', 'index'];
	const STYLE_PARAMS_3 = {
		bgSrc: (elem, v) => elem.style.backgroundImage = `url(${v})`,
		gridRows: (elem, v) => elem.style.gridTemplateRows = isNumber(v) ? `repeat(${v},1fr)` : v,
		gridCols: (elem, v) => elem.style.gridTemplateColumns = isNumber(v) ? `repeat(${v},1fr)` : v,
		html: (elem, v) => elem.innerHTML = v,
		hpadding: (elem, v) => elem.style.padding = `0 ${v}px`,
		vpadding: (elem, v) => elem.style.padding = `${v}px ${valf(styles.hpadding, 0)}px`,
		hmargin: (elem, v) => elem.style.margin = `0 ${v}px`,
		vmargin: (elem, v) => elem.style.margin = `${v}px ${valf(styles.hmargin, 0)}px`,
		w100: elem => elem.style.width = '100%',
		h100: elem => elem.style.height = '100%',
		round: elem => elem.style.borderRadius = '50%',
		wbox: (elem, v) => elem.style.boxSizing = v ? 'border-box' : 'content-box',
		wrap: (elem, v) => { if (v == 'hard') elem.setAttribute('wrap', 'hard'); else elem.style.flexWrap = 'wrap'; }
	};
	for (const k in styles) {
		let v = styles[k];
		let key = STYLE_PARAMS_2[k];
		let val = isNumber(v) && !noUnit.some(x => k.includes(x)) || k == 'fz' ? '' + Number(v) + 'px' : v;
		if (isdef(key)) { elem.style.setProperty(key, val); continue; }
		if (v == 'contrast') { //nur bei fg verwenden!!!!
			let bg = nundef(styles.bg) ? mGetStyle(elem, 'bg') : colorFrom(styles.bg);
			elem.style.setProperty('color', colorIdealText(bg));
		} else if (k == 'bg') {
			if (v.includes('grad')) elem.style.setProperty('background', v);
			else if (v.includes('/')) elem.style.setProperty('background-image', `url(${v})`);
			else elem.style.setProperty('background-color', colorFrom(v, styles.alpha));
			continue;
		} else if (k == 'fg') {
			elem.style.setProperty('color', colorFrom(v, styles.alpha));
			continue;
		} else if (k.startsWith('class')) {
			mClass(elem, v)
			continue;
		} else if (isdef(STYLE_PARAMS_3[k])) {
			STYLE_PARAMS_3[k](elem, v);
		} else elem.style.setProperty(k, val);
	}
	applyOpts(elem, opts);
}
function mToggle(ev) {
	let key = ev.target.getAttribute('data-toggle');
	let t = DA.toggle[key];
	let prev = t.state;
	t.state = (t.state + 1) % t.seq.length;
	let html = t.seq[t.state];
	mStyle(t.elem, { bg: t.states[html] }, { html });
	if (isdef(t.handler)) t.handler(key, prev, t.state);
}
function mToggleButton() {
	let list = Array.from(arguments);
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
		list.map(x => mStyle(x, { display: 'none' }));
		mStyle(b, { display: 'inline' });
	}
	return tb;
}
function mToggleElem(elem, key, states, seq, i, handler) {
	if (nundef(DA.toggle)) DA.toggle = {};
	let t = DA.toggle[key] = { handler, key, elem, state: i, states, seq };
	elem.setAttribute('data-toggle', key);
	mStyle(elem, { cursor: 'pointer' });
	let html = seq[i];
	mStyle(elem, { bg: states[html] }, { html });
	elem.onclick = mToggle;
	return t;
}
function mYesNo(dParent, styles = {}, opts = {}) {
	return mSelect(dParent, styles, dictMerge(opts, { list: ['yes', 'no'] }));
}










