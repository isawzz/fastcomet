
function mGatherDropdown(d, styles = {}, opts = {}) {
	return new Promise((resolve, _) => {
		let dParent = mShield(document.body, {});
		let onEscape = _ => { dParent.remove(); resolve(null) };
		let onchange = val => { dParent.remove(); resolve(val) };
		dParent.onclick = onEscape;

		//let [box, inp] = mInputInBox(dParent, {}, {}, dictMerge(opts,{ onEnter, onEscape }));
		//console.log('styles', styles,'\nopts',opts)
		let [box, inp] = mDropdownInBox(dParent, styles, {}, dictMerge(opts, { onEscape, onchange }));

		mAlign(box, d, { align: 'bl', offx: 20 });
		if (inp) inp.focus();


	});
}
function mDropdownInBox(dParent, boxStyles = {}, inpStyles = {}, opts = {}) {
	let dbox = mDom(dParent, boxStyles);
	let dinp = createSelect(dbox, inpStyles, opts);
	return [dbox, dinp];
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


