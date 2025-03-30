
function show(elem, isInline = false) {
	if (isString(elem)) elem = document.getElementById(elem);
	if (isSvg(elem)) {
		elem.setAttribute('style', 'visibility:visible');
	} else {
		elem.style.display = isInline ? 'inline-block' : null;
	}
	return elem;
}
async function showBlendMode(dParent, blendCSS) {
	let src = U.texture;
	let fill = U.color;
	let bgBlend = getBlendCanvas(blendCSS);
	let d1 = mDom(dParent);
	let ca = await getCanvasCtx(d1, { w: 300, h: 200, fill, bgBlend }, { src });
	let palette = await getPaletteFromCanvas(ca.cv);
	palette.unshift(fill); palette.splice(8);
	showPaletteMini(d1, palette);
	d1.onclick = async () => {
		U.palette = palette;
		U.blendMode = blendCSS;
		await updateUserTheme();
	}
}
async function showBlendModes() {
	let d = mBy('dSettingsMenu'); mClear(d);
	let dParent = mDom(d, { padding: 10, gap: 10 }); mFlexWrap(dParent);
	let list = arrMinus(getBlendModesCSS(), ['saturation', 'color']);
	for (const blendMode of list) { await showBlendMode(dParent, blendMode); }
}
function showBox(d, x, y) {
	let sz = rNumber(10, 50);
	mDom(d, { w: sz, h: sz, bg: 'red', position: 'absolute', left: x, top: y });
}
async function showCalendarApp() {
	if (!U) { console.log('you have to be logged in to use this menu!!!'); return; }
	showTitle('Calendar');
	let d1 = mDiv('dMain', { w: 800, h: 800, margin: 20 }); //, bg: 'white' })
	let x = DA.calendar = await uiTypeCalendar(d1);
}
function showChatMessage(o) {
	let d = mBy('dChatWindow'); if (nundef(d)) return;
	if (o.user == getUname()) mDom(d, { align: 'right' }, { html: `${o.msg}` })
	else mDom(d, { align: 'left' }, { html: `${o.user}: ${o.msg}` })
}
function showChatWindow() {
	let dChat = mDom('dRight', { padding: 10, fg: 'white', box: true }, { id: 'dChat', html: 'Chatbox' });
	UI.chatInput = mInput(dChat, { w: 260 }, 'inpChat', '<your message>', 'input', 1);
	UI.chatWindow = mDom(dChat, {}, { id: 'dChatWindow' });
	mOnEnter(UI.chatInput, ev => {
		let inp = ev.target;
		Socket.emit('message', { user: getUname(), msg: ev.target.value });
		ev.target.value = '';
	});
}
function showColor(dParent, c) {
	let [bg, name, bucket] = isDict(c) ? [c.hex, c.name, c.bucket] : [c, c, c];
	return mDom(dParent, { align: 'center', wmin: 120, padding: 2, bg, fg: colorIdealText(bg) }, { html: name + (bg != name ? `<br>${bg}` : '') });
}
function showColorBox(c, skeys = 'name hex hue sat lum', dParent = null, styles = {}) {
	let bg = c.hex;
	let fg = colorIdealText(bg);
	let keys = toWords(skeys);
	let st = jsCopy(styles)
	addKeys({ bg, fg, align: 'center' }, st);
	let textStyles = { weight: 'bold' };
	let d2 = mDom(dParent, st, { class: 'colorbox', dataColor: bg });
	mDom(d2, textStyles, { html: c[keys[0]] });
	let html = '';
	for (let i = 1; i < keys.length; i++) {
		let key = keys[i];
		let val = c[key];
		if (isNumber(val)) val = Number(val);
		if (val <= 1) val = from01ToPercent(val);
		html += `${key}:${val}<br>`;
	}
	let dmini = mDom(d2, {}, { html });
	let item = jsCopy(c);
	item.div = dmini;
	item.dOuter = d2;
	return item;
}
function showColorBoxes(w3extlist, skeys, dParent, styles = {}) {
	let d1 = mDom(dParent, { gap: 12, padding: 12 }); mFlexWrap(d1);
	let items = [];
	for (var c of w3extlist) {
		let item = showColorBox(c, skeys, d1, styles); items.push(item);
		items.push(item);
	}
	return items;
}
function showColorFromHue(dParent, hue, s = 100, l = 50) {
	let c = colorHsl360ArgsToHex79(hue, s, l);
	let w3 = colorNearestNamed(c, M.colorList);
	let d1 = showObject(w3, ['name', 'hex', 'bucket', 'hue'], dParent, { bg: w3.hex, wmin: 120 });
	d1.innerHTML += colorGetBucket(w3.hex);
}
async function showColors() {
	let d = mBy('dSettingsMenu'); mClear(d);
	let di = M.dicolor;
	let bucketlist = 'yellow orangeyellow orange orangered red magentapink magenta bluemagenta blue cyanblue cyan greencyan green yellowgreen'.split(' ');
	bucketlist = arrCycle(bucketlist, 8);
	for (const bucket of bucketlist) {
		let list = dict2list(di[bucket]);
		let clist = [];
		for (const c of list) {
			let o = w3color(c.value);
			o.name = c.id;
			o.hex = c.value;
			clist.push(o);
		}
		let sorted = sortByFunc(clist, x => -x.lightness);
		_showPaletteNames(d, sorted);
	}
	let divs = document.getElementsByClassName('colorbox');
	for (const div of divs) {
		mStyle(div, { cursor: 'pointer' })
		div.onclick = async () => onclickColor(div.getAttribute('dataColor'));
	}
}
async function showDashboard() {
	let me = getUname();
	if (me == 'guest') { mDom('dMain', { align: 'center', className: 'section' }, { html: 'click username in upper right corner to log in' }); return; }
	homeSidebar(150);
	mAdjustPage(150);
	let div = mDom100('dMain');
	let d1 = mDom(div); mCenterFlex(d1)
	let dta = mDom(d1, { gap: 10, padding: 12 }, { className: 'section' });
	let dblog = mDom(d1, { w100: true, align: 'center' });
	let blog = U.blog;
	if (nundef(blog)) return;
	for (const bl of blog) {
		let dx = mDom(dblog, {}, { className: 'section', html: bl.text });
	}
}
function showDeck(keys, dParent, splay, w, h) {
	let d = mDiv(dParent);
	mStyle(d, { display: 'block', position: 'relative', bg: 'green', padding: 25 });
	let gap = 10;
	let ovPercent = 20;
	let overlap = w * ovPercent / 100;
	let x = y = gap;
	for (let i = 0; i < keys.length; i++) {
		let k = keys[i];
		let c = zInno(k, d);
		mAppend(d, c.div);
		mStyle(c.div, { position: 'absolute', left: x, top: y });
		c.row = 0;
		c.col = i;
		x += overlap;
		Pictures.push(c);
	}
	d.style.width = (x - overlap + w) + 'px';
	console.log(Pictures[0])
	console.log(Pictures[0].div)
	d.style.height = firstNumber(Pictures[0].div.style.height) + 'px';
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
function showDetailsPresentation(o, dParent) {
	let onew = {};
	let nogo = ['longSpecies', 'ooffsprings', 'name', 'cats', 'colls', 'friendly', 'ga', 'fa', 'fa6', 'text', 'key', 'nsize', 'nweight', 'img', 'photo']
	for (const k in o) {
		if (nogo.includes(k)) continue;
		let val = o[k];
		let knew = k == 'ofoodtype' ? 'foodtype' : k;
		if (isString(val)) {
			val = replaceAll(val, '>-', '');
			val = val.trim();
			if (val.startsWith("'")) val = val.substring(1);
			if (val.endsWith("'")) val = val.substring(0, val.length - 1);
			if (val.includes(':')) val = stringAfter(val, ':')
			onew[knew] = capitalize(val.trim());
		}
		if (k == 'food') console.log(onew[knew])
	}
	onew = sortDictionary(onew);
	return showObjectInTable(onew, dParent, { w: window.innerWidth * .8 });
}
async function showDirPics(dir, dParent) {
	let imgs = await mGetFiles(dir);
	for (const fname of imgs) {
		let src = `${dir}/${fname}`;
		let sz = 200;
		let styles = { 'object-position': 'center top', 'object-fit': 'cover', h: sz, w: sz, round: true, border: `${rColor()} 2px solid` }
		let img = mDom(dParent, styles, { tag: 'img', src });
	}
}
function showDiv(d) { mStyle(d, { bg: rColor() }); console.log(d, mGetStyle(d, 'w')); }
function showEventOpen(id) {
	let e = Items[id];
	if (!e) return;
	let date = new Date(Number(e.day));
	let [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()];
	let time = e.time;
	let popup = openPopup();
	let d = mBy(id);
	let [x, y, w, h, wp, hp] = [d.offsetLeft, d.offsetTop, d.offsetWidth, d.offsetHeight, 300, 180];
	let [left, top] = [Math.max(10, x + w / 2 - wp / 2), Math.min(window.innerHeight - hp - 60, y + h / 2 - hp / 2)]
	mStyle(popup, { left: left, top: top, w: wp, h: hp });
	let dd = mDom(popup, { display: 'inline-block', fz: '80%', maleft: 3, pabottom: 4 }, { html: `date: ${day}.${month + 1}.${year}` });
	let dt = mDom(popup, { display: 'inline-block', fz: '80%', maleft: 20, pabottom: 4 }, { html: `time:` });
	let inpt = mDom(popup, { fz: '80%', maleft: 3, mabottom: 4, w: 60 }, { tag: 'input', value: e.time });
	mOnEnter(inpt);
	let ta = mDom(popup, { rounding: 4, matop: 7, box: true, w: '100%', vpadding: 4, hpadding: 10, }, { tag: 'textarea', rows: 7, value: e.text });
	let line = mDom(popup, { matop: 6, w: '100%' }); //,'align-items':'space-between'});
	let buttons = mDom(line, { display: 'inline-block' });
	let bsend = mButton('Save', () => onEventEdited(id, ta.value, inpt.value), buttons);
	mButton('Cancel', () => closePopup(), buttons, { hmargin: 10 })
	mButton('Delete', () => { deleteEvent(id); closePopup(); }, buttons, { fg: 'red' })
	mDom(line, { fz: '90%', maright: 5, float: 'right', }, { html: `by ${e.user}` });
}
function showFleetingMessage(msg, dParent, styles = {}, ms = 3000, msDelay = 0, fade = true) {
	clearFleetingMessage();
	dFleetingMessage = mDiv(dParent);
	if (msDelay) {
		TOFleetingMessage = setTimeout(() => fleetingMessage(msg, dFleetingMessage, styles, ms, fade), msDelay);
	} else {
		TOFleetingMessage = setTimeout(() => fleetingMessage(msg, dFleetingMessage, styles, ms, fade), 10);
	}
}
async function showGameMenu(gamename) {
	let users = M.users = await loadStaticYaml('y/users.yaml'); console.log('users',users); return;
	mRemoveIfExists('dGameMenu');
	let dMenu = mDom('dMain', {}, { className: 'section', id: 'dGameMenu' });
	mDom(dMenu, { maleft: 12 }, { html: `<h2>game options</h2>` });
	let style = { display: 'flex', justify: 'center', w: '100%', gap: 10, matop: 6 };
	let dPlayers = mDiv(dMenu, style, 'dMenuPlayers'); //mCenterFlex(dPlayers);
	let dOptions = mDiv(dMenu, style, 'dMenuOptions'); //mCenterFlex(dOptions);
	let dButtons = mDiv(dMenu, style, 'dMenuButtons');
	DA.gamename = gamename;
	DA.gameOptions = {};
	DA.playerList = [];
	DA.allPlayers = {};
	DA.lastName = null;
	await showGamePlayers(dPlayers, users);
	await showGameOptions(dOptions, gamename);
	let astart = mButton('Start', onclickStartGame, dButtons, {}, ['button', 'input']);
	let ajoin = mButton('Open to Join', onclickOpenToJoinGame, dButtons, {}, ['button', 'input']);
	let acancel = mButton('Cancel', () => mClear(dMenu), dButtons, {}, ['button', 'input']);
	let bclear = mButton('Clear Players', onclickClearPlayers, dButtons, {}, ['button', 'input']);
}
async function showGameMenuPlayerDialog(name, shift = false) {
	let allPlItem = DA.allPlayers[name];
	let gamename = DA.gamename;
	let da = iDiv(allPlItem);
	if (!DA.playerList.includes(name)) await setPlayerPlaying(allPlItem, gamename);
	else await setPlayerNotPlaying(allPlItem, gamename);
}
async function showGameOptions(dParent, gamename) {
	let poss = getGameOptions(gamename);
	if (nundef(poss)) return;
	for (const p in poss) {
		let key = p;
		let val = poss[p];
		if (isString(val)) {
			let list = val.split(',');
			let legend = formatLegend(key);
			let fs = mRadioGroup(dParent, {}, `d_${key}`, legend);
			for (const v of list) { mRadio(v, isNumber(v) ? Number(v) : v, key, fs, { cursor: 'pointer' }, null, key, true); }
			measureFieldset(fs);
		}
	}
	let inpsolo = mBy(`i_gamemode_solo`);//console.log('HALLO',inpsolo)
	let inpmulti = mBy(`i_gamemode_multi`);
	if (isdef(inpsolo)) inpsolo.onclick = setPlayersToSolo;
	if (isdef(inpmulti)) inpmulti.onclick = setPlayersToMulti;
}
function showGameover(table, dParent) {
	let winners = table.winners;
	let msg = winners.length > 1 ? `GAME OVER - The winners are ${winners.join(', ')}!!!` : `GAME OVER - The winner is ${winners[0]}!!!`;
	let d = showRibbon(dParent, msg);
	updateTestButtonsLogin(table.playerNames);
	mDom(d, { h: 12 }, { html: '<br>' })
	mButton('PLAY AGAIN', () => onclickStartTable(table.id), d, { className: 'button', fz: 24 });
}
async function showGamePlayers(dParent, users) {
	let me = getUname();
	mStyle(dParent, { wrap: true });
	let userlist = ['amanda', 'felix', 'mimi'];
	for (const name in users) addIf(userlist, name);
	for (const name of userlist) {
		let d = mDom(dParent, { align: 'center', padding: 2, cursor: 'pointer', border: `transparent` });
		let img = showUserImage(name, d, 40);
		let label = mDom(d, { matop: -4, fz: 12, hline: 12 }, { html: name });
		d.setAttribute('username', name)
		d.onclick = onclickGameMenuPlayer;
		let item = userToPlayer(name, DA.gamename); item.div = d; item.isSelected = false;
		DA.allPlayers[name] = item;
	}
	await clickOnPlayer(me);
}
function showGames() {
	let dParent = mBy('dGameList'); if (isdef(dParent)) { mClear(dParent); } else dParent = mDom('dMain', {}, { className: 'section', id: 'dGameList' });
	mText(`<h2>start new game</h2>`, dParent, { maleft: 12 });
	let d = mDom(dParent, { fg: 'white' }, { id: 'game_menu' }); mCenterCenterFlex(d); //mFlexWrap(d);
	let gamelist = 'accuse aristo bluff ferro fishgame fritz huti lacuna nations setgame sheriff spotit wise'; if (DA.TEST0) gamelist += ' a_game'; gamelist = toWords(gamelist);
	//gamelist = ['setgame', 'lacuna'] //, 'fishgame'];//, 'button96'];
	for (const gname of gamelist) {
		let g = MGetGame(gname); //console.log(gname, g)
		let bg = g.color;
		let d1 = mDom(d, { cursor: 'pointer', rounding: 10, margin: 10, padding: 0, patop: 10, w: 140, height: 100, bg, position: 'relative' }, { id: g.id });
		d1.setAttribute('gamename', gname);
		d1.onclick = onclickGameMenuItem;
		mCenterFlex(d1);
		let o = M.superdi[g.logo];
		let fg = colorIdealText(bg);
		let el = mDom(d1, { matop: 0, mabottom: 6, fz: 65, hline: 65, family: 'emoNoto', fg, display: 'inline-block' }, { html: o.text });
		mLinebreak(d1);
		mDom(d1, { fz: 18, align: 'center', fg }, { html: capitalize(g.friendly) });
	}
}
function showim2(imgKey, d, styles = {}, opts = {}) {
	let o = lookup(M.superdi, [imgKey]);
	let src;
	if (isFilename(imgKey)) src = imgKey;
	else if (isdef(o) && isdef(opts.prefer)) src = valf(o[opts.prefer], o.img);
	else if (isdef(o)) src = valf(o.img, o.photo)
	let [w, h] = mSizeSuccession(styles, 40);
	addKeys({ w, h }, styles);
	if (nundef(o) && nundef(src)) src = rChoose(M.allImages).path;
	if (isdef(src)) return mDom(d, styles, { tag: 'img', src });
	fz = .8 * h;
	let [family, html] = isdef(o.text) ? ['emoNoto', o.text] : isdef(o.fa) ? ['pictoFa', String.fromCharCode('0x' + o.fa)] : isdef(o.ga) ? ['pictoGame', String.fromCharCode('0x' + o.ga)] : isdef(o.fa6) ? ['fa6', String.fromCharCode('0x' + o.fa6)] : ['algerian', o.friendly];
	addKeys({ family, fz, hline: fz, display: 'inline' }, styles);
	let el = mDom(d, styles, { html }); mCenterCenterFlex(el);
	return el;
	if (isdef(o.text)) el = mDom(d, { fz: fz, hline: fz, family: 'emoNoto', fg: rColor(), display: 'inline' }, { html: o.text });
	else if (isdef(o.fa)) el = mDom(d, { fz: fz, hline: fz, family: 'pictoFa', bg: 'transparent', fg: rColor(), display: 'inline' }, { html: String.fromCharCode('0x' + o.fa) });
	else if (isdef(o.ga)) el = mDom(d, { fz: fz, hline: fz, family: 'pictoGame', bg: 'beige', fg: rColor(), display: 'inline' }, { html: String.fromCharCode('0x' + o.ga) });
	else if (isdef(o.fa6)) el = mDom(d, { fz: fz, hline: fz, family: 'fa6', bg: 'transparent', fg: rColor(), display: 'inline' }, { html: String.fromCharCode('0x' + o.fa6) });
	return el;
}
function showImage(key, dParent, styles = {}, useSymbol = false) {
	let o = M.superdi[key];
	if (nundef(o)) { console.log('showImage:key not found', key); return; }
	let [w, h] = [valf(styles.w, styles.sz), valf(styles.h, styles.sz)];
	if (nundef(w)) {
		mClear(dParent);
		[w, h] = [dParent.offsetWidth, dParent.offsetHeight];
	} else {
		addKeys({ w: w, h: h }, styles)
		dParent = mDom(dParent, styles);
	}
	let [sz, fz, fg] = [.9 * w, .8 * h, valf(styles.fg, rColor())];
	let hline = valf(styles.hline * fz, fz);
	let d1 = mDiv(dParent, { position: 'relative', h: fz, overflow: 'hidden' });
	mCenterCenterFlex(d1)
	let el = null;
	if (!useSymbol && isdef(o.img)) el = mDom(d1, { w: '100%', h: '100%', 'object-fit': 'cover', 'object-position': 'center center' }, { tag: 'img', src: `${o.img}` });
	else if (isdef(o.text)) el = mDom(d1, { fz: fz, hline: hline, family: 'emoNoto', fg: fg, display: 'inline' }, { html: o.text });
	else if (isdef(o.fa6)) el = mDom(d1, { fz: fz - 2, hline: hline, family: 'fa6', bg: 'transparent', fg: fg, display: 'inline' }, { html: String.fromCharCode('0x' + o.fa6) });
	else if (isdef(o.fa)) el = mDom(d1, { fz: fz, hline: hline, family: 'pictoFa', bg: 'transparent', fg: fg, display: 'inline' }, { html: String.fromCharCode('0x' + o.fa) });
	else if (isdef(o.ga)) el = mDom(d1, { fz: fz, hline: hline, family: 'pictoGame', bg: valf(styles.bg, 'beige'), fg: fg, display: 'inline' }, { html: String.fromCharCode('0x' + o.ga) });
	else if (isdef(o.img)) el = mDom(d1, { w: '100%', h: '100%', 'object-fit': 'contain', 'object-position': 'center center' }, { tag: 'img', src: `${o.img}` });
	assertion(el, 'PROBLEM mit' + key);
	mStyle(el, { cursor: 'pointer' })
	return d1;
}
function showImagePartial(dParent, image, x, y, w, h, left, top, wShow, hShow, wCanvas, hCanvas) {
	mClear(dParent)
	let canvas = mDom(dParent, {}, { tag: 'canvas' }); //console.log('left', left, 'top', top)
	const ctx = canvas.getContext('2d');
	canvas.width = wCanvas;
	canvas.height = hCanvas;
	ctx.drawImage(image, x, y, w, h, left, top, wShow, hShow);
}
function showMeeple(d, pMeeple) {
	lacunaDrawPoints(d, [pMeeple], false);
	let color = getPlayerProp('color', pMeeple.owner); //console.log('color', color)
	let letter = pMeeple.owner[0].toUpperCase();
	mStyle(iDiv(pMeeple), { border: `${color} 5px solid` });
	iDiv(pMeeple).innerHTML = letter;
}
function showMessage(msg, ms = 3000) {
	let d = mBy('dMessage');
	let isPopup = nundef(d);
	if (nundef(d)) d = mPopup(); d.id = 'dMessage';
	mStyle(d, { h: 21, bg: 'red', fg: 'yellow' });
	d.innerHTML = msg;
	clearTimeout(TO.message);
	TO.message = setTimeout(() => clearMessage(isPopup), ms)
}
function showNavbar() {
	let nav = mMenu('dNav');
	let commands = {};
	commands.home = menuCommand(nav.l, 'nav', 'home', 'HOME', showDashboard, menuCloseHome);
	commands.settings = menuCommand(nav.l, 'nav', 'settings', null, settingsOpen, menuCloseSettings);
	commands.simple = menuCommand(nav.l, 'nav', 'simple', 'Collection', onclickSimple, menuCloseSimple);
	commands.play = menuCommand(nav.l, 'nav', 'play', 'Games', onclickPlay, menuCloseGames);
	commands.table = menuCommand(nav.l, 'nav', 'table', 'Table', onclickTableMenu, menuCloseTable);
	commands.plan = menuCommand(nav.l, 'nav', 'plan', 'Calendar', onclickPlan, menuCloseCalendar);
	nav.commands = commands;
	return nav;
}
function showObject(o, keys, dParent, styles = {}, opts = {}) {
	if (nundef(keys)) { keys = Object.keys(o); opts.showKeys = true; styles.align = 'left' }
	addKeys({ align: 'center', padding: 2, bg: 'dimgrey', fg: 'contrast' }, styles);
	let d = mDom(dParent, styles, opts);
	let onew = {};
	for (const k of keys) onew[k] = o[k];
	mNode(onew, d, opts.title);
	return d;
}
function showObjectInTable(onew, dParent, styles = {}, opts = {}) {
	let d = mDom(dParent, styles);
	let t = mTable(d);
	for (const k in onew) {
		let r = mCreate('tr');
		mAppend(t, r);
		let col = mCreate('td'); mAppend(r, col); col.innerHTML = `${k}: `;
		col = mCreate('td'); mAppend(r, col); mDom(col, {}, { html: `${onew[k]}` });
	}
	return t;
}
function showPairs(pairlist) {
	let s = '';
	for (const pair of pairlist) {
		s += `${pair[0].id},${pair[1].id} `; //pair[0].id+','+pair[1].id;
	}
	return s;
}
function showPalette(dParent, colors) {
	let d1 = mDom(dParent, { display: 'flex', dir: 'column', wrap: true, gap: 2, hmax: '100vh' });
	for (var c of colors) {
		if (isDict(c)) c = c.hex;
		let html = `${c}<br>hue:${w3color(c).hue}<br>sat:${Math.round(w3color(c).sat * 100)}<br>lum:${Math.round(w3color(c).lightness * 100)}`
		let dmini = mDom(d1, { wmin: 40, hmin: 40, padding: 2, bg: c, fg: colorIdealText(c) }, { html });
	}
}
async function showPaletteFor(dParent, src, color, blendMode) {
	let fill = color;
	let bgBlend = getBlendCanvas(blendMode);
	let d = mDom(dParent, { w100: true, gap: 4 }); mCenterFlex(d);
	let palette = [color];
	if (isdef(src)) {
		let ca = await getCanvasCtx(d, { w: 500, h: 300, fill, bgBlend }, { src });
		palette = await getPaletteFromCanvas(ca.cv);
		palette.unshift(fill);
	} else {
		let ca = mDom(d, { w: 500, h: 300 });
		palette = arrCycle(paletteShades(color), 4);
	}
	let dominant = palette[0];
	let palContrast = paletteContrastVariety(palette, palette.length);
	mLinebreak(d);
	showPaletteMini(d, palette);
	mLinebreak(d);
	showPaletteMini(d, palContrast);
	mLinebreak(d);
	return [palette.map(x => colorO(x)), palContrast];
}
function showPaletteMini(dParent, colors, sz = 30) {
	let d1 = mDom(dParent, { display: 'flex', wrap: true, gap: 2 }); //, hmax: '100vh', dir: 'column' });
	let items = [];
	for (var c of colors) {
		if (isDict(c)) c = c.hex;
		let fg = 'dimgray'; //colorIdealText(c); if (fg == 'white') fg='silver';
		let dc = mDom(d1, { w: sz, h: sz, bg: c, fg, border: `${fg} solid 3px` });
		items.push({ div: dc, bg: c })
	}
	return items;
}
function showPaletteNames(dParent, colors) {
	let d1 = mDom(dParent, { gap: 12 }); mFlexWrap(d1);
	let items = [];
	for (var c of colors) {
		let bg = c.hex;
		let d2 = mDom(d1, { wmin: 250, bg, fg: colorIdealText(bg), padding: 20 }, { class: 'colorbox', dataColor: bg });
		mDom(d2, { weight: 'bold', align: 'center' }, { html: c.name });
		let html = `<br>${bg}<br>hue:${c.hue}<br>sat:${Math.round(c.sat * 100)}<br>lum:${Math.round(c.lightness * 100)}`
		let dmini = mDom(d2, { align: 'center', wmin: 120, padding: 2, bg, fg: colorIdealText(bg) }, { html });
		let item = jsCopy(c);
		item.div = dmini;
		item.dOuter = d2;
		items.push(item)
	}
	return items;
}
function showPaletteText(dParent, list) {
	let d1 = mDom(dParent, { display: 'flex', wrap: true, gap: 2 }); //, hmax: '100vh', dir: 'column' });
	let items = [];
	for (var c of list) {
		let dc = mDom(d1, { bg: 'black', fg: 'white' }, { html: c });
		items.push({ div: dc, text: c })
	}
	return items;
}
function showPlaetze(dCard, item, gap, color = 'silver') {
	let n = item.ooffsprings.num;
	let sym = item.class == 'mammal' ? 'paw' : 'big_egg';
	let html = wsGetChildInline(item, color);
	let plaetze = nundef(n) ? 2 : n == 0 ? 0 : n == 1 ? 1 : n < 8 ? 2 : n < 25 ? 3 : n < 100 ? 4 : n < 1000 ? 5 : 6;
	let [rows, cols, w] = [3, plaetze <= 3 ? 1 : 2, plaetze <= 3 ? gap : 3 * gap]
	let dgrid = mGrid(3, cols, dCard, { gap: gap * .8 });//{w,h:5*gap,gap:gap/2});
	for (const i of range(plaetze)) { mDom(dgrid, { w: gap, h: gap, fg: color }, { html }); }
	return dgrid;
}
function showRibbon(dParent, msg) {
	let d = mBy('ribbon'); if (isdef(d)) d.remove();
	let bg = `linear-gradient(270deg, #fffffd, #00000080)`
	d = mDom(dParent, { bg, mabottom: 10, align: 'center', vpadding: 10, fz: 30, w100: true }, { html: msg, id: 'ribbon' });
	return d;
}
async function showTable(id) {
	let me = getUname();
	let table = await mGetRoute('table', { id });  //console.log('table',table)
	if (!table) { showMessage('table deleted!'); return await showTables('showTable'); }
	DA.Interrupt = true;
	while (DA.LengthyProcessRunning === true) { await mSleep(100); }
	DA.Interrupt = false;
	let func = DA.funcs[table.game];
	T = table;
	clearMain(); mClassRemove('dExtra', 'p10hide');
	showTitleGame(table);
	if (func.hasInstruction) prepInstruction(table);
	let items = func.present(table);
	func.stats(table);
	if (table.status == 'over') { showGameover(table, 'dTitle'); return; }
	assertion(table.status == 'started', `showTable status ERROR ${table.status}`);
	await updateTestButtonsLogin(table.playerNames);
	func.activate(table, items);
}
function showText(dParent, text, bg = 'black') {
	return mDom(dParent, { align: 'center', wmin: 120, padding: 2, bg, fg: colorIdealText(bg) }, { html: text });
}
async function showTextColors() {
	let d = mBy('dSettingsMenu'); mClear(d);
	let d1 = mDom(d, { gap: 12, padding: 10 }); mFlexWrap(d1);
	let colors = ['white', 'silver', 'dimgray', 'black'].map(x => w3color(x)); //, getCSSVariable('--fgButton'), getCSSVariable('--fgButtonHover')].map(x => w3color(x));
	for (var c of colors) {
		let bg = 'transparent';
		let fg = c.hex = c.toHexString();
		let d2 = mDom(d1, { border: fg, wmin: 250, bg, fg, padding: 20 }, { class: 'colorbox', dataColor: fg });
		mDom(d2, { weight: 'bold', align: 'center' }, { html: 'Text Sample' });
		let html = `<br>${fg}<br>hue:${c.hue}<br>sat:${Math.round(c.sat * 100)}<br>lum:${Math.round(c.lightness * 100)}`
		let dmini = mDom(d2, { align: 'center', wmin: 120, padding: 2, bg, fg }, { html });
	}
	let divs = document.getElementsByClassName('colorbox');
	for (const div of divs) {
		div.onclick = async () => onclickTextColor(div.getAttribute('dataColor'));
	}
}
async function showTextures() {
	let d = mBy('dSettingsMenu'); mClear(d);
	let dTheme = mDom(d, { padding: 12, gap: 10 }); mFlexWrap(dTheme);
	let list = M.textures;
	if (colorGetLum(U.color) > 75) list = list.filter(x => !x.includes('ttrans'));
	let itemsTexture = [];
	for (const t of list) {
		let bgRepeat = t.includes('marble_') || t.includes('wall') ? 'no-repeat' : 'repeat';
		let bgSize = t.includes('marble_') || t.includes('wall') ? `cover` : t.includes('ttrans') ? '' : 'auto';
		let bgImage = `url('${t}')`;
		let recommendedMode = t.includes('ttrans') ? 'normal' : (t.includes('marble_') || t.includes('wall')) ? 'luminosity' : 'multiply';
		let dc = mDom(dTheme, { bg: U.color, bgImage, bgSize, bgRepeat, bgBlend: 'normal', cursor: 'pointer', border: 'white', w: '30%', wmax: 300, h: 170 });
		let item = { div: dc, path: t, bgImage, bgRepeat, bgSize, bgBlend: recommendedMode, isSelected: false };
		itemsTexture.push(item);
		dc.onclick = async () => onclickTexture(item, itemsTexture);
	}
	return itemsTexture;
}
async function showThemes() {
	let d = mBy('dSettingsMenu'); mClear(d);
	let d1 = mDom(d, { gap: 12, padding: 10 }); mFlexWrap(d1);
	let themes = lookup(Serverdata.config, ['themes']);
	let bgImage, bgSize, bgRepeat, bgBlend, name, color, fg;
	for (const key in themes) {
		let th = themes[key];
		if (isdef(th.texture)) {
			bgImage = bgImageFromPath(th.texture);
			bgRepeat = (bgImage.includes('marble') || bgImage.includes('wall')) ? 'no-repeat' : 'repeat';
			bgSize = (bgImage.includes('marble') || bgImage.includes('wall')) ? 'cover' : '';
			bgBlend = isdef(th.blendMode) ? th.blendMode : (bgImage.includes('ttrans') ? 'normal' : bgImage.includes('marble_') ? 'luminosity' : 'multiply');
		}
		color = th.color;
		if (isdef(th.fg)) fg = th.fg;
		name = th.name;
		let [realBg, bgContrast, bgNav, fgNew, fgContrast] = calculateGoodColors(color, fg)
		let styles = { w: 300, h: 200, bg: realBg, fg: fgNew, border: `solid 1px ${getCSSVariable('--fgButton')}` };
		if (isdef(bgImage)) addKeys({ bgImage, bgSize, bgRepeat }, styles);
		if (isdef(bgBlend)) addKeys({ bgBlend }, styles);
		let dsample = mDom(d1, styles, { theme: key });
		let dnav = mDom(dsample, { bg: bgNav, padding: 10 }, { html: name.toUpperCase() });
		let dmain = mDom(dsample, { padding: 10, fg: 'black', className: 'section' }, { html: getMotto() });
		dsample.onclick = onclickThemeSample;
	}
}
function showTimeSince(t, msg = 'now') {
	let tNew = getNow();
	let ms = tNew - t;
	console.log('::time:', msg + ':', ms);
	return tNew;
}
function showTitle(title, dParent = 'dTitle') {
	mClear(dParent);
	return mDom(dParent, { maleft: 20 }, { tag: 'h1', html: title, classes: 'title' });
}
function showTitleGame(table) {
	let d = mBy('dExtraLeft');
	let html = `${getGameProp('friendly').toUpperCase()}: ${table.friendly}`;
	mDom(d, { maleft: 10, family: 'algerian' }, { html });
}
function showTrick() {
	let dZone = Zones.table.dData;
	let d = mDiv(dZone);
	mStyle(d, { display: 'flex', position: 'relative' });
	let zIndex = 1;
	for (let i = 0; i < T.trick.length; i++) {
		let c = T.trick[i];
		let direction = i == 0 ? { x: 0, y: -1 } : { x: 0, y: 1 };
		let displ = 10;
		let offset = { x: -35 + direction.x * displ, y: direction.y * displ };
		let d1 = c.div;
		mAppend(d, d1);
		mStyle(d1, { position: 'absolute', left: offset.x, top: offset.y, z: zIndex });
		zIndex += 1;
	}
}
function showUserImage(uname, d, sz = 40) {
	let u = Serverdata.users[uname];
	let key = u.imgKey;
	let m = M.superdi[key];
	if (nundef(m)) {
		key = 'unknown_user';
	}
	return mKey(key, d, { 'object-position': 'center top', 'object-fit': 'cover', h: sz, w: sz, round: true, border: `${u.color} 3px solid` });
}
function showValidMoves(table) {
	if (nundef(table.moves)) { console.log('no moves yet!'); return; }
	console.log('________', table.step)
	for (const m of table.moves) {
		console.log(`${m.step} ${m.name}: ${m.move.map(x => x.substring(0, 5)).join(',')} (${m.change})=>${m.score}`);
	}
}
