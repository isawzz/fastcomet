
async function onclickStartGame() {
  await saveDataFromPlayerOptionsUI(DA.gamename);
  let options = collectOptions();
  let players = collectPlayers();
  await startGame(DA.gamename, players, options);
}
async function onclickTable(id) {
  let tData = await tableLoad(id); tablePresent(tData);
}
async function onclickTableDelete(id) {
  let res = await mPhpPost('game_user', { action: 'deletey', file:`tables/${id}` });
  console.log('res', res);
}
async function onclickTableJoin(id) {
  let tData = M.tables[id]; //.find(x => x.id == id);
  let me = UGetName();
  assertion(tData.status == 'open', 'too late to join! game has already started!')
  assertion(!tData.playerNames.includes(me), `${me} already joined!!!`);
  tData.players[me] = createGamePlayer(me, tData.game);
  tData.playerNames.push(me);
  let res = await mPhpPost('game_user', { action: 'savey', file:`tables/${id}`, o:tData });
  console.log('res', res);
  // await showTables();
  //let res = await mPostRoute('postTable', { id, players: tData.players, playerNames: tData.playerNames });
}
async function onclickTableLeave(id) {
  let tData = M.tables[id]; 
  let me = UGetName();
  assertion(tData.status == 'open', 'too late to leave! game has already started!')
  assertion(tData.playerNames.includes(me), `${me} NOT in joined players!!!!`);
  delete tData.players[me];
  removeInPlace(tData.playerNames, me);
  let res = await mPhpPost('game_user', { action: 'savey', file:`tables/${id}`, o:tData });
  console.log('res', res);
  // await showTables();
}
async function onclickTableStart(id) {
  let tData = M.tables[id];
  if (!tData) { showMessage('table deleted!'); return await showTables(); }
  //console.log('table', jsCopy(table));
  tData = setTableToStarted(tData);
  let res = await mPhpPost('game_user', { action: 'savey', file:`tables/${id}`, o:tData });
  console.log('res', res);
}


