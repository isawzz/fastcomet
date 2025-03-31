
async function mPhpPost(cmd, o, projectName = 'ilms', verbose = false, jsonResult = true) {
	let sessionType = detectSessionType();
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : 'http://localhost:8080/fastcomet/';
	if (isdef(o.path) && (o.path.startsWith('zdata') || o.path.startsWith('y'))) o.path = '../../' + o.path;
	if (verbose) console.log('to php:', server + `${projectName}/php/${cmd}.php`, o);
	let res = await fetch(server + `${projectName}/php/${cmd}.php`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(o),
		}
	);
	let text;
	try {
		text = await res.text();
		if (!jsonResult) {
			return text;
		}
		let obj = JSON.parse(text);
		if (verbose) console.log('from php:\n', obj);
		let mkeys = ["config", "superdi", "users", "details"];
		for (const k of mkeys) {
			if (isdef(obj[k])) {
				M[k] = obj[k];
				if (k == "superdi") {
					loadSuperdiAssets();
				} else if (k == "users") {
					loadUsers();
				}
			}
		}
		return obj;
	} catch (e) {
		return isString(text) ? text : e;
	}
}
async function postUsers(){
  let users = jsonToYaml(M.users);
  let res = await mPhpPost('game_user', { action: 'savey', file:'users', o:M.users });//mPhpPost('game_user',users, 'users');
  console.log('res',res);
}












async function showTables(from) {
	let me = UGetName();
	let tables = dict2list(await getTables()); console.log(tables); return;
	tables.map(x => x.prior = x.status == 'open' ? 0 : x.turn.includes(me) ? 1 : x.playerNames.includes(me) ? 2 : 3);
	sortBy(tables, 'prior');
	let dParent = mBy('dTableList');
	if (isdef(dParent)) { mClear(dParent); }
	else dParent = mDom('dMain', {}, { className: 'section', id: 'dTableList' });
	if (isEmpty(tables)) { mText('no active game tables', dParent); return []; }
	tables.map(x => x.game_friendly = capitalize(getGameFriendly(x.game)));
	mText(`<h2>game tables</h2>`, dParent, { maleft: 12 })
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

async function setPlayerNotPlaying(item, gamename) {
	console.log(item,gamename); //return;
  await saveDataFromPlayerOptionsUI(gamename);
  removeInPlace(DA.playerList, item.name);
  mRemoveIfExists('dPlayerOptions');
  unselectPlayerItem(item);
}
async function setPlayerPlaying(allPlItem, gamename) {
  let [name, da] = [allPlItem.name, allPlItem.div];
  addIf(DA.playerList, name);
  highlightPlayerItem(allPlItem);
  await saveDataFromPlayerOptionsUI(gamename);
  let id = 'dPlayerOptions';
  DA.lastAllPlayerItem = allPlItem;
  let poss = MGetGamePlayerOptions(gamename); //console.log('poss',poss)
  if (nundef(poss)) return;
  let dParent = mBy('dGameMenu');
  let bg = MGetUserColor(name);
  let rounding = 6;
  let d1 = mDom(dParent, { bg: colorLight(bg, 50), border: `solid 2px ${bg}`, rounding, display: 'inline-block', hpadding: 3, rounding }, { id });
  mDom(d1, {}, { html: `${name}` }); //title
  d = mDom(d1, {}); mCenterFlex(d);
  mCenterCenter(d);
  for (const p in poss) {
    let key = p;
    let val = poss[p];
    if (isString(val)) {
      let list = val.split(',');
      let legend = formatLegend(key);
      let fs = mRadioGroup(d, {fg:'black'}, `d_${key}`, legend);
      let handler = key == 'playmode' ? updateUserImageToBotHuman(name) : null;
      for (const v of list) { let r = mRadio(v, isNumber(v) ? Number(v) : v, key, fs, { cursor: 'pointer' }, handler, key, false); }
      let userval = lookup(DA.allPlayers, [name, p]);
      let chi = fs.children;
      for (const ch of chi) {
        let id = ch.id;
        if (nundef(id)) continue;
        let radioval = stringAfterLast(id, '_');
        if (isNumber(radioval)) radioval = Number(radioval);
        if (userval == radioval) ch.firstChild.checked = true;
        else if (nundef(userval) && `${radioval}` == arrLast(list)) ch.firstChild.checked = true;
      }
      measureFieldset(fs);
    }
  }
  let r = getRectInt(da, mBy('dGameMenu'));
  let rp = getRectInt(d1);
  let [y, w, h] = [r.y - rp.h - 4, rp.w, rp.h];
  let x = r.x - rp.w / 2 + r.w / 2;
  if (x < 0) x = r.x - 22;
  if (x > window.innerWidth - w - 100) x = r.x - w + r.w + 14;
  mIfNotRelative(dParent);
  mPos(d1, x, y);
  mButtonX(d1, ev => saveAndUpdatePlayerOptions(allPlItem, gamename), 18, 3, 'dimgray');
}
function setPlayersToMulti() {
  for (const name in DA.allPlayers) {
    lookupSetOverride(DA.allPlayers, [name, 'playmode'], 'human');
    updateUserImageToBotHuman(name, 'human');
  }
  setRadioValue('playmode', 'human');
}
function setPlayersToSolo() {
  for (const name in DA.allPlayers) {
    if (name == UGetName()) continue;
    lookupSetOverride(DA.allPlayers, [name, 'playmode'], 'bot');
    updateUserImageToBotHuman(name, 'bot');
  }
  let popup = mBy('dPlayerOptions');
  if (isdef(popup) && popup.firstChild.innerHTML.includes(UGetName())) return;
  setRadioValue('playmode', 'bot');
}

