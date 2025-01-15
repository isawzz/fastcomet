
function mGather(d, styles = {}, opts = {}) {
	return new Promise((resolve, _) => {
		let dParent = mShield(document.body, {});
		let onEscape = _ => { dParent.remove(); resolve(null) };
		let onEnter = val => { dParent.remove(); resolve(val) };
		dParent.onclick = onEscape;

		let [box, inp] = mInputInBox(dParent, {}, {}, { onEnter, onEscape });


		mAlign(box, d, { align: 'bl', offx: 20 });
		inp.focus();
	});
}
function mInput(dParent, styles = {}, opts = {}) {
	addKeys({ id: getUID(), placeholder: '', value: '', selectOnClick: true, type: "text" }, opts);
	let html = `<input type="${opts.type}" autocomplete="off" id=${opts.id} placeholder="${valf(opts.placeholder, '')}" tabindex="${opts.tabindex}" value="${opts.value}">`;
	let d = mAppend(dParent, mCreateFrom(html));
	d.onclick = opts.selectOnClick ? ev => { evNoBubble(ev); d.select(); } : ev => { evNoBubble(ev); };
	d.onkeydown = ev => {
		if (ev.key == 'Enter' && isdef(opts.onEnter)) { evNoBubble(ev); opts.onEnter(d.value); }
		else if (ev.key == 'Escape' && isdef(opts.onEscape)) { evNoBubble(ev); opts.onEscape(); }
	}
	if (isdef(styles)) mStyle(d, styles);
	return d;
}
function mInputInBox(dParent, boxStyles = {}, inpStyles = {}, opts = {}) {
	let d5 = mDom(dParent, boxStyles);
	let d6 = mInput(d5, inpStyles, opts);
	return [d5, d6];
}
function mShield(dParent, styles = {}, opts = {}) {
	addKeys({ bg: '#00000080' }, styles);
	addKeys({ hideonclick: true }, opts);
	dParent = toElem(dParent); //console.log(dParent);
	let d = mDom(dParent, styles, opts);
	mIfNotRelative(dParent);

	mStyle(d, { position: 'absolute', left: 0, top: 0, w: '100%', h: '100%' });
	if (opts.onclick) d.onclick = opts.onclick;
	else if (opts.hideonclick) d.onclick = ev => { evNoBubble(ev); d.remove(); };
	else d.onclick = ev => { evNoBubble(ev); };
	mClass(d, 'topmost');
	return d;
}

