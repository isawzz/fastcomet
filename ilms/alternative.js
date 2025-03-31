
function collectOptions() {
  let poss = MGetGame(DA.gamename).options;
  let options = DA.options = {};
  if (nundef(poss)) return options;
  for (const p in poss) {
    let fs = mBy(`d_${p}`);
    let val = getCheckedRadios(fs)[0];
    options[p] = isNumber(val) ? Number(val) : val;
  }
  return options;
}
function collectPlayers() {
  let players = {};
  for (const name of DA.playerList) { players[name] = allPlToPlayer(name); }
  return players;
}
function highlightPlayerItem(item) { mStyle(iDiv(item), { bg: MGetUserColor(item.name), fg: 'white', border: `white` }); }

async function onclickGameMenuItem(ev) {
	let gamename = evToAttr(ev, 'gamename');
	//hier sollte noch was fuer die options kommen, but for now, just create the game to join

	await showGameMenu(gamename);


	//await tableCreate(U.name, { game: gamename, players: [], status: 'join' });
}
async function onclickOpenToJoinGame() {
  let options = collectOptions();
  let players = collectPlayers();
  mRemove('dGameMenu');
  let t = await createOpenTable(DA.gamename, players, options);
  //let res = await mPostRoute('postTable', t);
}
async function saveAndUpdatePlayerOptions(allPl, gamename) {
  let name = allPl.name;
  let poss = MGetGamePlayerOptionsAsDict(gamename);
  if (nundef(poss)) return;
  let opts = {};
  for (const p in poss) { allPl[p] = getRadioValue(p); if (p != 'playmode') opts[p] = allPl[p]; }
  let id = 'dPlayerOptions'; mRemoveIfExists(id); //dont need UI anymore
  let oldOpts = valf(MGetUserOptionsForGame(name, gamename), {});
  let changed = false;
  for (const p in poss) {
    if (p == 'playmode') continue;
    if (oldOpts[p] != opts[p]) { changed = true; break; }
  }
  if (changed) {
    let games = valf(MGetUser(name).games, {});
    games[gamename] = opts;
    let res = await postUsers(); console.log(M.users);
  }
}
async function saveDataFromPlayerOptionsUI(gamename) {
  let id = 'dPlayerOptions';
  let lastAllPl = DA.lastAllPlayerItem;
  let dold = mBy(id);
  if (isdef(dold)) { await saveAndUpdatePlayerOptions(lastAllPl, gamename); dold.remove(); }
}

async function showGameMenu(gamename) {
	let users = M.users = await loadStaticYaml('y/users.yaml'); //console.log('users',users); return;
	mRemoveIfExists('dGameMenu');
	let dMenu = mDom('dMain', {}, { className: 'section', id: 'dGameMenu' });
	mDom(dMenu, { maleft: 12 }, { html: `<h2>game options</h2>` });
	let style = { display: 'flex', justify: 'center', w: '100%', gap: 10, matop: 6 };
	let dPlayers = mDom(dMenu, style, {id:'dMenuPlayers'}); //mCenterFlex(dPlayers);
	let dOptions = mDom(dMenu, style,  {id:'dMenuOptions'}); //'dMenuOptions'); //mCenterFlex(dOptions);
	let dButtons = mDom(dMenu, style,  {id:'dMenuButtons'}); //'dMenuButtons');
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
async function showGamePlayers(dParent, users) {
	let me = UGetName();
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
	//await clickOnPlayer(me);
	await showGameMenuPlayerDialog(me); 
}
async function showGameMenuPlayerDialog(name, shift = false) {
	let allPlItem = DA.allPlayers[name];
	let gamename = DA.gamename;
	let da = iDiv(allPlItem);
	if (!DA.playerList.includes(name)) await setPlayerPlaying(allPlItem, gamename);
	else await setPlayerNotPlaying(allPlItem, gamename);
}
async function showGameOptions(dParent, gamename) {
	console.log('HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
	let poss = MGetGameOptions(gamename); console.log('!!!',poss)
	if (nundef(poss)) return;
	for (const p in poss) {
		let key = p;
		let val = poss[p]; //console.log(val)
		if (isString(val)) {
			let list = val.split(',');
			let legend = formatLegend(key);
			let fs = mRadioGroup(dParent, {fg:'black'}, `d_${key}`, legend);
			for (const v of list) { mRadio(v, isNumber(v) ? Number(v) : v, key, fs, { cursor: 'pointer' }, null, key, true); }
			measureFieldset(fs);
		}
	}
	let inpsolo = mBy(`i_gamemode_solo`);//console.log('HALLO',inpsolo)
	let inpmulti = mBy(`i_gamemode_multi`);
	if (isdef(inpsolo)) inpsolo.onclick = setPlayersToSolo;
	if (isdef(inpmulti)) inpmulti.onclick = setPlayersToMulti;
}
async function showTables(files) {
	mClear('dMain');
	let d = mDom('dMain'); mCenterCenterFlex(d); mFlexWrap(d);
	M.tables = await getTables();
	for(const id in M.tables){
		let t = M.tables[id];
		showYaml(t, fromNormalized(f), d, { bg: 'black', fg: 'white', rounding: 10, padding: 10, margin: 10, w: '30%' });
		//mDom('dMain',{},{tag:'pre',html:mYaml(t)});

	}
}
function showYaml(o, title, dParent, styles = {}, opts = {}) {
	o = toFlatObject(o);
	//addKeys({rounding: 8, padding: 4, w:200, h:70}, styles);
	mLinebreak(dParent);
	let keys = Object.keys(o);
	let grid = mGrid(keys.length, 2, dParent, styles, { wcols: 'auto' });
	mDom(grid, { 'grid-column': 'span 2', align: 'center', weight: 'bold' }, { html: title });
	//mDom(grid, {}, { html: '&nbsp;' });
	//let cellStyles = { hpadding: 4 };
	console.log('type', typeof o);
	if (isList(o)) {
		arrSort(o);
		o.map((x, i) => { mDom(grid, { fg: 'red', align: 'right' }, { html: i }); mDom(grid, { maleft: 10 }, { html: x }); });
	} else if (isDict(o)) {
		keys.sort();
		for (const k of keys) {
			mDom(grid, { fg: 'red', align: 'right' }, { html: k })
			mDom(grid, { maleft: 10 }, { html: o[k] });
		}
	}
	return dParent;
}
function userToPlayer(name, gamename, playmode = 'human') {
  let user = MGetUser(name);
  let pl = jsCopyExceptKeys(user, ['games']);
  let options = valf(MGetUserOptionsForGame(name, gamename), {});
  addKeys(options, pl);
  pl.playmode = playmode;
  let poss = MGetGamePlayerOptions(gamename);
  for (const p in poss) {
    if (isdef(pl[p])) continue;
    let val = poss[p];
    let defval = arrLast(val.split(','));
    if (isNumber(defval)) defval = Number(defval);
    pl[p] = defval;
  }
  return pl;
}


