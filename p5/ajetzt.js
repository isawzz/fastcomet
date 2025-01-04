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




