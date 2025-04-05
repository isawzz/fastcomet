
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

