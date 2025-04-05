
async function tableCreate(gamename, players, options) {
  if (nundef(gamename)) gamename = "setgame";
  if (nundef(players)) players = { mimi: userToPlayer('mimi', gamename), felix: userToPlayer('felix', gamename), amanda: userToPlayer('amanda', gamename) };
  if (nundef(options)) options = MGetGameOptions(gamename);
  console.log('tableCreate', gamename, players, options);
  let me = UGetName();
  let playerNames = [me]; console.log('me', me)
  assertion(me in players, "_createOpenTable without owner!!!!!")
  for (const name in players) { addIf(playerNames, name); }
  let table = {
    status: 'open',
    id: generateTableId(),
    fen: null,
    game: gamename,
    owner: playerNames[0],
    friendly: generateTableName(playerNames.length, []), //MGetTableNames()),
    players,
    playerNames: playerNames,
    options
  };
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
async function tableHasChanged() {
}
async function tableGetDefault(tid = null, tData = null) {
  if (nundef(tid)) tid = valf(DA.tid, localStorage.getItem('tid'), arrLast(Object.keys(M.tables)));
  console.log(tid)
  if (nundef(tid)) return null;
  if (nundef(tData)) { tData = valf(DA.tData, await loadStaticYaml(`y/tables/${tid}.yaml`)); }
  [DA.tid, DA.tData] = [tid, tData];
  return tData ? { tid, tData } : null;
}
async function tableLoad(tid) {
  let o = await tableGetDefault(tid);
  if (!o) { console.log('no table found!'); return null; }
  tid = o.tid;
  let tData = o.tData;
  console.log('table loaded', tData);
  localStorage.setItem('tid', tid);
  M.tables[tid] = tData;
  return tData;
}
function tablePresent(tData) {
  console.log('PRESENT!!!!');
  let title = fromNormalized(tData.friendly);
  mClear('dTopLeft');
  mDom('dTopLeft', { family: 'algerian', maleft: 10 }, { html: title });
  mClear('dMain')
  mDom('dMain', {bg:'white',fg:'black'}, { tag: 'pre', html: jsonToYaml(tData) });
}

