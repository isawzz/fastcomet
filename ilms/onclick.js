
async function onclickStartGame() {
  await saveDataFromPlayerOptionsUI(DA.gamename);
  let options = collectOptions();
  let players = collectPlayers();
  await startGame(DA.gamename, players, options);
}
async function onclickStartTable(id) {
  let table = Serverdata.tables.find(x => x.id == id);
  if (nundef(table)) table = await mGetRoute('table', { id });
  if (!table) { showMessage('table deleted!'); return await showTables('showTable'); }
  console.log('table', jsCopy(table));
  table = setTableToStarted(table);
  let res = await mPostRoute('postTable', table);
}

