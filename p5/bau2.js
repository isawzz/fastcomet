
function mGatherSelect(d, styles = {}, opts = {}) {
	return new Promise((resolve, _) => {
		let dParent = mShield(document.body,resolve);
		//let onEscape = _ => resolve(null); //{ dParent.remove(); resolve(null) };
		let onchange = val => {resolve(val);} // { dParent.remove(); resolve(val) };

		//let [box, inp] = mInputInBox(dParent, {}, {}, dictMerge(opts,{ onEnter, onEscape }));
		//console.log('styles', styles,'\nopts',opts)
		let [box, inp] = mSelectInBox(dParent, styles, {}, dictMerge(opts,{onchange})); //dictMerge(opts, { onEscape, onchange }));

		mAlign(box, d, { align: 'bl', offx: 20 });
		if (inp) inp.focus();


	});
}
function mSelect(dParent, styles = {}, opts = {}) {
	//addKeys({fg:'black',bg:'white'},styles)
	let d0 = mDom(dParent, styles, opts);
	mCenterCenterFlex(d0);
	//let d1=mDom(d0,{},{html:'ewew'});
	//let d2=mDom(d0, {}, {});
	function onclick(ev) {
		let html = ev.target.innerHTML;
		//mStyle(d1,{},{html});
		evNoBubble(ev);
		opts.onchange(html);
	}
	for (const html of opts.list) {
		mDom(d0, { margin: 6 }, { tag: 'button', html, onclick });

	}
	//let dDefault = arrChildren(d0)[0];
	// hotkeyActivate('Escape', ev => {
	// 	if (isdef(opts.onEscape)) { opts.onEscape();  }
	// });
	// document.onkeydown = ev => {
	// 	if (ev.key == 'Escape' && isdef(opts.onEscape)) { opts.onEscape(); }
	// }
	return d0;
}
function mSelectInBox(dParent, boxStyles = {}, inpStyles = {}, opts = {}) {
	let dbox = mDom(dParent, boxStyles);
	let dinp = mSelect(dbox, inpStyles, opts);
	return [dbox, dinp];
}
function mShield(dParent, resolve,styles = {}, opts = {}) {
	function close(){
		console.log('close!');
		mBy('shield').remove();
		hotkeyDeactivate('Escape'); resolve(null);
	}
	addKeys({ bg: '#00000080' }, styles);
	addKeys({ id:'shield', hideOnClick: true, hideOnEscape: true }, opts);
	dParent = toElem(dParent); //console.log(dParent);
	let d = mDom(dParent, styles, opts);
	mIfNotRelative(dParent);

	mStyle(d, { position: 'absolute', left: 0, top: 0, w: '100%', h: '100%' });
	if (opts.onclick) d.onclick = opts.onclick;
	else if (opts.hideOnClick) d.onclick = ev => { evNoBubble(ev); close(); };
	else d.onclick = ev => { evNoBubble(ev); };
	if (opts.hideOnEscape) hotkeyActivate('Escape', ev => { evNoBubble(ev); close(); });
	mClass(d, 'topmost');
	return d;
}


function mDropdown(dParent, styles = {}, opts = {}) {
	let list = toNameValueList(opts.list);
	addKeys({ tag: 'select' }, opts);
	let dselect = mDom(dParent, styles, opts);
	for (const el of list) { mDom(dselect, {}, { tag: 'option', html: el.name, value: el.value }); }
	dselect.onkeydown = ev => {
		if (ev.key == 'Escape' && isdef(opts.onEscape)) { opts.onEscape(); }
	}
	dselect.onclick = evNoBubble;
	//dselect.onfocus = ()=>dselect.click()
	dselect.onchange = ev=>opts.onchange(ev.target.value)
	dselect.value = '';

  dselect.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
  });

  // Create and dispatch the event
  const event = new KeyboardEvent('keydown', {
    key: 'Enter',       // The key value
    char: 'a',      // The character representation (deprecated in favor of `key`)
		keyCode: 13,    // The key code value
    code: 'Enter',   // The physical key on the keyboard
    bubbles: true,  // Allow the event to bubble
    cancelable: true // Allow the event to be canceled
  });

  // Dispatch the event on the input box
  dselect.dispatchEvent(event);


	return dselect;
}
function mInputInBox(dParent, boxStyles = {}, inpStyles = {}, opts = {}) {
	let dbox = mDom(dParent, boxStyles);
	let dinp = mInput(dbox, inpStyles, opts);
	return [dbox, dinp];
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


