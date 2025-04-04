
async function onPoll() {
	console.log('', DA.pollCounter++, 'polling', DA.state);
	switch (DA.state) {
		case 'play':
			let o = await tableGetDefault(null, tData);
			if (!o) { console.log('no table found!'); DA.state = 'no_table'; return; }
			//console.log(o);
			let changes = deepCompare(DA.tData, o.tData);
			if (!changes) { console.log('not presenting!'); return; }
			tablePresent(); 
			break;
		case 'slowpoll': await showTables(); break;
		case 'no_table': showMessage('No table present!');
		case 'pause':
		default: pollStop(); break;
	}
}
async function pollStart(ms = 1000) {
  if (DA.pollms != ms) {
    clearTimeout(TO.poll);
    await mSleep(500); 
    DA.pollms = ms; 
  } else if (TO.poll) { return; }
  TO.poll = setTimeout(onPoll, DA.pollms);
}
function pollStop() {
  clearInterval(TO.poll);
  TO.poll = null;
}


function onPoll() {
	console.log('', DA.pollCounter++, 'polling', DA.state);
	switch (DA.state) {
		case 'table_started':
		case 'table_clicked':
		case 'table_created': break;
		case 'table_running': if (tableHasChanged()) tablePresent(); pollStart(); break;
		case 'no_table':
		case 'table_left':
		case 'table_paused':
		case 'table_ended':
		case 'table_joined': break;
		default: pollStop(); break;
	}
}

//#region games
function button96() {
	function setup(table) {
		let fen = {};
		for (const name in table.players) {
			let pl = table.players[name];
			pl.score = 0;
		}
		fen.cards = [1, 2, 3];
		fen.deck = range(4, table.options.numCards);
		table.plorder = jsCopy(table.playerNames);
		table.turn = jsCopy(table.playerNames);
		return fen;
	}
	function stats(table) {
		let [me, players] = [getUname(), table.players];
		let style = { patop: 8, mabottom: 20, wmin: 80, bg: 'beige', fg: 'contrast' };
		let player_stat_items = uiTypePlayerStats(table, me, 'dStats', 'rowflex', style)
		for (const plname in players) {
			let pl = players[plname];
			let item = player_stat_items[plname];
			if (pl.playmode == 'bot') { mStyle(item.img, { rounding: 0 }); }
			let d = iDiv(item); mCenterFlex(d); mLinebreak(d); mIfNotRelative(d);
			playerStatCount('star', pl.score, d); //, {}, {id:`stat_${plname}_score`});
		}
	}
	function present(table) {
		let fen = table.fen;
		mStyle('dTable', { padding: 25, w: 400, h: 400 });
		let d = mDom('dTable', { gap: 10, padding: 0 }); mCenterFlex(d);
		let items = [];
		for (const card of fen.cards) {
			let item = cNumber(card);
			mAppend(d, iDiv(item));
			items.push(item);
		}
		return items;
	}
	async function activate(table, items) {
		await showInstructionStandard(table, 'must click a card'); //browser tab and instruction if any
		if (!isMyTurn(table)) { return; }
		for (const item of items) {
			let d = iDiv(item);
			mStyle(d, { cursor: 'pointer' });
			d.onclick = ev => onclickCard(table, item, items);
		}
		if (isEmpty(table.fen.cards)) return gameoverScore(table);
		if (amIHuman(table) && table.options.gamemode == 'multi') return;
		let name = amIHuman(table) && table.options.gamemode == 'solo' ? someOtherPlayerName(table) : getUname();
		if (nundef(name)) return;
		await botMove(name, table, items);
	}
	async function botMove(name, table, items) {
		let ms = rChoose(range(2000, 5000));
		TO.bot = setTimeout(async () => {
			let item = rChoose(items);
			toggleItemSelection(item);
			TO.bot1 = setTimeout(async () => await evalMove(name, table, item.key), 500);
		}, rNumber(ms, ms + 2000));
	}
	async function onclickCard(table, item, items) {
		toggleItemSelection(item);
		try { await mSleep(200); } catch (err) { return; }
		await evalMove(getUname(), table, item.key);
	}
	async function evalMove(name, table, key) {
		clearEvents();
		mShield('dTable', { bg: 'transparent' });
		let id = table.id;
		let step = table.step;
		let best = arrMinMax(table.fen.cards).min;
		let succeed = key == best;
		if (succeed) {
			table.players[name].score += 1;
			let fen = table.fen;
			let newCards = deckDeal(fen.deck, 1);
			if (newCards.length > 0) arrReplace1(fen.cards, key, newCards[0]); else removeInPlace(fen.cards, key);
		} else {
			table.players[name].score -= 1;
		}
		lookupAddToList(table, ['moves'], { step, name, move: key, change: succeed ? '+1' : '-1', score: table.players[name].score });
		let o = { id, name, step, table };
		if (succeed) o.stepIfValid = step + 1;
		let res = await mPostRoute('table', o);
	}
	return { setup, present, stats, activate };
}
function defaultGameFunc() {
	function setup(table) { let fen = { players: table.players, turn: [table.owner] }; delete table.players; }
	function present(dParent, table) { mClear('dMain'); } //showMessage(`BINGO!!! ${table.friendly} view ${name}: NOT IMPLEMENTED!!!!!`,1000); } 
	async function activate(table) { console.log('activate for', getUname()) }
	function checkGameover(table) { return false; }
	async function hybridMove(table) { console.log('hybrid moves for', getUname()) }
	async function botMove(table) { console.log('robot moves for', getUname()) }
	async function stepComplete(table, o) { console.log(`integrate if step complete for ${table.friendly}`); }
	return { setup, activate, checkGameover, present, hybridMove, botMove, stepComplete };
}
function setgame() {
	function setup(table) {
		let fen = {};
		for (const name in table.players) {
			let pl = table.players[name];
			pl.score = 0;
		}
		fen.deck = setCreateDeck();
		fen.cards = deckDeal(fen.deck, table.options.numCards);
		table.plorder = jsCopy(table.playerNames);
		table.turn = jsCopy(table.playerNames);
		return fen;
	}
	function stats(table) {
		let [me, players] = [getUname(), table.players];
		let style = { patop: 8, mabottom: 20, wmin: 80, bg: 'beige', fg: 'contrast' };
		let player_stat_items = uiTypePlayerStats(table, me, 'dStats', 'rowflex', style)
		for (const plname in players) {
			let pl = players[plname];
			let item = player_stat_items[plname];
			if (pl.playmode == 'bot') { mStyle(item.img, { rounding: 0 }); }
			let d = iDiv(item); mCenterFlex(d); mLinebreak(d); mIfNotRelative(d);
			playerStatCount('star', pl.score, d); //, {}, {id:`stat_${plname}_score`});
		}
	}
	function present(table) {
		presentStandardRoundTable(table);
		const colors = { red: '#e74c3c', green: '#27ae60', purple: 'indigo' };
		setLoadPatterns('dPage', colors);
		let fen = table.fen;
		mStyle('dTable', { padding: 50, wmin: 500 });
		let d = mDom('dTable', { gap: 10, padding: 0 }); mCenterFlex(d);
		let rows = Math.ceil(fen.cards.length / 3);
		let gap = 10;
		let sz = rows <= 4 ? 80 : rows == 5 ? 70 : rows == 6 ? 68 : rows == 7 ? 65 : rows == 8 ? 62 : 60;
		let dBoard = mGrid(rows, 3, d, { gap });
		let items = [];
		for (const c of fen.cards) {
			let dc = setDrawCard(c, dBoard, colors, sz);
			let item = mItem({ div: dc }, { key: c });
			items.push(item);
		}
		let oset = setFindOneSet(items); console.log('=>', oset ? oset.keys[0] : 'NO SET');
		return items;
	}
	async function activate(table, items) {
		if (!isMyTurn(table)) { return; }
		for (const item of items) {
			let d = iDiv(item);
			mStyle(d, { cursor: 'pointer' });
			d.onclick = ev => onclickCard(table, item, items);
		}
		let dParent = mBy('dTable').parentNode; mIfNotRelative(dParent);
		let bNoSet = mButton('No Set', () => onclickNoSet(getUname(), table, items), dParent, {}, 'button', 'bNoSet');
		mPos(bNoSet, window.innerWidth / 2 + 180, 110);
		if (amIHuman(table) && getGameOption('use_level') == 'yes' && getPlayerProp('level') <= 2) {
			let bHint = mButton('Hint', () => onclickHint(table, items), dParent, {}, 'button', 'bHint');
			mPos(bHint, window.innerWidth / 2 - 200 - 80, 110);
		}
		if (isEmpty(table.fen.cards)) return gameoverScore(table);
		if (amIHuman(table) && table.options.gamemode == 'multi') return;
		let name = amIHuman(table) && table.options.gamemode == 'solo' ? someOtherPlayerName(table) : getUname();
		if (nundef(name)) return;
		await botMove(name, table, items);
	}
	async function botMove(name, table, items) {
		let oset = setFindOneSet(items);
		let avg = calcBotLevel(table);
		let ms = avg ? 18000 - avg * 2000 : 1000;
		if (!oset) ms += 2000;
		TO.bot = setTimeout(async () => {
			if (!oset) await onclickNoSet(name, table, items);
			else {
				for (const item of oset.items) toggleItemSelection(item);
				TO.bot1 = setTimeout(async () => await evalMove(name, table, oset.keys), 1000);
			}
		}, rNumber(ms, ms + 2000));
	}
	function setCheckIfSet(keys) {
		let arr = makeArrayWithParts(keys);
		let isSet = arr.every(x => arrAllSameOrDifferent(x));
		return isSet;
	}
	function setCreateDeck() {
		let deck = [];
		['red', 'purple', 'green'].forEach(color => {
			['diamond', 'squiggle', 'oval'].forEach(shape => {
				[1, 2, 3].forEach(num => {
					['solid', 'striped', 'open'].forEach(fill => {
						deck.push(`${color}_${shape}_${num}_${fill}`);
					});
				});
			});
		});
		arrShuffle(deck);
		return deck;
	}
	function setDrawCard(card, dParent, colors, sz = 100) {
		const paths = {
			diamond: "M25 0 L50 50 L25 100 L0 50 Z",
			squiggle: "M38.4,63.4c2,16.1,11,19.9,10.6,28.3c1,9.2-21.1,12.2-33.4,3.8s-15.8-21.2-9.3-38c3.7-7.5,4.9-14,4.8-20 c0-16.1-11-19.9-10.6-28.3C1,0.1,21.6-3,33.9,5.5s15.8,21.2,9.3,38C40.4,50.6,38.5,57.4,38.4,63.4z",
			oval: "M25,95C14.2,95,5.5,85.2,5.5,80V20C5.5,13.2,14.2,5.2,25,5.2S44.5,13.2,44.5,20v60 C44.5,85.2,35.8,95,25,95z"
		}
		let [color, shape, num, fill] = card.split('_');
		var attr = {
			d: paths[shape],
			fill: fill == 'striped' ? `url(#striped-${color})` : fill == 'solid' ? colors[color] : 'none',
			stroke: colors[color],
			'stroke-width': 2,
		};
		let h = sz, w = sz / .65;
		let ws = w / 4;
		let hs = 2 * ws;
		let d0 = mDom(dParent, { display: 'flex', w, h, bg: 'white', rounding: 10 });
		mStyle(d0, { justify: 'center', 'align-items': 'center', gap: 6 })
		let shapeSvg = `<svg viewbox="-2 -2 54 104">` + makeSVG("path", attr) + '</svg>';
		for (const i of range(num)) {
			let d1 = mDom(d0, { h: hs, w: ws }, { html: shapeSvg });
		}
		return d0;
	}
	function setFindAllSets(items) {
		let result = [];
		for (var x = 0; x < items.length; x++) {
			for (var y = x + 1; y < items.length; y++) {
				for (var z = y + 1; z < items.length; z++) {
					assertion(items[x] != items[y], `WTF!?!?!?! ${items[x].key} ${items[y].key}`)
					let list = [items[x], items[y], items[z]];
					let keys = list.map(x => x.key);
					if (setCheckIfSet(keys)) result.push(list);
				}
			}
		}
		if (isEmpty(result)) console.log('no set!')
		return result;
	}
	function setFindOneSet(items) {
		for (var x = 0; x < items.length; x++) {
			for (var y = x + 1; y < items.length; y++) {
				for (var z = y + 1; z < items.length; z++) {
					assertion(items[x] != items[y], `WTF!?!?!?! ${items[x].key} ${items[y].key}`)
					let list = [items[x], items[y], items[z]];
					let keys = list.map(x => x.key);
					if (setCheckIfSet(keys)) return { items: list, keys };
				}
			}
		}
		return null;
	}
	function setLoadPatterns(dParent, colors) {
		dParent = toElem(dParent);
		let id = "setpatterns";
		if (isdef(mBy(id))) { return; }
		let html = `
      <svg id="setpatterns" width="0" height="0">
        <!--  Define the patterns for the different fill colors  -->
        <pattern id="striped-red" patternUnits="userSpaceOnUse" width="4" height="4">
          <path d="M-1,1 H5" style="stroke:${colors.red}; stroke-width:1" />
        </pattern>
        <pattern id="striped-green" patternUnits="userSpaceOnUse" width="4" height="4">
          <path d="M-1,1 H5" style="stroke:${colors.green}; stroke-width:1" />
        </pattern>
        <pattern id="striped-purple" patternUnits="userSpaceOnUse" width="4" height="4">
          <path d="M-1,1 H5" style="stroke:${colors.purple}; stroke-width:1" />
        </pattern>
      </svg>
      `;
		let el = mCreateFrom(html);
		mAppend(dParent, el)
	}
	async function onclickCard(table, item, items) {
		toggleItemSelection(item);
		let selitems = items.filter(x => x.isSelected);
		let [keys, m] = [selitems.map(x => x.key), selitems.length];
		if (m == 3) {
			await evalMove(getUname(), table, keys);
		}
	}
	async function onclickHint(table, items) {
		let oset = setFindOneSet(items);
		let bHint = mBy('bHint');
		disableButton('bHint');
		if (!oset) {
			ANIM.button = scaleAnimation('bNoSet');
		} else {
			let item = rChoose(oset.items);
			await onclickCard(table, item, items);
		}
	}
	async function onclickNoSet(name, table, items) {
		clearEvents();
		mShield('dTable', { bg: 'transparent' });
		let id = table.id;
		let step = table.step;
		let oset = setFindOneSet(items);
		if (!oset) {
			table.players[name].score += 1;
			let fen = table.fen;
			let newCards = deckDeal(fen.deck, 1);
			if (!isEmpty(newCards)) fen.cards.push(newCards[0]); else return await gameoverScore(table);
		} else {
			table.players[name].score -= 1;
		}
		lookupAddToList(table, ['moves'], { step, name, move: ['noSet'], change: oset ? '-1' : '+1', score: table.players[name].score });
		let o = { id, name, step, table };
		if (!oset) o.stepIfValid = step + 1;
		let res = await mPostRoute('table', o); //console.log(res);
	}
	async function evalMove(name, table, keys) {
		clearEvents();
		mShield('dTable', { bg: 'transparent' });
		let id = table.id;
		let step = table.step;
		let isSet = setCheckIfSet(keys);
		if (isSet) {
			table.players[name].score += 1;
			let fen = table.fen;
			let toomany = Math.max(0, fen.cards.length - table.options.numCards);
			let need = Math.max(0, 3 - toomany);
			let newCards = deckDeal(fen.deck, need);
			for (let i = 0; i < 3; i++) if (i < newCards.length) arrReplace1(fen.cards, keys[i], newCards[i]); else removeInPlace(fen.cards, keys[i]);
		} else {
			table.players[name].score -= 1;
		}
		lookupAddToList(table, ['moves'], { step, name, move: keys, change: isSet ? '+1' : '-1', score: table.players[name].score });
		let o = { id, name, step, table };
		if (isSet) o.stepIfValid = step + 1;
		let res = await mPostRoute('table', o); //console.log(res);
	}
	return { setup, present, stats, activate, hasInstruction: false };
}

//#endregion

async function myAsync(ms, func) {
  pollStop();
  let args = [...arguments].slice(2);
  let res = await func(...args);
  pollStart(ms);
}

function _showYaml(o, title, dParent, styles = {}, opts = {}) {
	o = toFlatObject(o);
	//addKeys({rounding: 8, padding: 4, w:200, h:70}, styles);
	mLinebreak(dParent);
	let keys = Object.keys(o);
	let grid = mGrid(keys.length, 2, dParent, styles); //, { wcols: 'auto' });
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
			// mDom(grid, { fg: 'red', align: 'right', w:'30%' }, { html: k })
			// mDom(grid, { maleft: 10, w:'60%', align:'left' }, { html: o[k] });
			mDom(grid, { fg: 'red', align: 'right', w:'200' }, { html: k })
			mDom(grid, { maleft: 10, w:'60%', align:'800' }, { html: o[k] });
		}
	}
	return dParent;
}
async function _showTables(files) {
	mClear('dMain');
	let d = mDom('dMain'); mCenterCenterFlex(d); mFlexWrap(d);
	M.tables = await getTables();
	for(const id in M.tables){
		let t = M.tables[id];
		showYaml(t, fromNormalized(id), d, { bg: 'black', fg: 'white', rounding: 10, padding: 10, margin: 10, w100:true });
		//mDom('dMain',{},{tag:'pre',html:mYaml(t)});

	}
}
async function showTables(from) {
  let me = UGetName();
  let tables = dict2list(await getTables()); console.log(tables);
  tables.map(x => x.prior = x.status == 'open' ? 0 : x.turn.includes(me) ? 1 : x.playerNames.includes(me) ? 2 : 3);
  sortBy(tables, 'prior');
  let dParent = mBy('dTableList');
  if (isdef(dParent)) { mClear(dParent); }
  else dParent = mDom('dMain', {}, { className: 'section', id: 'dTableList' });
  if (isEmpty(tables)) { mText('no active game tables', dParent); return []; }
  tables.map(x => x.game_friendly = capitalize(MGetGameFriendly(x.game)));
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
async function gamePresent() {
  console.log('polling!', DA.pollCounter);
  DA.tData = await tableLoad();
  console.log('', DA.pollCounter, 'PRESENT', DA.tid); //,DA.tData);
}

async function tableCreate(player, tData) {
  if (nundef(player)) player = UGetName();
  if (nundef(tData)) tData = { players: ['felix', 'amanda'], status: 'open' };
  let tid = generateTableName(tData.players.length, M.tables);
  tData.id = tid;
  let res = await mPhpPost('game_user', { action: 'create', tid, tData });
  if (res.tid) {
    console.log("Game Creation:", res.tid);
    return await tableGetDefault(res.tid);
  } else {
    console.log("Game Creation failed");
    return null;
  }
}

function _showYaml(o, title, dParent, styles = {}, opts = {}) {
  o = toFlatObject(o);
  mLinebreak(dParent);
  let keys = Object.keys(o);
  let grid = mGrid(keys.length, 2, dParent, styles);
  mDom(grid, { 'grid-column': 'span 2', align: 'center', weight: 'bold' }, { html: title });
  console.log('type', typeof o);
  if (isList(o)) {
    arrSort(o);
    o.map((x, i) => { mDom(grid, { fg: 'red', align: 'right' }, { html: i }); mDom(grid, { maleft: 10 }, { html: x }); });
  } else if (isDict(o)) {
    keys.sort();
    for (const k of keys) {
      mDom(grid, { fg: 'red', align: 'right', w: '200' }, { html: k })
      mDom(grid, { maleft: 10, w: '60%', align: '800' }, { html: o[k] });
    }
  }
  return dParent;
}


//#region games: orig vs alternative
function UGetName() { return U.name; }
function MGetUserColor(uname) { return Serverdata.users[uname].color; }
function MGetUserOptionsForGame(name, gamename) { return lookup(Serverdata.users, [name, 'games', gamename]); }

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
  let t = createOpenTable(DA.gamename, players, options);
  let res = await mPostRoute('postTable', t);
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
    await postUserChange({ name, games })
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
async function showGameMenuPlayerDialog(name, shift = false) {
	let allPlItem = DA.allPlayers[name];
	let gamename = DA.gamename;
	let da = iDiv(allPlItem);
	if (!DA.playerList.includes(name)) await setPlayerPlaying(allPlItem, gamename);
	else await setPlayerNotPlaying(allPlItem, gamename);
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
	await clickOnPlayer(me);
}
async function showGameOptions(dParent, gamename) {
	let poss = MGetGameOptions(gamename);
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
async function showTables(from) {
	await updateTestButtonsLogin();
	let me = UGetName();
	let tables = Serverdata.tables = await mGetRoute('tables');
	tables.map(x => x.prior = x.status == 'open' ? 0 : x.turn.includes(me) ? 1 : x.playerNames.includes(me) ? 2 : 3);
	sortBy(tables, 'prior');
	let dParent = mBy('dTableList');
	if (isdef(dParent)) { mClear(dParent); }
	else dParent = mDom('dMain', {}, { className: 'section', id: 'dTableList' });
	if (isEmpty(tables)) { mText('no active game tables', dParent); return []; }
	tables.map(x => x.game_friendly = capitalize(MGetGameFriendly(x.game)));
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
function showYaml(o, title, dParent, styles = {}, opts = {}) {
	o = toFlatObject(o);
	let d = mDom(dParent, styles, opts);
	mDom(d, {}, { tag: 'h2', html: title });
	let keys = Object.keys(o);
	let grid = mGrid(keys.length, 2, d, { rounding: 8, padding: 4, bg: '#eee', wmax: 500 }, { wcols: 'auto' });
	let cellStyles = { hpadding: 4 };
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
	return d;
}



//mediaDropper v0:
async function mMediaDropper(d) {
  let fileInput = mDom(d, {}, { tag: 'input', type: 'file', accept: 'image/*,video/*,audio/*,.txt' });
  let dropZone = mDom(d, { w: 500, hmin: 300, border: 'white 1px dashed', align: 'center' }, { html: 'Drop media here' });

  function checkIfFromOwnServer(url) {
    const ownOrigin = window.location.origin;
    if (url.startsWith(ownOrigin)) {
      console.log('Dropped from inside the project (server):', url);
      return true;
    } else {
      console.log('Dropped from external website:', url);
      return false;
    }
  }

  async function ondropMedia(ev) {
    ev.preventDefault();
    let item = ev.dataTransfer.items[0];
    let file = item.getAsFile();

    if (file) {
      await displayMediaData(URL.createObjectURL(file), file.type);
    } else {
      file = ev.dataTransfer.files[0];
      const url = await new Promise(resolve => item.getAsString(resolve));
      let isOwnServer = checkIfFromOwnServer(url);
      if (isOwnServer) {
        await displayMediaData(url, 'unknown');
      } else {
        await displayMediaData(url, 'unknown');
      }
    }
  }

  async function onchangeFileinput(ev) {
    let file = ev.target.files[0];
    if (file) {
      await displayMediaData(URL.createObjectURL(file), file.type);
    }
  }

  async function displayMediaData(src, type) {
    mClear(dropZone);

    if (type.startsWith('image')) {
      mLoadImgAsync(dropZone, { wmax: 500 }, { tag: 'img', src: src });
    } else if (type.startsWith('video')) {
      mDom(dropZone, { w: 500 }, { tag: 'video', src: src, controls: true });
    } else if (type.startsWith('audio')) {
      mDom(dropZone, {}, { tag: 'audio', src: src, controls: true });
    } else if (type === 'text/plain') {
      let response = await fetch(src);
      let text = await response.text();
      mDom(dropZone, {}, { tag: 'pre', html: text });
    } else {
      mDom(dropZone, {}, { html: 'Unsupported file type' });
    }
  }

  function preventDefaults(ev) { ev.preventDefault(); ev.stopPropagation(); }
  function highlight(ev) { mClass(ev.target, 'framedPicture'); }
  function unhighlight(ev) { mClassRemove(ev.target, 'framedPicture'); }

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evname => {
    dropZone.addEventListener(evname, preventDefaults, false);
    document.body.addEventListener(evname, preventDefaults, false);
  });
  ['dragenter', 'dragover'].forEach(evname => { dropZone.addEventListener(evname, highlight, false); });
  ['dragleave', 'drop'].forEach(evname => { dropZone.addEventListener(evname, unhighlight, false); });

  dropZone.addEventListener('drop', ondropMedia, false);
  fileInput.addEventListener('change', onchangeFileinput, false);
}


//mKey v1: oppinionated
async function mKeyO(imgKey, d, styles = {}, opts = {}) {
	styles = jsCopy(styles);
	let type = opts.prefer;
	let o = type != 'plain' ? lookup(M.superdi, [imgKey]) : null;
	let src;
	if (nundef(o) && imgKey.includes('.')) src = imgKey;
	else if (isdef(o) && (type == 'img' || type == 'photo') && isdef(o[type])) src = o[type];
	else if (isdef(o) && isdef(o.img)) src = o.img;
	if (isdef(src)) {
		let [w, h] = mSizeSuccession(styles, 40);
		addKeys({ w, h }, styles);
		addKeys({ tag: 'img', src }, opts);
		let d0 = mDom(d, styles, opts);
		mCenterCenterFlex(d0);
		let img = await mImgAsync(d0, styles, opts, roundIfTransparentCorner);
		return d0;
	} else if (isdef(o)) {
		let [w, h] = mSizeSuccession(styles, 40);
		let sz = h;
		addKeys({ h }, styles);
		if (nundef(type)) type = isdef(o.text) ? 'text' : isdef(o.fa6) ? 'fa6' : isdef(o.fa) ? 'fa' : isdef(o.ga) ? 'ga' : null;
		let family = type == 'text' ? 'emoNoto' : type == 'fa6' ? 'fa6' : type == 'fa' ? 'pictoFa' : 'pictoGame';
		let html = type == 'text' ? o.text : String.fromCharCode('0x' + o[type]);
		addKeys({ family }, styles);
		let d0 = mDom(d, styles, opts);
		mCenterCenterFlex(d0);
		let d1 = mDom(d0, {}, { html });
		let r = getRect(d1);
		[w, h] = [r.w, r.h];
		let scale = Math.min(sz / w, sz / h);
		d1.style.transformOrigin = 'center center';
		d1.style.transform = `scale(${scale})`;
		d1.style.transform = `scale(${scale})`;
		return d0;
	} else {
		addKeys({ html: imgKey }, opts)
		let img = mDom(d, styles, opts);
		return img;
	}
	console.log('type', type)
}

//imageDD v3
function checkIfFromOwnServer(url) {
	const ownOrigin = window.location.origin; // e.g., http://127.0.0.1:51012
	if (url.startsWith(ownOrigin)) {
		console.log('Dropped from inside the project (server):', url); return true;
	} else {
		console.log('Dropped from external website:', url); return false;
	}
}
async function handleDropOneZone(ev) {
	console.log(arguments, ev.target, ev.target.files, ev.dataTransfer); 
	let dropZone = DA.dropZone; //ev.target;
	console.log('dropZone', dropZone);
	let dropImage = dropZone.getElementsByTagName('img')[0];
	let items = isdef(ev.target.files)?ev.target.files:ev.dataTransfer.items;
	console.log('items', items); //return;
	for (const item of items) {
		if (nundef(item.kind) || item.kind === 'file') {
			// Dropped from computer (local file)
			const file = item.getAsFile();
			console.log('Dropped from computer:', file);
		} else if (item.kind === 'string' && item.type === 'text/uri-list') {
			// Dropped from a website (URL)
			const url = await new Promise(resolve => item.getAsString(resolve));
			console.log('Dropped from website:', url);
			let isOwnServer = checkIfFromOwnServer(url);
			if (!isOwnServer) {
				let { dataUrl, width, height } = await resizeImage(url, 500, 1000);
				let name = `img${getNow()}`; //await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }); console.log('you entered', name);
				uploadImage(dataUrl, `zdata/downloads/${name}.${stringAfter(file.name, '.')}`);
				mStyle(dropImage, { w: Math.min(500, width), display: 'block', margin: 'auto' }, { src: dataUrl });

				dropImage.src = url; return;
			}
			dropImage.src = url;
		}
	}
}
function mImageDropper(d,dropHandler) {
  d = toElem(d);

  function preventDefaults(ev) { ev.preventDefault(); ev.stopPropagation(); }
  function highlight(ev) { mClass(ev.target, 'framedPicture'); }
  function unhighlight(ev) { mClassRemove(ev.target, 'framedPicture'); }

  let dropZone = DA.dropZone = d;
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evname => {
    dropZone.addEventListener(evname, preventDefaults, false);
    document.body.addEventListener(evname, preventDefaults, false);
  });
  ['dragenter', 'dragover'].forEach(evname => { dropZone.addEventListener(evname, highlight, false); });
  ['dragleave', 'drop'].forEach(evname => { dropZone.addEventListener(evname, unhighlight, false); });

  let dropImage = DA.dropImage = mDom(dropZone, { w: 500 }, { tag: 'img' });

  dropZone.addEventListener('drop', dropHandler, false);
}


//imageDD v2
async function handleDrop(ev) {
  console.log(arguments,ev.target)
  let dropZone = ev.target;
  let dropImage = dropZone.getElementsByTagName('img')[0];
  var files = ev.dataTransfer.files;

  if (files.length) {
    var file = files[0];
    if (file.type.startsWith('image/')) {
      console.log(file)
      let {dataUrl,width,height} = await resizeImage(file, 500, 1000);
      let name = `img${getNow()}`; //await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }); console.log('you entered', name);
      uploadImage(dataUrl, `zdata/downloads/${name}.${stringAfter(file.name, '.')}`);
      mStyle(dropImage,{w:Math.min(500,width),display:'block',margin:'auto'},{src:dataUrl});
    } else {
      console.log('Please drop an image file.');
    }
  } else {
    // Handle external image URLs
    var imageUrl = ev.dataTransfer.getData('text/uri-list');
    if (imageUrl) {
      let src = imageUrl;
      dropImage.src = src;
      dropImage.style.display = 'block';
      dropZone.textContent = '';
      dropZone.appendChild(dropImage);
    } else {
      console.log('Please drop an image file or a valid image URL.');
    }
  }
}

function mImageDropper(d) {
  d = toElem(d);

  function preventDefaults(ev) { ev.preventDefault(); ev.stopPropagation(); }
  function highlight(ev) { mClass(ev.target, 'framedPicture'); }
  function unhighlight(ev) { mClassRemove(ev.target, 'framedPicture'); }

  let dropZone = d;
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evname => {
    dropZone.addEventListener(evname, preventDefaults, false);
    document.body.addEventListener(evname, preventDefaults, false);
  });
  ['dragenter', 'dragover'].forEach(evname => { dropZone.addEventListener(evname, highlight, false); });
  ['dragleave', 'drop'].forEach(evname => { dropZone.addEventListener(evname, unhighlight, false); });

  let dropImage = mDom(dropZone, { w: 500 }, { tag: 'img' });

  dropZone.addEventListener('drop', handleDrop, false);
}

//imageDD v1
function mImageDropper(d) {
  d = toElem(d);

  function preventDefaults(ev) { ev.preventDefault(); ev.stopPropagation(); }
  function highlight(ev) { mClass(ev.target, 'framedPicture'); }
  function unhighlight(ev) { mClassRemove(ev.target, 'framedPicture'); }

  let dropZone = d;
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evname => {
    dropZone.addEventListener(evname, preventDefaults, false);
    document.body.addEventListener(evname, preventDefaults, false);
  });
  ['dragenter', 'dragover'].forEach(evname => { dropZone.addEventListener(evname, highlight, false); });
  ['dragleave', 'drop'].forEach(evname => { dropZone.addEventListener(evname, unhighlight, false); });

  let dropImage = mDom(dropZone, { w: 500 }, { tag: 'img' });

  async function handleDrop(ev) {
    var files = ev.dataTransfer.files;

    if (files.length) {
      var file = files[0];
      if (file.type.startsWith('image/')) {
        console.log(file)
        let resized = await resizeImage(file, 500, 1000);
        let name = `img${getNow()}`; //await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }); console.log('you entered', name);
        uploadImage(resized, `zdata/downloads/${name}.${stringAfter(file.name, '.')}`);
        //console.log('res',res)
        dropImage.src = resized;
        dropImage.style.display = 'block';
        dropZone.textContent = '';
        dropZone.appendChild(dropImage);
      } else {
        console.log('Please drop an image file.');
      }
    } else {
      // Handle external image URLs
      var imageUrl = ev.dataTransfer.getData('text/uri-list');
      if (imageUrl) {
        let src = imageUrl;
        dropImage.src = src;
        dropImage.style.display = 'block';
        dropZone.textContent = '';
        dropZone.appendChild(dropImage);
      } else {
        console.log('Please drop an image file or a valid image URL.');
      }
    }



  }
  dropZone.addEventListener('drop', handleDrop, false);
}

//imageDD v0
function mImageDropper(d) {
  d = toElem(d);

  function preventDefaults(ev) { ev.preventDefault(); ev.stopPropagation(); }
  function highlight(ev) { mClass(ev.target, 'framedPicture'); }
  function unhighlight(ev) { mClassRemove(ev.target, 'framedPicture'); }

  let dropZone = d;
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evname => {
    dropZone.addEventListener(evname, preventDefaults, false);
    document.body.addEventListener(evname, preventDefaults, false);
  });
  ['dragenter', 'dragover'].forEach(evname => { dropZone.addEventListener(evname, highlight, false); });
  ['dragleave', 'drop'].forEach(evname => { dropZone.addEventListener(evname, unhighlight, false); });

  let dropImage = mDom(dropZone, { w: 500 }, { tag: 'img' });

  function handleDrop(ev) {
    var files = ev.dataTransfer.files;

    if (files.length) {
      var file = files[0];
      if (file.type.startsWith('image/')) {
        console.log(file)
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async function () {
          let src = reader.result;
          let resized = await resizeImage(file, 500, 1000);
          let name = `img${getNow()}`; //await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }); console.log('you entered', name);
          uploadImage(resized, `zdata/downloads/${name}.${stringAfter(file.name, '.')}`);
          //console.log('res',res)
          dropImage.src = resized;
          dropImage.style.display = 'block';
          dropZone.textContent = '';
          dropZone.appendChild(dropImage);
        }
      } else {
        console.log('Please drop an image file.');
      }
    } else {
      // Handle external image URLs
      var imageUrl = ev.dataTransfer.getData('text/uri-list');
      if (imageUrl) {
        let src = imageUrl;
        dropImage.src = src;
        dropImage.style.display = 'block';
        dropZone.textContent = '';
        dropZone.appendChild(dropImage);
      } else {
        console.log('Please drop an image file or a valid image URL.');
      }
    }
  }

  dropZone.addEventListener('drop', handleDrop, false);

}

//blog v5
function mSortable(divs) {
	let draggedElement = null;
	let lastHighlighted = null;

	divs.forEach(container => {
		container.querySelectorAll('img,div').forEach(el => {
			el.draggable = true;

			el.addEventListener('dragstart', e => {
				draggedElement = el;
				e.dataTransfer.effectAllowed = 'move';
			});

			el.addEventListener('dragover', e => {
				e.preventDefault();
				if (el !== draggedElement) {
					if (lastHighlighted) lastHighlighted.style.outline = '';
					el.style.outline = '2px solid yellow';
					lastHighlighted = el;
				}
			});

			el.addEventListener('dragleave', () => {
				if (el === lastHighlighted) {
					el.style.outline = '';
					lastHighlighted = null;
				}
			});

			el.addEventListener('drop', e => {
				e.preventDefault();
				if (draggedElement !== lastHighlighted) {
					console.log('dropped',draggedElement,'on', lastHighlighted, draggedElement.parentNode);
					lastHighlighted.style.outline = '';
					draggedElement.style.outline = '';
					lastHighlighted.parentNode.insertBefore(draggedElement, lastHighlighted); 
				}
				draggedElement = null;
				lastHighlighted = null;
			});
		});
	})
}


//blog v4
function enableDragDrop(container) {
	let draggedElement = null;
	let lastHighlighted = null;
	container.querySelectorAll('div, img').forEach(el => {
		el.draggable = true;
		el.addEventListener('dragstart', e => {
			draggedElement = el;
			e.dataTransfer.effectAllowed = 'move';
		});
		el.addEventListener('dragover', e => {
			e.preventDefault();
			if (el !== draggedElement) {
				if (lastHighlighted) lastHighlighted.style.border = '';
				el.style.border = '2px solid yellow';
				lastHighlighted = el;
			}
		});
		el.addEventListener('dragleave', () => {
			if (el === lastHighlighted) {
				el.style.border = '';
				lastHighlighted = null;
			}
		});
		el.addEventListener('drop', e => {
			e.preventDefault();
			if (draggedElement && lastHighlighted && draggedElement !== lastHighlighted) {
				lastHighlighted.style.border = '';
				lastHighlighted.after(draggedElement);
			}
			draggedElement = null;
			lastHighlighted = null;
		});
	});
}
function mCollapse(divs) {
	//assumes that divs have first element a title, next to which a + or - is added
	function collapseOne(div) {
		let b = div.firstChild.firstChild;
		b.textContent = '+ ';
		let chi = arrChildren(div).slice(1);
		chi.map(x => mStyle(x, { display: 'none' }));
	}
	function expandOne(div) {
		let b = div.firstChild.firstChild;
		b.textContent = '- ';
		let chi = arrChildren(div).slice(1);
		chi.map(x => mStyle(x, { display: 'block' }));
	}
	function isCollapsedOne(div) {
		let chi = arrChildren(div).slice(1);
		return chi[0].style.display === 'none';
	}
	function toggleOne(div) {
		if (isCollapsedOne(div)) expandOne(div); else collapseOne(div);
	}

	divs.forEach(div => {
		let d1 = div.firstChild;
		let b = mDom(d1, { margin: 5, cursor: 'pointer' }, { tag: 'span', html: '- ' }); mInsert(d1, b, 0);
		b.onclick = () => { toggleOne(div); }
	});
	return {
		divs, toggleOne, collapseOne, expandOne, isCollapsedOne,
		collapseAll: () => { divs.map(collapseOne); }, expandAll: () => { divs.map(expandOne); },
	};
}

//blog v3
function addCollapseExpand(divs) {
	divs.forEach(div => {
			const btn = document.createElement('span');
			btn.textContent = '+ ';
			btn.style.cursor = 'pointer';
			btn.style.marginRight = '5px';
			btn.onclick = () => {
					if (div.style.display === 'none') {
							div.style.display = '';
							btn.textContent = '- ';
					} else {
							div.style.display = 'none';
							btn.textContent = '+ ';
					}
			};
			div.before(btn);
			div.style.display = 'none'; // Start collapsed
	});
}
function blogShowAll(d, blog) {
	let dates = Object.keys(blog);
	dates.sort((a, b) => new Date(b) - new Date(a));
	let di = {};
	for (const date of dates) {
		di[date] = blogShow(d, date, blog[date]);
	}
	return di;
}
function blogCollapse(items) { 
	let isCollapsed = false;
	function collapseOne(item) {
		mStyle(item.dRep,{display:'block'});
		mStyle(item.dContent,{display:'none'});
	}
	function expandOne(item) {
		mStyle(item.dRep,{display:'none'});
		mStyle(item.dContent,{display:'block'});
	}
	function isCollapsedOne(item) {
		return mGetStyle(item.dContent,'display') == 'none';
	}
	function toggleOne(item) {
		if (isCollapsedOne(item)) expandOne(item); else collapseOne(item);
	}
	function prepOne(item) {

		// let d = iDiv(item);
		// let dTitle = d.firstChild;
		// dTitle.style.cursor = 'pointer';
		// dTitle.onclick = () => toggleOne(item);
	}
	// items.map(prepOne);
	return {
		items,
		collapseAll: () => { items.map(collapseOne); isCollapsed = true; },
		expandAll: () => { items.map(expandOne); isCollapsed = false; },
		toggleAll: () => items.map(toggleOne),
		collapseOne,
		expandOne,
		toggleOne,
		isCollapsedOne,
		isCollapsedAll: () => isCollapsed, //items.every(isCollapsedOne),
	}
}

// blog v2
function blogShow(d, date, o) {
	let dBlog = mDom(d, {fz:20, }, { key: date });
	let dRep = mDom(dBlog, {className:'title_collapsed',display:'none'}, { html: `${date}: ${o.title}` });
	let dContent = mDom(dBlog);
	mDom(dContent, {className:'title'}, { html: `${date}: ${o.title}` });
	let dParts = mDom(dContent);
	let blogItem = { o, key: date, div: dBlog, dRep, dContent, dParts, items: [] }
	for (let textPart of o.text) {
		let d2 = mDom(dParts, { caret: 'white' });
		let item = { key: date, text: textPart, div: d2, type: textPart.includes('blogimages/') ? 'img' : 'text' };
		blogItem.items.push(item);
		if (textPart.includes('blogimages/')) {
			mDom(d2, { w100: true }, { tag: 'img', src: textPart });
		} else {
			mStyle(d2, { mabottom: 10 }, { contenteditable: true, html: textPart });
			d2.onblur = saveBlogList;
		}
	}
	let d3 = mDom(dContent, {}, { tag: 'hr' });
	return blogItem;
}
function blogCollapse(items) { 
	let isCollapsed = false;
	function collapseOne(item) {
		mStyle(item.dRep,{display:'block'});
		mStyle(item.dContent,{display:'none'});
	}
	function expandOne(item) {
		mStyle(item.dRep,{display:'none'});
		mStyle(item.dContent,{display:'block'});
	}
	function isCollapsedOne(item) {
		return mGetStyle(item.dContent,'display') == 'none';
	}
	function toggleOne(item) {
		if (isCollapsedOne(item)) expandOne(item); else collapseOne(item);
	}
	function prepOne(item) {
		// let d = iDiv(item);
		// let dTitle = d.firstChild;
		// dTitle.style.cursor = 'pointer';
		// dTitle.onclick = () => toggleOne(item);
	}
	// items.map(prepOne);
	return {
		items,
		collapseAll: () => { items.map(collapseOne); isCollapsed = true; },
		expandAll: () => { items.map(expandOne); isCollapsed = false; },
		toggleAll: () => items.map(toggleOne),
		collapseOne,
		expandOne,
		toggleOne,
		isCollapsedOne,
		isCollapsedAll: () => isCollapsed, //items.every(isCollapsedOne),
	}
}

//blog v1
function blogShow(d, date, o) {
	let dBlog = mDom(d, {fz:20, }, { key: date });
	// let dRep = mDom(dBlog, {className:'title_collapsed',display:'none'}, { html: `${date}: ${o.title}` });
	// let dContent = mDom(dBlog);
	mDom(dBlog, {className:'title'}, { html: `${date}: ${o.title}` });
	let d1 = mDom(dBlog);
	let blogItem = { o, key: date, div: dBlog, dParts: d1, items: [] }
	for (let textPart of o.text) {
		let d2 = mDom(d1, { caret: 'white' });
		let item = { key: date, text: textPart, div: d2, type: textPart.includes('blogimages/') ? 'img' : 'text' };
		blogItem.items.push(item);
		if (textPart.includes('blogimages/')) {
			mDom(d2, { w100: true }, { tag: 'img', src: textPart });
		} else {
			mStyle(d2, { mabottom: 10 }, { contenteditable: true, html: textPart });
			d2.onblur = saveBlogList;
		}
	}
	let d3 = mDom(dBlog, {}, { tag: 'hr' });
	return blogItem;
}
function blogCollapse(items, classCollapsed='title_collapsed') { 
	let isCollapsed = false;
	function collapseOne(item) {
		let d = iDiv(item);
		let dTitle = d.firstChild;
		mClass(dTitle, classCollapsed);
		for (const c of arrChildren(d)) {
			if (c == dTitle) continue;
			c.style.display = 'none';
		};
	}
	function expandOne(item) {
		let d = iDiv(item);
		let dTitle = d.firstChild;
		mClassRemove(dTitle, classCollapsed);
		for (const c of arrChildren(d)) {
			c.style.display = 'block';
		};
	}
	function isCollapsedOne(item) {
		let d = iDiv(item);
		let second = arrChildren(d)[1];
		return second.style.display == 'none';
	}
	function toggleOne(item) {
		if (isCollapsedOne(item)) expandOne(item); else collapseOne(item);
	}
	function prepOne(item) {
		let d = iDiv(item);
		let dTitle = d.firstChild;
		dTitle.style.cursor = 'pointer';
		dTitle.onclick = () => toggleOne(item);
	}
	items.map(prepOne);
	return {
		items,
		collapseAll: () => { items.map(collapseOne); isCollapsed = true; },
		expandAll: () => { items.map(expandOne); isCollapsed = false; },
		toggleAll: () => items.map(toggleOne),
		collapseOne,
		expandOne,
		toggleOne,
		isCollapsedOne,
		isCollapsedAll: () => isCollapsed, //items.every(isCollapsedOne),
	}
}

async function _onchangeFileInput(ev) {
	console.log('CHANGE', ev.target.files); 
	let files = ev.target.files;
	let file = files[0]; console.log(file)
	let reader = new FileReader();
	reader.onload = function (ev) {
		let data = ev.target.result;
		let image = new Image();
		image.src = data;
		image.onload = function () {
			let canvas = document.createElement('canvas');
			canvas.width = image.width;
			canvas.height = image.height;
			let ctx = canvas.getContext('2d');
			ctx.drawImage(image, 0, 0);
			let dataURL = canvas.toDataURL('image/png');
			let img = document.createElement('img');
			img.src = dataURL;
			img.style.maxWidth = '500px';
			console.log('HALLO!!!!!!')
			DA.dropZone.appendChild(img);
		};
	};
	reader.readAsDataURL(file);		
}
async function _ondropImage(ev, elem) {
	let dt = ev.dataTransfer;
	if (dt.types.includes('itemkey')) {
		let data = ev.dataTransfer.getData('itemkey');
		await simpleOnDroppedItem(data);
	} else {
		const files = ev.dataTransfer.files;
		if (files.length > 0) {
			const reader = new FileReader();
			reader.onload = async (evReader) => {
				let data = evReader.target.result;
				await simpleOnDroppedUrl(data, UI.simple);
			};
			reader.readAsDataURL(files[0]);
		}
	}
}
async function _handleDrop(ev) {
  console.log(arguments, ev.target)
  let dropZone = ev.target;
  let dropImage = dropZone.getElementsByTagName('img')[0];
  let items = ev.dataTransfer.items;

  for (const item of items) {
    if (item.kind === 'file') {
      // Dropped from computer (local file)
      const file = item.getAsFile();
      console.log('Dropped from computer:', file.name);
    } else if (item.kind === 'string' && item.type === 'text/uri-list') {
      // Dropped from a website (URL)
      const url = await new Promise(resolve => item.getAsString(resolve));
      console.log('Dropped from website:', url);
      checkIfFromOwnServer(url);
      dropImage.src = url;
    }
  }


  // if (files.length) {
  //   var file = files[0];
  //   if (file.type.startsWith('image/')) {
  //     console.log(file)
  //     let {dataUrl,width,height} = await resizeImage(file, 500, 1000);
  //     let name = `img${getNow()}`; //await mGather(mInput, 'dTop', { bg: 'pink', padding: 4 }); console.log('you entered', name);
  //     uploadImage(dataUrl, `zdata/downloads/${name}.${stringAfter(file.name, '.')}`);
  //     mStyle(dropImage,{w:Math.min(500,width),display:'block',margin:'auto'},{src:dataUrl});
  //   } else {
  //     console.log('Please drop an image file.');
  //   }
  // } else {
  //   // Handle external image URLs
  //   var imageUrl = ev.dataTransfer.getData('text/uri-list');
  //   if (imageUrl) {
  //     let src = imageUrl;
  //     dropImage.src = src;
  //     dropImage.style.display = 'block';
  //     dropZone.textContent = '';
  //     dropZone.appendChild(dropImage);
  //   } else {
  //     console.log('Please drop an image file or a valid image URL.');
  //   }
  // }
}
function handleDrop(ev) {
  console.log('HAAAAAAAAAAAAALO')
  const files = ev.dataTransfer.files;
  handleFiles(files);
}

function handleFiles(files) {
  [...files].forEach(previewFile);
}
function handleFiles(files) {
	[...files].forEach(file => {
			if (file.type.startsWith('image/')) {
					const reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onloadend = () => {
							displayImage(reader.result);
					};
			}
	});
}
function previewFile(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    const img = document.createElement('img');
    img.src = reader.result;
    img.style.maxWidth = '500px';
    DA.dropZone.appendChild(img);
  };
}
function garnix() {
	document.addEventListener('drop', async (event) => {
		event.preventDefault(); // Prevent default behavior
		const items = event.dataTransfer.items;

		if (items.length > 0) {
			for (const item of items) {
				if (item.kind === 'file') {
					// Dropped from computer (local file)
					const file = item.getAsFile();
					console.log('Dropped from computer:', file.name);
				} else if (item.kind === 'string' && item.type === 'text/uri-list') {
					// Dropped from a website (URL)
					const url = await new Promise(resolve => item.getAsString(resolve));
					console.log('Dropped from website:', url);
					checkIfFromOwnServer(url);
				}
			}
		}
	});

}
async function handleImageDrop(ev) {
	return new Promise((resolve, reject) => {
		ev.preventDefault();
		const files = ev.dataTransfer.files;
		let fileNameDisplay = ev.target;
		if (files.length > 0) {
			const file = files[0];
			const fileName = file.name;
			const fileType = file.type;
			console.log(fileName, fileType);
			if (fileType.startsWith('image/')) {
				fileNameDisplay.textContent = `Dropped image: ${stringBefore(fileName, '.')}.${stringAfter(fileName, '.')}`;
				const reader = new FileReader();
				reader.onload = async (evReader) => {
					let data = evReader.target.result;
					let resized = await resizeImage(file, 420, 300);
					console.log(DA.droppedImage)
					DA.droppedImage.src = data;
					resolve(data);
				};
				reader.readAsDataURL(files[0]);
			} else {
				fileNameDisplay.textContent = 'Please drop a valid image file.';
			}
		}
	});
}
async function mPostPhp(cmd, o, jsonResult = true) {
	let sessionType = detectSessionType();
	let server = sessionType == 'fastcomet' ? 'https://moxito.online/' : 'http://localhost:8080/fastcomet/';
	if (isdef(o.path) && (o.path.startsWith('zdata') || o.path.startsWith('y'))) o.path = '../../' + o.path;
	let res = await fetch(server + `ilms/php/${cmd}.php`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(o), // Send the line in POST request
		}
	);
	let text;
	try {
		text = await res.text();
		if (!jsonResult) {
			return text;
		}
		let obj = JSON.parse(text);
		return obj;
	} catch (e) {
		return isString(text) ? text : e;
	}
}

async function handleImageDrop(ev) {
	return new Promise((resolve, reject) => {
		ev.preventDefault();
		const files = ev.dataTransfer.files;
		let fileNameDisplay = ev.target;
		if (files.length > 0) {
			const file = files[0];
			const fileName = file.name;
			const fileType = file.type;
			console.log(fileName, fileType);
			if (fileType.startsWith('image/')) {
				fileNameDisplay.textContent = `Dropped image: ${stringBefore(fileName, '.')}.${stringAfter(fileName, '.')}`;
				const reader = new FileReader();
				reader.onload = async (evReader) => {
					let data = evReader.target.result;
					let resized = await resizeImage(file, 420, 300);
					resolve(data);
				};
				reader.readAsDataURL(files[0]);
			} else {
				fileNameDisplay.textContent = 'Please drop a valid image file.';
			}
		}
	});
}
async function rest() {
	const dataTransfer = ev.dataTransfer;
	if (dataTransfer.items) {
		for (const item of dataTransfer.items) {
			if (item.kind === "file" && item.type.startsWith("image/")) {
				console.log('item', item);
				const file = item.getAsFile();
				let resizedDataUrl = await resizeImage(file, 420, 300);
				if (resizedDataUrl) {
					console.log('resizedDataUrl', resizedDataUrl);
				}
			}
		}
	}
}
function onchangeFileInput(ev) {
	console.log('CHANGE',ev.target.files);return;
	let files = ev.target.files;
	let file = files[0]; console.log(file)
	let reader = new FileReader();
	reader.onload = function (ev) {
		let data = ev.target.result;
		let image = new Image();
		image.src = data;
		image.onload = function () {
			let canvas = document.createElement('canvas');
			canvas.width = image.width;
			canvas.height = image.height;
			let ctx = canvas.getContext('2d');
			ctx.drawImage(image, 0, 0);
			let dataURL = canvas.toDataURL('image/png');
			let img = document.createElement('img');
			img.src = dataURL;
			img.style.maxWidth = '500px';
			console.log('HALLO!!!!!!')
			DA.dropZone.appendChild(img);
		};
	};
	reader.readAsDataURL(file);
}
async function mPhpPostImage(image, path) {
	return await mPostPhp('upload_image', { image, path }, false);
}
function mGather(dAnchor, styles = {}, opts = {}) {
	return new Promise((resolve, _) => {
		let [content, type] = [valf(opts.content, 'name'), valf(opts.type, 'text')]; //defaults
		let dbody = document.body;
		let dDialog = mDom(dbody, { bg: '#00000040', border: 'none', box: true, w: '100vw', h: '100vh' }, { tag: 'dialog', id: 'dDialog' });
		let d = mDom(dDialog);
		let funcName = `uiGadgetType${capitalize(type)}`; //console.log(funcName)
		let uiFunc = window[funcName];
		let dx = uiFunc(d, content, x => { dDialog.remove(); resolve(x) }, styles, opts);
		if (isdef(opts.title)) mInsert(dx, mCreateFrom(`<h2>Details for ${opts.title}</h2>`))
		dDialog.addEventListener('mouseup', ev => {
			if (opts.type != 'select' && isPointOutsideOf(dx, ev.clientX, ev.clientY)) {
				resolve(null);
				dDialog.remove();
			}
		});
		dDialog.addEventListener('keydown', ev => {
			if (ev.key === 'Escape') {
				dDialog.remove();
				console.log('RESOLVE NULL ESCAPE');
				resolve(null);
			}
		});
		dDialog.showModal();
		if (isdef(dAnchor)) mAnchorTo(dx, toElem(dAnchor), opts.align);
		else { mStyle(d, { h: '100vh' }); mCenterCenterFlex(d); }
	});
}

