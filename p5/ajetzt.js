
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



