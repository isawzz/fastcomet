
function getUID(pref = '') {
	UIDCounter += 1;
	return pref + '_' + UIDCounter;
}
function mAlign(d, da, opts) {

	if (mGetStyle(d, 'display') != 'inline-block') {
		//need to wrap d in a div with display:inline-block
		let parent = d.parentNode;
		let wrapper = mDom(parent, { display: 'inline-block' });
		mAppend(wrapper, d);
		d = wrapper;
	}

	let rda = getRect(da); //console.log(rda)
	let rd = getRect(d); //console.log(rd)
	let align = valf(opts.align, 'bl'), ov = valf(opts.ov, 0);
	//priority keep vertical alignment: 
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
function mCreateFrom(htmlString) {
	var div = document.createElement('div');
	div.innerHTML = htmlString.trim();
	return div.firstChild;
}
function mGather(styles = {}, opts = {}) {
	return new Promise((resolve, _) => {
		let [content, type] = [valf(opts.content, 'name'), valf(opts.type, 'text')]; //defaults
		let dbody = document.body;
		// let dDialog = mDom(dbody, { bg: '#00000040', border:'none', box: true, w: '100vw', h: '100vh' }, { tag: 'dialog', id: 'dDialog' });
		let dDialog = mDom(dbody, { border: 'none', h: '100vh', w: '100vw', bg: 'silver', alpha: .15 }, { tag: 'dialog', id: 'dDialog' });
		dDialog.showModal();

		let d = mDom(dDialog, { bg: 'blue', display: 'flex', gap: 10 });
		for (const i of range(3)) { mDom(d, { bg: rColor(), w: 50, h: 50 }); }
		let da = opts.anchor; //console.log(da)
		addKeys({ offx: -3, offy: -3 }, opts)
		if (isdef(da)) mAlign(d, da, opts);

		// let funcName = `uiGadgetType${capitalize(type)}`; //console.log(funcName)
		// let uiFunc = window[funcName];
		// let dx = uiFunc(d, content, x => { dDialog.remove(); resolve(x) }, styles, opts);
		//dDialog.showModal();
	});
}
function mInput(dParent, styles = {}, opts = {}) {
	addKeys({ id: getUID(), placeholder: '', classtr: 'input', tabindex: null, value: '', selectOnClick: true, type: "text" }, opts);
	let html = `<input type="${opts.type}" autocomplete="off" ${opts.selectOnClick ? 'onclick="this.select();"' : ''} id=${opts.id} class="${opts.classtr}" placeholder="${valf(opts.placeholder, '')}" tabindex="${opts.tabindex}" value="${opts.value}">`;
	let d = mAppend(dParent, mCreateFrom(html));
	if (isdef(styles)) mStyle(d, styles);console.log(d)
	return d;
}
function mInputInBox(dParent, boxStyles = {}, inpStyles = {}, opts = {}) {
	let d5 = mDom(dParent, boxStyles);
	let d6 = mInput(d5, inpStyles, opts); //mDom(d5, inpStyles, { tag: 'input' });
	//d6.focus();
	if (isdef(opts.handler)) mOnEnterInput(d6, opts.handler);
	return [d5, d6];
}







