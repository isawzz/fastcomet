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


//#region mGather uiType
function clamp(x, min, max) { return Math.min(Math.max(x, min), max); }
function isPointOutsideOf(elem, x, y) { const r = elem.getBoundingClientRect(); return (x < r.left || x > r.right || y < r.top || y > r.bottom); }
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
function mDummyFocus() {
	if (nundef(mBy('dummy'))) mDom(document.body,{opacity: 0, h: 0, w: 0, padding: 0, margin: 0, outline: 'none', border: 'none', bg: 'transparent'},{tag:'button',id:'dummy',html:'dummy'}); //addDummy(document.body); //, 'cc');
	mBy('dummy').focus();
}
function mGather(dAnchor, styles = {}, opts = {}) {
	return new Promise((resolve, _) => {
		let [content, type] = [valf(opts.content, 'name'), valf(opts.type, 'text')]; //defaults
		let dbody = document.body;
		let dDialog = mDom(dbody, { bg: '#00000040', border:'none', box: true, w: '100vw', h: '100vh' }, { tag: 'dialog', id: 'dDialog' });
		let d = mDom(dDialog);
		let funcName = `uiGadgetType${capitalize(type)}`; //console.log(funcName)
		let uiFunc = window[funcName];
		let dx = uiFunc(d, content, x => { dDialog.remove(); resolve(x) }, styles, opts);
		if (isdef(opts.title)) mInsert(dx, mCreateFrom(`<h2>Details for ${opts.title}</h2>`))
		dDialog.addEventListener('mouseup', ev => {
			if (opts.type != 'select' && isPointOutsideOf(dx, ev.clientX, ev.clientY)) {
				resolve(null);
				dDialog.remove();
			}
		});
		dDialog.addEventListener('keydown', ev => {
			if (ev.key === 'Escape') {
				dDialog.remove();
				console.log('RESOLVE NULL ESCAPE');
				resolve(null);
			}
		});
		dDialog.showModal();
		if (isdef(dAnchor)) mAnchorTo(dx, toElem(dAnchor), opts.align);
		else { mStyle(d, { h: '100vh' }); mCenterCenterFlex(d); }
	});
}
function mPos(d, x, y, offx=0, offy=0, unit = 'px') { 
  let dParent = d.parentNode; mIfNotRelative(dParent);
  mStyle(d, { left: `${x+offx}${unit}`, top: `${y+offy}${unit}`, position: 'absolute' }); 
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
function mIfNotRelative(d) { d = toElem(d); if (isEmpty(d.style.position)) d.style.position = 'relative'; }
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
function uiGadgetTypeCheckList(dParent, content, resolve, styles = {}, opts = {}) {
	addKeys({ hmax: 500, wmax: 200, bg: 'white', fg: 'black', padding: 10, rounding: 10, box: true }, styles)
	let dOuter = mDom(dParent, styles);
	let hmax = styles.hmax - 193, wmax = styles.wmax;
	let innerStyles = { hmax, wmax, box: true };
	let ui = uiTypeCheckList(content, dOuter, innerStyles, opts);
	let handler = () => resolve(getCheckedNames(ui));
	mButton('done', handler, dOuter, { classes: 'input', margin: 10 });
	return dOuter;
}
function uiGadgetTypeCheckListInput(form, content, resolve, styles, opts) {
	addKeys({ wmax: '100vw', hmax: valf(styles.hmax, 500), bg: 'white', fg: 'black', padding: 10, rounding: 10, box: true }, styles)
	let dOuter = mDom(form, styles);
	opts.handler = resolve;
	let ui = uiTypeCheckListInput(content, dOuter, styles, opts);
	return dOuter;
}
function uiGadgetTypeMulti(dParent, dict, resolve, styles = {}, opts = {}) {
	let inputs = [];
	let formStyles = opts.showLabels ? { wmin: 400, padding: 10, bg: 'white', fg: 'black' } : {};
	let form = mDom(dParent, formStyles, { tag: 'form', method: null, action: "javascript:void(0)" })
	for (const k in dict) {
		let [content, val] = [k, dict[k]];
		if (opts.showLabels) mDom(form, {}, { html: content });
		let inp = mDom(form, styles, { autocomplete: 'off', className: 'input', name: content, tag: 'input', type: 'text', value: val, placeholder: `<enter ${content}>` });
		inputs.push({ name: content, inp: inp });
		mNewline(form)
	}
	mDom(form, { display: 'none' }, { tag: 'input', type: 'submit' });
	form.onsubmit = ev => {
		ev.preventDefault();
		let di = {};
		inputs.map(x => di[x.name] = x.inp.value);
		resolve(di);
	}
	return form;
}
function uiGadgetTypeMultiText(dParent, dict, resolve, styles = {}, opts = {}) {
	let inputs = [];
	let wIdeal = 500;
	let formStyles = { maleft: 10, wmin: wIdeal, padding: 10, bg: 'white', fg: 'black' };
	let form = mDom(dParent, formStyles, {})
	addKeys({ className: 'input', tag: 'textarea', }, opts);
	addKeys({ fz: 14, family: 'tahoma', w: wIdeal, resize: 'none' }, styles);
	let df = mDom(form);
	let db = mDom(form, { vmargin: 10, align: 'right' });
	mButton('Cancel', ev => resolve(null), db, { classes: 'button', maright: 10 });
	mButton('Save', ev => {
		let di = {};
		inputs.map(x => di[x.name] = x.inp.value);
		resolve(di);
	}, db, { classes: 'button', maright: 10 });
	if (isEmpty(dict)) {
		fillFormFromObject(inputs, wIdeal, df, db, styles, opts);
	} else {
		fillMultiForm(dict, inputs, wIdeal, df, styles, opts);
	}
	return form;
}
function uiGadgetTypeSelect(dParent, content, resolve, styles = {}, opts = {}) {
	let dSelect = uiTypeSelect(content, dParent, styles, opts);
	dSelect.onchange = ev => resolve(ev.target.value);
	return dSelect;
}
function uiGadgetTypeText(dParent, content, resolve, styles = {}, opts = {}) {
	let inp = mDom(dParent, styles, { autocomplete: 'off', className: 'input', name: content, tag: 'input', type: 'text', placeholder: valf(opts.placeholder, `<enter ${content}>`) });
	mOnEnterInput(inp, resolve);
	return inp;
}
function uiGadgetTypeYesNo(dParent, content, resolve, styles = {}, opts = {}) {
	addKeys({ bg: 'white', fg: 'black', padding: 10, rounding: 10, box: true }, styles)
	let dOuter = mDom(dParent, styles)
	let dq = mDom(dOuter, { mabottom: 7 }, { html: capitalize(content) });
	let db = mDom(dOuter, { w100: true, box: true, display: 'flex', 'justify-content': 'space-between', gap: 10 })
	let bYes = mDom(db, { w: 70, classes: 'input' }, { html: 'Yes', tag: 'button', onclick: () => resolve('yes') })
	let bNo = mDom(db, { w: 70, classes: 'input' }, { html: 'No', tag: 'button', onclick: () => resolve('no') })
	return dOuter;
}
async function uiTypeCalendar(dParent) {
	const [wcell, hcell, gap] = [120, 100, 10];
	let outerStyles = {
		rounding: 4, patop: 4, pabottom: 4, weight: 'bold', box: true,
		paleft: gap / 2, w: wcell, hmin: hcell,
		bg: 'black', fg: 'white', cursor: 'pointer'
	}
	let innerStyles = { box: true, padding: 0, align: 'center', bg: 'beige', rounding: 4 };//, w: '95%', hmin: `calc( 100% - 24px )` }; //cellWidth - 28 };
	innerStyles.w = wcell - 11.75;
	innerStyles.hmin = `calc( 100% - 23px )`;//hcell-32
	let fz = 12;
	let h = measureHeightOfTextStyle(dParent, { fz: fz }); //console.log('h', h)
	let eventStyles = { fz: fz, hmin: h, w: '100%' };
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var dParent = toElem(dParent);
	var container = mDiv(dParent, {}, 'dCalendar');
	var currentDate = new Date();
	var today = new Date();
	let dTitle = mDiv(container, { w: 890, vpadding: gap, fz: 26, family: 'sans-serif', display: 'flex', justify: 'space-between' }, { className: 'title' });
	var dWeekdays = mGrid(1, 7, container, { gap: gap });
	var dDays = [];
	var info = {};
	for (const w of weekdays) { mDiv(dWeekdays, { w: wcell }, null, w, 'subtitle') };
	var dGrid = mGrid(6, 7, container, { gap: gap });
	var dDate = mDiv(dTitle, { display: 'flex', gap: gap }, 'dDate', '', 'title');
	var dButtons = mDiv(dTitle, { display: 'flex', gap: gap });
	mButton('Prev',
		async () => {
			let m = currentDate.getMonth();
			let y = currentDate.getFullYear();
			if (m == 0) setDate(12, y - 1); else await setDate(m, y);
		},
		dButtons, { w: 70, margin: 0 }, 'input');
	mButton('Next',
		async () => {
			let m = currentDate.getMonth();
			let y = currentDate.getFullYear();
			if (m == 11) setDate(1, y + 1); else await setDate(m + 2, y);
		}, dButtons, { w: 70, margin: 0 }, 'input');
	var dMonth, dYear;
	function getDayDiv(dt) {
		if (dt.getMonth() != currentDate.getMonth() || dt.getFullYear() != currentDate.getFullYear()) return null;
		let i = dt.getDate() + info.dayOffset;
		if (i < 1 || i > info.numDays) return null;
		let ui = dDays[i];
		if (ui.style.opacity === 0) return null;
		return ui.children[0];
	}
	async function setDate(m, y) {
		currentDate.setMonth(m - 1);
		currentDate.setFullYear(y);
		mClear(dDate);
		dMonth = mDiv(dDate, {}, 'dMonth', `${currentDate.toLocaleDateString('en-us', { month: 'long' })}`);
		dYear = mDiv(dDate, {}, 'dYear', `${currentDate.getFullYear()}`);
		mClear(dGrid);
		dDays.length = 0;
		let c = getNavBg();
		let dayColors = mimali(c, m).map(x => colorFrom(x))
		for (const i of range(42)) {
			let cell = mDiv(dGrid, outerStyles);
			mStyle(cell, { bg: dayColors[i], fg: 'contrast' })
			dDays[i] = cell;
		}
		populate(currentDate);
		await refreshEvents();
		return { container, date: currentDate, dDate, dGrid, dMonth, dYear, setDate, populate };
	}
	function populate() {
		let dt = currentDate;
		const day = info.day = dt.getDate();
		const month = info.month = dt.getMonth();
		const year = info.year = dt.getFullYear();
		const firstDayOfMonth = info.firstDay = new Date(year, month, 1);
		const daysInMonth = info.numDays = new Date(year, month + 1, 0).getDate();
		const dateString = info.dayString = firstDayOfMonth.toLocaleDateString('en-us', {
			weekday: 'long',
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
		});
		const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
		info.dayOffset = paddingDays - 1;
		for (const i of range(42)) {
			if (i < paddingDays || i >= paddingDays + daysInMonth) { mStyle(dDays[i], { opacity: 0 }); }
		}
		for (let i = paddingDays + 1; i <= paddingDays + daysInMonth; i++) {
			const daySquare = dDays[i - 1];
			let date = new Date(year, month, i - paddingDays);
			daySquare.innerText = i - paddingDays + (isSameDate(date, today) ? ' TODAY' : '');
			let d = mDom(daySquare, innerStyles, { id: date.getTime() });
			daySquare.onclick = ev => { evNoBubble(ev); onclickDay(d, eventStyles); }
		}
	}
	async function refreshEvents() {
		let events = await getEvents();
		for (const k in events) {
			let o = events[k];
			let dt = new Date(Number(o.day));
			let dDay = getDayDiv(dt);
			if (!dDay) continue;
			uiTypeEvent(dDay, o, eventStyles);
		}
		mDummyFocus();
	}
	await setDate(currentDate.getMonth() + 1, currentDate.getFullYear());
	return { container, date: currentDate, dDate, dGrid, dMonth, dYear, info, getDayDiv, refreshEvents, setDate, populate }
}
function uiTypeCheckList(any, dParent, styles = {}, opts = {}) {
	let lst = toNameValueList(any); lst.map(x => { if (x.value !== true) x.value = false; });
	addKeys({ overy: 'auto' }, styles)
	let d = mDom(dParent, styles, opts);
	lst.forEach((o, index) => {
		let [text, value] = [o.name, o.value];
		let dcheck = mDom(d, {}, { tag: 'input', type: 'checkbox', name: text, value: text, id: `ch_${index}`, checked: value });
		let dlabel = mDom(d, {}, { tag: 'label', for: dcheck.id, html: text });
		mNewline(d, 0);
	});
	return d;
}
function uiTypeCheckListInput(any, dParent, styles = {}, opts = {}) {
	let dg = mDom(dParent);
	let list = toNameValueList(any); list.map(x => { if (x.value != true) x.value = false; });
	let items = [];
	for (const o of list) {
		let div = mCheckbox(dg, o.name, o.value);
		items.push({ nam: o.name, div, w: mGetStyle(div, 'w'), h: mGetStyle(div, 'h') });
	}
	let wmax = arrMax(items, 'w'); //console.log('wmax',wmax); //measure max width of items
	let cols = 4;
	let wgrid = wmax * cols + 100;
	dg.remove();
	dg = mDom(dParent);
	let inp = mDom(dg, { w100: true, box: true, mabottom: 10 }, { className: 'input', tag: 'input', type: 'text' });
	let db = mDom(dg, { w100: true, box: true, align: 'right', mabottom: 4 });
	mButton('cancel', () => opts.handler(null), db, {}, 'input');
	mButton('clear', ev => { onclickClear(inp, grid) }, db, { maleft: 10 }, 'input');
	mButton('done', () => opts.handler(extractWords(inp.value, ' ')), db, { maleft: 10 }, 'input');
	mStyle(dg, { w: wgrid, box: true, padding: 10 }); //, w: wgrid })
	console.log('...hmax', styles.hmax)
	let hmax = valf(styles.hmax, 450);
	let grid = mGrid(null, cols, dg, { w100: true, gap: 10, matop: 4, hmax: hmax - 150 }); //, bg:'red' });
	items.map(x => mAppend(grid, iDiv(x)));
	sortCheckboxes(grid);
	let chks = Array.from(dg.querySelectorAll('input[type="checkbox"]'));
	for (const chk of chks) {
		chk.addEventListener('click', ev => checkToInput(ev, inp, grid))
	}
	inp.value = list.filter(x => x.value).map(x => x.name).join(', ');
	inp.addEventListener('keypress', ev => inpToChecklist(ev, grid));
	return { dg, inp, grid };
}
function uiTypeEvent(dParent, o, styles = {}) {
	Items[o.id] = o;
	let id = o.id;
	let ui = mDom(dParent, styles, { id: id }); //, className:'no_events'}); //onclick:ev=>evNoBubble(ev) }); 
	mStyle(ui, { overflow: 'hidden', display: 'flex', gap: 2, padding: 2, 'align-items': 'center' }); //,'justify-items':'center'})
	let [wtotal, wbutton, h] = [mGetStyle(dParent, 'w'), 17, styles.hmin];
	let fz = 15;
	let stInput = { overflow: 'hidden', hline: fz * 4 / 5, fz: fz, h: h, border: 'solid 1px silver', box: true, margin: 0, padding: 0 };
	let inp = mDom(ui, stInput, { html: o.text, tag: 'input', className: 'no_outline', onclick: ev => { evNoBubble(ev) } }); //;selectText(ev.target);}});
	inp.value = getEventValue(o);
	inp.addEventListener('keyup', ev => { if (ev.key == 'Enter') { mDummyFocus(); onEventEdited(id, inp.value); } });
	fz = 14;
	let stButton = { overflow: 'hidden', hline: fz * 4 / 5, fz: fz, box: true, fg: 'silver', bg: 'white', family: 'pictoFa', display: 'flex' };
	let b = mDom(ui, stButton, { html: String.fromCharCode('0x' + M.superdi.pen_square.fa) });
	ui.onclick = ev => { evNoBubble(ev); onclickExistingEvent(ev); }
	mStyle(inp, { w: wtotal - wbutton });
	return { ui: ui, inp: inp, id: id };
}
function uiTypeExtraWorker(w) {
	let [res, n] = [stringBefore(w, ':'), Number(stringAfter(w, ':'))];
	let s = `worker (cost:${res} ${n})`
	let present = presentExtraWorker;
	let select = selectExtraWorker;
	return { itemtype: 'worker', a: s, key: `worker_${res}`, o: { res: res, n: n }, friendly: s, present, select }
}
async function uiTypePalette(dParent, color, fg, src, blendMode) {
	let fill = color;
	let bgBlend = getBlendCanvas(blendMode);
	let d = mDom(dParent, { w100: true, gap: 4 }); mCenterFlex(d);
	let NewValues = { fg, bg: color };
	let palette = [color];
	let dContainer = mDom(d, { w: 500, h: 300 });
	if (isdef(src)) {
		let ca = await getCanvasCtx(dContainer, { w: 500, h: 300, fill, bgBlend }, { src });
		palette = await getPaletteFromCanvas(ca.cv);
		palette.unshift(fill);
	} else {
		palette = arrCycle(paletteShades(color), 4);
	}
	let dominant = palette[0];
	let palContrast = paletteContrastVariety(palette, palette.length);
	mLinebreak(d);
	let bgItems = showPaletteMini(d, palette);
	mLinebreak(d);
	let fgItems = showPaletteMini(d, palContrast);
	mLinebreak(d);
	mIfNotRelative(dParent);
	let dText = mDom(dParent, { 'pointer-events': 'none', align: 'center', fg: 'white', fz: 30, position: 'absolute', top: 0, left: 0, w100: true, h100: true });
	mCenterFlex(dText);
	dText.innerHTML = `<br>HALLO<br>das<br>ist ein Text`
	for (const item of fgItems) {
		let div = iDiv(item);
		mStyle(div, { cursor: 'pointer' });
		div.onclick = () => {
			mStyle(dText, { fg: item.bg });
			NewValues.fg = item.bg;
			console.log('NewValues', NewValues);
		}
	}
	for (const item of bgItems) {
		let div = iDiv(item);
		mStyle(div, { cursor: 'pointer' });
		div.onclick = async () => {
			if (isdef(src)) {
				mClear(dContainer);
				let fill = item.bg;
				await getCanvasCtx(dContainer, { w: 500, h: 300, fill, bgBlend }, { src });
			}
			mStyle(dParent, { bg: item.bg });
			NewValues.bg = item.bg;
		}
	}
	async function onclickSaveMyTheme() {
		if (U.fg == NewValues.fg && U.color == NewValues.bg) return;
		U.fg = NewValues.fg;
		U.color = NewValues.bg;
		await updateUserTheme();
		await onclickSettMyTheme();
	}
	mButton('Save', onclickSaveMyTheme, dParent, { matop: 10, className: 'button' })
	return { pal: palette.map(x => colorO(x)), palContrast };
}
function uiTypePlayerStats(table, me, dParent, layout, styles = {}) {
	let dOuter = mDom(dParent); dOuter.setAttribute('inert', true); //console.log(dOuter)
	if (layout == 'rowflex') mStyle(dOuter, { display: 'flex', justify: 'center' });
	else if (layout == 'col') mStyle(dOuter, { display: 'flex', dir: 'column' });
	addKeys({ rounding: 10, bg: '#00000050', margin: 4, box: true, 'border-style': 'solid', 'border-width': 2 }, styles);
	let show_first = me;
	let order = arrCycle(table.plorder, table.plorder.indexOf(show_first));
	let items = {};
	for (const name of order) {
		let pl = table.players[name];
		styles['border-color'] = pl.color;
		let d = mDom(dOuter, styles, { id: name2id(name) })
		let img = showUserImage(name, d, 40); mStyle(img, { box: true })
		items[name] = { div: d, img, name };
	}
	return items;
}
function uiTypeRadios(lst, d, styles = {}, opts = {}) {
	let rg = mRadioGroup(d, {}, 'rSquare', 'Resize (cropped area) to height: '); mClass(rg, 'input');
	let handler = x => squareTo(cropper, x);
	mRadio(`${'just crop'}`, 0, 'rSquare', rg, {}, cropper.crop, 'rSquare', false)
	for (const h of [128, 200, 300, 400, 500, 600, 700, 800]) {
		mRadio(`${h}`, h, 'rSquare', rg, {}, handler, 'rSquare', false)
	}
	return rg;
}
function uiTypeSelect(any, dParent, styles = {}, opts = {}) {
	let list = toNameValueList(any);
	addKeys({ className: 'input', tag: 'select' }, opts);
	let dselect = mDom(dParent, styles, opts);
	for (const el of list) { mDom(dselect, {}, { tag: 'option', html: el.name, value: el.value }); }
	dselect.value = '';
	return dselect;
}


//#endregion

//#region format date time
function formatDate(d) {
	const date = isdef(d) ? d : new Date();
	const month = ('0' + date.getMonth()).slice(0, 2);
	const day = date.getDate();
	const year = date.getFullYear();
	const dateString = `${month}/${day}/${year}`;
	return dateString;
}
function formatDate1(d) {
	if (nundef(d)) d = Date.now();
	let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
	let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
	let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
	return `${da}-${mo}-${ye}`;
}
function formatDate2(d) { if (nundef(d)) d = new Date(); return d.toISOString().slice(0, 19).replace("T", " "); }
function formatDate3(d) { if (nundef(d)) d = new Date(); return d.toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " "); }
function formatNow() { return new Date().toISOString().slice(0, 19).replace("T", " "); }
function getFormattedDate() {
	const date = new Date();

	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
	const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed

	return `${year}-${month}-${day}`;
}
function getFormattedTime() {
	const date = new Date();

	const hours = String(date.getHours()).padStart(2, '0'); // Get hours (24-hour format)
	const minutes = String(date.getMinutes()).padStart(2, '0'); // Get minutes

	return `${hours}:${minutes}`;
}

//#endregion

//#region toggle zeug
function mToggle(label, dParent, styles = {}, handler, is_on, styleyes, styleno, classes = null) {
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



