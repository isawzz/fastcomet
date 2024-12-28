


function clearTimeouts() { for (const tok in TO) { clearTimeout(TO[tok]); TO[tok] = null; } }
function keyDownHandler(ev) {
	//console.log('down',ev.key)
	if (nundef(DA.keysToCheck)) DA.keysToCheck = {};
	DA.keysToCheck[ev.key] = true;
}
function keyUpHandler(ev) {
	//console.log('up',ev.key)
	DA.keysToCheck[ev.key] = false;
}
function isKeyDown(key) { return lookup(DA.keysToCheck, [key]); }
function mHasClass(el, className) {
	if (el.classList) return el.classList.contains(className);
	else {
		let x = !!el.className;
		return isString(x) && !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	}
}
function mKey(key, type, dParent, styles = {}, opts = {}) {
	let o = M.superdi[key];
	let d1, sz = 40;
	let d = mDom(dParent, { wbox: true, className: ['a'], cursor: 'pointer', rounding: 4, wmin: sz, hmin: sz, w: sz, h: sz, display: 'flex', aitems: 'center', justify: 'center' }); //continue; //return;
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
		//console.log(w, h);
		//scale it so that it fits the container
		let scale = Math.min(sz / w, sz / h); //console.log('scale', scale);

		d1.style.transformOrigin = 'center center';
		d1.style.transform = `scale(${scale})`;
		d1.style.transform = `scale(${scale})`;
		//console.log('final size',getRect(d1));
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
function onHoverMagnify(elem, controlkey = null, ms = 1000, scale = 5) {
	elem = toElem(elem);
	elem.onmouseenter = function () { if (controlkey && !isKeyDown(controlkey)) return; clearTimeout(TO.onhover); TO.onhover = setTimeout(() => mMagnify(elem, scale), ms); };
	elem.onmouseleave = function () { clearTimeout(TO.onhover); TO.onhover = null; mMagnifyOff(); };
}
function onHoverTooltip(d, text, controlkey = null, ms = 2000, xfactor = 0.7, yfactor = 0.5) {

	d = toElem(d);
	mClass(d.parentNode, 'tooltip-container');
	if (nundef(DA.tooltip)) DA.tooltip = mDom('dPage', { className: 'tooltip' }, { tag: 'span', html: 'this is a tooltip' }); //return;

	d.addEventListener('mouseenter', () => {
		if (controlkey && !isKeyDown(controlkey)) return;
		if (DA.tooltip.innerHTML == text) return;
		TO.onhover = setTimeout(() => {

			DA.tooltip.innerHTML = text;
			DA.tooltip.style.visibility = 'visible';
			DA.tooltip.style.opacity = '1';

			// Position the tooltip
			const rect = d.getBoundingClientRect();
			DA.tooltip.style.left = `${rect.left + rect.width * xfactor + window.scrollX}px`;
			DA.tooltip.style.top = `${rect.top + rect.height * yfactor + window.scrollY}px`; // Add 5px spacing
		}, ms);
	});

	// Hide tooltip immediately on mouseleave
	d.addEventListener('mouseleave', () => {
		clearTimeout(TO.onhover); TO.onhover = null;// Clear timeout if mouse leaves early
		DA.tooltip.style.visibility = 'hidden';
		DA.tooltip.style.opacity = '0';
		DA.tooltip.innerHTML = '';
	});
}






