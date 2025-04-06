
async function uiTypePlayerStats(table, me, dParent, layout, styles = {}) {
  let dOuter = mDom(dParent,{matop:8}); dOuter.setAttribute('inert', true); console.log(dOuter);
  if (layout == 'rowflex') mStyle(dOuter, { display: 'flex', justify: 'center' });
  else if (layout == 'col') mStyle(dOuter, { display: 'flex', dir: 'column' });
  addKeys({ hmin:100, rounding: 10, bg: '#00000050', margin: 8, box: true, 'border-style': 'solid', 'border-width': 10 }, styles);
  let show_first = me;
  let order = arrCycle(table.plorder, table.plorder.indexOf(show_first));
  let items = {};
	//return items;
  for (const name of order) {
    let pl = table.players[name];

		// let c=colorO(pl.color); console.log('color',c);//w3colorHexToHsl01Array
		// let hsl=c.toHsl();console.log('hsl',hsl);//w3colorHexToHsl01Array
		let chex=colorFrom(pl.color);
		let [h,s,l]=colorHexToHsl01Array(chex); console.log('light',name,l)
		l=clamp(l,0.35,0.65); console.log('=>', name, l);
		let cFinal=colorFromHsl(h, s,l);

    styles['border-color'] = cFinal; //'red'; //pl.color;
    let d = mDom(dOuter, styles, { id: name2id(name) });
    // let img = await showUserImage(name, d, 40); 
    // mStyle(img, { box: true })
    // items[name] = { div: d, img, name };
  }
  return items;
}
function playerStatCount(key, n, dParent, styles = {}, opts = {}) {
	let sz = valf(styles.sz, 16);
	addKeys({ display: 'flex', margin: 4, dir: 'column', hmax: 2 * sz, 'align-content': 'center', fz: sz, align: 'center' }, styles);
	let d = mDiv(dParent, styles);
	let o = M.superdi[key];

	console.log('hallooooooooooooooooooo', typeof key, isFilename(key), isdef(o),'sz',sz)
	// if (typeof key == 'function') key(d, { h: sz, hline: sz, w: '100%', fg: 'grey' });
	// else if (isFilename(key)) mKey(key, d, { h: sz, hline: sz, w: '100%', fg: 'grey' }, opts);
	// else if (isColor(key)) mDom(d, { bg: key, h: sz, fz: sz, w: '100%', fg: key }, { html: ' ' });
	// else if (isdef(o)) mKey(key, d, { h: sz, hline: sz, w: '100%', fg: 'grey' }, opts);
	// else mText(key, d, { h: sz, fz: sz, w: '100%' });

	if (typeof key == 'function') key(d, { w: '100%', fg: 'grey' });
	else if (isFilename(key)) mKey(key, d, { w: '100%', fg: 'grey' }, opts);
	else if (isColor(key)) mDom(d, { bg: key, fz: sz, w: '100%', fg: key }, { html: ' ' });
	else if (isdef(o)) mKey(key, d, { hmax:sz, w: '100%', fg: 'grey' }, opts);
	else mText(key, d, { fz: sz, w: '100%' });
	d.innerHTML += `<span ${isdef(opts.id) ? `id='${opts.id}'` : ''} style="font-weight:bold;color:inherit">${n}</span>`;
	return d;
}

function clearEvents() {
	for (const k in TO) { clearTimeout(TO[k]); TO[k] = null; }
	for (const k in ANIM) { if (isdef(ANIM[k])) ANIM[k].cancel(); ANIM[k] = null; }
	if (SLEEP_WATCHER) { SLEEP_WATCHER.cancel(); console.log('clearEvents: ACHTUNG SLEEP_WATCHER!!!') }
}
function clearMain() { UI.commands = {}; staticTitle(); clearEvents(); mClear('dMain'); mClear('dTitle'); clearMessage(); }
function clearMessage(remove = false) { if (remove) mRemove('dMessage'); else mStyle('dMessage', { h: 0 }); }
function clearParent(ev) { mClear(ev.target.parentNode); }
function clearTimeouts() {
  onclick = null;
  clearTimeout(TOMain);
  clearTimeout(TOFleetingMessage);
  clearTimeout(TOTrial);
  if (isdef(TOList)) { for (const k in TOList) { TOList[k].map(x => clearTimeout(x)); } }
	// for(const k in TO) clearTimeout(TO[k]);
}
function animatedTitle(msg = 'DU BIST DRAN!!!!!') {
	TO.titleInterval = setInterval(() => {
		let corner = CORNERS[WhichCorner++ % CORNERS.length];
		document.title = `${corner} ${msg}`; //'⌞&amp;21543;    U+231E \0xE2Fo\u0027o Bar';
	}, 1000);
}
function staticTitle(table) {
	clearInterval(TO.titleInterval);
	let url = window.location.href;
	let loc = url.includes('moxito') ? '' : '(local)';
	let game = isdef(table) ? lastWord(table.friendly) : '♠ Moxito ♠';
	document.title = `${loc} ${game}`;
}

function setTableToStarted(table) {
  table.status = 'started';
  table.step = 0;
  table.moves = [];
  table.fen = DA.funcs[table.game].setup(table);
  return table;
}
function createOpenTable(gamename, players, options) {
	let me = getUname();
	let playerNames = [me]; console.log('me', me)
	assertion(me in players, "_createOpenTable without owner!!!!!")
	for (const name in players) { addIf(playerNames, name); }
	let table = {
		status: 'open',
		id: generateTableId(),
		fen: null,
		game: gamename,
		owner: playerNames[0],
		friendly: generateTableName(playerNames.length, []),
		players,
		playerNames: playerNames,
		options
	};
	return table;
}
async function startGame(gamename, players, options) {
	let table = createOpenTable(gamename, players, options);
	table = setTableToStarted(table);
	// let res = await mPostRoute('postTable', table);
  let tid = table.id;
  let tData = table;
  let res = await mPhpPost('game_user', { action: 'create', tid, tData });
  if (res.tid) {
    console.log("Game Creation:", res.tid);
    let data = M.tables[tid] = await tableGetDefault(res.tid); console.log(data);
    M.tableFilenames.push(tid);
    DA.tid=tid;DA.tData=tData;
  } else {
    console.log("Game Creation failed");
    return null;
  }
  return table;
}

