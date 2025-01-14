

function createEmojiInput(dParent) {

	// Create the input element
	dParent = toElem(dParent);
	const input = mDom(dParent,{},{tag:'input'});

	// Set attributes to ensure emoji support
	input.type = "text"; // Default text input supports emoji
	input.placeholder = "Type emojis here 😊"; // Placeholder text
	input.style.fontSize = "1.2em"; // Increase font size for better visibility
	input.style.padding = "10px"; // Add some padding for comfort
	input.style.borderRadius = "5px"; // Rounded edges for aesthetics
	input.style.border = "1px solid #ccc"; // Subtle border styling

	// Append the input to the body or a specific container
	//document.body.appendChild(input);

	// Optionally, focus on the input when created
	input.focus();
	return input;
}
function findKeys(type) {
	if (type == 'plain') return commandWords;
	let list = dict2list(M.superdi);
	return list.filter(x => isdef(x[type])).map(x => x.id);

}
function findUniqueSuperdiKey(friendly) {
	console.log('friendly', friendly)
	let name = friendly;
	let i = 1;
	let imgname = null;
	while (true) {
		let o = M.superdi[name];
		if (nundef(o)) { break; }
		console.log(o.colls.includes('emo'))
		if (isdef(o.img) && isdef(o.photo) || ['emo', 'fa6', 'icon'].every(x => !o.colls.includes(x))) { name = friendly + (i++); continue; }
		else if (isdef(o.photo)) { imgname = 'photo'; break; }
		else { imgname = 'img'; break; }
	}
	return [name, imgname];
}
function isKeyPressedDown(controlKey) {
	let isPressed = false;
	window.addEventListener('keydown', (event) => {
		if (event.key.toLowerCase() === controlKey.toLowerCase()) {
			isPressed = true;
		}
	});
	window.addEventListener('keyup', (event) => {
		if (event.key.toLowerCase() === controlKey.toLowerCase()) {
			isPressed = false;
		}
	});
	return () => isPressed;
}
function isSpacePressed() {
	const spacePressed = isKeyPressedDown('Space');
	setInterval(() => {
		if (isSpacePressed()) {
			console.log('Space key is being pressed down');
		}
	}, 100);
}
function isToggleState(key, nword) {
	let toggle = DA.toggle[key];
	return toggle.state == n || toggle.seq[toggle.state] == nword;
}
function mCard52(key, d, styles = {}, opts = {}) { }
function measureEmojiWidth(text, fontSize = 16) {
	// Create a temporary element to hold the text
	const container = document.createElement('div');
	container.style.position = 'absolute';
	container.style.whiteSpace = 'nowrap';
	container.style.fontSize = `${fontSize}px`;
	container.style.fontFamily = 'Noto Color Emoji';
	container.style.visibility = 'hidden';
	container.textContent = text;

	// Append it to the document to measure
	document.body.appendChild(container);

	// Measure the width using a Range object
	const range = document.createRange();
	range.selectNodeContents(container);
	const width = range.getBoundingClientRect().width;

	// Clean up
	document.body.removeChild(container);

	return width;
}
function _mKey(key, d, styles = {}, opts = {}) {

	console.log('key', key, opts);

	//	let [w, h] = mSizeSuccession(styles, 40); //console.log(w, h)
	//addKeys({ w, h, display:'flex', 'align-items': 'center', 'justify-content': 'center', padding:4 }, styles);
	//let d=mDom(dParent,styles);

	if (key.includes('.')) return mImg(src, d, {}, opts);
	if ('HSCD'.includes(key[0]) && key.length == 2) return mCard52(key, d, {}, opts);
	if (isLetter(key[0]) && key[0] == key[0].toUpperCase()) { opts.html = key; return mDom(d, {}, opts); }
	let o = findSym(key);
	console.log(o)
	// return;
	if (!o) { opts.html = key; return mDom(d, {}, opts); }

	let type = opts.prefer;
	if (nundef(type)) type = isdef(o.img) ? 'img' : isdef(o.fa6) ? 'fa6' : isdef(o.text) ? 'text' : isdef(o.fa) ? 'fa' : isdef(o.ga) ? 'ga' : isdef('photo') ? 'photo' : 'text';
	console.log('type', type);

	if (type == 'img' || type == 'photo') return mImg(o[type], d, {}, opts);
	//return;
	let family = type == 'text' ? 'emoNoto' : type == 'fa6' ? 'fa6' : type == 'fa' ? 'pictoFa' : 'pictoGame';
	let text = type == 'text' ? o.text : String.fromCharCode('0x' + o[type]);




	//addKeys({ family, fz: h, w, h, display: 'inline-block' }, styles); //console.log(styles)
	// addKeys({ family, fz: h }, styles); //console.log(styles)
	addKeys({ family }, styles); //console.log(styles)
	let [w1, h1] = measureText(text, styles); console.log(w1, h1);//console.log(w,w1,h,h1);
	return mDom(d, styles, { html: text });
}
function _mKey(key, dParent, styles = {}, opts = {}) {

	console.log('key', key, opts);

	let [w, h] = mSizeSuccession(styles, 40); //console.log(w, h)
	addKeys({ w, h, display: 'flex', 'align-items': 'center', 'justify-content': 'center', padding: 4 }, styles);
	let d = mDom(dParent, styles);

	if (key.includes('.')) return mImg(src, d, {}, opts);
	if ('HSCD'.includes(key[0]) && key.length == 2) return mCard52(key, d, {}, opts);
	if (isLetter(key[0]) && key[0] == key[0].toUpperCase()) { opts.html = key; return mDom(d, {}, opts); }
	let o = findSym(key);
	console.log(o)
	return;
	if (!o) { opts.html = key; return mDom(d, {}, opts); }

	let type = opts.prefer;
	if (nundef(type)) type = isdef(o.img) ? 'img' : isdef(o.fa6) ? 'fa6' : isdef(o.text) ? 'text' : isdef(o.fa) ? 'fa' : isdef(o.ga) ? 'ga' : isdef('photo') ? 'photo' : 'text';
	console.log('type', type);

	if (type == 'img' || type == 'photo') return mImg(o[type], d, {}, opts);
	//return;
	let family = type == 'text' ? 'emoNoto' : type == 'fa6' ? 'fa6' : type == 'fa' ? 'pictoFa' : 'pictoGame';
	let text = type == 'text' ? o.text : String.fromCharCode('0x' + o[type]);




	//addKeys({ family, fz: h, w, h, display: 'inline-block' }, styles); //console.log(styles)
	addKeys({ family, fz: h }, styles); //console.log(styles)
	let [w1, h1] = measureText(text, styles); console.log(w, w1, h, h1);
	return mDom(d, {}, { html: text });
}
function mKey2(item, d, styles = {}, opts = {}) {
	let type = item.itemtype = isdef(item.itemtype) ? item.itemtype : is_card(item) ? 'card' : isdef(M.superdi[item.key]) ? 'sym' : isdef(item.o) ? 'container' : isdef(item.src) ? 'img' : 'string';
	let [el, o, d1, fz, fg] = [null, item.o, dInstruction, 30, 'grey'];
	if (type == 'sym') {
		if (isdef(o.img)) { el = mDom(d1, { h: fz, hmargin: 8, 'object-fit': 'cover', 'object-position': 'center center' }, { tag: 'img', src: `${o.img}` }); }
		else if (isdef(o.text)) el = mDom(d1, { hmargin: 8, fz: fz, hline: fz, family: 'emoNoto', fg: fg, display: 'inline' }, { html: o.text });
		else if (isdef(o.fa6)) el = mDom(d1, { hmargin: 8, fz: fz - 2, hline: fz, family: 'fa6', bg: 'transparent', fg: fg, display: 'inline' }, { html: String.fromCharCode('0x' + o.fa6) });
		else if (isdef(o.fa)) el = mDom(d1, { hmargin: 8, fz: fz, hline: fz, family: 'pictoFa', bg: 'transparent', fg: fg, display: 'inline' }, { html: String.fromCharCode('0x' + o.fa) });
		else if (isdef(o.ga)) el = mDom(d1, { hmargin: 8, fz: fz, hline: fz, family: 'pictoGame', bg: 'beige', fg: fg, display: 'inline' }, { html: String.fromCharCode('0x' + o.ga) });
	} else if (isdef(item.present)) {
		el = item.present(item, d1, { sz: fz, fg: fg });
	} else assertion(false, `WRONG ITEM TYPE ${type}`)
	mStyle(el, { cursor: 'pointer' })
	el.id = getUID(); A.di[el.id] = item;
	el.onclick = callback;
}
function _mLayoutTLM(bg,dParent){
	mStyle(dParent, { w: '100%', h: '100%', bg, 'caret-color': '#ffffff00' });
	let names = M.divNames = mAreas(dParent, ` 'dTop dTop' 'dLeft dMain' `, 'minmax(140px, auto) 1fr', 'minmax(40px, auto) 1fr'); 
	mStyle(dTop, { display: 'flex', padding:4, wbox:true, gap:4 }); 
	mShade(names);
	return names.map(x=>mBy(x));

}
function _mS(s, d, styles = {}, opts = {}) {
	let type = opts.type ?? isdef(M.superdi[s]) ? 'sym' : s.includes('.') ? 'img' : 'string';
	console.log('type', type);
	if (type == 'sym') {
		let o = M.superdi[s];
		if (isdef(o.img)) { el = mDom(d1, { h: fz, hmargin: 8, 'object-fit': 'cover', 'object-position': 'center center' }, { tag: 'img', src: `${o.img}` }); }
		else if (isdef(o.text)) el = mDom(d1, { hmargin: 8, fz: fz, hline: fz, family: 'emoNoto', fg: fg, display: 'inline' }, { html: o.text });
		else if (isdef(o.fa6)) el = mDom(d1, { hmargin: 8, fz: fz - 2, hline: fz, family: 'fa6', bg: 'transparent', fg: fg, display: 'inline' }, { html: String.fromCharCode('0x' + o.fa6) });
		else if (isdef(o.fa)) el = mDom(d1, { hmargin: 8, fz: fz, hline: fz, family: 'pictoFa', bg: 'transparent', fg: fg, display: 'inline' }, { html: String.fromCharCode('0x' + o.fa) });
		else if (isdef(o.ga)) el = mDom(d1, { hmargin: 8, fz: fz, hline: fz, family: 'pictoGame', bg: 'beige', fg: fg, display: 'inline' }, { html: String.fromCharCode('0x' + o.ga) });
	} else if (isdef(item.present)) {
		el = item.present(item, d1, { sz: fz, fg: fg });
	} else assertion(false, `WRONG ITEM TYPE ${type}`)
	mStyle(el, { cursor: 'pointer' })
	el.id = getUID(); A.di[el.id] = item;
	el.onclick = callback;
}
function mSym(key, dParent, styles = {}, pos, classes) {
  let info = M.superdi[key];
  styles.display = 'inline-block';
  let family = info.family;
  styles.family = family;
  let sizes;
  if (isdef(styles.sz)) { sizes = mSymSizeToBox(info, styles.sz, styles.sz); }
  else if (isdef(styles.w) && isdef(styles.h)) { sizes = mSymSizeToBox(info, styles.w, styles.h); }
  else if (isdef(styles.fz)) { sizes = mSymSizeToFz(info, styles.fz); }
  else if (isdef(styles.h)) { sizes = mSymSizeToH(info, styles.h); }
  else if (isdef(styles.w)) { sizes = mSymSizeToW(info, styles.w); }
  else { sizes = mSymSizeToFz(info, 25); }
  styles.fz = sizes.fz;
  styles.w = sizes.w;
  styles.h = sizes.h;
  styles.align = 'center';
  if (isdef(styles.bg) && info.family != 'emoNoto') { styles.fg = styles.bg; delete styles.bg; }
  let x = mDiv(dParent, styles, null, info.text);
  if (isdef(classes)) mClass(x, classes);
  if (isdef(pos)) { mPlace(x, pos); }
  return x;
}
function mSymSizeToBox(info, w, h) {
  let fw = w / info.w;
  let fh = h / info.h;
  let f = Math.min(fw, fh);
  return { fz: 100 * f, w: info.w * f, h: info.h * f };
}
function mSymSizeToFz(info, fz) { let f = fz / 100; return { fz: fz, w: info.w * f, h: info.h * f }; }

function mSymSizeToH(info, h) { let f = h / info.h; return { fz: 100 * f, w: info.w * f, h: h }; }

function mSymSizeToW(info, w) { let f = w / info.w; return { fz: 100 * f, w: w, h: info.h * f }; }
function mToggle(ev) {
	let key = ev.target.getAttribute('data-toggle');
	let t = DA.toggle[key];
	let prev = t.state;
	t.state = (t.state + 1) % t.seq.length;
	let html = t.seq[t.state];
	mStyle(t.elem, { bg: t.states[html] }, { html });
	if (isdef(t.handler)) t.handler(key, prev, t.state);
}
function mToggleElem(elem, key, states, seq, i, handler) {
	//states is a dictionary attributing a color to each state word
	//seq is a list of states how they change when toggle is triggered
	//i is index in seq that should be the initial state
	if (nundef(DA.toggle)) DA.toggle = {};

	let t = DA.toggle[key] = { handler, key, elem, state: i, states, seq };

	elem.setAttribute('data-toggle', key);
	mStyle(elem, { cursor: 'pointer' });
	let html = seq[i];
	mStyle(elem, { bg: states[html] }, { html });
	elem.onclick = mToggle;
	return t;
}
function _mTooltip(oid) {
  $('#' + oid).unbind('mouseover mouseout');
  $('#' + oid).mouseover(function (e) {
    e.stopPropagation();
    let id = evToId(e);
    if (TT_JUST_UPDATED != id) {
      TT_JUST_UPDATED = id;
      updateTooltipContent(id);
      $('div#tooltip').css({
        display: 'inline-block',
        top: e.pageY,
        left: e.pageX,
      });
    }
  });
  $('#' + oid).mouseout(function (e) {
    if (TT_JUST_UPDATED == oid) TT_JUST_UPDATED = -1;
    e.stopPropagation();
    $('div#tooltip').css({
      top: 0,
      left: 0,
      display: 'none'
    });
  });
}
function _mTooltip(d, text) {
	d.addEventListener('mouseenter', (event) => {
		console.log('hallo!!!!')
		DA.tooltip.style.visibility = 'visible';
		DA.tooltip.style.opacity = '1';

		// Position the tooltip
		const rect = d.getBoundingClientRect();
		DA.tooltip.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
		DA.tooltip.style.top = `${rect.top + window.scrollY + 4}px`; // Add 5px spacing
	});

	// Hide tooltip on mouseleave
	d.addEventListener('mouseleave', () => {
		console.log('goodbye!!!!')
		DA.tooltip.style.visibility = 'hidden';
		DA.tooltip.style.opacity = '0';
	});
}
function oneOfEachType(n = 1) {
	let types = ['fa', 'ga', 'fa6', 'img', 'text', 'photo'];
	let lists = types.map(x => [x, findKeys(x)]);
	console.log('lists', lists);

	//let res = recFlatten(lists.map(x=>rChoose(x,n))); console.log(res)
	return lists;
}
function showDetailsAndMagnify(elem) {
	let key = elem.firstChild.getAttribute('key'); //console.log('key',key)
	if (nundef(key)) return;
	let o = getDetailedSuperdi(key);
	MAGNIFIER_IMAGE = elem;
	if (nundef(o)) { mMagnify(elem); return; }
	let d = mPopup(null, {}, { id: 'hallo' });
	let title = fromNormalized(valf(o.name, o.friendly));
	mDom(d, {}, { tag: 'h1', html: title });
	mDom(d, {}, { tag: 'img', src: valf(o.photo, o.img) });
	showDetailsPresentation(o, d);
}
function _updateTooltipContent(oid) {
  let pool = findPool(oid);
  let o = pool[oid];
  ttTitle(oid, o);
  ttBody(oid, o);
}
function valfKey(o, arr) {
  for (const w of arr) { if (isdef(o[w])) return w; }
  return null;
}
function valfKeyVal(key) {
  let o = M.superdi[key];
  let di = { text: 'emoNoto', fa6: 'fa6', fa: 'pictoFa', ga: 'pictoGame' };
  let k1 = valfKey(o, Object.keys(di));
  if (k1) return { html: String.fromCharCode('0x' + o[k1]), family: di[k1] }
  return null;
}
function wsOffspringSymbol(dParent, styles = {}) {
	console.log(styles)
	let [w, h] = [styles.h, styles.h];
	console.log(w, h)
	let d = mDom(dParent, { w, h, box: true });//,bg:'orange'}); //w100:true,h100:true,bg:'lime'});
	let fz = styles.h; let hline = fz;
	mIfNotRelative(d);
	let o = M.superdi.big_egg;
	let [fam, sym] = isdef(o.fa6) ? ['fa6', 'fa6'] : isdef(o.fa) ? ['pictoFa', 'fa'] : ['pictoGame', 'ga'];
	let dEgg = mDom(d, { fg: 'grey', family: fam, fz, padding: 0, hline }, { html: String.fromCharCode('0x' + o[sym]) });
	o = M.superdi.paw;
	[fam, sym] = isdef(o.fa6) ? ['fa6', 'fa6'] : isdef(o.fa) ? ['pictoFa', 'fa'] : ['pictoGame', 'ga'];
	let dPaw = mDom(d, { w100: true, fg: 'black', family: fam, fz: 8, hline }, { html: String.fromCharCode('0x' + o[sym]) });
	mCenterFlex(dPaw)
	mPlace(dPaw, 'tc')
}












