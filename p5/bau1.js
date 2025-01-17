
function mGather(f, d, styles = {}, opts = {}) {
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
function mInBox(f, dParent, boxStyles = {}, inpStyles = {}, opts = {}) {
	let dbox = mDom(dParent, boxStyles);
	let dinp = f(dbox, inpStyles, opts);
	return [dbox, dinp];
}
function mInput(dParent, styles = {}, opts = {}) {
	addKeys({ tag:'input', id: getUID(), placeholder: '', autocomplete:"off", value: '', selectOnClick: true, type: "text" }, opts);
	let d=mDom(dParent,styles,opts);
	d.onclick = opts.selectOnClick ? ev => { evNoBubble(ev); d.select(); } : ev => { evNoBubble(ev); };
	d.onkeydown = ev => {
		if (ev.key == 'Enter' && isdef(opts.fSuccess)) { evNoBubble(ev); opts.fSuccess(d.value); }
		else if (ev.key == 'Escape' && isdef(opts.fCancel)) { evNoBubble(ev); opts.fCancel(); }
	}
	return d;
}
function mSelect(dParent, styles = {}, opts = {}) {
	let d0 = mDom(dParent, dictMerge(styles,{gap:6}), opts);
	mCenterCenterFlex(d0);

	function onclick(ev) {
		evNoBubble(ev);
		if (isdef(opts.fSuccess)) opts.fSuccess(ev.target.innerHTML);
	}
	for (const html of opts.list) {
		mDom(d0, {  }, { tag: 'button', html, onclick });
	}
	return d0;
}
function mYesNo(dParent,  styles = {}, opts = {}) {
	return mSelect(dParent, styles, dictMerge(opts, { list: ['yes', 'no'] }));
}
function mShield(dParent,styles = {}, opts = {}) {
	addKeys({ bg: '#00000080' }, styles);
	addKeys({ id:'shield' }, opts);
	dParent = valf(toElem(dParent),document.body); //console.log(dParent);
	let d = mDom(dParent, styles, opts);
	mIfNotRelative(dParent);
	mStyle(d, { position: 'absolute', left: 0, top: 0, w: '100%', h: '100%' });
	mClass(d, 'topmost');
	return d;
}






