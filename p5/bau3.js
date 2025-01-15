
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

