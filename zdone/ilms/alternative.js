
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
	await showGameMenu(gamename);
}
async function onclickOpenToJoinGame() {
  let options = collectOptions();
  let players = collectPlayers();
  mRemove('dGameMenu');
  let t = await tableCreate(DA.gamename, players, options);
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
async function showTables() {
	let me = UGetName();
	let tables = dict2list(M.tables); //dict2list(await getTables()); console.log(tables); //return;
	tables.map(x => x.prior = x.status == 'open' ? 0 : x.turn.includes(me) ? 1 : x.playerNames.includes(me) ? 2 : 3);
	sortBy(tables, 'prior');
	let dParent = mBy('dTableList');
	if (isdef(dParent)) { mClear(dParent); }
	else dParent = mDom('dMain', {}, { className: 'section', id: 'dTableList' });
	if (isEmpty(tables)) { mText('no active game tables', dParent); return []; }
	tables.map(x => x.game_friendly = capitalize(MGetGameFriendly(x.game)));
	mText(`<h2>tables</h2>`, dParent, { maleft: 12 })
	let t = UI.tables = mDataTable(tables, dParent, null, ['friendly', 'game_friendly', 'playerNames'], 'tables', false);
	mTableCommandify(t.rowitems.filter(ri => ri.o.status != 'open'), {
		0: (item, val) => hFunc(val, 'onclickTable', item.o.id, item.id),
	});
	mTableStylify(t.rowitems.filter(ri => ri.o.status == 'open'), { 0: { fg: 'blue' }, });
	let d = iDiv(t);
	for (const ri of t.rowitems) {
		let r = iDiv(ri);
		let id = ri.o.id;
		if (ri.o.prior == 1) mDom(r, {}, { tag: 'td', html: getWaitingHtml(24) });
		if (ri.o.status == 'open') {
			let playerNames = ri.o.playerNames;
			if (playerNames.includes(me)) {
				if (ri.o.owner != me) {
					let h1 = hFunc('leave', 'onclickLeaveTable', ri.o.id); let c = mAppend(r, mCreate('td')); c.innerHTML = h1;
				}
			} else {
				let h1 = hFunc('join', 'onclickJoinTable', ri.o.id); let c = mAppend(r, mCreate('td')); c.innerHTML = h1;
			}
		}
		if (ri.o.owner != me) continue;
		let h = hFunc('delete', 'onclickDeleteTable', id); let c = mAppend(r, mCreate('td')); c.innerHTML = h;
		if (ri.o.status == 'open') { let h1 = hFunc('start', 'onclickStartTable', id); let c1 = mAppend(r, mCreate('td')); c1.innerHTML = h1; }
	}
}

function showYaml(o, title, dParent, styles = {}, opts = {}) {

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


